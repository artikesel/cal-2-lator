var table = document.getElementById('inputMatrixTable_A');
var oneRow = "<tr></tr>"
var attr = "onfocus='focusInput(this)' onblur='blurInput(this)'"

function changeMatrix() {
    table.innerHTML= "";
    var item = "";
    var selectCol = document.getElementById('colMatrixInput').value;
    var selectRow = document.getElementById('rowMatrixInput').value;
    for (var i = 0; i < selectRow; i++) {
        var ii = i+1
        var oneRow = "<tr>";
        for (var e = 0; e < selectCol; e++) {
            var ee = e+1
            oneRow += "<td><input type='text' id='" +"id_matrix_A" + ii + ee +"' name='' "+ attr +" value='0'></td>"
        };
        oneRow += "</tr>"
        item += oneRow
    }
    table.innerHTML = item;
}

function TransMatrix()
{
    // Создание массива для обрабоки
    inputMatixArray = []
    var selectCol = document.getElementById('colMatrixInput').value;
    var selectRow = document.getElementById('rowMatrixInput').value;
    for (var i = 0; i < selectRow; i++) {
        var ii = i+1
        inputMatixArray[i] = []
        for (var e = 0; e < selectCol; e++) {
            var ee = e+1
            idMatix = "id_matrix_A" + ii + ee
            inputMatixArray[i].push(document.getElementById(idMatix).value);
        };
    }

    A = inputMatixArray
    var m = A.length, n = A[0].length, AT = [];
    for (var i = 0; i < n; i++)
     { AT[ i ] = [];
       for (var j = 0; j < m; j++) AT[ i ][j] = A[j][ i ];
   };
    // return AT;
    // ВЫВОД


    var resultTable = document.getElementById('outputMatrixTable');
    var resultCol = AT[0].length
    var resultRow = AT.length
    resultTable.innerHTML= "";
    var item = "";
    for (var i = 0; i < resultRow; i++) {
        var oneRow = "<tr>";
        for (var e = 0; e < resultCol; e++) {
            oneRow += "<td>"+ AT[i][e] +"</td>"
        };
        oneRow += "</tr>"
        item += oneRow
    }
    resultTable.innerHTML = item;
    document.querySelector('.martixOutput').classList.add('resultActive');






}
