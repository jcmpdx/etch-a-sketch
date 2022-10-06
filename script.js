const gridSize = 512;
const cellDefaultSize = 16;
const gridContainer = document.querySelector('.gridcontainer');
const slideValue = document.querySelector('#slidertext');
const inputSlider = document.querySelector('input');

function fillGrid(gridNum) {
    gridArea = gridNum ** 2;
    let cellDim = gridNum * (gridSize / gridArea); 
    console.log("gridArea = " + gridArea);
    console.log("cellDim = " + cellDim);
    for (let i = 1; i <= gridArea; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('name', `'cell${i}'`);
        cell.style.cssText = `width: ${cellDim}px; height: ${cellDim}px; 
        box-shadow: inset 0px 0px 0px 0.5px #000;`;
        gridContainer.appendChild(cell);
    }
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    let n = cellDefaultSize;
    if (value == 3) {
        n = 64;
    } else if (value == 2) {
        n = 32;
    } else {
        n = 16;
    }
    slideValue.textContent = `${n}x${n}`;
    clearGrid();
    fillGrid(n);
});

