const gridSize = 512;
const cellDefaultSize = 16;
const gridContainer = document.querySelector('.gridcontainer');
const slideValue = document.querySelector('#slidertext');
const inputSlider = document.querySelector('input');
const resetButton = document.querySelector('#resetBtn');

function sizeGrid(gridNum, color) {
    gridArea = gridNum ** 2;
    let cellDim = gridNum * (gridSize / gridArea);
    console.log(`${gridNum}x${gridNum}`); // remove later
    for (let i = 1; i <= gridArea; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('id', `'cell${i}'`);
        cell.setAttribute('class', 'cell');
        cell.style.cssText = `width: ${cellDim}px; height: ${cellDim}px; 
        box-shadow: inset 0px 0px 0px .5px #000;`;
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = '#000';
        })
        gridContainer.appendChild(cell);
    }
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


// Erase
// document.getElementById("rainbowbtn").addEventListener("mouseout", function() {
//     document.getElementById("rainbowbtn").style.backgroundColor = "green";
// });