function meeting(s) {
    return "(" + s.toUpperCase().split(";").map(e => e.split(":").reverse().join(", ")).sort().join(")(")+ ")"
}