function removeUrlAnchor(url){
  return url.slice(0, url.indexOf("#") > 0 ? url.indexOf("#") : url.length)
}