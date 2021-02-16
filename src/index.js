module.exports = function check(str, bracketsConfig) {
  let arr = str.split("");
    // odd number of brackets
  if (arr.length % 2 != 0) {
    return false;
  }
    // array for comparison
  let newArr = [];
    // array for two taken brackets
  let arrSlice = [];
  let i = 0;
    // endless cycle
  for (;;) {

    for (; i < arr.length - 1; i++) {
        // take two brackets
      arrSlice = arr.slice(i, i + 2);
        // check if the two is a pair
      for (let j = 0; j < bracketsConfig.length; j++) {
        if ((arrSlice[0] != bracketsConfig[j][0] || arrSlice[1] != bracketsConfig[j][1])) {
          continue;
        } else {
          // pair for exclusion
        arr[i] = undefined;
        arr[i + 1] = undefined;
          //break
        i = arr.length;
        }
      }

    }
    
       // filling newArr
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] === undefined) {
        continue;
      } else {
        newArr.push(arr[k])
      }
    }

        // string was empty
    if (arr.length === 0) {
      return true;
        // pairs not found
    } else if (newArr.length === arr.length) {
      return false;
        // next iteration of the endless cycle
    } else {
    arr = newArr;
    newArr = [];
    i = 0
    }

  }
}
