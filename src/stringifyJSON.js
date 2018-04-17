// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === "object") {
    var newArray = []
    for (property in obj) {
      var newString = property
      var otherNewString = obj[property]
      newArray.push(newString)
      newArray.push(otherNewString)
    }
    if (newArray.length === 2) {
      return '{"' + newArray[0] + '":' + newArray[1] + '}'
    } else if (newArray.length > 2) {
      var specialArray = []
      var string1 = '{'
      specialArray.push(string1)
      for (i = 0; i < newArray.length; i++) {
        if (i === 0 || newArray.indexOf(newArray[i]) % 2 === 0) {
          var string2 = '"' + newArray[i] + '"' + ':'
          specialArray.push(string2)
        } else if (i >= 1 && newArray.indexOf(newArray[i]) % 2 !== 0 && i !== newArray.length - 1) {
          var string3 = newArray[i] + ','
          specialArray.push(string3)
        } else if (i === newArray.length - 1) {
          var string4 = newArray[i] + '}'
          specialArray.push(string4)
        }
      }
      var returnString = specialArray.join('')
      return returnString
    }
  }
};
