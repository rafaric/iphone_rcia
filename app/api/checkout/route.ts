/* route handler Stripe */
import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import { Product } from "@/utils/interface";

export async function POST(req: Request) {
  const { items } = await req.json();
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items.map((item: { product: Product; quantity: number }) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.product.title },
        unit_amount: item.product.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_URL}/checkout?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart?canceled=true`,
  });
  return NextResponse.json({ url: session.url });
}
