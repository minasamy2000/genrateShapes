var line=document.getElementById("ab-line")
var rect=document.getElementById("ab-rect")
var Circle=document.getElementById("ab-circle")
var earser=document.getElementById("ab-eraser")
var fill=document.getElementById("fill-color")
var stroke=document.getElementById("stroke-color")
var bord=document.getElementById("bord")
line.onclick=function(){
 
  bord.innerHTML=`<canvas id="myCanvas" width="200" height="100" style="margin-top:30px"></canvas> `
  var canvas = document.getElementById("myCanvas"); 
  var cContext = canvas.getContext("2d"); 
  cContext.fillStyle= fill.value
  cContext.strokeStyle =stroke.value
  cContext.moveTo(50,25); 
  cContext.lineTo(150,75); 
  cContext.stroke()
 

}
rect.onclick=function(){
    bord.innerHTML=`<canvas id="myCanvas" width="200" height="100"style="margin-top:30px">></canvas>`
    var canvas = document.getElementById("myCanvas"); 
    var cContext = canvas.getContext("2d"); 
    cContext.fillStyle =fill.value
    cContext.strokeStyle = stroke.value
    cContext.fillRect(0,0,150,75);
    cContext.stroke()

}
Circle.onclick=function(){
    bord.innerHTML=`<canvas id="myCanvas" width="200" height="100"style="margin-top:30px">></canvas>`
    var canvas = document.getElementById("myCanvas"); 
    var cContext = canvas.getContext("2d"); 
    cContext.beginPath(); 
    cContext.arc(100,50, 40, 0, 2 * Math.PI ) 
    cContext.fillStyle=fill.value
    cContext.fill();
    cContext.stroke()


}
earser.onclick=function(){
    bord.innerHTML=""
}
