

import RedSys from 'redsys-pos';
import { CURRENCIES, TRANSACTION_TYPES } from 'redsys-pos';

const MERCHANT_KEY = "sq7HjrUOBfKmC576ILgskD5srU870gJ7"; // Replace with your real merchant secret key
const redsys = new RedSys(MERCHANT_KEY);

export async function POST(req) {
  const { amount, orderReference } = await req.json();

  try {
    // Log incoming parameters to ensure they are correct
    console.log("Received Amount (in Euros):", amount);
    console.log("Received Order Reference:", orderReference);

    const transactionParams = {
      amount: (amount * 100).toString(), // Convert to cents
      orderReference: orderReference,
      merchantName: "REAL MERCHANT NAME", // Replace with real merchant name
      merchantCode: '364524942', // Your real merchant code
      currency: CURRENCIES.EUR, // EUR currency
      transactionType: TRANSACTION_TYPES.AUTHORIZATION,
      terminal: '001', // Terminal number
      // merchantURL: 'http://www.my-shop.com/', // This should be your real merchant URL
      // successURL: 'http://localhost:3000/success', // Your success URL
      // errorURL: 'http://localhost:3000/error', // Your error URL
    };

    // Log transaction parameters
    console.log("Transaction Parameters:", transactionParams);

    const result = redsys.makePaymentParameters(transactionParams);

    // Log the result to check if it's correct
    console.log("Generated RedSys Payment Parameters:", result);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating transaction:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate transaction' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
