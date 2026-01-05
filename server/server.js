const express = require('express');
const cors = require('cors');
const db = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// 測試路由
app.get('/api/test', (req, res) => {
    res.json({ message: '後端正常運作！' });
});

// 測試資料庫
app.get('/api/events', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM db_events');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server 運行在 http://localhost:${PORT}`);
});