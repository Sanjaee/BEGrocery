http://localhost:5000/products


{
    "name": "Sample Product",
    "price": 100,
    "description": "This is a sample product description.",
    "categoryId": 1
}



http://localhost:5000/auth/login


{
  "email": "user@example.com",
  "password": "password123"
}




http://localhost:5000/auth/register

{
  "email": "usera@example.com",
  "password": "passaword123",
  "roleId": 3
}



http://localhost:5000/userProfiles


{
    "profile_image": "https://example.com/image.jpg",
    "fullname": "John Doe",
    "birthDate": "1990-01-01T00:00:00.000Z",
    "userUid": "clx2oqyv30001wsxny38hn98x",  
    "addressId": 2
}


method : get
http://localhost:5000/users


http://localhost:5000/stokProducts/1/1

{
    "stok": 50,
    "storeId": 1,
    "productId": 1
}


http://localhost:5000/stores


{
    "name": "Sample Store",
    "province": "Sample Province",
    "city": "Sample City",
    "address": "123 Sample Street",
    "zip_code": "12345"
}


http://localhost:5000/transactions


{
    "order": "Order123",
    "quantity": 2,
    "buy_date": "2024-01-01T00:00:00.000Z",
    "price": 100,
    "discount": "10%",
    "userUid": "clx2j3rnm0000gga863lg9r4e",
    "productId": 1
}



http://localhost:5000/shipping


{
    "receiver": "John Doe",
    "phone_number": "1234567890",
    "province": "Province A",
    "city": "City B",
    "zip_code": 12345,
    "address": "123 Main Street",
    "transactionId": 1
}



http://localhost:5000/carts

{
    "userUid": "clx2j3rnm0000gga863lg9r4e",
    "productId": 1
}




http://localhost:5000/payments

{
    "payment_image": "image_url",
    "transactionId": 1
}



http://localhost:5000/discounts

{
    "code_voucher": "DISCOUNT2024",
    "discount_voucher": "20%",
    "expired": "2024-12-31T00:00:00.000Z",
    "productId": 1
}





http://localhost:5000/addresses

{
  "province": "West Java",
  "city": "Bandung",
  "address": "123 Example Street",
  "zip_code": "12345",
  "phone_number": "08012345678"
}


