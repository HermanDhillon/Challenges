function getDrinkByProfession(param){
 let dict = {
jabroni:	"Patron Tequila",
school:	"Anything with Alcohol",
programmer:	"Hipster Craft Beer",
bike:	"Moonshine",
politician:	"Your tax dollars",
rapper:	"Cristal",
}
 return dict[param.toLowerCase().split(" ")[0]] || "Beer"
}