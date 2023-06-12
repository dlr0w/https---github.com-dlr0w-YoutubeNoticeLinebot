import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCXDFofScDzPx5pdiPDJqlVg&key=${process.env.YOUTUBE_API_KEY}`
);


    res.status(200).json(response.data);
}
