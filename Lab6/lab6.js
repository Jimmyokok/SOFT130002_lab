/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    var change=function(){
        var counter=0;
        var ans=0;
        return function(){
            var time=new Date();
            if(++counter%5==0){
                if(ans==0)ans=1;
                else ans*=2;
                console.log(ans)
            }
            if(counter/5==10){
                console.log("Reached 10 times.")
                clearInterval(timer);
            }
            if(time.getSeconds()==0){
                console.log("Reached new minute.")
                clearInterval(timer);
            }
        }
    };
    var timer=setInterval(change(), 1000);
}
//testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    var pat_email=/^([a-zA-Z0-9_-])+@(([a-z]+\.)+)([a-z]{2,4})/
    var pat_phone=/^[1]([0-9]{10})/
    var is_email=pat_email.test(mail);
    var is_phone=pat_phone.test(telephone);
    if(is_phone){
        if(is_email)console.log("The telephone and email are all correct!");
        else console.log("The telephone is correct but the email is wrong!");
    }
    else{;
        if(is_email)console.log("The telephone is wrong and the email is correct!");
        else console.log("The telephone and email are all wrong!");
    }
}
/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    var pat=/(\w+)\s+(\1)/i;
    var arr=new Array();
    while(true){
        var arr0=str.match(pat);
        if(arr0==null)break;
        arr.push(arr0[0]);
        str=str.replace(pat,"$2");
    }
    /*
        两个相邻重复单词对互相重叠时，即使加了global标签也只能匹配前一个，
        如"Is is iS"只能匹配到"Is is"，
        解决办法：循环多次匹配，每次匹配到一对相邻重复单词，把它替换成这一对单词中的后一个，直到无法匹配到任何一对。
        如："IS Is iS is"->"Is is"->"is"
    */
    var s=new Set(arr.sort(function(a,b){return a.localeCompare(b)}));
    var counter=0;
    for(var item of s){
        if(++counter>10){
            s.delete(item);
        }
    }
    console.log(s);
}

/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    var ans=new Set();
    var counter=0;
    wantInput=wantInput.toLocaleUpperCase();
    actualInput=actualInput.toLocaleUpperCase();
    for(i=0,j=wantInput.length;i<j;i++){
        if(counter==actualInput.length||wantInput.charAt(i)!=actualInput.charAt(counter)){
            ans.add(wantInput.charAt(i));
        }
        else{
            counter++;
        }
    }
    console.log(ans);
}
/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    var pat=/(\S+)/ig;
    var arr=str.match(pat);
    var ans="";
    for(j=arr.length,i=j-1;i>=0;i--){
        if(i==j-1)ans=arr[i];
        else ans=ans+" "+arr[i];
    }
    console.log(ans);
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    var ans=new Array();
    var m=new Map();
    for(i=0,j=nums.length;i<j;i++){
        m.set(nums[i],i);
        var temp=m.get(target-nums[i]);
        if(temp!=undefined&&temp!=i){
            console.log([temp,i]);
        }
    }
}

/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    var m=new Map();
    var len=0;
    var left=0;
    for(i=0,j=str.length;i<j;i++){
        temp=m.get(str.charAt(i));
        if(temp!=undefined){
            left=temp+1;
        }
        m.set(str.charAt(i),i);
        len=i-left>len?i-left:len;
    }
    console.log(len+1);
}
/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {this.name = "Country";}
function PoorCountry(){this.saySad = function(){console.log("I am a sad poor country.");};}
PoorCountry.prototype=new Country();
function DevelopingCountry(){
    Country.call(this)
    this.sayHi = function(){console.log("Hi,i am a developing country.");};
}
var DevelopedCountry=Object.create(
    Country,{
        sayHappy:{
            value:function(){
                console.log("Hi,i am a Happy developed country.")
            }
        }
    }
);
function Test8(){
    var PC=new PoorCountry();
    var DC=new DevelopingCountry();
    DC.sayHi();
    PC.saySad();
    DevelopedCountry.sayHappy();
}

function test(){
    console.log("Test 1 will be carried out last.")
    console.log("Test 2:testMail('21231411141','a@fudan.edu.cn'), Get:")
    testMail("21231411141","a@fudan.edu.cn");
    console.log("Test 3:testRedundancy('a a a bb bB Bb BB cc cc ddd ddd e e f f g g h h i i j j k k adiadwji amdw'), Get:")
    testRedundancy("a a a bb bB Bb BB cc cc ddd ddd e e f f g g h h i i j j k k adiadwji amdw");
    console.log("Test 4:testKeyBoard('a.,/Bc_defgh//","aBc_defh'), Get");
    testKeyBoard("a.,/Bc_defgh//","aBc_defh");
    console.log("Test 5:testSpecialReverse('The sky is NOT blue'), Get:");
    testSpecialReverse("The sky is NOT blue");
    console.log("Test 6:twoSum([1,2,3,4,5,6,7,8,9],10), Get:");
    twoSum([1,2,3,4,5,6,7,8,9],10);
    console.log("Test 7:lengthOfLongestSubstring('abcbbdef'), Get:");
    lengthOfLongestSubstring("abcbbdef");
    console.log("Test 8:Get:");
    Test8();
    console.log("Test 1:testTime();, Get:");
    testTime();
}
test();