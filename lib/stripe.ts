import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY!, {
  apiVersion: "2025-07-30.basil",
});
export default stripe;
