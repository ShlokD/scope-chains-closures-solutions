function foo() {
  var bar;
  quux = 15;
  function zip() {
    bar = true;
    var quux;
  }
  
  return zip;
}