const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyparser = require("body-parser");
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51LTgC4DJs5S1XnDMfHBQBYdGyZ1ZexO36GulSWA2hzdqRUZFANslkHczEmCn1gZIfWP2QjPtmGxzM2ZAh7AXUf8s004GDyjB3o');


if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
SERVER_URL = process.env.CLIENT_SERVER;
app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

if (process.env.NODE_ENV !== 'production') {
    app.use(express.static(path.join(__dirname,'client/build')));

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname,'client/build', 'index.html'));
    })

}

const URL= process.env.CLIENT_SERVER;

app.post('/create-checkout-session', async (req, res) => {
    const sprice = req.body.cartTotal * 100
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['US','CA','IN','PK'],
          },
          shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 0,
                  currency: 'usd',
                },
                display_name: 'Free shipping',
                // Delivers between 5-7 business days
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 5,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 7,
                  },
                }
              }
            },
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 1500,
                  currency: 'usd',
                },
                display_name: 'Next day air',
                // Delivers in exactly 1 business day
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 1,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 1,
                  },
                }
              }
            },
          ],
        line_items: [
        {
            
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price_data:{
            currency: 'usd',
            product_data: {
                name : 'Cart Total'
            },
            unit_amount: sprice 
          },
          quantity: 1,
        },
        ],
        mode: 'payment',
        success_url: {URL},
        cancel_url: `${URL}/checkout`,
    });

    res.send({url: session.url});

})

app.get('/order/success', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  //const customer = await stripe.customers.retrieve(session.id);
  //res.send({session: session})
  res.send(`<html><body><h1 style="text-align:center;">Thanks for your order, ${session.customer_details.name}!</h1>
  <div style="text-align:center;"><a href=${URL} style="color:red;text-decoration:none;text-align:center">
  Go Back to shoping</a></div></body></html>`);
});



app.get('/checklist',(req,res)=>{
    res.status(200).send({"Hello":"Bro"})
})

app.listen(port, (error)=> {
    if (error) {
        throw error;
    }
    console.log(`App is listenning at ${port}`)
})
