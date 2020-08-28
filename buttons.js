class Button{
   constructor(){

this.play = createButton("Play")
this.how = createButton("HELP")
this.back = createButton("BACK")
this.menu = createButton("MENU")


     }   

   hide2(){
       this.play.hide();
       this.how.hide();
       this.back.hide();      
   }   

   display(){
    
    
       this.play.position(710,400)
       this.how.position(710,500)
       this.back.position(1000,100)
       this.menu.position(940,100)
       this.how.mousePressed(()=>{
           this.how.hide();
           this.play.hide();
           this.n = createButton("When you will press any of the ball then the shooter will shoot 1 ball.")
           this.m = createButton(" At every level of the Game it will become more harder.")
           this.o = createButton(" If you know how to play then click on the back button on the top left hand corner and click on play button.")

           this.n.position(550,300)
           this.m.position(590,400)
           this.o.position(450,500)
           this.back.mousePressed(()=>{
               this.how.show();
               this.play.show(); 
               this.n.hide();
               this.m.hide();
               this.o.hide();
           })
       })

       this.play.mousePressed(()=>{
       
           this.how.hide();
           this.play.hide();  
           
       })
       this.play.mousePressed(()=>{
     
      
           this.how.hide();
           this.play.hide();  
           this.a = createButton("Level 1")
           this.b = createButton("Level 4")
           this.c = createButton("Level 3")  
           this.d = createButton("Level 2") 
           this.e = createButton("Level 5")
           
          
           
           this.a.position(610,400)
           this.b.position(650,500)
           this.c.position(810,400)
           this.d.position(710,400)
           this.e.position(790,500)      
           
           this.a.mousePressed(()=>{  // level 1    

               this.a.hide();
               this.b.hide();
               this.c.hide(); 
               this.d.hide(); 
               this.e.hide();
               player1.visible = true
               if(mousePressedOver(sk)){
                  createBullet(player1.x);                                   
               }
                sk.visible = true
               
               j.visible = true;
               j1.visible = true;
               b.visible = true;
               b1.visible = true;
               v.visible = true;
               v1.visible = true;
               x.visible = true;
               x1.visible = true;
               m.visible = true;
               m1.visible = true;
               t.visible = true;
               l1.visible = true;
               o.visible = true;
               o1.visible = true;
               p.visible = true;
               p8.visible = true;
               y.visible = true;
               y1.visible = true;
               f.visible = true;
               f0.visible = true;

               if(score = 50){
                this.but = createButton("GO TO NEXT LEVEL")

                this.but.position(890,600)
                
                this.but.mousePressed(()=>{ 
                    this.d.show()
                  })    
              }
                   
      
               })         
               this.b.mousePressed(()=>{  //level 4 
                if(score = 50){
                    this.but = createButton("GO TO NEXT LEVEL")
    
                    this.but.position(890,600)
                    this.but.mousePressed(()=>{ 
                        this.e.show()
                      })    
                  }
               
                   this.a.hide();
               this.b.hide();
               this.c.hide(); 
               this.d.hide(); 
               this.e.hide();
               player1.visible = true
               
               if(mousePressedOver(sk)){
                  var bullet = createSprite(100,100,5,10);
                  bullet.velocityY = -12;       
                     bullet.y = 360;
                     bullet.x = x;
                                                                         
                }
                sk.visible = true

               j.visible = true;
               j1.visible = true;
               b.visible = true;
               b1.visible = true;
               v.visible = true;
               v1.visible = true;
               x.visible = true;
               x1.visible = true;
               m.visible = true;
               m1.visible = true;
               t.visible = true;
               l1.visible = true;
               o.visible = true;
               o1.visible = true;
               p.visible = true;
               p8.visible = true;
               y.visible = true;
               y1.visible = true;
               f.visible = true;
               f0.visible = true;

               j2.visible = true;
               j12.visible = true;
               b2.visible = true;
               b12.visible = true;
               v2.visible = true;
               v12.visible = true;
               x2.visible = true;
               x12.visible = true;
               m2.visible = true;
               m12.visible = true;
               l2.visible = true;
               l12.visible = true;
               o2.visible = true;
               o12.visible = true;
               p2.visible = true;
               p82.visible = true;
               y2.visible = true;
               y12.visible = true;
               f2.visible = true;
               f02.visible = true;

               j3.visible = true;
               j13.visible = true;
               b3.visible = true;
               b13.visible = true;
               v3.visible = true;
               v13.visible = true;
               x3.visible = true;
               x13.visible = true;
               m3.visible = true;
               m13.visible = true;
               l3.visible = true;
               l13.visible = true;
               o3.visible = true;
               o13.visible = true;
               p3.visible = true;
               p83.visible = true;
               y3.visible = true;
               y13.visible = true;
               f3.visible = true;
               f03.visible = true;

               j4.visible = true;
               j14.visible = true;
               b4.visible = true;
               b14.visible = true;
               v4.visible = true;
               v14.visible = true;
               x4.visible = true;
               x14.visible = true;
               m4.visible = true;
               m14.visible = true;
               l4.visible = true;
               l14.visible = true;
               o4.visible = true;
               o14.visible = true;
               p4.visible = true;
               p84.visible = true;
               y4.visible = true;
               y14.visible = true;
               f4.visible = true;
               f04.visible = true;

               }) 
             
           
                 this.c.mousePressed(()=>{  //level 3
             
                   this.a.hide();
                   this.b.hide();
                   this.c.hide(); 
                   this.d.hide(); 
                   this.e.hide();
                   player1.visible = true
               
                   if(mousePressedOver(sk)){
                      createBullet(player1.x);                                   
                    }
                    if(score = 50){
                        this.but = createButton("GO TO NEXT LEVEL")
        
                        this.but.position(890,600)
                        this.but.mousePressed(()=>{ 
                            this.b.show()
                          })    
                      }        
                  
                    sk.visible = true
                    
                     j.visible = true;
                     j1.visible = true;
                     b.visible = true;
                     b1.visible = true;
                     v.visible = true;
                     v1.visible = true;
                     x.visible = true;
                     x1.visible = true;
                     m.visible = true;
                     m1.visible = true;
                     t.visible = true;
                     l1.visible = true;
                     o.visible = true;
                     o1.visible = true;
                     p.visible = true;
                     p8.visible = true;
                     y.visible = true;
                     y1.visible = true;
                     f.visible = true;
                     f0.visible = true;
      
                     j2.visible = true;
                     j12.visible = true;
                     b2.visible = true;
                     b12.visible = true;
                     v2.visible = true;
                     v12.visible = true;
                     x2.visible = true;
                     x12.visible = true;
                     m2.visible = true;
                     m12.visible = true;
                     l2.visible = true;
                     l12.visible = true;
                     o2.visible = true;
                     o12.visible = true;
                     p2.visible = true;
                     p82.visible = true;
                     y2.visible = true;
                     y12.visible = true;
                     f2.visible = true;
                     f02.visible = true;
      
                     j3.visible = true;
                     j13.visible = true;
                     b3.visible = true;
                     b13.visible = true;
                     v3.visible = true;
                     v13.visible = true;
                     x3.visible = true;
                     x13.visible = true;
                     m3.visible = true;
                     m13.visible = true;
                     l3.visible = true;
                     l13.visible = true;
                     o3.visible = true;
                     o13.visible = true;
                     p3.visible = true;
                     p83.visible = true;
                     y3.visible = true;
                     y13.visible = true;
                     f3.visible = true;
                     f03.visible = true;
                      
                   }) 
               
                   this.d.mousePressed(()=>{ //level 2
                     
                       this.a.hide();
                       this.b.hide();
                       this.c.hide(); 
                       this.d.hide(); 
                       this.e.hide();
                       player1.visible = true
               
                       if(mousePressedOver(sk)){
                          createBullet(player1.x);                                   
                        }
                        if(score = 50){
                            this.but = createButton("GO TO NEXT LEVEL")
            
                            this.but.position(890,600)
                            this.but.mousePressed(()=>{ 
                                this.c.show()
                              })    
                          }
                                
                  
                       j.visible = true;
                       j1.visible = true;
                       b.visible = true;
                       b1.visible = true;
                       v.visible = true;
                       v1.visible = true;
                       x.visible = true;
                       x1.visible = true;
                       m.visible = true;
                       m1.visible = true;
                       t.visible = true;
                       l1.visible = true;
                       o.visible = true;
                       o1.visible = true;
                       p.visible = true;
                       p8.visible = true;
                       y.visible = true;
                       y1.visible = true;
                       f.visible = true;
                       f0.visible = true;
        
                       j2.visible = true;
                       j12.visible = true;
                       b2.visible = true;
                       b12.visible = true;
                       v2.visible = true;
                       v12.visible = true;
                       x2.visible = true;
                       x12.visible = true;
                       m2.visible = true;
                       m12.visible = true;
                       l2.visible = true;
                       l12.visible = true;
                       o2.visible = true;
                       o12.visible = true;
                       p2.visible = true;
                       p82.visible = true;
                       y2.visible = true;
                       y12.visible = true;
                       f2.visible = true;
                       f02.visible = true;
                          
        }) 

                       this.e.mousePressed(()=>{ //level 5
                       
                           this.a.hide();
                           this.b.hide();
                           this.c.hide(); 
                           this.d.hide(); 
                           this.e.hide();
                           player1.visible = true
               
                           if(mousePressedOver(sk)){
                              createBullet(player1.x);                                   
                            }
                            sk.visible = true
                            if(score = 50){
                                this.but = createButton("GO TO MENU")
                
                                this.but.position(890,600)
                                this.but.mousePressed(()=>{ 
                                    this.how.hide();
               this.play.hide();
               player1.visible = false
               this.a.show();
               this.b.show();
               this.c.show(); 
               this.d.show(); 
               this.e.show();

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

                                  })    
                              }
                                    
sk.visible = true
                           j.visible = true;
                           j1.visible = true;
                           b.visible = true;
                           b1.visible = true;
                           v.visible = true;
                           v1.visible = true;
                           x.visible = true;
                           x1.visible = true;
                           m.visible = true;
                           m1.visible = true;
                           t.visible = true;
                           l1.visible = true;
                           o.visible = true;
                           o1.visible = true;
                           p.visible = true;
                           p8.visible = true;
                           y.visible = true;
                           y1.visible = true;
                           f.visible = true;
                           f0.visible = true;
            
                           j2.visible = true;
                           j12.visible = true;
                           b2.visible = true;
                           b12.visible = true;
                           v2.visible = true;
                           v12.visible = true;
                           x2.visible = true;
                           x12.visible = true;
                           m2.visible = true;
                           m12.visible = true;
                           l2.visible = true;
                           l12.visible = true;
                           o2.visible = true;
                           o12.visible = true;
                           p2.visible = true;
                           p82.visible = true;
                           y2.visible = true;
                           y12.visible = true;
                           f2.visible = true;
                           f02.visible = true;
            
                           j3.visible = true;
                           j13.visible = true;
                           b3.visible = true;
                           b13.visible = true;
                           v3.visible = true;
                           v13.visible = true;
                           x3.visible = true;
                           x13.visible = true;
                           m3.visible = true;
                           m13.visible = true;
                           l3.visible = true;
                           l13.visible = true;
                           o3.visible = true;
                           o13.visible = true;
                           p3.visible = true;
                           p83.visible = true;
                           y3.visible = true;
                           y13.visible = true;
                           f3.visible = true;
                           f03.visible = true;
            
                           j4.visible = true;
                           j14.visible = true;
                           b4.visible = true;
                           b14.visible = true;
                           v4.visible = true;
                           v14.visible = true;
                           x4.visible = true;
                           x14.visible = true;
                           m4.visible = true;
                           m14.visible = true;
                           l4.visible = true;
                           l14.visible = true;
                           o4.visible = true;
                           o14.visible = true;
                           p4.visible = true;
                           p84.visible = true;
                           y4.visible = true;
                           y14.visible = true;
                           f4.visible = true;
                           f04.visible = true;
            
                           j5.visible = true;
                           j15.visible = true;
                           b5.visible = true;
                           b15.visible = true;
                           v5.visible = true;
                           v15.visible = true;
                           x5.visible = true;
                           x15.visible = true;
                           m5.visible = true;
                           m15.visible = true;
                           l5.visible = true;
                           l15.visible = true;
                           o5.visible = true;
                           o15.visible = true;
                           pu5.visible = true;
                           p85.visible = true;
                           y5.visible = true;
                           y15.visible = true;
                           f5.visible = true;
                           f05.visible = true;
            
              }) 
              
           this.back.mousePressed(()=>{
               this.how.show();
               this.play.show(); 
               player1.visible = false
               this.a.hide();
               this.b.hide();
               this.c.hide(); 
               this.d.hide(); 
               this.e.hide();

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


           })
           this.menu.mousePressed(()=>{
               this.how.hide();
               this.play.hide();
               player1.visible = false
               this.a.show();
               this.b.show();
               this.c.show(); 
               this.d.show(); 
               this.e.show();

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

              
           })
           

           
       })
      
       
   
      }

}
