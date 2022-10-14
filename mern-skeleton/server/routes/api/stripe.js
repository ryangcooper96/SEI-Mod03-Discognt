import { Express } from "express";
import Stripe from "stripe";
import uuidv4 from "uuid";
const stripe = new Stripe('sk_test_51LsWKuK3m4JInnwokp2NxjstpHVwkXiaVLHkVfkhaKERM0LXZDN6rjg172wdFmkGGVMmQBv15teAgATMIix7C5bx00Ll22wHev')

async function createPayment(req, res, next) {
    const { token, amount } = req.body;
    const idempotencyKey = uuidv4();

    const customer = await stripe.customers.create({ email: token.email, source: token })
    const result = await stripe.charges.create({
        amount: amount * 100,
        currency: "gbp",
        customer: customer.id,
        receipt_email: token.email
    }, { idempotencyKey })
    return res.json(result)
}

export default stripeRoutes;