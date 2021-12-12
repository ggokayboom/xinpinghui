module.exports = {
    //关闭eslint语法检查
    lintOnSave:false,
    devServer:{
        proxy:{
            '/api':{
                target:'http://39.98.123.211',
                // pathRewrite:{'^/api':''},
            },
        },
    },
}