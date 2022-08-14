import * as mongoDB from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";
import { RequestResponse } from "../../utilities/types/RequestResponse";

const handler: RequestResponse = async (req, res) => {
    switch (req.method) {
        case "GET": {
            return getMessages(req, res);
        }
    }
};

export default handler;

const getMessages: RequestResponse = async (req, res) => {
    try {
        //connect to the database
        const { db } = await connectToDatabase();

        const posts = await db.collection("messages").find({}).toArray();

        return res.json({
            message: JSON.parse(JSON.stringify(posts)),
            success: true,
        });
    } catch (error) {
        if (error instanceof Error) {
            return res.json({
                message: error,
                success: false,
            });
        } else {
            return res.json({
                message: "Unexpected error",
                success: false,
            });
        }
    }
};
