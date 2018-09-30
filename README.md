# progresspie
Easy show the progress by dom pie.

# how to use
## step 1
- npm install -g cnpm --registry=https://registry.npm.taobao.org
- cnpm install progresspie --save

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
</pre>

### github
[Jared](https://github.com/aisriver/progresspie.git)
