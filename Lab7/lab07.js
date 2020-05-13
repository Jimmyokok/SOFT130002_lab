const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
function output(){
    for(var i=0;i<4;i++){
        var line=works[i];
        var str=`<div class='item'>
                    <h4>Genre : `+line.tips+`</h4>
                    <div class='inner-box'>
                        <h3 style='display:inline'>`+line.author+`</h3>
                        <h5 style='display:inline; margin-left:1em'>lifetime:`+line.lifetime+`</h5>
                    </div>
                    <div class='inner-box'>
                        <h3>Popular Photos</h3>`;
        for(var phstr in line.photos){
            str+=`      <img class='photo' src='./img/`+line.photos[phstr]+`'>`;
        }
        str+=`      </div>
                    <button>Visit</button>
                </div>`;
                document.write(str);
    }
}
output();