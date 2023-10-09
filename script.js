console.log('veikia')

const randomArr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']


console.log(randomArr)
console.log(randomArr.length)


// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:
// 2.1. Gauti pirmą masyvo narį. +
console.log(randomArr[0])
// 2.2. Gauti paskutinį masyvo narį.+
console.log(randomArr[26])
// 2.3. Gauti antrą masyvo narį.+
console.log(randomArr[1])
// 2.4. Gauti priešpaskutinį masyvo narį.+
console.log(randomArr[25])
// 2.5. Gauti aštuntą masyvo narį.+
console.log(randomArr.slice(7))
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.+
console.log(randomArr.slice(-9, -8))
// 2.7. Gauti vidurinį masyvo narį.+
console.log(randomArr.slice(13,-13))
// 2.8. Gauti pirmus tris masyvo narius.+
console.log(randomArr[0],[1],[2])
// 2.9. Gauti paskutinius tris masyvo narius.+
console.log(randomArr.slice(24))
// 2.10. Gauti pirmus 10 masyvo narius.+
console.log(randomArr.slice(-27,-17))
// 2.11. Gauti paskutinius 10 masyvo narius.+
console.log(randomArr.slice(-10))
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).+
console.log(randomArr.slice(2,8))
// 2.13. Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
console.log(randomArr.slice(-9,-4))
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).+
console.log(randomArr.slice(11,20))
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
console.log(randomArr.slice(-17,-9))
// 2.16. Gauti visus masyvo narius išskyrus pirmą.+
console.log(randomArr.slice(1,27))
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.+
console.log(randomArr.slice(0,26))
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.+
console.log(randomArr.slice(5,27))
// 2.19. Gauti visus masyvo narius išskyrus paskutinius 5.+
console.log(randomArr.slice(0,22))
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).+
console.log(randomArr.slice(0,13))
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).+
console.log(randomArr.slice(14,27))
// 2.22. Gauti visus narius išskyrus pirmą ir paskutinį.+
console.log(randomArr.slice(1,26))
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.+
console.log(randomArr.slice(5,24))
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.+
console.log(randomArr.slice(1,20))
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.+
console.log(randomArr.slice(7,26))
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.+
console.log(randomArr.slice(9,-12))
// 2.27. Gauti 9 narius skaičiuojant nuo 11.+
console.log(randomArr.slice(10,19))
// 2.28. Gauti 12 narių skaičiuojant nuo 8.+
console.log(randomArr.slice(7,19))

// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.+

const firstFive = randomArr.slice(0,5)
const lastSix = randomArr.slice(-6)

const result = firstFive.concat(lastSix)
console.log(result)

// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.+

const firstArray = randomArr.slice(2,4)
const secondArray = randomArr.slice (14,16)

const result2 = firstArray.concat(secondArray)
console.log(result2)