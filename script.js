const gridSize = 512;
const cellDefaultSize = 16;
const gridContainer = document.querySelector('.gridcontainer');
const slideValue = document.querySelector('#slidertext');
const inputSlider = document.querySelector('#inputslider');
const resetButton = document.querySelector('#resetBtn');
const colorPicker = document.querySelector('#colorpicker');
const randomPicker = document.querySelector('#rainbowbtn');
let color = colorPicker.value;
let inputVal = 0;
let spam = false;

function init(gridNum, color) {
    gridArea = gridNum ** 2;
    let cellDim = gridNum * (gridSize / gridArea);
    console.log(`${gridNum}x${gridNum}`); // remove later
    for (let i = 1; i <= gridArea; i++) {
        colorPicker.addEventListener('click', () => { color = colorPicker.value;
            return color; });
        randomPicker.addEventListener('click', () => { spam = true; });
        // if randomPicker click event fire, run makeRandomColor()
        let cell = document.createElement('div');
        cell.setAttribute('id', `'cell${i}'`);
        cell.setAttribute('class', 'cell');
        cell.style.cssText = `width: ${cellDim}px; height: ${cellDim}px; box-shadow: inset 0px 0px 0px .5px rgb(0,0,0,0.25);`;
        cell.addEventListener('mouseover', function() {
            if (spam) makeRandomColor();
            cell.style.backgroundColor = `${color}`;
        })
        gridContainer.appendChild(cell);
    }
}

function makeRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    color = `rgb(${r}, ${g}, ${b})`;
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function resetGrid() {
    let inputVal = inputSlider.value;
    let result;
    if (inputVal == 3) {
        result = 64;
    } else if (inputVal == 2) {
        result = 32;
    } else {
        result = 16;
    }
    slideValue.textContent = `${result}x${result}`;
    clearGrid();
    init(result, color);
}



// active listeners
inputSlider.addEventListener('input', (() => { resetGrid(); }));
resetButton.addEventListener('click', (() => { resetGrid(); }));

// add 2nd argument to take color
init(cellDefaultSize, color);

// window.onload to run init()?
// rainbow effect isn't updating unless grid is changed