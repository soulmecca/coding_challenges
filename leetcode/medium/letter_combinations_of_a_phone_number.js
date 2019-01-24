// Time Complexity is O(nm)
// with the time complexity of O(n^m), where n is the number of characters for each digit, m is the length of the digit string.

var letterCombinations = function (digits) {

    if(!digits) return [];

    let result = [];

    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    combinationMaker (digits, "", map, result);
    
    return result;
}


function combinationMaker(rest, combination, map, result) {

    if (!rest) {
        result.push(combination);
        return;
    }

    const first = rest[0];
    rest = rest.substring(1);
    const letters = map[first];

    for (let i = 0; i < letters.length; i++) {
        combinationMaker(rest, combination + letters[i], map, result)
    }
}


letterCombinations('23');