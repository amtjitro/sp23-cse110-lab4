1. 3 is printed. Since `line 12` is printing `i`, at the end of the for loop, `i` is `prices.length` = 3 as this is when the for loops breaks. Therefore, 3 is printed. Since `i` is declared as type `var` it has function scope and therefore is accessible by line 12.
2. 150 is printed. This is because `discountedPrice` is declared as type `var`, has function scope, and is therefore accessible from line 13. At the end of the for loop, `discountedPrice` is set to `prices[2] * (1 - discount)` = `300 * .5` = `150`. Therefore, 150 is printed out.
3. 150 is printed. This is because `finalPrice` is declared as type `var`, has function scope, and is therefore accessible from line 14. At the end of the for loop, `finalPrice` is set to `Math.round(discountedPrice * 100)/100` = `(150*100)/100` = `150`.
4. This function will return `[50, 100, 150]`. This is because the for loop fills  `discounted` and line 19 returns `discounted`. It goes through 

   - 100*0.5 = 50. Then (50*100)/100 = 50
   - 200*0.5 = 100. Then (100*100)/100 = 100
   - 300*0.5 = 150. Then (150*100)/100 = 150

5. The code causes a `ReferenceError: i is not defined` error. This is because `i` has block scope and therefore is not accessible by line 12 and therefore there is an error.
6. The code causes am error. This is because `discountedPrice` has block scope and therefore is not accessible by line 13 and therefore there is an error.
7. 150 is printed. This is because `finalPrice` is defined and delcared in line 4 which is in the same block as line 14. Therefore, since `finalPrice` is declared as type `let`, it is accessible by line 14 and there is no error.
8. [50, 100, 150]. This is because `discounted` is declared as type `let` in line 3 and this is in the same block as line 16. Therefore it is accessible and there is no error. The values are because of the same reasons outlined in question 4.
9. There is an error. This is because we are trying to print `i` but `i` is defined with type `let` and therefore it has block scope. So, `i` is not accessible from line 11 and there is an error.
10. 3 is printed. This is because we set `length` to type `const` and we never attempted to change it so there is no error. Therefore, 3 is printed as `prices` is of length 3.
11. [50, 100, 150]. This is because while `discounted` is declared as `const` it is an array and the values of a `const` array can be changed. Therefore there is no error and it returns these values for the reason outlined in question 4.
12. a.  student.name   
    b.  student["Grad Year"]  
    c. student.greeting()  
    d. student["Favorite Teacher"].name  
    e. student.courseLoad[0]
13. 
    - a. '32' because 2 is convereted to '2' and they are concatenated
    - b. 1 because '3' is convereted to integer 3
    - c. 3 because `null` is converted to 0
    - d. '3null' because `null` is converted to "null" as a string
    - e. 4 because `true` is converted to integer 1
    - f. 0 because `null` is converted to 0
    - g. '3undefined' because `undefined` is converted to type string
    - h. NaN because you are trying to substract subtract undefined/NaN from 3
14. 
    - a. true. '2' gets converted to an integer.
    - b. false. we are comparing 2 strings, and lexicographically, 2 comes before 12.
    - c. true. both get converted to inteegers and therefore true.
    - d. false. `===` checks if the two things being compared and the same type and are equal. since 2 and '2' are different types, this is false.
    - e. false. true is converted to 1 and 1 != 2 therefore false.
    - f. true. This is Boolean conversion so Boolean(2) is converted to true and true is equal to true and they are the same type so true.
15. == is a loose equality comparison that will make a comparison and convert types if necessary. In contrast, === is a strict equality comparison that will require the operands to be of the same value and type.
16. see [part2-question16.js](part2-question16.js)
17. `newArr` will be `2, 4, 6`. This is because we pass in `array` as `[1,2,3]` and `callback` as `doSomething`. The for loop will iterate through all of `array` and `callback(array[i])` would be called. This is equivalent to calling `doSomething(array[0])`, `doSomething(array[1])`, `doSomething(array[2])` which results in the values of `1*2, 2*2 , 2*3` being pushed into `newArr`.
18. see [part2-question18.js](part2-question18.js)
19. `1`
    `4`
    `3`
    `2`