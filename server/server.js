const express = require('express');
const app = express();
const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log('server is listen to the port = ' + port);
});