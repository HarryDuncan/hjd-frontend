// eslint-disable import/no-extraneous-dependencies
import {
  ApiResponse,
  CheckoutSuccessRequest,
  ResponseError,
} from "./api.types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(
  req: CheckoutSuccessRequest,
  res: ApiResponse
) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.retrieve(
        req.body.sessionId
      );
      res.json({ session });
    } catch (err) {
      const error = err as ResponseError;
      const { statusCode, message } = error;
      res.status(statusCode || 500).json(message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
