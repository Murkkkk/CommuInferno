# 全站设置

global.js：全站共用交互。目前支持鼠标侧键切换浏览历史，button 4 前进，button 3 后退。

global.css：全站共用样式。放在各页面自身样式之后加载，可在这里覆盖全站样式。

新页面也需要引入这两个文件。网站根目录的页面用 overarching/global.css 和 overarching/global.js；下一级页面用 ../overarching/global.css 和 ../overarching/global.js。

鼠标侧键可能由浏览器或系统直接处理，此时页面脚本不会收到事件。没有可前进或后退的历史时不会跳转。
