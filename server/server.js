const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log('server is listen to the port = ' + port);
});