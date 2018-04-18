// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    var specialArray = []
    for (r = 0; r < obj.length; r++) {
      if (typeof obj[r] === "string") {
        var string4 = '"' + obj[r] + '"'
        specialArray.push(string4)
      } else if (typeof obj[r] === "boolean" || typeof obj[r] === "number") {
        var string4 = obj[r]
        specialArray.push(string4)
      } else if (typeof obj[r] === "undefined") {
        var string4 = 'null'
        specialArray.push(string4)
      } else if (Array.isArray(obj[r])) {
        var thisArray = obj[r]
        var concatArray = []
        for (t = 0; t < thisArray.length; t++) {
          if (typeof thisArray[t] === "string") {
            var stringHere = '"' + thisArray[t] + '"'
            concatArray.push(stringHere)
          } else if (typeof thisArray[t] === "boolean" || typeof thisArray[t] === "number") {
            var stringHere = thisArray[t]
            concatArray.push(stringHere)
          } else if (typeof thisArray[t] === "undefined") {
            var stringHere = 'null'
            concatArray.push(stringHere)
          } else if (Array.isArray(thisArray[t])) {
            if (thisArray[t].length === 0) {
              var stringHere = '[]'
              concatArray.push(stringHere)
            } else {
              var deeperArray = thisArray[t]
              var deepConcatArray = []
              for (x = 0; x < deeperArray.length; x++) {
                if (typeof deeperArray[x] === "string") {
                  var thisOne = '"' + deeperArray[x] + '"'
                  deepConcatArray.push(thisOne)
                } else if (typeof deeperArray[x] === "boolean" || typeof deeperArray[x] === "number") {
                  var thisOne = deeperArray[x]
                  deepConcatArray.push(thisOne)
                } else if (typeof deeperArray[x] === "undefined") {
                  var thisOne = 'null'
                  deepConcatArray.push(thisOne)
                } else if (Array.isArray(deeperArray[x])) {
                  if (deeperArray[x].length === 0) {
                    var thisOne = '[]'
                    deepConcatArray.push(thisOne)
                  } else {
                    var deepestArray = deeperArray[x]
                    var deepestConcatArray = []
                    for (y = 0; y < deepestArray.length; y++) {
                      if (typeof deepestArray[y] === "string") {
                        var thisHere = '"' + deepestArray[y] + '"'
                        deepestConcatArray.push(thisHere)
                      } else if (typeof deepestArray[y] === "boolean" || typeof deepestArray[y] === "number") {
                        var thisHere = deeperArray[x]
                        deepestConcatArray.push(thisHere)
                      } else if (typeof deepestArray[y] === "undefined") {
                        var thisHere = 'null'
                        deepestConcatArray.push(thisHere)
                      } else if (Array.isArray(deepestArray[y])) {
                        if (deepestArray[y].length === 0) {
                          var thisHere = '[]'
                          deepestConcatArray.push(thisHere)
                        } else {

                        }
                      }
                    }
                    var returningStringLast = '[' + deepestConcatArray.join(',') + ']'
                    deepConcatArray.push(returningStringLast)
                  }
                }
              }
              var returningString = '[' + deepConcatArray.join(',') + ']'
              concatArray.push(returningString)
            }
          }
        }
        var thisString = '[' + concatArray.join(',') + ']'
        specialArray.push(thisString)
      }
    }
    var arrayString = specialArray.join(',')
    return '[' + arrayString + ']'
  } else if (typeof obj === "object") {
    var newArray = []
    for (property in obj) {
      var newString = property
      newArray.push(newString)
      var otherNewString = obj[property]
      newArray.push(otherNewString)
    }
    if (newArray.length === 2) {
      return '{"' + newArray[0] + '":' + newArray[1] + '}'
    } else if (newArray.length > 2) {
      var specialArray = []
      var string1 = '{'
      specialArray.push(string1)
      for (i = 0; i < newArray.length; i++) {
        if (i === 0 || i % 2 === 0) {
          var string2 = '"' + newArray[i] + '":'
          specialArray.push(string2)
        } else if (i >= 1 && i % 2 !== 0 && i !== newArray.length - 1) {
          if (typeof newArray[i] === "string") {
            var string3 = '"' + newArray[i] + '",'
            specialArray.push(string3)
          } else if (typeof newArray[i] === "boolean" || typeof newArray[i] === "number") {
            var string3 = newArray[i] + ','
            specialArray.push(string3)
          } else if (typeof newArray[i] === "undefined") {
            var string3 = null + ','
            specialArray.push(string3)
          }
        } else if (i === newArray.length - 1) {
          if (typeof newArray[i] === "string") {
            var string3 = '"' + newArray[i] + '"}'
            specialArray.push(string3)
          } else if (typeof newArray[i] === "boolean" || typeof newArray[i] === "number") {
            var string3 = newArray[i] + '}'
            specialArray.push(string3)
          } else if (typeof newArray[i] === "undefined") {
            var string3 = null + '}'
            specialArray.push(string3)
          }
        }
      }
      var returnString = specialArray.join('')
      return returnString
    } else if (newArray.length === 0) {
      return '{}'
    }
  } else if (typeof obj === "string") {
    return '"' + obj + '"'
  } else if (typeof obj === "boolean" || typeof obj === "number") {
    return obj.toString()
  } else if (typeof obj === "undefined") {
    return 'null'
  } else {
    return 'null'
  }
};
