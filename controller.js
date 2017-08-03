const fs = require('fs');
const router = require('koa-router')();

function addMapping(mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET')) {
            let path = url.substring(4);
            router.get(path,mapping[url]);
        } else if (url.startsWith('POST')) {
            let path = url.substring(5);
            router.post(path,mapping[url]);
        } else {
            // 无效的url
            console.log(`invalide url: ${url}`);
        }
    }
}
function addControllers(dir) {
    // 列出文件并过滤出js文件
    let files = fs.readdirSync(__dirname + dir);
    let js_files = files.filter(f => {
        return f.endsWith('.js');
    });
    // 处理每个js文件
    for (let f of js_files) {
        // 导入js文件
        let mapping = require(__dirname + dir + f);
        addMapping(mapping);
    }
}

module.exports = function(dir = '/controllers/') {
    addControllers(dir);
    return router.routes();
}