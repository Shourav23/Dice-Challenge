var randomnum1 = Math.floor(Math.random()*6) +1;
var randomdiceimage ="dice" + randomnum1 + ".png";

var randomdiceimagesource = "images/" + randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimagesource);

var randomnum2 = Math.floor(Math.random()*6) +1;
var randomdiceimage2 ="dice" + randomnum2 + ".png";

var randomdiceimagesource2 = "images/" + randomdiceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimagesource2);

if(randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnum1 == randomnum2){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins";

}