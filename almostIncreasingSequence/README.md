Dado una secuencia de enteros como array, determinar si es posible obtener una secuencia incremental estricta, eliminando nada mas que uno de los elementos del array.

**EJEMPLO**

Para la sequence[1, 3, 2, 1], almostIncreasingSequence(sequence) = false.

/* No se puede quitar ningún elemento para conseguir un array incremental estricto */

Para la sequence[1, 3, 2], almostIncreasingSequence(sequence) = true.

/* Puedes quitar el 3 para conseguir un array incremental estricto [1, 2] */

Para la sequence[6, 5, 7, 8], almostIncreasingSequence(sequence) = true.

/* Puedes quitar el 5 para conseguir un array incremental estricto [6, 7, 8] */

Para la sequence[1, 4, 2, 6], almostIncreasingSequence(sequence) = false.

/* No se puede quitar más de un elemento para conseguir un array incremental estricto */
