var chocolateBars=[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ]
  
  function addElementToBeginningOfArray(x,y){
<<<<<<< HEAD
    var z=[y,...x];
    return z;
  }
  
  function destructivelyAddElementToBeginningOfArray(x,y){
    x.unshift(y)
    return x
  }
  
  function addElementToEndOfArray(x,y){
    var z = [...x,y];
    return z;
  }
  
  function destructivelyAddElementToEndOfArray(x,y){
    x.push(y)
    return x;
  }
  
  function accessElementInArray(x,y){
    return x[y];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(x){
    x.shift(x[0]);
    return x;
  }
  
  function removeElementFromBeginningOfArray(x){
    return x.slice(1);
  }
  
  function destructivelyRemoveElementFromEndOfArray(x){
    x.pop()
    return x;
  }
  
  function removeElementFromEndOfArray(x){
    var y=x.slice(0,x.length-1);
    return y;
=======
    var z=x.unshift(y)
    return z;
>>>>>>> 1fc8d110ad0d630af37b382d69e9406d0a6dcaf8
  }