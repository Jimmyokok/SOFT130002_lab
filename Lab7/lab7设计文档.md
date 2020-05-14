# lab6 设计文档

贾子安 18307130017

## 1. 实现方式

- 遍历works数组，创建对应的item节点
  ```js
  var element=document.getElementsByClassName("flex-container justify");
  var item=document.createElement("div");
  item.className = "item";
  element[0].appendChild(item);
  ```
- 创建该item下应该有的全部html元素
  ```js
  var h4=document.createElement("h4");
  var inner_box1=document.createElement("div");
  var inner_box2=document.createElement("div");
  var h31=document.createElement("h3");
  var h32=document.createElement("h3");
  var h5=document.createElement("h5");
  var button=document.createElement("button");
  ```
- 设置它们的各项属性
  ```js
  h4.innerHTML = "Genre : " + line.tips;
  inner_box1.className = inner_box2.className = "inner-box";
  h31.style = "display:inline";
  h31.innerHTML = line.author;
  h32.innerHTML = "Popular Photos";
  h5.style = "display:inline; margin-left:1em";
  h5.innerHTML = "lifetime:"+line.lifetime;
  button.innerHTML = "Visit";
  ```
- 将他们连接到item
  ```js
  item.appendChild(h4);
  item.appendChild(inner_box1);
  item.appendChild(inner_box2);
  item.appendChild(button);
  inner_box1.appendChild(h31);
  inner_box1.appendChild(h5);
  inner_box2.appendChild(h32);
  ```
- 最后遍历所有的照片，创建相应img元素然后追加到它的父元素inner_box2
  ```js
  for(var phstr in line.photos){
    var img = document.createElement("img");
    img.src = "./img/"+line.photos[phstr];
    img.className = "photo";
    inner_box2.appendChild(img);
  }
  ```

## 2. 参考资料

<a href="https://github.com/fudansswebfundamental">fudansswebfundamental</a>

<a href="https://www.w3school.com.cn/">W3school</a>
