// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var newArray = []
  function elementsRecursive(elem) {
    if (elem.classList && elem.classList.contains(className)) {
      newArray.push(elem)
    }
    if (elem.childNodes) {
      elem.childNodes.forEach(function(elementy) {
        elementsRecursive(elementy)
      })
    }
  }
  elementsRecursive(document.body)
  return newArray
}
