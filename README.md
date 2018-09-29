# progresspie
Easy show the progress by dom pie.

# how to use
## step 1
- npm install -g cnpm --registry=https://registry.npm.taobao.org
- cnpm install progresspie --save

## step 2
import Progresspie from 'progresspie';

- use 1

<Progresspie
    percent={45}
    width="100px"
    height="100px"
    backColor="#655"
    percentColor="yellowgreen"
/>

- use 2

var myPie = Progresspie({ 
        percent: 45,
        width: "100px",
        height: "100px",
        backColor: "#655",
        percentColor: "yellowgreen",
    });

### github
[Jared](https://github.com/aisriver/progresspie.git)
