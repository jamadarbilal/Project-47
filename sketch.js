const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var play,how,back;
var shooter;
var ball = [];
var ball2 = [];
var score = 0;  

var j;
var z;
var g;
var m;
var y;
var o;
var p;
var player1;
var f;
var t,m,b,v,x,j;
var oo;
function preload()

{
 
  
 d = loadImage("bgm.jpeg")
 s = loadImage("shooter.png")
 sr = loadImage("s.png")
 bi = loadImage("images/red.png")
 bgr = loadImage("images/green.png")
 by =  loadImage("images/yellow.png")
 bgre = loadImage("images/grey.png")
 bdr = loadImage("images/darkblue.png")
 bl = loadImage("images/blue.png")
}

function setup() {
  engine = Engine.create();
  
  
  world = engine.world;
  createCanvas(800,690);

button = new Button();
bulletGroup = createGroup();
sk = createSprite(400,550)
sk.addImage(sr)
sk.visible = false

player1 = createSprite(190,375,20,20);
    player1.addImage(s);
    player1.scale = 0.5;
player1.visible = false
  var angle = player1.angle;
  push();
  translate(player1.position.x,player1.position.y);
  rotate(angle);
  pop()

//keys.end()
wall1 = createSprite(2,10,10,1500)
wall2 = createSprite(798,50,10,1500)
wall1.visible = false;
wall2.visible = false;

player1.velocityX = 5

f = createSprite(20,70,30,30)           
f.addImage(bi) 
y = createSprite(60,70,30,30)
y.addImage(bgr)
p = createSprite(100,70,30,30)
p.addImage(by)
o = createSprite(140,70,30,30)
o.addImage(bgre)
t = createSprite(180,70,30,30)
t.addImage(bdr)
m = createSprite(220,70,30,30)
m.addImage(bl)
b = createSprite(260,70,30,30)
b.addImage(bi) 
v = createSprite(300,70,30,30)
v.addImage(bgr)
x = createSprite(340,70,30,30)
x.addImage(by)
j = createSprite(380,70,30,30)
j.addImage(bgre)



f0 = createSprite(420,70,30,30) 
f0.addImage(bi) 
y1 = createSprite(460,70,30,30)
y1.addImage(bgr)
p8 = createSprite(500,70,30,30)
p8.addImage(by)
o1 = createSprite(540,70,30,30)
o1.addImage(bgre)
l1 = createSprite(580,70,30,30)
l1.addImage(bdr)
m1 = createSprite(620,70,30,30)
m1.addImage(bl)
b1 = createSprite(660,70,30,30)
b1.addImage(bi) 
v1 = createSprite(700,70,30,30)
v1.addImage(bgr)
x1 = createSprite(740,70,30,30)
x1.addImage(by)
j1 = createSprite(780,70,30,30)
j1.addImage(bgre)



f.shapeColor = "black";
f0.shapeColor = "green";

y.shapeColor = "yellow";
y1.shapeColor = "orange";

p.shapeColor = "brown";
p8.shapeColor = "white";

o.shapeColor = "purple";
o1.shapeColor = "grey";

l1.shapeColor = "black";
t.shapeColor = "green";

m1.shapeColor = "yellow";
m.shapeColor = "orange";

b.shapeColor = "brown";
b1.shapeColor = "white";

v.shapeColor = "purple";
v1.shapeColor = "grey";

x.shapeColor = "black";
x1.shapeColor = "green";

j.shapeColor = "yellow";
j1.shapeColor = "orange";

j.visible = false;
j1.visible = false;
b.visible = false;
b1.visible = false;
v.visible = false;
v1.visible = false;
x.visible = false;
x1.visible = false;
m.visible = false;
m1.visible = false;
t.visible = false;
l1.visible = false;
o.visible = false;
o1.visible = false;
p.visible = false;
p8.visible = false;
y.visible = false;
y1.visible = false;
f.visible = false;
f0.visible = false;

  f2 = createSprite(20,120,30,30)   
  f2.addImage(bi)          
  y2 = createSprite(60,120,30,30)
  y2.addImage(bgr)
  p2 = createSprite(100,120,30,30)
  p2.addImage(by)
  o2 = createSprite(140,120,30,30)
  o2.addImage(bgre)
  l2 = createSprite(180,120,30,30)
  l2.addImage(bdr)
  m2 = createSprite(220,120,30,30)
  m2.addImage(bl)
  b2 = createSprite(260,120,30,30)
  b2.addImage(bi) 
  v2 = createSprite(300,120,30,30)
  v2.addImage(bgr)
  x2 = createSprite(340,120,30,30)
  x2.addImage(by)
  j2 = createSprite(380,120,30,30)
  j2.addImage(bgre)
  
  f02 = createSprite(420,120,30,30) 
  f02.addImage(bi)                     
  y12 = createSprite(460,120,30,30)
  y12.addImage(bgr)
  p82 = createSprite(500,120,30,30)
  p82.addImage(by)
  o12 = createSprite(540,120,30,30)
  o12.addImage(bgre)
  l12 = createSprite(580,120,30,30)
  l12.addImage(bdr)
  m12 = createSprite(620,120,30,30)
  m12.addImage(bl)
  b12 = createSprite(660,120,30,30)
  b12.addImage(bi) 
  v12 = createSprite(700,120,30,30)
  v12.addImage(bgr)
  x12 = createSprite(740,120,30,30)
  x12.addImage(by)
  j12 = createSprite(780,120,30,30)
  j12.addImage(bgre)

  
  f2.shapeColor = "white";
  f02.shapeColor = "green";
  
  y2.shapeColor = "purple";
  y12.shapeColor = "orange";
  
  p2.shapeColor = "yellow";
  p82.shapeColor = "white";
  
  o2.shapeColor = "purple";
  o12.shapeColor = "grey";
  
  l12.shapeColor = "white";
  l2.shapeColor = "red";
  
  m12.shapeColor = "brown";
  m2.shapeColor = "orange";
  
  b2.shapeColor = "orange";
  b12.shapeColor = "white";
  
  v2.shapeColor = "purple";
  v12.shapeColor = "black";
  
  x2.shapeColor = "purple";
  x12.shapeColor = "green";
  
  j2.shapeColor = "red";
  j12.shapeColor = "brown";

  j2.visible = false;
j12.visible = false;
b2.visible = false;
b12.visible = false;
v2.visible = false;
v12.visible = false;
x2.visible = false;
x12.visible = false;
m2.visible = false;
m12.visible = false;
l2.visible = false;
l12.visible = false;
o2.visible = false;
o12.visible = false;
p2.visible = false;
p82.visible = false;
y2.visible = false;
y12.visible = false;
f2.visible = false;
f02.visible = false;

  f3 = createSprite(20,170,30,30)           
  f3.addImage(bi)                      
  y3 = createSprite(60,170,30,30)
  y3.addImage(bgr)
  p3 = createSprite(100,170,30,30)
  p3.addImage(by)
  o3 = createSprite(140,170,30,30)
  o3.addImage(bgre)
  l3 = createSprite(180,170,30,30)
  l3.addImage(bdr)
  m3 = createSprite(220,170,30,30)
  m3.addImage(bl)
  b3 = createSprite(260,170,30,30)
  b3.addImage(bi) 
  v3 = createSprite(300,170,30,30)
  v3.addImage(bgr)
  x3 = createSprite(340,170,30,30)
  x3.addImage(by)
  j3 = createSprite(380,170,30,30)
  j3.addImage(bgre)

  f03 = createSprite(420,170,30,30)           
  f03.addImage(bi)                      
  y13 = createSprite(460,170,30,30)
  y13.addImage(bgr)
  p83 = createSprite(500,170,30,30)
  p83.addImage(by)
  o13 = createSprite(540,170,30,30)
  o13.addImage(bgre)
  l13 = createSprite(580,170,30,30)
  l13.addImage(bdr)
  m13 = createSprite(620,170,30,30)
  m13.addImage(bl)
  b13 = createSprite(660,170,30,30)
  b13.addImage(bi) 
  v13 = createSprite(700,170,30,30)
  v13.addImage(bgr)
  x13 = createSprite(740,170,30,30)
  x13.addImage(by)
  j13 = createSprite(780,170,30,30)
  j13.addImage(bgre)
  
  f3.shapeColor = "black";
  f03.shapeColor = "green";
  
  y3.shapeColor = "yellow";
  y13.shapeColor = "orange";
  
  p3.shapeColor = "brown";
  p83.shapeColor = "white";
  
  o3.shapeColor = "purple";
  o13.shapeColor = "grey";
  
  l13.shapeColor = "black";
  l3.shapeColor = "green";
  
  m13.shapeColor = "yellow";
  m3.shapeColor = "orange";
  
  b3.shapeColor = "brown";
  b13.shapeColor = "white";
  
  v3.shapeColor = "purple";
  v13.shapeColor = "grey";
  
  x3.shapeColor = "black";
  x13.shapeColor = "green";
  
  j3.shapeColor = "yellow";
  j13.shapeColor = "orange";

j3.visible = false;
j13.visible = false;
b3.visible = false;
b13.visible = false;
v3.visible = false;
v13.visible = false;
x3.visible = false;
x13.visible = false;
m3.visible = false;
m13.visible = false;
l3.visible = false;
l13.visible = false;
o3.visible = false;
o13.visible = false;
p3.visible = false;
p83.visible = false;
y3.visible = false;
y13.visible = false;
f3.visible = false;
f03.visible = false;

  f4 = createSprite(20,220,30,30)       
  f4.addImage(bi)                          
  y4 = createSprite(60,220,30,30)
  y4.addImage(bgr)
  p4 = createSprite(100,220,30,30)
  p4.addImage(by)
  o4 = createSprite(140,220,30,30)
  o4.addImage(bgre)
  l4 = createSprite(180,220,30,30)
  l4.addImage(bdr)
  m4 = createSprite(220,220,30,30)
  m4.addImage(bl)
  b4 = createSprite(260,220,30,30)
  b4.addImage(bi) 
  v4 = createSprite(300,220,30,30)
  v4.addImage(bgr)
  x4 = createSprite(340,220,30,30)
  x4.addImage(by)
  j4 = createSprite(380,220,30,30)
  j4.addImage(bgre)

  f04 = createSprite(420,220,30,30)  
  f04.addImage(bi)                                    
  y14 = createSprite(460,220,30,30)
  y14.addImage(bgr)
  p84 = createSprite(500,220,30,30)
  p84.addImage(by)
  o14 = createSprite(540,220,30,30)
  o14.addImage(bgre)
  l14 = createSprite(580,220,30,30)
  l14.addImage(bdr)
  m14 = createSprite(620,220,30,30)
  m14.addImage(bl)
  b14 = createSprite(660,220,30,30)
  b14.addImage(bi) 
  v14 = createSprite(700,220,30,30)
  v14.addImage(bgr)
  x14 = createSprite(740,220,30,30)
  x14.addImage(by)
  j14 = createSprite(780,220,30,30)
  j14.addImage(bgre)
  
  f4.shapeColor = "black";
  f04.shapeColor = "green";
  
  y4.shapeColor = "yellow";
  y14.shapeColor = "orange";
  
  p4.shapeColor = "brown";
  p84.shapeColor = "white";
  
  o4.shapeColor = "purple";
  o14.shapeColor = "grey";
  
  l14.shapeColor = "black";
  l4.shapeColor = "green";
  
  m14.shapeColor = "yellow";
  m4.shapeColor = "orange";
  
  b4.shapeColor = "brown";
  b14.shapeColor = "white";
  
  v4.shapeColor = "purple";
  v14.shapeColor = "grey";
  
  x4.shapeColor = "black";
  x14.shapeColor = "green";
  
  j4.shapeColor = "yellow";
  j14.shapeColor = "orange";

  j4.visible = false;
j14.visible = false;
b4.visible = false;
b14.visible = false;
v4.visible = false;
v14.visible = false;
x4.visible = false;
x14.visible = false;
m4.visible = false;
m14.visible = false;
l4.visible = false;
l14.visible = false;
o4.visible = false;
o14.visible = false;
p4.visible = false;
p84.visible = false;
y4.visible = false;
y14.visible = false;
f4.visible = false;
f04.visible = false;

  f5 = createSprite(20,270,30,30)         
  f5.addImage(bi)                                       
  y5 = createSprite(60,270,30,30)
  y5.addImage(bgr)
  pu5 = createSprite(100,270,30,30)
  pu5.addImage(by)
  o5 = createSprite(140,270,30,30)
  o5.addImage(bgre)
  l5 = createSprite(180,270,30,30)
  l5.addImage(bdr)
  m5 = createSprite(220,270,30,30)
  m5.addImage(bl)
  b5 = createSprite(260,270,30,30)
  b5.addImage(bi) 
  v5 = createSprite(300,270,30,30)
  v5.addImage(bgr)
  x5 = createSprite(340,270,30,30)
  x5.addImage(by)
  j5 = createSprite(380,270,30,30)
  j5.addImage(bgre)

  f05 = createSprite(420,270,30,30)  
  f05.addImage(bi)                                                 
  y15 = createSprite(460,270,30,30)
  y15.addImage(bgr)
  p85 = createSprite(500,270,30,30)
  p85.addImage(by)
  o15 = createSprite(540,270,30,30)
  o15.addImage(bgre)
  l15 = createSprite(580,270,30,30)
  l15.addImage(bdr)
  m15 = createSprite(620,270,30,30)
  m15.addImage(bl)
  b15 = createSprite(660,270,30,30)
  b15.addImage(bi) 
  v15 = createSprite(700,270,30,30)
  v15.addImage(bgr)
  x15 = createSprite(740,270,30,30)
  x15.addImage(by)
  j15 = createSprite(780,270,30,30)
  j15.addImage(bgre)

  
  f5.shapeColor = "black";
  f05.shapeColor = "green";
  
  y5.shapeColor = "yellow";
  y15.shapeColor = "orange";
  
  pu5.shapeColor = "brown";
  p85.shapeColor = "white";
  
  o5.shapeColor = "purple";
  o15.shapeColor = "grey";
  
  l15.shapeColor = "black";
  l5.shapeColor = "green";
  
  m15.shapeColor = "yellow";
  m5.shapeColor = "orange";
  
  b5.shapeColor = "brown";
  b15.shapeColor = "white";
  
  v5.shapeColor = "purple";
  v15.shapeColor = "grey";
  
  x5.shapeColor = "black";
  x15.shapeColor = "green";
  
  j5.shapeColor = "yellow";
  j15.shapeColor = "orange";

j5.visible = false;
j15.visible = false;
b5.visible = false;
b15.visible = false;
v5.visible = false;
v15.visible = false;
x5.visible = false;
x15.visible = false;
m5.visible = false;
m15.visible = false;
l5.visible = false;
l15.visible = false;
o5.visible = false;
o15.visible = false;
pu5.visible = false;
p85.visible = false;
y5.visible = false;
y15.visible = false;
f5.visible = false;
f05.visible = false;
}
function draw(){
  background(d)
 
button.display()

   
if(player1.isTouching(wall1)){
  player1.velocityX = 5
}

if(player1.isTouching(wall2)){
  player1.velocityX = -5
}

if(bulletGroup.isTouching(o)){
  o.visible = false;
  score++
}
if(bulletGroup.isTouching(f)){
  f.visible = false;
  score++
}
if(bulletGroup.isTouching(y)){
  y.visible = false;
  score++
}
if(bulletGroup.isTouching(p)){
  p.visible = false;
  score++
}
if(bulletGroup.isTouching(t)){
  t.visible = false;
  score++
}
if(bulletGroup.isTouching(m)){
  m.visible = false;
  score++
}
if(bulletGroup.isTouching(b)){
  b.visible = false;
  score++
}
if(bulletGroup.isTouching(v)){
  v.visible = false;
  score++
}
if(bulletGroup.isTouching(x)){
  x.visible = false;
  score++
}
if(bulletGroup.isTouching(j)){
  j.visible = false;
  score++
}

if(bulletGroup.isTouching(o1)){
  o1.visible = false;
  score++
}
if(bulletGroup.isTouching(f0)){
  f0.visible = false;
  score++
}
if(bulletGroup.isTouching(y1)){
  y1.visible = false;
  score++
}
if(bulletGroup.isTouching(p8)){
  p8.visible = false;
  score++
}
if(bulletGroup.isTouching(l1)){
  l1.visible = false;
  score++
}
if(bulletGroup.isTouching(m1)){
  m1.visible = false;
  score++
}
if(bulletGroup.isTouching(b1)){
  b1.visible = false;
  score++
}
if(bulletGroup.isTouching(v1)){
  v1.visible = false;
  score++
}
if(bulletGroup.isTouching(x1)){
  x1.visible = false;
  score++
}
if(bulletGroup.isTouching(j1)){
  j1.visible = false;
  score++
}
// 2nd 
if(bulletGroup.isTouching(o1)){
  o1.visible = false;
  score++
}
if(bulletGroup.isTouching(o2)){
  o2.visible = false;
  score++
}
if(bulletGroup.isTouching(o3)){
  o3.visible = false;
  score++
}
if(bulletGroup.isTouching(o12)){
  o12.visible = false;
  score++
}
if(bulletGroup.isTouching(o13)){
  o13.visible = false;
  score++
}
if(bulletGroup.isTouching(o14)){
  o14.visible = false;
  score++
}
if(bulletGroup.isTouching(o15)){
  o15.visible = false;
  score++
}
// 3rd
if(bulletGroup.isTouching(f02)){
  f02.visible = false;
  score++
}
if(bulletGroup.isTouching(f03)){
  f03.visible = false;
  score++
}
if(bulletGroup.isTouching(f04)){
  f04.visible = false;
  score++
}
if(bulletGroup.isTouching(f05)){
  f05.visible = false;
  score++
}
if(bulletGroup.isTouching(f2)){
  f2.visible = false;
  score++
}
if(bulletGroup.isTouching(f3)){
  f3.visible = false;
  score++
}
if(bulletGroup.isTouching(f4)){
  f4.visible = false;
  score++
}
if(bulletGroup.isTouching(f5)){
  f5.visible = false;
  score++
}
//4th
if(bulletGroup.isTouching(y2)){
  y2.visible = false;
  score++
}
if(bulletGroup.isTouching(y3)){
  y3.visible = false;
  score++
}
if(bulletGroup.isTouching(y4)){
  y4.visible = false;
  score++
}
if(bulletGroup.isTouching(y5)){
  y5.visible = false;
  score++
}
if(bulletGroup.isTouching(y12)){
  y12.visible = false;
  score++
}
if(bulletGroup.isTouching(y13)){
  y13.visible = false;
  score++
}
if(bulletGroup.isTouching(y14)){
  y14.visible = false;
  score++
}
if(bulletGroup.isTouching(y15)){
  y15.visible = false;
  score++
}
//5th
if(bulletGroup.isTouching(p83)){
  p83.visible = false;
  score++
}
if(bulletGroup.isTouching(p84)){
  p84.visible = false;
  score++
}
if(bulletGroup.isTouching(p85)){
  p85.visible = false;
  score++
}
if(bulletGroup.isTouching(p8)){
  p8.visible = false;
  score++
}
if(bulletGroup.isTouching(p2)){
  p2.visible = false;
  score++
}
if(bulletGroup.isTouching(p3)){
  p3.visible = false;
  score++
}
if(bulletGroup.isTouching(p4)){
  p4.visible = false;
  score++
}
if(bulletGroup.isTouching(pu5)){
  pu5.visible = false;
  score++
}
//6th
if(bulletGroup.isTouching(t)){
  t.visible = false;
  score++
}
if(bulletGroup.isTouching(l2)){
  l2.visible = false;
  score++
}
if(bulletGroup.isTouching(l3)){
  l3.visible = false;
  score++
}
if(bulletGroup.isTouching(l4)){
  l4.visible = false;
  score++
}
if(bulletGroup.isTouching(l5)){
  l5.visible = false;
  score++
}
if(bulletGroup.isTouching(l12)){
  l12.visible = false;
  score++
}
if(bulletGroup.isTouching(l13)){
  l13.visible = false;
  score++
}
if(bulletGroup.isTouching(l14)){
  l14.visible = false;
  score++
}
if(bulletGroup.isTouching(l15)){
  l15.visible = false;
  score++
}
//7th
if(bulletGroup.isTouching(m2)){
  m2.visible = false;
  score++
}
if(bulletGroup.isTouching(m3)){
  m3.visible = false;
  score++
}
if(bulletGroup.isTouching(m4)){
  m4.visible = false;
  score++
}
if(bulletGroup.isTouching(m5)){
  m5.visible = false;
  score++
}
if(bulletGroup.isTouching(m12)){
  m12.visible = false;
  score++
}
if(bulletGroup.isTouching(m13)){
  m13.visible = false;
  score++
}
if(bulletGroup.isTouching(m14)){
  m14.visible = false;
  score++
}
if(bulletGroup.isTouching(m15)){
  m15.visible = false;
  score++
}
//8th
if(bulletGroup.isTouching(b1)){
  b1.visible = false;
  score++
}
if(bulletGroup.isTouching(b2)){
  b2.visible = false;
  score++
}
if(bulletGroup.isTouching(b3)){
  b3.visible = false;
  score++
}
if(bulletGroup.isTouching(b4)){
  b4.visible = false;
  score++
}
if(bulletGroup.isTouching(b5)){
  b5.visible = false;
  score++
}
if(bulletGroup.isTouching(b12)){
  b12.visible = false;
  score++
}
if(bulletGroup.isTouching(b13)){
  b13.visible = false;
  score++
}
if(bulletGroup.isTouching(b14)){
  b14.visible = false;
  score++
}
if(bulletGroup.isTouching(b15)){
  b15.visible = false; 
  score++
}
//9th
if(bulletGroup.isTouching(v1)){
  v1.visible = false;
  score++
}
if(bulletGroup.isTouching(v12)){
  v12.visible = false;
  score++
}
if(bulletGroup.isTouching(v13)){
  v13.visible = false;
  score++
}
if(bulletGroup.isTouching(v14)){
  v14.visible = false;
  score++
}
if(bulletGroup.isTouching(v15)){
  v15.visible = false;
  score++
}
if(bulletGroup.isTouching(v2)){
  v2.visible = false;
  score++
}
if(bulletGroup.isTouching(v3)){
  v3.visible = false;
  score++
}
if(bulletGroup.isTouching(v4)){
  v4.visible = false;
  score++
}
if(bulletGroup.isTouching(v5)){
  v5.visible = false;
  score++
}
//10th
if(bulletGroup.isTouching(x1)){
  x1.visible = false;
  score++
}
if(bulletGroup.isTouching(x12)){
  x12.visible = false;
  score++
}
if(bulletGroup.isTouching(x13)){
  x13.visible = false;
  score++
}
if(bulletGroup.isTouching(x14)){
  x14.visible = false;
  score++
}
if(bulletGroup.isTouching(x15)){
  x15.visible = false;
  score++
}
if(bulletGroup.isTouching(x2)){
  x2.visible = false;
  score++
}
if(bulletGroup.isTouching(x3)){
  x3.visible = false;
  score++
}
if(bulletGroup.isTouching(x4)){
  x4.visible = false;
  score++
}
if(bulletGroup.isTouching(x5)){
  x5.visible = false;
  score++
}
//11th
if(bulletGroup.isTouching(j1)){
  j1.visible = false;
  score++
}
if(bulletGroup.isTouching(j12)){
  j12.visible = false;
  score++
}
if(bulletGroup.isTouching(j13)){
  j13.visible = false;
  score++
}
if(bulletGroup.isTouching(j14)){
  j14.visible = false;
  score++
}
if(bulletGroup.isTouching(j15)){
  j15.visible = false;
  score++
}
if(bulletGroup.isTouching(j2)){
  j2.visible = false;
  score++
}
if(bulletGroup.isTouching(j3)){
  j3.visible = false;
  score++
}
if(bulletGroup.isTouching(j4)){
  j4.visible = false;
  score++
}
if(bulletGroup.isTouching(j5)){
  j5.visible = false;
  score++
}

if(mousePressedOver(sk)){
  createBullet(player1.x);                   
}


drawSprites();
noStroke();
textSize(35)
fill("white")
text("Score: " + score, 100,40)
}

function createBullet(x)
           {
           var bullet = createSprite(100,100,5,10);
          bullet.velocityY = -12;    
          bullet.lifetime = 28;   
             bullet.y = 360;
             bullet.x = x;
             bulletGroup.add(bullet)
            
           } 






