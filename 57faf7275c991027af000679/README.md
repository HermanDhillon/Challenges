# 8 kyu [Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right](https://www.codewars.com/kata/57faf7275c991027af000679)

<!-- START LANGUAGE_LINKS -->

[Javascript](./javascript.js)

<!-- END LANGUAGE_LINKS -->

### Description:

 Remove `n` exclamation marks in the sentence from left to right. `n` is positive integer.

### Examples

```
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
```