
function createGrid() {
    const container = document.querySelector('.container');
    for (let i = 0; i < noOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < noOfGrids; j++) {
            const cells = document.createElement('div');
            cells.classList.add('cells');
            row.appendChild(cells);
        }
    }
    mode();
    changeCells(noOfGrids);
}
function deleteGrid(noOfGrids) {
    const container = document.querySelector('.container');
    for (let i = 0; i < noOfGrids; i++) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
}
function mode() {
    console.log(click)
    click=click+1;



    if (click % 2 != 0) {
        onReset();
        onHover();
    }
    else {
        onReset();
        rgbHover();
    };



}
function changeCells(noOfGrids) {
    const row = document.querySelectorAll('.row');
    row.forEach(element => element.style.width = 100 / noOfGrids + "%");
    row.forEach(element => element.style.height = 100 / noOfGrids + "%");


}
function onHover() {
    const cell = document.querySelectorAll('.cells');
    cell.forEach(cell => cell.addEventListener('mousemove', () => cell.style.backgroundColor = 'white'));
}
function rgbHover() {
    console.log("rgb hover is being executed");
    const cell = document.querySelectorAll('.cells');
    cell.forEach(cell => cell.addEventListener('mousemove', () => {
        let a = Math.round(Math.random() * 255) + 1;
        let b = Math.round(Math.random() * 255) + 1;
        let c = Math.round(Math.random() * 255) + 1;
        cell.style.backgroundColor = `rgb(${a},${b},${c})`;
    }));
}
function onReset() {
    const cells = document.querySelectorAll('.cells');
    cells.forEach(cell => cell.classList.remove('hover'));
    cells.forEach(cell => cell.style.backgroundColor = '');
}

function takeInput() {
    const newGrid = document.querySelector('.newGrid');
    newGrid.addEventListener('click', () => {
        do {
            noOfGrids = +prompt("Enter no of grids(Less than 100):");
        } while (noOfGrids > 100);
        deleteGrid(noOfGrids);
        click=click-1;
        createGrid(noOfGrids);

    });
}


let noOfGrids = 16;
let click = 0;



const resetGrid = document.querySelector('#gridReset');
resetGrid.addEventListener('click', () => { onReset(); });
const rgb = document.querySelector('.rgb');
rgb.addEventListener('click', () => { mode();});

createGrid();
takeInput();
