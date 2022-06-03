function addUsername(list) {
  // thank you for checking out the Coding Meetup kata :)
  for(let i = 0; i < list.length; i++){
  list[i]["username"] = list[i]["firstName"].toLowerCase() + list[i]["lastName"][0].toLowerCase() + ( new Date().getFullYear()-list[i]["age"]).toString()
  }
    return list
}
