# lab6 设计文档

贾子安 18307130017

## 1. 实现方式

- 遍历works数组，把对应的div item通过document.write直接写入html即可
  ```js
  function output(){
    for(var i=0;i<4;i++){
      var line=works[i];
      var str=` <div class='item'>
                  <h4>Genre : `+line.tips+`</h4>
                  <div class='inner-box'>
                    <h3 style='display:inline'>`+line.author+`</h3>
                    <h5 style='display:inline; margin-left:1em'>lifetime:`+line.lifetime+`</h5>
                  </div>
                  <div class='inner-box'>
                    <h3>Popular Photos</h3>`;
      for(var phstr in line.photos){
        str+=    `<img class='photo' src='./img/`+line.photos[phstr]+`'>`;
      }
      str+=      `</div>
                  <button>Visit</button>
                </div>`;
      document.write(str);
    }
  }
  output();
  ```

## 2. 参考资料

<a href="https://github.com/fudansswebfundamental">fudansswebfundamental</a>

<a href="https://www.w3school.com.cn/">W3school</a>
