// alert("F")
var table_A = document.getElementById('inputMatrixTable_A');
var table_B = document.getElementById('inputMatrixTable_B');
var oneRow_A = "<tr></tr>"
var oneRow_B = "<tr></tr>"
var attr = "onfocus='focusInput(this)' onblur='blurInput(this)'"

function changeMatrix() {

    table_A.innerHTML= "";
    table_B.innerHTML= "";
    var item_A = "";
    var item_B = "";
    var selectCol_A = document.getElementById('colMatrixInput_A').value;
    var selectRow_A = document.getElementById('rowMatrixInput_A').value;
    var selectCol_B = document.getElementById('colMatrixInput_B').value;
    // var selectRow_B = document.getElementById('rowMatrixInput_B').value;


    for (var i = 0; i < selectRow_A; i++) {
        var ii = i+1
        var oneRow_A = "<tr>";
        for (var e = 0; e < selectCol_A; e++) {
            var ee = e+1
            oneRow_A += "<td><input type='text' id='" +"id_matrix_A" + ii + ee +"' name='' "+ attr +" value='0'></td>"

        };
        oneRow_A += "</tr>"
        item_A += oneRow_A
    }


    for (var i = 0; i < selectCol_A; i++) {
        var ii = i+1
        var oneRow_B = "<tr>";
        for (var e = 0; e < selectCol_B; e++) {
            var ee = e+1
            oneRow_B += "<td><input type='text' id='" +"id_matrix_B" + ii + ee +"' name='' value='0'></td>"

        };
        oneRow_B += "</tr>"
        item_B += oneRow_B
    }

    table_A.innerHTML = item_A;
    table_B.innerHTML = item_B;
}

function MultiMatrix()
{
    inputMatixArray_A = []
    inputMatixArray_B = []

    var selectCol_A = document.getElementById('colMatrixInput_A').value;
    var selectRow_A = document.getElementById('rowMatrixInput_A').value;
    var selectCol_B = document.getElementById('colMatrixInput_B').value;
    // var selectRow_B = document.getElementById('rowMatrixInput_B').value;

    for (var i = 0; i < selectRow_A; i++) {
        var ii = i+1
        inputMatixArray_A[i] = []
        for (var e = 0; e < selectCol_A; e++) {
            var ee = e+1
            idMatix_A = "id_matrix_A" + ii + ee
            // alert ( typeof(Number(document.getElementById(idMatix_A).value)))
            inputMatixArray_A[i].push(Number(document.getElementById(idMatix_A).value));
        };
    }


    for (var i = 0; i < selectCol_A; i++) {
        var ii = i+1
        inputMatixArray_B[i] = []
        for (var e = 0; e < selectCol_B; e++) {
            var ee = e+1
            idMatix_B = "id_matrix_B" + ii + ee
            // alert ( typeof(Number(document.getElementById(idMatix_A).value)))
            inputMatixArray_B[i].push(Number(document.getElementById(idMatix_B).value));
        };
    }


    A = inputMatixArray_A
    B = inputMatixArray_B
    var rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [];
    if (colsA != rowsB) return false;
    for (var i = 0; i < rowsA; i++) C[ i ] = [];
    for (var k = 0; k < colsB; k++)
     { for (var i = 0; i < rowsA; i++)
        { var t = 0;
          for (var j = 0; j < rowsB; j++) t += A[ i ][j]*B[j][k];
          C[ i ][k] = t;
        }
     }
    // return C;


    var resultTable = document.getElementById('outputMatrixTable');
    var resultCol = C[0].length
    var resultRow = C.length
    resultTable.innerHTML= "";
    var item = "";
    for (var i = 0; i < resultRow; i++) {
        var oneRow = "<tr>";
        for (var e = 0; e < resultCol; e++) {
            oneRow += "<td>"+ C[i][e] +"</td>"
        };
        oneRow += "</tr>"
        item += oneRow
    }
    resultTable.innerHTML = item;
    document.querySelector('.martixOutput').classList.add('resultActive');
}
