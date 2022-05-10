function shortcut (string) {
  return string.split("").filter(e=>!"aeiou".includes(e)).join("");
}