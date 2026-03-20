
curl -X POST http://localhost:3000/api/send-manual-email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "uxiarodriguezfrancisco@gmail.com",
    "name": "Uxia",
    "transactionId": "cs_test_1234567890",
    "amount": 17.90
  }'

  