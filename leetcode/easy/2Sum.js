// if trying with two points like start and end
// then nums array should be sorted whose time complexity is O(nlogn)
// with obj (Hash map), we can do this with O(n);

var twoSum = function(nums, target) {
    const obj = {};
    const len = nums.length;
    
    for (let i = 0; i < len; i++) {
        const diff = obj[target - nums[i]];
        if(diff !== undefined) {
            return [diff, i];
        };
        
        obj[nums[i]] = i;
    }

};