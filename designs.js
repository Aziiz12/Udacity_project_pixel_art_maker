let color = document.getElementById('colorPicker'),
    table = document.getElementById('pixelCanvas'),
    gridSize = document.getElementById('sizePicker');

let height = document.getElementById('inputHeight').value,
    width = document.getElementById('inputWidth').value;
makeGrid(height, width);

gridSize.addEventListener('submit', (show) => {

    show.preventDefault();

    table.firstElementChild.remove(); // to remove the grid when clik submit again     
    let height = document.getElementById('inputHeight').value,
        width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});

function makeGrid(height, width) {

    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', () => {
                cell.style.backgroundColor = color.value; // to change the BC of the cells.
            });
        }
    }
}