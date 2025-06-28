**#Ghala Technical Intern Challenge – Core Systems Simulation**
**Overview**
This project simulates Ghala’s core system for handling merchant payment configurations and order processing. It features:
A backend that stores merchant preferences, records orders, and updates status via mock payment confirmations.
A React + Vite + Tailwind frontend with basic admin UI for merchant settings, order tracking, and simulating payments.
#Architecture
 # Merchant Configuration
Each merchant’s payment method and settings are stored in a structured object:

            {
  "merchantId": "merchant-123",
  "paymentMethod": {
    "type": "mobile",
    "provider": "M-Pesa",
    "config": { "accountNumber": "07xxxxxxxx" }
  }
}

#This allows multiple merchants to each have unique payment setups without conflict.

**Order Processing**
Orders are linked to the merchant and stored with:

order ID
merchant ID
status: pending, paid, or failed

#A mock function simulates payment confirmation — after 5 seconds, status updates to paid.

**Extending for Commission Rates**
To support merchant-specific commission rates:

#Add a commissionRate field to the merchant config: (json)

 {
  "merchantId": "merchant-123",
  "commissionRate": 0.05
}

#Adjust order total calculations at payment confirmation: (ts)

const finalAmount = orderAmount * (1 - merchant.commissionRate);

**Scaling to 10,000+ Merchants**
If scaling to thousands of merchants:

Move merchant configs + orders to a database (e.g. MongoDB)
Introduce async jobs (queues) for payment confirmation (e.g. BullMQ, Redis)
Use caching (e.g. Redis) for frequently accessed merchant configs
Add pagination + filters to the frontend for large data sets
Containerize the app (e.g. Docker + orchestration)
