const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'ticketing_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 測試連線
pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ 資料庫連線失敗：', err.message);
    } else {
        console.log('✅ 資料庫連線成功！');
        connection.release();
    }
});

module.exports = pool.promise();