import express from "express";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";
const stripe = new Stripe('sk_test_51LsWKuK3m4JInnwokp2NxjstpHVwkXiaVLHkVfkhaKERM0LXZDN6rjg172wdFmkGGVMmQBv15teAgATMIix7C5bx00Ll22wHev')

export async function createPayment(req, res, next) {
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

export async function shareClientSecret(req, res, next) {
    const intent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'gbp',
        payment_method_types: ['card'],
    })
    console.log(intent)
    return res.send(intent)
}