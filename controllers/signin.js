module.exports = {
    'POST /signin': async (ctx,next) => {
        const email = ctx.request.body.email || '',
            password = ctx.request.body.password || '';
        if (email == 'admin@example.com' && password == '123456') {
            ctx.render('signin-ok.html',{
                title: 'signin ok',
                name: 'node'
            });
        } else {
            ctx.render('signin-failed.html',{
                title: 'signin failed'
            });
        }
    }
}