// hello
const gridSize = 512;
const cellDefaultSize = 16;
const gridContainer = document.querySelector('.gridcontainer');




function fillGrid(gridNum) {
    gridArea = gridNum ** 2;
    let cellDim = gridNum * (gridSize / gridArea); 
    console.log("gridArea = " + gridArea);
    console.log("cellDim = " + cellDim);
    for (let i = 1; i <= gridArea; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('name', `'cell${i}'`);
        cell.style.cssText = `width: ${cellDim}px; height: ${cellDim}px; 
        box-shadow: inset 0px 0px 0px .5px #000;`;
        gridContainer.appendChild(cell);
    }
}

fillGrid(16);