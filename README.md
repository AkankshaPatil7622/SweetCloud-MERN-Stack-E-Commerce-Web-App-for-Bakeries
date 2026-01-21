🏠 Home Page (Customer side )


User-friendly and responsive UI
Easy navigation to view cake details


👤 User Side Features (Customer)
🍰 View Cakes



Users can browse all available cakes
Each cake displays:
Cake image
Name
Price
Description

🛒 Buy Cake
Users can select cakes and proceed to purchase
Secure checkout process
Online payment integration using Razorpay
Order placed only after successful payment

🔐 Authentication
User registration and login
Passwords are securely hashed
JWT-based authentication for session management



🧑‍🍳 Baker Side Features (Admin / Baker)
➕ Add Cake
Bakers can add new cakes with:
Cake name
Price
Description
Image
Newly added cakes appear instantly on the user home page

✏️ Manage Cakes
Bakers can view all cakes added by them
Update cake details such as price or description

🗑️ Delete Cake
Bakers can remove cakes that are no longer available
Deleted cakes are removed from user view immediately

🔐 Role-Based Access
Only bakers/admins can add, edit, or delete cakes
Users cannot access baker-specific routes


🛠️ Technologies Used

Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Token)
Security: Password hashing
Payment Gateway: Razorpay
