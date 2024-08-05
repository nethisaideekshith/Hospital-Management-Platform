const express = require('express');
const app = express();
const dotenv = require('dotenv');
const DBconnection = require('./config/db');

dotenv.config();
DBconnection();

// Import route files
const loginRoute = require('./routes/LoginRoute.route');
const signupRoute = require('./routes/SignupRoute.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/login',loginRoute);
app.use("/signup",signupRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});