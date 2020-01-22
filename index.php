
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

        <?php require_once 'php/header.php'; ?>

        <div id="content">
            <div id="mainMatrix" class="indexBoxTask">
                <h1>МАТРИЦЫ</h1>
                <h3><a href="calcPages/TransMatrix.php">Транспонирование матрицы</a></h3>
                <h3><a href="calcPages/SumMatrix.php">Сложение и вычитание матриц</a></h3>
                <h3><a href="calcPages/MultiMatrixOnNumber.php">Умножение матрицы на число</a></h3>
                <h3><a href="calcPages/MultiMatrixOnMatrix.php">Умножение матриц</a></h3>
                <h3><a href="calcPages/MatrixOnPow.php">Возведение матрицы в степень</a></h3>
                <h3><a href="calcPages/DeterminantMatrix.php">Определитель матрицы</a></h3>
                <h3><a href="calcPages/MatrixRank.php">Ранг матрицы</a></h3>
                <h3><a href="calcPages/UnionMatrix.php">Союзная матрица</a></h3>
                <h3><a href="calcPages/InverseMatrix.php">Обратная матрица</a></h3>

            </div>
            <div id="vector" class="indexBoxTask">
                <h1>ВЕКТОРНАЯ АЛГЕБРА</h1>
                <h3><a href="#">Векторное произведение векторов</a></h3>
                <h3><a href="#">Единичный вектор</a></h3>
                <h3><a href="#">Скалярное произведение векторов</a></h3>
            </div>
        </div>

        <?php require_once 'php/footer.php'; ?>

    </div>
</body>
</html>
