let fn_hello = async (ctx,next) => {
    const name = ctx.params.name || '';
    ctx.response.body = `<h6>this is ,${name}'s page.</h6>`;
};

module.exports = {
    'GET /hello/:name': fn_hello
}