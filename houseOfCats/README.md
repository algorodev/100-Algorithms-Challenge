Hay algunas personas y gatos en una casa. Teniendo en cuenta que una persona tiene dos piernas y un gato tiene cuatro piernas. Estima dado el número de piernas, cuantas personas hay en orden ascendente.

**EJEMPLO**

Para legs = 6, houseOfCats(legs) = [1, 3]

    · Puede haber 1 gato y 1 persona -> 4 + 2 = 6
    
    · O puede haber 3 personas -> 3 * 2 = 6
    
Para legs = 2, houseOfCats(legs) = [1]

    · Solo puede haber 1 persona
    
Para legs = 8, houseOfCats(legs) = [0, 2, 4]

    · Puede haber 2 gatos y 0 personas -> 2 * 4 = 8
    
    · Puede haber 1 gato y 2 personas -> 1 * 4 = 4 + 2 * 2 = 8
    
    · O pueden haber 4 personas -> 4 * 2 = 8
