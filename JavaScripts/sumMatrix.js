
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
    var selectCol = document.getElementById('colMatrixInput').value;
    var selectRow = document.getElementById('rowMatrixInput').value;
    for (var i = 0; i < selectRow; i++) {
        var ii = i+1
        var oneRow_A = "<tr>";
        var oneRow_B = "<tr>";
        for (var e = 0; e < selectCol; e++) {
            var ee = e+1
            oneRow_A += "<td><input type='text' id='" +"id_matrix_A" + ii + ee +"' name='' "+ attr +" value='0'></td>"
            oneRow_B += "<td><input type='text' id='" +"id_matrix_B" + ii + ee +"' name='' "+ attr +" value='0'></td>"

        };
        oneRow_A += "</tr>"
        oneRow_B += "</tr>"
        item_A += oneRow_A
        item_B += oneRow_B
    }
    table_A.innerHTML = item_A;
    table_B.innerHTML = item_B;
}

function sumMatrix()
{
    inputMatixArray_A = []
    inputMatixArray_B = []

    var selectCol = document.getElementById('colMatrixInput').value;
    var selectRow = document.getElementById('rowMatrixInput').value;

    for (var i = 0; i < selectRow; i++) {
        var ii = i+1
        inputMatixArray_A[i] = []
        inputMatixArray_B[i] = []
        for (var e = 0; e < selectCol; e++) {
            var ee = e+1
            idMatix_A = "id_matrix_A" + ii + ee
            idMatix_B = "id_matrix_B" + ii + ee
            // alert ( typeof(Number(document.getElementById(idMatix_A).value)))
            inputMatixArray_A[i].push(Number(document.getElementById(idMatix_A).value));
            inputMatixArray_B[i].push(Number(document.getElementById(idMatix_B).value));
        };
    }


    A = inputMatixArray_A
    B = inputMatixArray_B
    var simbol = document.querySelector('#symbol').value
    var m = A.length, n = A[0].length, C = [];
    for (var i = 0; i < m; i++)
     { C[ i ] = [];
         if (simbol === '+') {
            for (var j = 0; j < n; j++) C[ i ][j] = A[ i ][j] + B[ i ][j];
        }else {
            for (var j = 0; j < n; j++) C[ i ][j] = A[ i ][j] - B[ i ][j];
        }

     }
    // return C;
    // ВЫВОД

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
