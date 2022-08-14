import { RequestResponse } from "../../utilities/types/RequestResponse";

const handler: RequestResponse = async (req, res) => {
    switch (req.method) {
        case "GET": {
            return runTest(req, res);
        }
    }
};

export default handler;

const runTest: RequestResponse = async (req, res) => {
    return res.json({
        message: "test passed",
        success: true,
    });
};
