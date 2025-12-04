import {neon} from '@neondatabase/serverless'
export default async function handler(req, res) {
    const conn = neon(process.env.DATABASE_URL)
    console.log('conn', conn)

    if (req.method == 'GET') {
        const result = await conn`SELECT FROM cats LIMIT 20`
        console.log('get result', result)
        return res.status(200).json(result)
    }

    if (req.method == 'POST') {

    }
    if (req.method == 'PATCH') {
        
    }
    if (req.method == 'DELETE') {
        
    }

    return res.staus(500).json([{error: 'Internal Server Error'}])
}