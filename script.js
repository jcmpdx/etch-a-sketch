const gridSize = 512;
const cellDefaultSize = 16;
const gridContainer = document.querySelector('.gridcontainer');
const slideValue = document.querySelector('#slidertext');
const inputSlider = document.querySelector('#inputslider');
const resetButton = document.querySelector('#resetBtn');
const colorPicker = document.querySelector('#colorpicker');
let currColor = [];

// need to make color be able to change when cells already colored with a different color. idea is to create new function to target the gridcontainers children to colorize background. take out of sizeGrid() for loop
function sizeGrid(gridNum, color) {
    gridArea = gridNum ** 2;
    color = colorPicker.value;
    let cellDim = gridNum * (gridSize / gridArea);
    console.log(`${gridNum}x${gridNum}`); // remove later
    for (let i = 1; i <= gridArea; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('id', `'cell${i}'`);
        cell.setAttribute('class', 'cell');
        cell.style.cssText = `width: ${cellDim}px; height: ${cellDim}px; box-shadow: inset 0px 0px 0px .5px rgb(0,0,0,0.25);`;
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = `${color}`;
        })
        gridContainer.appendChild(cell);
    }
}

function rainbow() {
    let cell = gridContainer.children;
    cell.each(function() {
        let i = ['blue', 'red', 'green', 'yellow'];
        let randColor = i[Math.floor(Math.random() * i.length)];
        cell.css('color', randColor);
    });    
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function resetGrid() {
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
    sizeGrid(n);
}

inputSlider.addEventListener('input', (() => { resetGrid(); }));
resetButton.addEventListener('click', (() => { resetGrid(); }));

// add 2nd argument to take color
sizeGrid(cellDefaultSize);