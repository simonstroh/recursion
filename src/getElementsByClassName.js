// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var entireElement = document.body
  var children = entireElement.children
  var classArray = []
  if (entireElement.classList.contains(className)) {
    classArray.push(entireElement)
  }
  for (var x = 0; x < children.length; x++) {
    if (children[x].classList.contains(className)) {
      classArray.push(children[x])
    }
  }
  return classArray
};
