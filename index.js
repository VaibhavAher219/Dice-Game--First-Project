
let dicran1 =Math.floor(Math.random()*6)+1;
let dicran2 =Math.floor(Math.random()*6)+1;
let dic1="images/"+dicran1+".png";
document.querySelectorAll('img')[0].setAttribute('src',dic1);
let dic2="images/"+dicran2+".png";
document.querySelectorAll('img')[1].setAttribute('src',dic2);

if(dicran1>dicran2){
    document.querySelector('h1').textContent="Player 1 Won";
}
else if(dicran1<dicran2)
{
    document.querySelector('h1').textContent="Player 2 Won";

}
else{
    document.querySelector('h1').textContent="GTFOL";

}
