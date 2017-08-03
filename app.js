const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const nunjucks = require('nunjucks');
const staticFiles = require('./static_files');
const templating = require('./templating');
const isProduction = process.env.NODE_ENV === 'production';
const app = new Koa();

if (! isProduction) {
    let staticFiles = require('./static_files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}
app.use(bodyParser());
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));
app.use(controller());
app.listen(3000);
console.log('server listening 3000');