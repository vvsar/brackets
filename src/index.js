module.exports = function check(str, bracketsConfig) {
  let arr = str.split("");
  if (arr.length % 2 != 0) {
    return false;
  }
  let newArr = [];
  let arrSlice = [];
  let i = 0;

  for (;;) {

    for (; i < arr.length - 1; i++) {
      
      arrSlice = arr.slice(i, i + 2);

      for (let j = 0; j < bracketsConfig.length; j++) {
        if ((arrSlice[0] != bracketsConfig[j][0] || arrSlice[1] != bracketsConfig[j][1])) {
          continue;
        } else {
        arr[i] = undefined;
        arr[i + 1] = undefined;
        i = arr.length;
        //break;
        }
      }

    }

    for (let k = 0; k < arr.length; k++) {
      if (arr[k] === undefined) {
        continue;
      } else {
        newArr.push(arr[k])
      }
    }

    if (arr.length === 0) {
      return true;
    } else if (newArr.length === arr.length) {
      return false;
    } else {
    arr = newArr;
    newArr = [];
    i = 0
    }

  }
}
