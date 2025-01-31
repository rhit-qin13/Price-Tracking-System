// Import required modules
require('dotenv').config();
const express = require('express');
const sql = require('mssql');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Database configuration
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT) || 1433,
    options: {
        encrypt: true, 
        trustServerCertificate: true, 
    },
};

// Connect to the database
async function connectDB() {
    try {
        await sql.connect(dbConfig);
        console.log('Connected to SQL Server successfully!');
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

// Define a route to test database connectivity
app.get('/api/products', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM Product'); 
        res.json(result.recordset); 
    } catch (err) {
        res.status(500).send('Database query error: ' + err);
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
});
