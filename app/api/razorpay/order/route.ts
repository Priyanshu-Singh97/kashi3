import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: NextRequest) {
    try {
        const key_id = process.env.RAZORPAY_KEY_ID;
        const key_secret = process.env.RAZORPAY_KEY_SECRET;

        // Basic validation to check if keys are configured (not default placeholders)
        if (!key_id || !key_secret || key_id === "Here" || key_secret === "Here") {
            console.error("Razorpay API keys are not configured correctly.");
            return NextResponse.json(
                {
                    error: "Payment configuration missing",
                    details: "Server payment keys are not configured."
                },
                { status: 500 }
            );
        }

        const razorpay = new Razorpay({
            key_id,
            key_secret,
        });

        const { amount, currency = "INR" } = await req.json();

        if (!amount) {
            return NextResponse.json(
                { error: "Amount is required" },
                { status: 400 }
            );
        }

        const options = {
            amount: Math.round(amount * 100), // Razorpay expects amount in paise
            currency,
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json(order);
    } catch (error) {
        console.error("Razorpay Order Error:", error);
        return NextResponse.json(
            { error: "Failed to create order" },
            { status: 500 }
        );
    }
}
