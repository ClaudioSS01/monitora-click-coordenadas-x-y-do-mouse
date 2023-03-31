const robot = require("robotjs");
(async ()=>{await new Promise((r) => setTimeout(r, 5000));})();
setInterval(()=>{
  const mousePos = robot.getMousePos();
  console.log(`A posicao atual do mouse é x= ${mousePos.x} y= ${mousePos.y}`);
},2000)
