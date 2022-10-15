import express from 'express'
import * as stripeCtrl from '../../controllers/stripe.js'

const stripeRoutes = express.Router();
stripeRoutes.route('/checkout', stripeCtrl.createPayment)
stripeRoutes.route('/secret').get(stripeCtrl.shareClientSecret)

export default stripeRoutes;