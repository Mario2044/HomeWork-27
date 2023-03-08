function  mapping(arrOrObj, callback) {
    if(Array.isArray(arrOrObj)) {
        return arrOrObj.map(callback);
    } else if(typeof arrOrObj === 'object' && arrOrObj !== null) {
        let newObj = {};
        for(let key in arrOrObj) {
            newObj[key] = callback(arrOrObj[key], key, arrOrObj);
        }
        return newObj;
    } else {
        alert("Первый аргумент должен быть массивом или объектом!");
    }
};

const arr = [1, 2, 3];
const mappedArr = mapping(arr, (el) => el * 2);
console.log(mappedArr); 

const obj = { a: 1, b: 2, c: 3 };
const mappedObj = mapping(obj, (val, key) => val * 2 + key);
console.log(mappedObj);

const str = "не массив или объект";
const result = mapping(str, (char) => char.toUpperCase());


function filter(array, callback) {
    const result = { right: [], wrong: [] };
  
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.right.push(array[i]);
        } else {
            result.wrong.push(array[i]);
        }
    }
    return result;
  }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const { right, wrong } = filter(numbers, (value) => value % 2 === 0);

console.log(right); 
console.log(wrong); 