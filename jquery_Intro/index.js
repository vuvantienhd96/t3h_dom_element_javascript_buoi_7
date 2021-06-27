let index = 1; // The numerical order of the new row to be inserted to the table
$(document).ready(function () {
    $("#submit").click(submitFunction);

    //add function the 3 buttons
    $("#calculateAverage").click(calculateAverageScore);
    $("#determineGoodStd").click(determineGoodStd);
    $("th").on("click", function () {
        sort(getColIndex($(this)))
    })
})

//function of the "submit" button
function submitFunction() {
    let newDataSet = [];//this array hold value of input fields

    //add input fields value to the array "newDataSet"
    $.each($("input"), function () {
        newDataSet.push($(this).val())
    })

    let newTestScoreObj = new StudentScore(...newDataSet);//generate new object based on input
    $("#dataTable tr:last-child").after("<tr></tr>");//insert new row
    let newRow = $("tr:last-child")//this variable represent the newly created row
    newRow.append("<td>" + index + "</td>");//insert first cell

    //insert the rest of cells to new row
    $.each(newTestScoreObj, function (index, value) {
        newRow.append("<td>" + value + "</td>");
    })

    index++;//update the order number next rows
    $("#dataForm input").val("")//Reset all input fields after submit
}

//the function of the "calculate average score" button
function calculateAverageScore() {
    //Calculate average score for each row and update the table
    $.each($("tr").not("tr:first-child"), function (index, item) {
        let average = 0;
        $.each($(this).children(), function (index) {
            average += (index > 1 && index < 5) ? parseFloat($(this).html()) / 3 : 0;
        })
        average = Math.round(average * 10) / 10;
        $(this).children().last().html(average);

    })
}

//the function of the "determine good student" button
function determineGoodStd() {
    $.each($("tr").not("tr:first-child"), function () {
        if ($(this).children().last().html() >= 8.0) {
            $(this).addClass('bg-light text-danger')
        }
    })
}

//constructor function for student score object
function StudentScore(fullName, math, physics, chemistry) {
    this.fullName = fullName;
    this.math = math;
    this.physics = physics;
    this.chemistry = chemistry;
    this.averageScore = '?';
}

//the function that sort the table
function sort(colIndex) {
    let rowIndex = 2, j;
    let swaped = false;

    //sort the first 2 rows
    let firstRow = $("tr").eq(1);
    let secondRow = $("tr").eq(2);
    if (!compare(firstRow, secondRow, colIndex)) {
        secondRow.insertBefore(firstRow)
    }

    //sort the rest of rows
    while (rowIndex < $("tr").length - 1) {
        firstRow = $("tr").eq(rowIndex);
        secondRow = $("tr").eq(rowIndex + 1);
        if (!compare(firstRow, secondRow, colIndex)) {
            for (j = rowIndex - 1; j >= 0; j--) {
                targetRow = $("tr").eq(j);
                if (compare(targetRow, secondRow, colIndex)) {
                    secondRow.insertBefore($("tr").eq(j + 1))
                    swaped = true;
                    break;
                }
            }
            if (!swaped) {
                secondRow.insertBefore($("tr").eq(1));
            }
        }
        rowIndex++;
    }
}

//this function compare 2 rows with respect to the chosen heading 
function compare(a, b, colIndex) {
    if (a.children().eq(colIndex).html() * 1 == a.children().eq(colIndex).html() * 1) {
        return a.children().eq(colIndex).html() * 1 < b.children().eq(colIndex).html() * 1
    } else {
        return a.children().eq(colIndex).html() < b.children().eq(colIndex).html()
    }


}

//This function return the index of the chosen heading in the heading row when sorting
function getColIndex(x) {
    return $("tr:first-child").children().index(x);
}