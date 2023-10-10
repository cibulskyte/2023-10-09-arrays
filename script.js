
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


//antra dalis 

const randomArr2 = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]
console.log(randomArr2)
randomArr2.length
console.log(randomArr2.length)
// Dirbti su šiuo masyvu:
// [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
// 1.1. Pašalinti pirmą masyvo narį.
const task11 = randomArr2.shift(0)
console.log(randomArr2)
// 1.2. Pašalinti paskutinį masyvo narį.
const task12 = randomArr2.pop(23)
console.log(randomArr2)
// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
const task13 = randomArr2.splice(10,1)
console.log(randomArr2)
// 1.4. Pašalinti priešpaskutinį masyvo narį.
const task14 = randomArr2.splice(18,1)
console.log(randomArr2)
// 1.5. Pašalinti antrą masyvo narį.
const task15 = randomArr2.splice(1,1)
console.log(randomArr2)
// 1.6. Pašalinti 7 ir 8 masyvo narius.
const task16 = randomArr2.splice(4,2)
console.log(randomArr2)
// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
const task17 = randomArr2.splice(-6,3)
console.log(randomArr2)
// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
const task18 = randomArr2.splice(2,1,888)
console.log(randomArr2)
// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
const task19 = randomArr2.splice(9,1,33,789,6543)
console.log(randomArr2)
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
const task110 = randomArr2.splice(14,1,321,654,987)
console.log(randomArr2)
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
const task111 = randomArr2.splice(1,0,11)
console.log(randomArr2)
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
const task112 = randomArr2.splice(13,0,1)
console.log(randomArr2)
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
const task113 = randomArr2.splice(-1,0,-1)
console.log(randomArr2)
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
const task114 = randomArr2.unshift(1,2,3)
console.log(randomArr2)
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
const task115 = randomArr2.push(-333,-321, -312)
console.log(randomArr2)
// 1.16. Į masyvo vidurį pridėti skaičių 0.
const task116 = randomArr2.splice(13,0,0)
console.log(randomArr2)
// 1.17. Pašalinti pirmą masyvo narį.
const task117 = randomArr2.splice(0,1)
console.log(randomArr2)
// 1.18. Pašalinti paskutinį masyvo narį.
const task118 = randomArr2.splice(25,1)
console.log(randomArr2)
// 1.19. Į masyvo pradžią pridėti žodį "start".
const task119 = randomArr2.unshift('start')
console.log(randomArr2)
// 1.20. Į masyvo pabaigą pridėti žodį "end".
const task120 = randomArr2.push('end')
console.log(randomArr2)
// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']