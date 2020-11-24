Para cada entrenador recopilamos dos piezas de información por tarea, donde la corrección es 1 si la respuesta era correcta, -1 si la respuesta era incorrecta, y 0 si no se dio respuesta. En este caso, el tiempo de respuesta correcto del bot para una tarea dada sería el promedio de los tiempos de respuesta de los entrenadores que respondieron correctamente. Dada toda la información de entrenamiento para una tarea específica, calcula el tiempo de respuesta del bot.

**EJEMPLO**

Para trainingData[[3, 1], [6, 1], [4, 1], [5, 1]], companyBotStrategy(trainingData) = 4.5

Para trainingData[[4, 1], [4, -1], [0, 0], [6, 1]], companyBotStrategy(trainingData) = 5

Para trainingData[[4, -1], [0, 0], [5, -1]], companyBotStrategy(trainingData) = 0
