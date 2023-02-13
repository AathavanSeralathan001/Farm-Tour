import React from 'react'
import GooglePayButton from "@google-pay/button-react"

export default function Payment() {
  return (
    <div>
    <center>
    <p style={{padding:'100px'}}>
     <b>Payment once done cannot be revoked!! </b>
     <br/>
     It is your full responsiblity to take care of the payment. No Cash back policy is supported by this application.
     The application or the application managers are nowhere related to payment and its' related issues. Proceed to payment carefully on your own risk!
     👇 
     </p>
     <br/>
      <GooglePayButton

        environment='TEST'
        paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
                {
                   type:'CARD',
                   parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD','VISA'],
                   },
                   tokenizationSpecification: {
                    type:'PAYMENT_GATEWAY',
                    parameters:{
                        gateway:'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId'
                    }
                   }

                }
            ],
            merchantInfo:{
                merchantId:'12345678901234567890',
                merchantName: 'DEMO Merchant'
            },
            transactionInfo:{
                totalPriceStatus:'FINAL',
                totalPriceLabel:'Total',
                totalPrice:'100.00',
                currencyCode:'INR',
                countryCode:'IN'
            }
        }}

        onLoadPaymentData={paymentRequest =>{
            console.log('Load Payment Data', paymentRequest)
        }}

      />
      </center>
    </div>
  )
}
