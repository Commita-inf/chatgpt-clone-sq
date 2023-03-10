// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi, FineTune} from 'openai';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      try {  
          //const fineTuneResponse = await openai.createFile({})
          
          //console.log(fineTuneResponse);
      } catch (error) {
        console.log(error);
        
        return res.status(400).json({error})
      }

    
}