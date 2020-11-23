Dado un 2k array de enteros, realice las siguientes operaciones hasta que el array contenga solo un entero.

Para las operaciones impares, reemplazar su consecutivo por la suma de estos.

Para las operaciones pares, reemplazar el consecuitvo por el producto de estos.

**EJEMPLO**

Para inputArray[1, 2, 3, 4, 5, 6, 7, 8], arrayConversion(inputArray) = 186.

Tenemos [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186]

Para inputArray[9, 10, 11, 12, 13, 14, 15, 16], arrayConversion(inputArray) = 186.

Tenemos [9, 10, 11, 12, 13, 14, 15, 16] -> [19, 23, 27, 31] -> [437, 837] -> [1274]
