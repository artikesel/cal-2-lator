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
                <h1>Определитель матрицы</h1>
                <div id="matrix" class="matrixInputCol">

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
                    <select id="colMatrixInput" name="colMatrix"  onchange="changeMatrix()">
                        <!-- <option value="1">1</option> -->
                        <option value="2">2×2</option>
                        <option selected value="3">3×3</option>
                        <option value="4">4×4</option>
                        <option value="5">5×5</option>
                        <option value="6">6×6</option>
                    </select>

                    <!-- <label for="rowMatrix"> Количеств строк</label>
                    <select id="rowMatrixInput" name="rowMatrix"  onchange="changeMatrix()">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option selected value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select> -->

                </div>
                <!-- <div id="action" class="matrixInputCol">
                    <select id="symbol" name="">
                        <option value="+">&plus;</option>
                        <option value="-">&minus;</option>
                    </select>
                </div> -->

                <div id="execute">
                    <input type="button" onclick="getDeterminant()" value="Вычислить">
                </div>
            </div>





            <!-- <div class="matrixInput" >
                <table id="inputMatrixTable" class="matrixTable">
                    <tr>
                        <td><input id="id_matrix_11" type="text" name="" value="0"></td>
                        <td><input id="id_matrix_12" type="text" name="" value="0"></td>
                        <td><input id="id_matrix_13" type="text" name="" value="0"></td>
                    </tr>
                    <tr>
                        <td><input id="id_matrix_21" type="text" name="" value="0"></td>
                        <td><input id="id_matrix_22" type="text" name="" value="0"></td>
                        <td><input id="id_matrix_23" type="text" name="" value="0"></td>
                    </tr>
                    <tr>
                        <td><input id="id_matrix_31" type="text" name="" value="0"></td>
                        <td><input id="id_matrix_32" type="text" name="" value="0"></td>
                        <td><input id="id_matrix_33" type="text" name="" value="0"></td>
                    </tr>

                </table>

                <div>
                    <label for="rowMatrix"> Количеств столбцов</label>
                    <select id="colMatrixInput" name="colMatrix"  onchange="changeMatrix()">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option selected value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>

                    <label for="rowMatrix"> Количесвто строк</label>
                    <select id="rowMatrixInput" name="rowMatrix"  onchange="changeMatrix()">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option selected value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>

                <input type="button" onclick="TransMatrix()" value="Транспонировать">
            </div> -->

            <div class="martixOutput">
                <h1>Результат</h1>
                <table id="outputMatrixTable">

                </table>
            </div>

        </div>

        <?php require_once '../php/footer.php'; ?>

    </div>
    <script src="/JavaScripts/DeterminantMatrix.js" charset="utf-8"></script>
    <script src="/JavaScripts/JsStyle.js" charset="utf-8"></script>
</body>
</html>
