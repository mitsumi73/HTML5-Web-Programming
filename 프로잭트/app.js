const express = require('express');
const app = express();

// Đây là URL callback mà bạn đã đăng ký trên GitHub
const callbackURL = '/auth/github/callback';

// Xử lý yêu cầu đến URL callback
app.get(callbackURL, (req, res) => {
    // Lấy mã xác thực từ query string
    const code = req.query.code;

    // Tiếp tục xử lý mã xác thực ở đây (truy vấn GitHub để nhận access token, vv.)
    // Đây chỉ là ví dụ đơn giản
    res.send('Mã xác thực từ GitHub: ' + code);
});

// Bắt đầu server
const port = 3000;
app.listen(port, () => {
    console.log(`Server đang lắng nghe trên cổng ${port}`);
});
