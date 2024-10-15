const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware to validate JWT
app.use(
  jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: process.env.API_IDENTIFIER,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
  }).unless({ path: ['/login'] })
);

// User routes
app.use('/api/user', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
