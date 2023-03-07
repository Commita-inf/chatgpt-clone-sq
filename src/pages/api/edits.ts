// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi} from 'openai';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      try {
        
          const response = await openai.createEdit({
            model: "code-davinci-edit-001",
            input: req.body.input,
            instruction: "Fix the spelling mistakes",
          });
          return res.status(200).json({success: response.data.choices[0]})
      } catch (error) {
        return res.status(400).json({error})
      }

    
}