
<!--     in header.php
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>calculator</title>
    <link rel="stylesheet" href="Style/main.css">
</head>
<body>
    <div id="wrapper"> -->
        <?php require_once '../php/header.php'; ?>

        <div id="content">
            <div id="matrixInput" >
                <h1>Умножение матриц</h1>
                <div id="matix_A" class="matrixInputCol">

                    <table id="inputMatrixTable_A" class="matrixTable">
                        <tr>
                            <td><input id="id_matrix_A11" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_A12" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_A13" type="text" name="" value="0"></td>
                        </tr>
                        <tr>
                            <td><input id="id_matrix_A21" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_A22" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_A23" type="text" name="" value="0"></td>
                        </tr>
                        <tr>
                            <td><input id="id_matrix_A31" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_A32" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_A33" type="text" name="" value="0"></td>
                        </tr>
                    </table>

                    <label for="rowMatrix"> Количеств столбцов</label>
                    <select id="colMatrixInput_A" name="colMatrix"  onchange="changeMatrix()">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option selected value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>

                    <label for="rowMatrix"> Количеств строк</label>
                    <select id="rowMatrixInput_A" name="rowMatrix"  onchange="changeMatrix()">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option selected value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>

                </div>

                <div id="action" class="matrixInputCol">
                    <p id="symbol" style="font-size: 50px"> × </p>
                </div>

                <div id="matix_B" class="matrixInputCol">

                    <table id="inputMatrixTable_B" class="matrixTable">
                        <tr>
                            <td><input id="id_matrix_B11" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_B12" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_B13" type="text" name="" value="0"></td>
                        </tr>
                        <tr>
                            <td><input id="id_matrix_B21" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_B22" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_B23" type="text" name="" value="0"></td>
                        </tr>
                        <tr>
                            <td><input id="id_matrix_B31" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_B32" type="text" name="" value="0"></td>
                            <td><input id="id_matrix_B33" type="text" name="" value="0"></td>
                        </tr>

                    </table>

                    <label for="rowMatrix"> Количеств столбцов</label>
                    <select id="colMatrixInput_B" name="colMatrix"  onchange="changeMatrix()">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option selected value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>

                </div>
                <div id="execute">
                    <input type="button" onclick="MultiMatrix()" value="Вычислить">
                </div>
            </div>

            <div class="martixOutput">
                <table id="outputMatrixTable">
                    <h1>Результат</h1>
                </table>
            </div>

        </div>

        <?php require_once '../php/footer.php'; ?>

    </div>
    <script src="/JavaScripts/MultiMatrixOnMatrix.js" charset="utf-8"></script>
    <script src="/JavaScripts/JsStyle.js" charset="utf-8"></script>
</body>
</html>
