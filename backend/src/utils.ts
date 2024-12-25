const {
  FunctionDeclarationSchemaType,
  HarmBlockThreshold,
  HarmCategory,
  VertexAI
} = require('@google-cloud/vertexai');

const project = 'iconic-nimbus-445608-f2';
const location = 'us-central1';
const textModel =  'gemini-1.0-pro';
const visionModel = 'gemini-1.0-pro-vision';

const vertexAI = new VertexAI({project: project, location: location});

// Instantiate Gemini models
export const generativeModel = vertexAI.getGenerativeModel({
    model: textModel,
    // The following parameters are optional
    // They can also be passed to individual content generation reque sts
    safetySettings: [{category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE}],
    generationConfig: {maxOutputTokens: 8000},
    systemInstruction: {
      role: 'system',
      parts: [{text: `
        You are a helpful assistant specialized in generating beautified React JSX code. 
        Your task is to create a fully functional and responsive React component based on the content provided in the prompt.
        The page you are creating is a blog page. 
        The generated code should include proper structure, styling using inline styles or classNames, and reusable components where applicable.
        Include meaningful comments for clarity and readability.
        `}]
    },
});

const generativeVisionModel = vertexAI.getGenerativeModel({
    model: visionModel,
});

const generativeModelPreview = vertexAI.preview.getGenerativeModel({
    model: textModel,
});

