let fn_signin = async (ctx,next) => {
    const name = ctx.request.body.name || '',
          password = ctx.request.body.password || '';
    if (name == 'koa' && password == '123') {
        ctx.response.body = `Welcome,${name}`;
    } else {
        ctx.response.body = `<p>signin failed,<a href='/'>try again</a></p>`;
    }
};

module.exports = {
    'POST /signin': fn_signin
}