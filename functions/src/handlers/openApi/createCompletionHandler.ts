import { RequestHandler } from 'express';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
export const createCompletionHandler: RequestHandler = async (req, res) => {
  const openai = new OpenAIApi(configuration);
  const { data } = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
    temperature: 0,
    max_tokens: 7
  });

  res.send(data);
};
