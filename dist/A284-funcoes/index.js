"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapString = void 0;
function mapString(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackfn(array[i]));
    }
    return newArray;
}
exports.mapString = mapString;
const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());
