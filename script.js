
 var Tank = function (x,y) {
     this.x = x;
     this.y = y;

     this.setX = function (x) {
         this.x = x;
     };

     this.setY = function (y) {
         this.y = y;
     };

     this.render = function (canvas) {
         var context = canvas.getContext('2d');
         context.clearRect(0,0 ,500,500);
         context.beginPath();
         context.fillStyle = 'green';
         context.fillRect(this.x, this.y, 20, 20);
         context.fill();
     };
     this.moveRight = function () {
         this.x += 10;
         if (this.x >= 485) {
         this.x= 50;
         }
         this.render(canvas);
     };

     this.moveLeft = function () {
         this.x -= 10;
         if (this.x <= -10) {
             this.x = 480;
         }
         this.render(canvas);

     };

     this.moveUp = function () {
         this.y += 10;
         if (this.y >= 480) {
             this.y = 480;
         }

         this.render(canvas);
     };

     this.moveDown = function () {

         if (this.y <= 0) {
             this.y = 10;
         }
         this.y -= 10;
         this.render(canvas);
     };

 };
  var tank = new Tank(50,50);
  var canvas = document.getElementById('myCanvas');
  tank.render(canvas);

 function move (event) {
     if(event.which === 39){
         tank.moveRight();
     } else if (event.which === 37) {
         tank.moveLeft();
     } else if (event.which === 40) {
         tank.moveUp();
     } else if (event.which === 38)
      tank.moveDown();
 }

 function Bom (x,y){
     this.x = x;
     this.y = y;
     this.render = function (canvas) {
         var context = canvas.getContext('2d');
         //context.clearRect(0, 0, 500, 500);
         context.beginPath();
         context.fillStyle = 'blue';
         context.fillRect(this.x, this.y, 20, 20);
         context.fill();
     }
 };
 var bom = new Bom(300,0);
 var canvas = document.getElementById('myCanvas');
 bom.render(canvas);