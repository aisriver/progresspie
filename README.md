# progresspie
DOM 占比饼图的简单实现

# how to use
## step 1
- npm install -g cnpm --registry=https://registry.npm.taobao.org
- cnpm install progresspie --save

- 或者使用 yarn add progresspie

## step 2
import Progresspie from 'progresspie';

- use

`<div id="myPie"></div>`

var myPie = Progresspie.init(document.getElementById("myPie"));

<pre>
myPie.setOption({ 
    percent: 45, 
    width: "100px", 
    height: "100px", 
    backColor: "#655",
    percentColor: "yellowgreen",
});

有什么好的想法，欢迎一起成长交流
WeChat：mrliaojun
</pre>

### github
[Jared](https://github.com/aisriver/progresspie.git)
