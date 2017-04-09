const express = require('express');
const app = express();

require('./express')(app);

app.listen(3000 , () => {
    console.log('server started');
})