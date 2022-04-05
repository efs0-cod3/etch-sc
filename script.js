const container = document.querySelector('.container');
const randomBtn = document.querySelector('#color');
const blackBtn = document.querySelector('#black')
const eraserBtn = document.querySelector('#eraser');
const resetBtn = document.querySelector('#reset');
var color = black

function createGrid(gridNum) {
    let gridArea = gridNum * gridNum;
    let i = 1;
    for (i; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNum},1fr)`;
        container.insertAdjacentElement("beforeend", gridItem);
    }

    function gridSize(size) {
        var gridPix = container.querySelectorAll('div');
        gridPix.forEach(gridPixel => gridPixel.style.width = size);
        gridPix.forEach(gridPixel => gridPixel.style.height = size)
        // gridPix.forEach(gridPixel => gridPixel.style.backgroundColor = 'white')
        //   gridPix.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorSelection))
    }
    gridSize('16px');

}
createGrid(25)

function gPx() {
    var gridPix = container.querySelectorAll('div');
    gridPix.forEach(gridPixel => gridPixel.addEventListener('mouseover', function () {
        colorSelection()

    }))

}
gPx()


function colorSelection(colorselect) {

    var gridPix = container.querySelectorAll('div');
    if (colorselect == 'black') {
        gridPix.forEach(gridPixel => gridPixel.addEventListener('mouseover', function () {
            gridPixel.style.backgroundColor = 'black';
        }))
    }
    if (colorselect == 'random') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        gridPix.forEach(gridPixel => gridPixel.addEventListener('mouseover', function () {
            gridPixel.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`
        }));
    }
    if (colorselect == 'white') {
        gridPix.forEach(gridPixel => gridPixel.addEventListener('mouseover', function () {
            gridPixel.style.backgroundColor = 'white'
        }));
    }
}
colorSelection()

function colorS() {
    eraserBtn.addEventListener('click', function () {
        colorSelection('white')
    });
    randomBtn.addEventListener('click', function () {
        colorSelection('random')
    });

    blackBtn.addEventListener('click', function () {
        colorSelection('black')
    });

}
colorS()

//Event Listeners
resetBtn.addEventListener("click", function () {
    window.location.reload();
});
