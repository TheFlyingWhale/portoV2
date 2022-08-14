import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: string | Error;
    success: boolean;
};

export type RequestResponse = (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => void;
