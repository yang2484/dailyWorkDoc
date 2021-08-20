//扫描@/components/common文件夹下的所有的`.vue` 文件，并注册
const componentsWatcher = (scanner, Vue) => {
    scanner.keys().map(key => {
        let name = scanner(key).default.name
        if (name) {
            Vue.component(name, function (resolve) {
                console.log([key + ''], resolve)
                require([key + ''], resolve)
            })
            // Vue.component(name, scanner(key).default)
        }
    })
}
//扫描匹配条件
const vueScanner = require.context(
    '@/components/common',
    true,
    /\.vue$/
)

import HhbTag from './hhb-tag/hhb-tag'
const components = {
    HhbTag
}
// const install = function (Vue, opts = {}) {
    // componentsWatcher(vueScanner, Vue)

    const install = function (Vue, opts = {}) { Object.keys(components).forEach((key) => { Vue.component(key, components[key]); }); };
    // Vue.component('hhb-tag', HhbTag)
// };
export default install;