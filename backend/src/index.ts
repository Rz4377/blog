import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { generativeModel } from "./utils";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = 3000;
app.use(express.json());
app.use(bodyParser.json())


let chatContext: { role: string; content: string }[] = [];

async function streamChat(msg:string) {
  const chat = generativeModel.startChat();
  chatContext.push({role:'user', content:msg});
  console.log("Payload being sent: ", JSON.stringify({ contents: [{ text: msg }] }));
  const result = await chat.sendMessageStream({
    contents: [{ text: msg }], // Use "text" instead of "content" and avoid "role"
  });
  for await (const item of result.stream) {
      console.log("Stream chunk: ", item.candidates[0].content.parts[0].text);
  }

  const aggregatedResponse = await result.response;
  chatContext.push({
    role: 'model',
    content: aggregatedResponse.candidates[0].content.parts.map((part:any) => part.text).join(" "),
  });

  console.log('Aggregated response: ', JSON.stringify(aggregatedResponse));
  return aggregatedResponse;
}

app.post("/chat", async(req: Request, res: Response) => {
  console.log(req.body)
  const {msg} = req.body;

  if(typeof msg != "string"){
    res.status(400).send("send the msg in string");
    return ;
  }
  if (msg.toLowerCase() === "exit") {
    chatContext = []; // Clear the context
    res.status(200).json({ message: "Chat session ended. Goodbye!" });
    return;
  }
  try{
    const response = await streamChat(msg);
    res.status(200).json({
      content : response,
      chatContext
    })
  }
  catch(error){
    console.log(error);
    res.status(400).json({
      error : "internal server error"
    })
  }

});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
