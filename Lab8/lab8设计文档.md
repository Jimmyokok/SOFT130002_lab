# lab6 设计文档

贾子安 18307130017

## 1. 实现方式

-------

### 1.1 任务1

- 通过改变容纳图片的容器left属性来调整当前显示的图片
- 通过选取对应的按钮并且给它加上类on，实现数字标记的变化
- 给箭头加上onclick属性执行的函数，使得箭头点击左移右移
  ```js
  function swt(direction){
    document.querySelectorAll("span:nth-child("+alt+")")[0].classList.remove("on");
    ...
    document.querySelectorAll("span:nth-child("+alt+")")[0].classList.add("on");
    document.querySelectorAll(".wrap")[0].setAttribute("style","left: -"+alt*600+"px;");
  }
  document.getElementsByClassName("arrow arrow_left")[0].setAttribute("onclick","swt(0)");
  document.getElementsByClassName("arrow arrow_right")[0].setAttribute("onclick","swt(1)");
  ```
### 1.2 任务2

-----------

- 设置body onload时执行函数，设置一个计时器，每两秒切换图片
- 设置图片容器的onmouseover属性，使得鼠标移上去时暂停计时器
- 设置图片容器的onmouseout属性，使得鼠标移出时重启计时器
  ```js
  function timerfunc(){
    timer = setInterval("swt(1)", 2000);
    document.querySelectorAll(".container")[0].onmouseover=function(){clearInterval(timer)};
    document.querySelectorAll(".container")[0].onmouseout=function(){timer=setInterval("swt(1)",2000)};
  }
  document.querySelectorAll("body")[0].onload=timerfunc();
  ```

### 1.3 任务3

-----------

- 给每个数值按钮加上onclick属性，执行相应参数的图片切换函数
  ```js
  function jump(i){
    ...
  }
  for(var j=1;j<=5;j++){
      spans[j-1].setAttribute("onclick","jump("+j+")");
  }
  ```

### 1.4 任务4

-----------

- 使用JQuery
- 设置所有td的双击属性，当双击时，直接将其替换为一个文本相同的input输入框并设置焦点
- 当其失去焦点时将其换回普通html，文本保存
  ```js
  $(function(){
    $("td").dblclick(function(){
        var val=$(this).text();
        var temp=$("<input type='text' value='"+val+"'/>");
        $(this).html(temp);
        temp.focus;
        temp.blur(function(){
            temp.parent().html(temp.val());
        });
    });
  });
  ```

## 2. 参考资料

<a href="https://github.com/fudansswebfundamental">fudansswebfundamental</a>

<a href="https://www.w3school.com.cn/">W3school</a>