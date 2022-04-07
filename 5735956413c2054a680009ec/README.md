# 7 kyu [Training JS #36: methods of Math---kata author's lover:random()](https://www.codewars.com/kata/5735956413c2054a680009ec)

<!-- START LANGUAGE_LINKS -->

[Javascript](./javascript.js)

<!-- END LANGUAGE_LINKS -->

Maybe you don't often use ```random()``` when you're dealing with Kata, but every qualified Kata can not be missing ```random()```. Because random testcase is the most basic anti cheating measure. A variety of testcases also help authors identify potential problems. If you also want to create a new Kata and become an author, please follow me to learn about ```random()```. 

The definitions and detailed information:

- [random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

Let's learn the usage of ```random()``` through examples:

```random()``` does not require any parameters, and its return value is a decimal between 0 and 1:
```javascript
for (var i=0;i<5;i++) console.log(Math.random());
//output:
0.9319351236335933
0.5403203193563968
0.006271821213886142
0.6078395291697234
0.4499389610718936
```
But we usually want to generate some integers, we can do so:
```javascript
for (var i=0;i<5;i++) console.log(  ~~(100*Math.random()) );
//output:
19
38
69
85
0
```
A number multiply with ```random()```, and then use the Math.floor(~~ is a simplified form of math.floor) to get an integer. The range is 0 to number-1.

If we do not want to start from 0, but need a specific range, you can write a function do this:
```javascript
function rndnum(from,to){
  return ~~((to-from)*Math.random()+from);
}
for (var i=0;i<5;i++) console.log(rndnum(20,30));
//output:
20
23
24
24
22
```
If we want to generate random characters, we can do this:
```javascript
for (var i=0;i<5;i++) 
  console.log(String.fromCharCode(~~(127*Math.random())));
//output:
<


#
)
```
We generated a ASCII character. You tell me second and third characters are not generated successfully? No, they're whitespace. If you only want to generate some lowercase letters, you can do this:
```javascript
for (var i=0;i<5;i++) 
  console.log(String.fromCharCode(~~(26*Math.random()+97)));
//output:
m
p
a
u
r
```
What should we do if we want to get a character from some of the characters that do not have a regular character? For example, we want to randomly generate a character from ```aeiou```, we can do this:
```javascript
var chars="aeiou";
for (var i=0;i<5;i++) 
  console.log(chars[~~(chars.length*Math.random())]);
//output:
u
e
i
o
u
```
If we want to randomly generate some fixed words, we can use arrays to do:
```javascript
var names=["John","Tom","Jerry","Minne","Alice","othername..."];
for (var i=0;i<5;i++) 
  console.log(names[~~(names.length*Math.random())]);
//output:
Minne
Alice
Jerry
Minne
othername...
```

Ok, lesson is over. let's us do some task.

## Task

Coding in function ```rndCode```. Your task is to generate a random verification code. In accordance with the following rules:

1) the code length should be 8;

2) The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

3) The 3rd-6th characters should be four numbers.

4) the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

5) If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:
```
AB1234#$ MG6145$@ KJ2249@&
CD5678%^ IG7593~% FH8638@&
EF9012!@ GB7047%$ KD7604^%
```
    
## [Series](http://github.com/myjinxin2015/Katas-list-of-Training-JS-series)

( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)

 - [#1: create your first JS function helloWorld](http://www.codewars.com/kata/571ec274b1c8d4a61c0000c8)
 - [#2: Basic data types--Number](http://www.codewars.com/kata/571edd157e8954bab500032d)
 - [#3:  Basic data types--String](http://www.codewars.com/kata/571edea4b625edcb51000d8e)
 - [#4:  Basic data types--Array](http://www.codewars.com/kata/571effabb625ed9b0600107a)
 - [#5:  Basic data types--Object](http://www.codewars.com/kata/571f1eb77e8954a812000837)
 - [#6:  Basic data types--Boolean and conditional statements if..else](http://www.codewars.com/kata/571f832f07363d295d001ba8)
 - [#7:  if..else and ternary operator](http://www.codewars.com/kata/57202aefe8d6c514300001fd)
 - [#8: Conditional statement--switch](http://www.codewars.com/kata/572059afc2f4612825000d8a)
 - [#9: loop statement --while and do..while](http://www.codewars.com/kata/57216d4bcdd71175d6000560)
 - [#10: loop statement --for](http://www.codewars.com/kata/5721a78c283129e416000999)
 - [#11: loop statement --break,continue](http://www.codewars.com/kata/5721c189cdd71194c1000b9b)
 - [#12: loop statement --for..in and for..of](http://www.codewars.com/kata/5722b3f0bd5583cf44001000)
 - [#13: Number object and  its properties](http://www.codewars.com/kata/5722fd3ab7162a3a4500031f)
 - [#14: Methods of Number object--toString() and toLocaleString()](http://www.codewars.com/kata/57238ceaef9008adc7000603)
 - [#15: Methods of Number object--toFixed(), toExponential() and toPrecision()](http://www.codewars.com/kata/57256064856584bc47000611)
 - [#16: Methods of String object--slice(), substring() and substr()](http://www.codewars.com/kata/57274562c8dcebe77e001012)
 - [#17: Methods of String object--indexOf(), lastIndexOf() and search()](http://www.codewars.com/kata/57277a31e5e51450a4000010)
 - [#18: Methods of String object--concat() split() and its good friend join()](http://www.codewars.com/kata/57280481e8118511f7000ffa)
 - [#19: Methods of String object--toUpperCase() toLowerCase() and replace()](http://www.codewars.com/kata/5728203b7fc662a4c4000ef3)
 - [#20: Methods of String object--charAt() charCodeAt() and fromCharCode()](http://www.codewars.com/kata/57284d23e81185ae6200162a)
 - [#21: Methods of String object--trim() and the string template](http://www.codewars.com/kata/5729b103dd8bac11a900119e)
 - [#22: Unlock new skills--Arrow function,spread operator and deconstruction](http://www.codewars.com/kata/572ab0cfa3af384df7000ff8)
 - [#23: methods of arrayObject---push(), pop(), shift() and unshift()](http://www.codewars.com/kata/572af273a3af3836660014a1)
 - [#24: methods of arrayObject---splice() and slice()](http://www.codewars.com/kata/572cb264362806af46000793)
 - [#25: methods of arrayObject---reverse() and sort()](http://www.codewars.com/kata/572df796914b5ba27c000c90)
 - [#26: methods of arrayObject---map()](http://www.codewars.com/kata/572fdeb4380bb703fc00002c)
 - [#27: methods of arrayObject---filter()](http://www.codewars.com/kata/573023c81add650b84000429)
 - [#28: methods of arrayObject---every() and some()](http://www.codewars.com/kata/57308546bd9f0987c2000d07)
 - [#29: methods of arrayObject---concat() and join()](http://www.codewars.com/kata/5731861d05d14d6f50000626)
 - [#30: methods of arrayObject---reduce() and reduceRight()](http://www.codewars.com/kata/573156709a231dcec9000ee8)
 - [#31: methods of arrayObject---isArray() indexOf() and toString()](http://www.codewars.com/kata/5732b0351eb838d03300101d)
 - [#32: methods of Math---round() ceil() and floor()](http://www.codewars.com/kata/5732d3c9791aafb0e4001236)
 - [#33: methods of Math---max() min() and abs()](http://www.codewars.com/kata/5733d6c2d780e20173000baa)
 - [#34: methods of Math---pow() sqrt() and cbrt()](http://www.codewars.com/kata/5733f948d780e27df6000e33)
 - [#35: methods of Math---log() and its family](http://www.codewars.com/kata/57353de879ccaeb9f8000564)
 - [#36: methods of Math---kata author's lover:random()](http://www.codewars.com/kata/5735956413c2054a680009ec)
 - [#37: Unlock new weapon---RegExp Object](http://www.codewars.com/kata/5735e39313c205fe39001173)
 - [#38: Regular Expression--"^","$", "." and test()](http://www.codewars.com/kata/573975d3ac3eec695b0013e0)
 - [#39: Regular Expression--"?", "*", "+" and "{}"](http://www.codewars.com/kata/573bca07dffc1aa693000139)
 - [#40: Regular Expression--"|", "[]" and "()"](http://www.codewars.com/kata/573d11c48b97c0ad970002d4)
 - [#41: Regular Expression--"\"](http://www.codewars.com/kata/573e6831e3201f6a9b000971)
 - [#42: Regular Expression--(?:), (?=) and (?!)](http://www.codewars.com/kata/573fb9223f9793e485000453)
 
 