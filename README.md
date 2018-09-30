# progresspie
Easy show the progress by dom pie.

# how to use
## step 1
- npm install -g cnpm --registry=https://registry.npm.taobao.org
- cnpm install progresspie --save

## step 2
import Progresspie from 'progresspie';

- use 1

<div id="myPie"></div>

var myPie = progresspie.init(document.getElementById("myPie"));

myPie.setOption({ 
    percent: 45, 
    width: "100px", 
    height: "100px", 
    backColor: "#655",
    percentColor: "yellowgreen",
});

### github
[Jared](https://github.com/aisriver/progresspie.git)
