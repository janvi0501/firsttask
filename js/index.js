function makegrid(){
    var columns =prompt("Enter no of Column :");
    var rows =prompt("Enter No of Row :"); 

    var mygrid = document.createElement('div');
    mygrid.className = 'mygrid';
    for (var i = 1; i <= columns; i++) {
        var column = document.createElement('div'); // create column
        column.className = 'column';

        for (var j = 1; j <= rows; j++) {
            var row = document.createElement('div'); // create row
            row.className = 'row';
            row.textContent = j; // set text
            column.appendChild(row); // append row in column
        }
        mygrid.appendChild(column); // append column inside grid
    }
    document.body.appendChild(mygrid);
    addColor();
}


function addColor(){
    let colorInput = document.querySelector('#color');
    let gridHover = document.querySelectorAll('.mygrid .column .row');
    colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
        gridHover.forEach(div =>{
            div.addEventListener('mouseover', () =>{
                console.log("color");
                div.value = color;
                div.style.backgroundColor = color;
            })
        })
    })
}

function eraser(){
    let gridHover = document.querySelectorAll('.mygrid .column .row');
    gridHover.forEach(div =>{
        div.addEventListener('mouseover', () =>{
            console.log("removecolor");
            div.style.backgroundColor = "white";
        })
    })
}

