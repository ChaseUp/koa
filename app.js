const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const app = new Koa();

app.use(bodyParser());
app.use(controller());
app.listen(3000);
console.log('server listening 3000');