import HButton from './h-button/index.js'

const components = [HButton];


const install = app => {
    if (install.installed) return;
    // 遍历注册
    components.forEach((item) => {
        app.component(item.name, item)
    })
}


// // 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    HButton
}