let index = 1;//numerical order of row in table
let dataTable = document.getElementById("dataTable");//represent the table in HTML
let dataForm = document.getElementById("dataForm");//represent the form to type input
let dataFormInput = dataForm.getElementsByTagName("input");//HTML collection of all input
let record = [];//the container holds objects which represent test score of students

//create focus and blur effect for input
document.querySelectorAll("input").forEach(element => {
    element.addEventListener("focus", function () {
        this.classList.add("shadow")
    });
    element.addEventListener("blur", function () {
        this.classList.remove("shadow")
    });
});

//add function for various buttons
document.getElementById("submit").addEventListener("click", submitFunction);
document.getElementById("calculateAverage").addEventListener("click", calculateAverageScore);
document.getElementById("determineGoodStd").addEventListener("click", determineGoodStd);

//add sorting function to all headings of table
document.querySelectorAll("th").forEach(item => {
    item.addEventListener("click", function () { sort(dataTable, getColIndex(this)) })
})

//This is the constructor for student score object
function StudentScore(fullName, math, physics, chemistry) {
    this.fullName = fullName;
    this.math = math;
    this.physics = physics;
    this.chemistry = chemistry;
    this.averageScore = '?';
}

//This is function of the submit button
function submitFunction() {
    let i = 0;
    let data = [];
    let newRow = dataTable.insertRow(index);//add new rows to table
    //add new cells
    newRow.insertCell(0);
    for (i = 0; i < dataFormInput.length; i++) {
        data.push(dataFormInput[i].value);
        newRow.insertCell(i + 1);
    }
    newRow.insertCell(5);

    //convert input value from string to number
    data = data.map(function (item) {
        if (parseInt(item)) return parseInt(item);
        else return item;
    })

    let newDataSet = new StudentScore(...data);//create new object from input value
    record.push(newDataSet);//add new object to container array

    //add value to cells of new row
    newRow.cells[0].innerHTML = index;
    i = 1;
    for (const key in newDataSet) {
        newRow.cells[i].innerHTML = newDataSet[key];
        i++;
    }

    index++;//update number of row in table
    dataForm.reset();//reset the form
}

//This is function of "calcucalate average score" button
function calculateAverageScore() {
    let i,averageScore;
    for (i = 1; i < dataTable.rows.length; i++) {
        averageScore=(dataTable.rows[i].cells[2].innerHTML*1+
        dataTable.rows[i].cells[3].innerHTML*1+
        dataTable.rows[i].cells[4].innerHTML*1)/3;
        dataTable.rows[i].cells[5].innerHTML = Math.round(averageScore * 100) / 100;
    }
}

//This is the function of "determine Good student" button
function determineGoodStd() {
    let i;
    let theRow;//represent the row we are checking

    //check every row for good student
    for (i = 1; i < dataTable.rows.length; i++) {
        theRow = dataTable.rows[i];
        if (theRow.cells[5].innerHTML >= 8.0) {
            theRow.classList.add("table-light", "text-danger", "font-weight-bold");
        }
    }
}

//this is the sorting function of table headings
function sort(table, colIndex) {
    let swaped;
    let i, j;
    let firstRow, secondRow, targetRow, parent;
    firstRow = table.rows[1];
    secondRow = table.rows[2]
    parent = firstRow.parentNode;
    //sort the first 2 rows
    if (compareRows(firstRow, secondRow, colIndex)) {//compareRows function is called to determine which row is higher
        parent.insertBefore(secondRow, firstRow);
    }

    //sort the rest of rows
    i = 2;
    while (i < table.rows.length - 1) {
        firstRow = table.rows[i];
        secondRow = table.rows[i + 1];
        if (compareRows(firstRow, secondRow, colIndex)) {
            for (j = i - 1; j >= 0; j--) {
                targetRow = table.rows[j];
                if (compareRows(secondRow, targetRow, colIndex)) {
                    parent.insertBefore(secondRow, targetRow.nextSibling);
                    swaped = true;
                    break;
                }
            }
            if (!swaped) {
                parent.insertBefore(secondRow, table.rows[1]);
            }
        }
        i++;
    }

}

/*this function compare 2 rows
If the value of cells in the chosen column are number, the 2 rows are compared numerically
If the values are string, the 2 rows are compared alphabetically  
*/
function compareRows(firstRow, secondRow, colIndex) {
    return (secondRow.cells[colIndex].innerHTML * 1 == secondRow.cells[colIndex].innerHTML * 1) ?
        (secondRow.cells[colIndex].innerHTML * 1 < firstRow.cells[colIndex].innerHTML * 1) :
        (secondRow.cells[colIndex].innerHTML < firstRow.cells[colIndex].innerHTML);
}

//This function return the column index of the heading's got pressed
function getColIndex(targetCell) {
    let headingRow = document.getElementsByTagName("th");
    let arr = Array.prototype.slice.call(headingRow);
    let index = arr.indexOf(targetCell);
    console.log(index);
    return index;
}
