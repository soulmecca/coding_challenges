// Time complexity is n! where n is the length of the given array. 


var permute = function (nums) {
    let final = [];
    
    if (nums.length === 1) {
        final.push(nums);
        return final;
    }
    
    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        const rest = nums.slice(0, i).concat(nums.slice(i+1));
        const result = permute(rest);

        for (let j = 0; j < result.length; j++) {
            final.push([first, ...result[j]])
        }
    }

    return final;

}


permute([1,2,3])
// [
//     [1,2,3],
//     [1,3,2],
//     [2,1,3],
//     [2,3,1],
//     [3,1,2],
//     [3,2,1]
// ]