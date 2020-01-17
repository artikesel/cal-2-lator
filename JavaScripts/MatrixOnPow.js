var table = document.getElementById('inputMatrixTable_A');
var oneRow = "<tr></tr>"

function changeMatrix() {
    table.innerHTML= "";
    var item = "";
    var selectCol = document.getElementById('colMatrixInput_A').value;
    var selectRow = document.getElementById('rowMatrixInput_A').value;
    for (var i = 0; i < selectRow; i++) {
        var ii = i+1
        var oneRow = "<tr>";
        for (var e = 0; e < selectCol; e++) {
            var ee = e+1
            oneRow += "<td><input type='text' id='" +"id_matrix_A" + ii + ee +"' name='' value='0'></td>"
        };
        oneRow += "</tr>"
        item += oneRow
    }
    table.innerHTML = item;
}
function MultiplyMatrix(A,B)
{
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
    return C;
}

function MatrixPow(n,A)
{
    if (n==0) {

    } else {
        if (n == 1) return A;     // Функцию MultiplyMatrix см. выше
        else return MultiplyMatrix( A, MatrixPow(n-1,A) );
    }

}


function PowMatrix()
{
    inputMatixArray = []
    var selectCol = document.getElementById('colMatrixInput_A').value;
    var selectRow = document.getElementById('rowMatrixInput_A').value;
    for (var i = 0; i < selectRow; i++) {
        var ii = i+1
        inputMatixArray[i] = []
        for (var e = 0; e < selectCol; e++) {
            var ee = e+1
            idMatix = "id_matrix_A" + ii + ee
            inputMatixArray[i].push(Number(document.getElementById(idMatix).value));
        };

    }
    A = inputMatixArray
    n = document.querySelector('#yourNumber').value

    if (Number(n)> 1 ) {
        var B = MatrixPow(n,A)

        var resultTable = document.getElementById('outputMatrixTable');
        var resultCol = B[0].length
        var resultRow = B.length
        resultTable.innerHTML= "";
        var item = "";
        for (var i = 0; i < resultRow; i++) {
            var oneRow = "<tr>";
            for (var e = 0; e < resultCol; e++) {
                oneRow += "<td>"+ B[i][e] +"</td>"
            };
            oneRow += "</tr>"
            item += oneRow
        }
        resultTable.innerHTML = item;
        document.querySelector('.martixOutput').classList.add('resultActive');
    } else {
        var error = document.querySelector('#outputMatrixTable')
        error.innerHTML = "В качестве степени матрицы можно вводить целые неотрицательные числа большие единицы!</h1>";
        document.querySelector('.martixOutput').classList.add('resultActive');

    }



}
