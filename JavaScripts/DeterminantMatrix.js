var table = document.getElementById('inputMatrixTable_A');
var oneRow = "<tr></tr>"
var attr = "onfocus='focusInput(this)' onblur='blurInput(this)'"

function changeMatrix() {
    table.innerHTML= "";
    var item = "";
    var selectCol = document.getElementById('colMatrixInput').value;
    // var selectRow = document.getElementById('rowMatrixInput').value;
    var selectRow = selectCol
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

function Determinant(A)   // Используется алгоритм Барейса, сложность O(n^3)
{
    var N = A.length, B = [], denom = 1, exchanges = 0;
    for (var i = 0; i < N; ++i)
     { B[ i ] = [];
       for (var j = 0; j < N; ++j) B[ i ][j] = A[ i ][j];
     }
    for (var i = 0; i < N-1; ++i)
     { var maxN = i, maxValue = Math.abs(B[ i ][ i ]);
       for (var j = i+1; j < N; ++j)
        { var value = Math.abs(B[j][ i ]);
          if (value > maxValue){ maxN = j; maxValue = value; }
        }
       if (maxN > i)
        { var temp = B[ i ]; B[ i ] = B[maxN]; B[maxN] = temp;
          ++exchanges;
        }
       else { if (maxValue == 0) return maxValue; }
       var value1 = B[ i ][ i ];
       for (var j = i+1; j < N; ++j)
        { var value2 = B[j][ i ];
          B[j][ i ] = 0;
          for (var k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[ i ][k]*value2)/denom;
        }
       denom = value1;
     }
    if (exchanges%2) return -B[N-1][N-1];
    else return B[N-1][N-1];
}

function getDeterminant()
{
    // Создание массива для обрабоки
    var inputMatixArray = []
    var selectCol = document.getElementById('colMatrixInput').value;
    // var selectRow = document.getElementById('rowMatrixInput').value;
    var selectRow = selectCol
    for (var i = 0; i < selectRow; i++) {
        var ii = i+1
        inputMatixArray[i] = []
        for (var e = 0; e < selectCol; e++) {
            var ee = e+1
            idMatix = "id_matrix_A" + ii + ee
            inputMatixArray[i].push(Number(document.getElementById(idMatix).value));
        };
    }
    var A = inputMatixArray
    var B = Determinant(A)
    // console.log(B)
    var resultTable = document.getElementById('outputMatrixTable');
    var resultCol = 1
    var resultRow = 1
    resultTable.innerHTML= "";
    var item = "";
    for (var i = 0; i < resultRow; i++) {
        var oneRow = "<tr>";
        for (var e = 0; e < resultCol; e++) {
            oneRow += "<td>"+ B +"</td>"
        };
        oneRow += "</tr>"
        item += oneRow
    }
    resultTable.innerHTML = item;
    document.querySelector('.martixOutput').classList.add('resultActive');

}
