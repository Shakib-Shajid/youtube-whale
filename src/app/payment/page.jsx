// "use client"




// import { useEffect, useState } from 'react';

// export default function Payment() {
//   const [formParams, setFormParams] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPaymentData = async () => {
//       try {
//         const res = await fetch('/api/payment', {
//           method: 'POST',
//         });

//         if (!res.ok) {
//           const errorText = await res.text(); // Get the response text for more insight
//           throw new Error(`Failed to fetch payment data: ${errorText}`);
//         }

//         const data = await res.json();
//         setFormParams(data);
//       } catch (err) {
//         console.error('Error fetching payment data:', err);
//         setError('An error occurred while fetching payment data.');
//       }
//     };

//     fetchPaymentData();
//   }, []);


//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!formParams) {
//     return <div>Loading payment information...</div>;
//   }

//   return (
//     <div>
//       <h1>Proceed to Payment</h1>
//       <form
//         name="paymentForm"
//         action="https://sis-t.redsys.es:25443/sis/realizarPago"
//         method="POST"
//       >
//         <input
//           type="hidden"
//           name="Ds_SignatureVersion"
//           value={formParams.Ds_SignatureVersion}
//         />
//         <input
//           type="hidden"
//           name="Ds_MerchantParameters"
//           value={formParams.Ds_MerchantParameters}
//         />
//         <input
//           type="hidden"
//           name="Ds_Signature"
//           value={formParams.Ds_Signature}
//         />
//         <input type="submit" value="Go to Pay" />
//       </form>
//     </div>
//   );
// }






// testing code work
// 'use client';

// import { useState } from 'react';

// export default function PaymentPage() {
//   const [transactionResult, setTransactionResult] = useState(null);

//   const handleGenerateTransaction = async () => {
//     const response = await fetch('/api/generateTransaction', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         amount: 100, // amount in euros (100 = 1 euro)
//         orderReference: '1508428361',
//       }),
//     });

//     const result = await response.json();
//     setTransactionResult(result);

//     // Create and submit the form dynamically
//     if (result.Ds_Signature && result.Ds_MerchantParameters) {
//       const form = document.createElement('form');
//       form.setAttribute('action', 'https://sis-t.redsys.es:25443/sis/realizarPago');
//       form.setAttribute('method', 'POST');
//       form.setAttribute('style', 'display: none');

//       Object.keys(result).forEach((key) => {
//         const field = document.createElement('input');
//         field.setAttribute('type', 'hidden');
//         field.setAttribute('name', key);
//         field.setAttribute('value', result[key]);
//         form.appendChild(field);
//       });

//       document.body.appendChild(form);
//       form.submit();
//     }
//   };

//   return (
//     <div>
//       <h1>Payment Page</h1>
//       <button onClick={handleGenerateTransaction}>Generate Transaction</button>

//       {transactionResult && (
//         <pre>{JSON.stringify(transactionResult, null, 2)}</pre>
//       )}
//     </div>
//   );
// }








// 'use client';

// import { useState } from 'react';

// export default function PaymentPage() {
//   const [transactionResult, setTransactionResult] = useState(null);

//   const handleGenerateTransaction = async () => {
//     const response = await fetch('/api/generateTransaction', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         amount: 100, // amount in euros (100 = 1 euro)
//         orderReference: '1508428365', // Make sure this is unique for each transaction
//       }),
//     });

//     const result = await response.json();
//     setTransactionResult(result);

//     if (result.Ds_Signature && result.Ds_MerchantParameters) {
//       const form = document.createElement('form');
//       form.setAttribute('action', 'https://sis-t.redsys.es:25443/sis/realizarPago'); // Real RedSys URL
//       form.setAttribute('method', 'POST');
//       form.setAttribute('style', 'display: none');

//       Object.keys(result).forEach((key) => {
//         const field = document.createElement('input');
//         field.setAttribute('type', 'hidden');
//         field.setAttribute('name', key);
//         field.setAttribute('value', result[key]);
//         form.appendChild(field);
//       });

//       document.body.appendChild(form);
//       form.submit();
//     }
//   };

//   return (
//     <div>
//       <h1>Payment Page</h1>
//       <button onClick={handleGenerateTransaction} className='btn btn-success'>Payment 150€</button>

//       {/* {transactionResult && (
//         <pre>{JSON.stringify(transactionResult, null, 2)}</pre>
//       )} */}
//     </div>
//   );
// }



































'use client';

import { useState } from 'react';

export default function PaymentPage() {
  const [transactionResult, setTransactionResult] = useState(null);
  const [orderReference, setOrderReference] = useState(''); // State for order reference

  const handleGenerateTransaction = async () => {
    // Ensure that orderReference is exactly 12 digits long
    if (orderReference.length !== 12) {
      alert("Please enter a valid 12-digit order number.");
      return;
    }

    const response = await fetch('/api/generateTransaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 100, // amount in euros (100 = 1 euro)
        orderReference: orderReference, // Use the entered order reference
      }),
    });

    const result = await response.json();
    setTransactionResult(result);

    if (result.Ds_Signature && result.Ds_MerchantParameters) {
      const form = document.createElement('form');
      form.setAttribute('action', 'https://sis-t.redsys.es:25443/sis/realizarPago'); // Real RedSys URL
      form.setAttribute('method', 'POST');
      form.setAttribute('style', 'display: none');

      Object.keys(result).forEach((key) => {
        const field = document.createElement('input');
        field.setAttribute('type', 'hidden');
        field.setAttribute('name', key);
        field.setAttribute('value', result[key]);
        form.appendChild(field);
      });

      document.body.appendChild(form);
      form.submit();
    }
  };

  return (
    <div className='text-center flex flex-col my-20'>
      <h1>Payment Page</h1>

      {/* Input field for order reference */}
      <div>

        <div >
          <label htmlFor="orderReference">Enter Order Reference (12 digits):</label>
          <input
            className='input border-black w-[20%] mx-5 my-5'
            type="text"
            id="orderReference"
            value={orderReference}
            onChange={(e) => setOrderReference(e.target.value)} // Update orderReference state on change
            placeholder="Add 12 digits here as reference"
          />
        </div>

        {/* Button to initiate the payment process */}
        <button onClick={handleGenerateTransaction} className='btn btn-success'>Payment 150€</button>
      </div>

      {/* Optionally display the transaction result */}
      {/* {transactionResult && (
        <pre>{JSON.stringify(transactionResult, null, 2)}</pre>
      )} */}
    </div>
  );
}
