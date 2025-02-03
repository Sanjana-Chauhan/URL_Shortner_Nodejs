#URL Shortener

A simple URL shortener built using Node.js, Express, and MongoDB. It takes a long URL as input and generates a unique short URL for easy sharing.

#🚀 Features

Generate a unique short URL for any given long URL.

Redirect short URLs to their original long URLs.

Track the number of visits for each shortened URL.

Store URL data persistently in MongoDB.

#🛠️ Technologies Used

Node.js - Backend runtime

Express.js - Web framework

MongoDB - Database for storing URLs

Mongoose - ODM for MongoDB

#📌 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/URL_Shortener_Nodejs.git
cd URL_Shortener_Nodejs

2️⃣ Install Dependencies

npm install

3️⃣ Setup Environment Variables

Create a .env file and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000

4️⃣ Run the Server

npm start

Server will start at http://localhost:5000.# URL_Shortner_Nodejs
