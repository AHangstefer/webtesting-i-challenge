module.exports = {
  success,
  fail,
  repair,
  get,
};

// success(item) method that accepts 
// an item object and returns a new item 
// object modified according to the
// rules defined by the client for 
// enhancement success.

function success(item) {
  return { ...item };
}


// fail(item) method that accepts an
// item object and returns a new item
// object modified according to the rules
// defined by the client for enhancement
// failure.

function fail(item) {
  return { ...item };
}


//  repair(item) method that accepts an
// item object and returns a new item
// with the durability restored to 100.
// This method is the simplest of the
// three and would be a good starting
// point on this project.

function repair(...item) {
  //return { ...item };
  if (item.slice(1).indexOf(0) > -1){
    throw new Error("Can not divide by 0")
  }
  return item.slice(1).reduce((a,b)=> a/b, item[0] || 0)
}


// a get() method for use when working
// on the stretch problem.

function get(item) {
  return { ...item };
}
