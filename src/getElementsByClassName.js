// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var documentElements = document.body.childNodes
  var newArray = []
  for (r = 0; r < documentElements.length; r++) {
    if (documentElements[r].contains(className)) {
      newArray.push(documentElements[r])
    }
  }
  return newArray
};
