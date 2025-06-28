# Ghala Technical Intern Challenge – Core Systems Simulation

## Overview
This project simulates Ghala's core system for handling **merchant payment configurations** and **order processing**. Built with modern web technologies and designed for scalability.

## Features
- Backend simulation for merchant preferences and order processing
- React + Vite + Tailwind frontend with admin UI
- Merchant settings management
- Order tracking system
- Payment simulation capabilities

---

## Architecture

### Merchant Configuration
Each merchant's payment method and settings are stored in a structured object:
```json
{
  "merchantId": "merchant-123",
  "paymentMethod": {
    "type": "mobile",
    "provider": "M-Pesa",
    "config": { "accountNumber": "07xxxxxxxx" }
  }
}
```

## Author
Built by **Japhtech** 
