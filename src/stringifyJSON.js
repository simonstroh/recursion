var stringifyJSON = function(obj) {
  var newArray = []
  var differentArray = []
  if (Array.isArray(obj)) {
    for (x = 0; x < obj.length; x++) {
      if (typeof obj[x] !== "undefined" && typeof obj[x] !== "function") {
        newArray.push(stringifyJSON(obj[x]))
      } else {
        newArray.push(stringifyJSON(null))
      }
    }
    return '[' + newArray.join(',') + ']'
  } else if (obj && typeof obj === "object") {
    for (property in obj) {
      if (typeof obj[property] !== "undefined" && typeof obj[property] !== "function") {
        differentArray.push(stringifyJSON(property) + ':' + stringifyJSON(obj[property]))
      }
    }
    return '{' + differentArray.join(',') + '}'
  }
  if (typeof obj === "string") {
    return '"' + obj + '"'
  }
  return '' + obj
}
