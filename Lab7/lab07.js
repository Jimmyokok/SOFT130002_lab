const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
function output(){
    for(var i=0;i<4;i++){
        var line=works[i];

        var element=document.getElementsByClassName("flex-container justify");
        var item=document.createElement("div");
        var h4=document.createElement("h4");
        var inner_box1=document.createElement("div");
        var inner_box2=document.createElement("div");
        var h31=document.createElement("h3");
        var h32=document.createElement("h3");
        var h5=document.createElement("h5");
        var button=document.createElement("button");

        item.className = "item";
        h4.innerHTML = "Genre : " + line.tips;
        inner_box1.className = inner_box2.className = "inner-box";
        h31.style = "display:inline";
        h31.innerHTML = line.author;
        h32.innerHTML = "Popular Photos";
        h5.style = "display:inline; margin-left:1em";
        h5.innerHTML = "lifetime:"+line.lifetime;
        button.innerHTML = "Visit";

        element[0].appendChild(item);
        item.appendChild(h4);
        item.appendChild(inner_box1);
        item.appendChild(inner_box2);
        item.appendChild(button);
        inner_box1.appendChild(h31);
        inner_box1.appendChild(h5);
        inner_box2.appendChild(h32);

        for(var phstr in line.photos){
            var img = document.createElement("img");
            img.src = "./img/"+line.photos[phstr];
            img.className = "photo";
            inner_box2.appendChild(img);
        }
    }
}
output();