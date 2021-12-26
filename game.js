const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.rect(0, 0, 400, 300);
ctx.rect(400, 0, 400, 300);
ctx.rect(0, 300, 400, 300);
ctx.rect(400, 300, 400, 300);
ctx.stroke();


// creates the squares
const square = new Path2D();
square.rect(0, 0, 400, 300);
ctx.rect(0, 0, 400, 300);

const square1 = new Path2D();
square1.rect(400, 0, 400, 300);
ctx.rect(400, 0, 400, 300);

const square2 = new Path2D();
square2.rect(0, 300, 400, 300);
ctx.rect(0, 300, 400, 300);

const square3 = new Path2D();
square3.rect(400, 300, 400, 300);
ctx.rect(400, 300, 400, 300);

canvas.addEventListener('mousemove', function(event) {
    
    if (ctx.isPointInPath(square, event.offsetX, event.offsetY)) {
      ctx.fillStyle = 'purple';
      ctx.fill(square);
      ctx.fillStyle = 'white';
      ctx.fill(square1);
    }
    else if (ctx.isPointInPath(square1, event.offsetX, event.offsetY)) {
        ctx.fillStyle = 'yellow';
        ctx.fill(square1);
        ctx.fillStyle = 'white';
        ctx.fill(square2);
    }
    else if (ctx.isPointInPath(square2, event.offsetX, event.offsetY)) {
        ctx.fillStyle = 'purple';
        ctx.fill(square2);
        ctx.fillStyle = 'white';
        ctx.fill(square3);
    }
    else if (ctx.isPointInPath(square3, event.offsetX, event.offsetY)) {
        ctx.fillStyle = 'yellow';
        ctx.fill(square3);
        ctx.fillStyle = 'white';
        ctx.fill(square);
    }
});

canvas.addEventListener('click', function(event) {
    
    if (ctx.isPointInPath(square, event.offsetX, event.offsetY)) {
      ctx.fillStyle = 'purple';
      ctx.fill(square);
      ctx.fillStyle = 'white';
      ctx.fill(square1);
    }
    else if (ctx.isPointInPath(square1, event.offsetX, event.offsetY)) {
        ctx.fillStyle = 'yellow';
        ctx.fill(square1);
        ctx.fillStyle = 'white';
        ctx.fill(square2);
    }
    else if (ctx.isPointInPath(square2, event.offsetX, event.offsetY)) {
        ctx.fillStyle = 'purple';
        ctx.fill(square2);
        ctx.fillStyle = 'white';
        ctx.fill(square3);
    }
    else if (ctx.isPointInPath(square3, event.offsetX, event.offsetY)) {
        ctx.fillStyle = 'yellow';
        ctx.fill(square3);
        ctx.fillStyle = 'white';
        ctx.fill(square);
    }
});