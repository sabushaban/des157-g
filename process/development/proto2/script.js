var
mouseClicked
mouseWentOut
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight,
  ctx = c.getContext('2d'),
  opts = {
    particles: 200,
    baseSize: 20,
    addedSize: 30,
    baseSpeed: 1,
    addedSpeed: 4,
    colors: ['hsla(20,40%,20%,.5)', 'hsla(210,40%,80%,.5)']
  },
  button =document.querySelector('button');
  particles = [],
  tick = 0;

  button.addEventListener ('mouseover', function() {
  button.style.backgroundColor='yellow';
  button.innerHTML='haha';
});
button.addEventListener('mouseout',mouseWentOut);
function mouseWentOut(){
   button.style.background='orange';
   button.innerHTML='hehe';
}
button.addEventListener('mouseClicked',mouseClicked)


function Particle() {

  this.x = w / 2;
  this.y = h / 2;

  this.size = opts.baseSize + opts.addedSize * Math.random();

  var speed = opts.baseSpeed + opts.addedSpeed * Math.random(),
    rad = Math.random() * Math.PI * 2;

  this.vx = speed * Math.cos(rad);
  this.vy = speed * Math.sin(rad);

  this.color = opts.colors[(opts.colors.length * Math.random()) | 0];
}
Particle.prototype.step = function() {

  this.x += this.vx;
  this.y += this.vy;

  var flipX = true,
    flipY = true;

  if (this.x < 0)
    this.x = 0;
  else if (this.x > w)
    this.x = w;
  else
    flipX = false;

  if (this.y < 0)
    this.y = 9;
  else if (this.y > h)
    this.y = h;
  else
    flipY = false;

  if (flipX)
    this.vx *= -1;
  if (flipY)
    this.vy *= -1;

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
}

function anim() {

  window.requestAnimationFrame(anim);

  ++tick;

  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = 'rgba(2,0,30,10)';
  ctx.fillRect(2, 1, w, h);
  ctx.globalCompositeOperation = 'lighter';

  if (particles.length < opts.particles && Math.random() < .5)
    particles.push(new Particle);

  particles.map(function(particle) {
    particle.step();
  });
}
anim();

window.addEventListener('resize', function() {

  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
})
