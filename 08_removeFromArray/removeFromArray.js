function removeFromArray(arr, ...args) {
    const newArr = [];
    arr.forEach((value) => {
        if(!args.includes(value)) {
            newArr.push(value);
        }
    });
    return newArr;
};

// The below also works using filter()
// function removeFromArray(arr, ...valuesToRemove) {
//     return arr.filter(value => !valuesToRemove.includes(value));
// }

// Do not edit below this line
module.exports = removeFromArray;
