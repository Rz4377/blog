import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import bodyParser from "body-parser";
import { chat } from "./utils";
import router from "./routes/blogs";
import cors from "cors";
dotenv.config();

const app: Express = express();
const port = 3000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.json())

app.use("/api", router);

let chatContext: { role: string; content: string }[] = [];

async function streamChat(msg: string) {
  try {
    if (!msg || msg.trim() === '') {
      throw new Error('The message cannot be empty.');
    }

    console.log("Message content:", msg);

    // Updated payload format
    const payload = {
      messages: [
        {
          role: 'system',
          content: `
            You are a helpful assistant specialized in generating beautified React JSX code. 
            Your task is to create a fully functional and responsive React component based on the content provided in the prompt.
            The page you are creating is a blog page. 
            The generated code should include proper structure, styling using inline styles or classNames, and reusable components where applicable.
            Include meaningful comments for clarity and readability.
          `,
        },
        { role: 'user', content: msg }, // Include user input
      ],
    };

    console.log("Payload being sent to sendMessageStream:", payload);

    // Call the API
    const result = await chat.sendMessageStream(payload);

    let responseText = '';
    for await (const chunk of result.stream) {
      const part = chunk?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (part) {
        console.log('Stream chunk:', part);
        responseText += part;
      }
    }

    if (!responseText) {
      throw new Error('The model returned an empty response.');
    }

    console.log('Aggregated response:', responseText);
    return responseText;
  } catch (error) {
    console.error('Error during chat interaction:', error);
    throw error;
  }
}

app.post('/chat', async (req: Request, res: Response) => {
  const { msg } = req.body;
  console.log(req.body);
  if (!msg) {
    res.status(400).json({ error: 'Message is required' });
    return ;
  }

  try {
    const response = await streamChat(msg);

    res.status(200).json({
      content: response,
    });
  } catch (error) {
    console.error('Error in /chat endpoint:', error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
