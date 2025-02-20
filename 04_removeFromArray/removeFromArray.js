const removeFromArray = function (arr, ...args) {
    const newArray = [];
    for (const item of arr) {
        if (!args.includes(item)){
            newArray.push(item)
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
