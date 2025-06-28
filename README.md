# Ghala Technical Intern Challenge – Core Systems Simulation

## Overview
This project simulates Ghala’s core system for handling **merchant payment configurations** and **order processing**. It features:
- A backend that stores merchant preferences, records orders, and updates status via mock payment confirmations.
- A React + Vite + Tailwind frontend with basic admin UI for merchant settings, order tracking, and simulating payments.

---

## Architecture

### Merchant Configuration
Each merchant’s payment method and settings are stored in a structured object:
```json
{
  "merchantId": "merchant-123",
  "paymentMethod": {
    "type": "mobile",
    "provider": "M-Pesa",
    "config": { "accountNumber": "07xxxxxxxx" }
  }
}
