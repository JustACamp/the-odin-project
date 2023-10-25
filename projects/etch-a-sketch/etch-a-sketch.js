// Create a 16 x 16 grid of divs using JS.
const button = document.createElement("button");
button.textContent = 'Grid Size?';
button.addEventListener('click', () => {
    const gridnum = prompt('Grid size? e.g. 16 x 16');
    if (gridnum > 100 || gridnum < 2) {
        alert("Please enter a number between 2 and 100");
        return 0;
    } else {
        makeGrid(gridnum);
    }
})
const body = document.querySelector("body");
body.prepend(button);


function makeGrid(gridnum) {
    const grid = document.getElementById("grid-container");
    grid.remove(); // remove old div
    const container = document.createElement('div');
    container.setAttribute("id", "grid-container");
    body.appendChild(container);
    for (let j=1;j<=gridnum; j++) {
        const column = document.createElement("div");
        column.classList.add('col');
        container.appendChild(column);
        for (let i = 1; i <= gridnum; i++) {
            const row = document.createElement("div");
            row * 16;
            row.classList.add('row');
            row.textContent = "";
            column.appendChild(row);
            row.addEventListener('mouseenter', () => {
                row.classList.add('mouseenter');
            row.addEventListener('mouseleave', () => {
                row.classList.remove('mouseenter');
            })
            });
        }
    }
}
