# <center>Lab4设计文档</center>

<center>贾子安</center>

<center>18307130017</center>

-------------------

## 主页截图

<div>
    <img src="https://github.com/Jimmyokok/SOFT130002_lab/raw/master/Lab4/images/screenshots/home1.png">
    <img src="https://github.com/Jimmyokok/SOFT130002_lab/raw/master/Lab4/images/screenshots/home2.png">
    <img src="https://github.com/Jimmyokok/SOFT130002_lab/raw/master/Lab4/images/screenshots/home3.png">
</div>

-------------------

## 导航栏

<div>
    <img src="https://github.com/Jimmyokok/SOFT130002_lab/raw/master/Lab4/images/screenshots/nav.png">
</div>

改动：
- 补上图标
- 在下拉菜单各选项间增加分割线
```
    <li role="separator" class="divider"></li>
```

-------------------

## 轮播

改动：
- 加上图片并改变各图片名称

-------------------

## 图片展示区

<div>
    <img src="https://github.com/Jimmyokok/SOFT130002_lab/raw/master/Lab4/images/screenshots/show.png">
</div>

设计：
- 每个图片展示区采用`col-lg-4`样式，保证每行容纳三个，共两行
- 图片展示框则采用`img-thumbnail`样式
- 描述标题和内容居中
- 由于是**Lab4**，所有图片及其描述都一样

-------------------

## 页脚

<div>
    <img src="https://github.com/Jimmyokok/SOFT130002_lab/raw/master/Lab4/images/screenshots/footer.png">
</div>

改动：
- 每一列使用`col-md-5`,根据父元素`<div class="row" id="row">`的宽度及每一列的`padding`正好能容纳每行两个
- 删除二维码等无图显示的部分

-------------------

## 参考文献

<a style="text-decoration:none;" href="https://v3.bootcss.com/getting-started/">Bootstrap官网</a>

<a style="text-decoration:none;" href="https://github.com/fudansswebfundamental/fdu-19ss-web-lab">fdu-19ss-web-lab</a>