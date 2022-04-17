# 8 kyu [Double Char](https://www.codewars.com/kata/56b1f01c247c01db92000076)

<!-- START LANGUAGE_LINKS -->

[Javascript](./javascript.js)

<!-- END LANGUAGE_LINKS -->

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

### Examples (Input -> Output):
```
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
```
Good Luck!

~~~if:riscv
RISC-V: The function signature is

```c
char *double_char(const char *string, char *doubled);
```

Write your result to `doubled`. You may assume it is large enough to hold the result. Return `doubled` when you are done.
~~~