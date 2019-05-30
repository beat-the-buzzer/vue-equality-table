// 行。列
const rowArr = [true, false, 1, 0, -1, 'true', 'false', '1', '0', '-1', '', null, undefined, Infinity, -Infinity, [], {}, [[]], [0], [1], NaN]; // hang
const colArr = [true, false, 1, 0, -1, 'true', 'false', '1', '0', '-1', '', null, undefined, Infinity, -Infinity, [], {}, [[]], [0], [1], NaN];

const arrShow = ['true', 'false', '1', '0', '-1', '\'true\'', '\'false\'', '\'1\'', '\'0\'', '\'-1\'', '\'\'', 'null', 'undefined', 'Infinity', '-Infinity', '[]', '{}', '[[]]', '[0]', '[1]', 'NaN'];

const len = rowArr.length;
let tableArr = Array(len).fill([]); // 展示的空白

tableArr = tableArr.map((value, index) => {
  return arrShow.map((v, i) => {
    return {
      rowVal: rowArr[index],
      colVal: colArr[i],
      doubleEqual: rowArr[index] == colArr[i],
      tribbleEqual: rowArr[index] === colArr[i],
      doubleTitle: `${arrShow[index]}==${arrShow[i]}`,
      tribbleTitle: `${arrShow[index]}===${arrShow[i]}`,
    }
  });
});

export {
  rowArr,
  colArr,
  arrShow,
  tableArr,
}