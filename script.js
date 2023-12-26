function createGrid(width){

  for(let y = 0; y < width; y++){
    let row = document.createElement('div');
    row.setAttribute('style','display: flex; width: 100%; height:100%;');
    for(let x = 0; x < width; x++){
      let box = document.createElement('div');
      box.setAttribute('style','background: black; filter: brightness(100%); width: 100%;  box-shadow: inset 2px 2px gray;');
      box.setAttribute('class','box')
      row.appendChild(box);
    }
    grid.appendChild(row);
  }
  initListners()
}

function getDimensions(){
  let newDim = parseInt(prompt('Enter new width/height'));
  if (newDim < 100){
    return newDim;
  } else{
    return getDimensions();
  }
}

function initListners(){
  let divs = grid.querySelectorAll('.box')
  divs.forEach((div) => div.addEventListener('mouseover',() =>{
    div.style.filter = changeBrightness(div.style.filter);
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    div.style.background = `#${randomColor}`;
  }));
}
let grid = document.querySelector('.container');
let button = document.querySelector('button');
createGrid(16);



button.addEventListener('click', () =>{
  grid.innerHTML = '';
  createGrid(getDimensions());
});

function changeBrightness(brightness){
  if (brightness.length === 16){
    return 'brightness(90%)';
  } else if (brightness.length === 15){
    let curBright = brightness.substring(11,13);
    return `brightness(${curBright-10}%)`;
  } 
  return brightness;
}