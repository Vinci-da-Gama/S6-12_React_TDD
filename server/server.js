const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
// const env = process.env.NODE_ENV || 'production';
const publicPath = path.join(__dirname, '..', '_asserts/');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up! part is: ', port);
});
