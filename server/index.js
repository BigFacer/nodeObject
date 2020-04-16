const path = require('path');
const routerApi = require('./router');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
// 后端api路由
app.use('/api', routerApi);
app.listen(3001);
console.log('success listen at port 3001')