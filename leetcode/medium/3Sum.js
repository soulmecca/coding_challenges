// https://leetcode.com/problems/3sum/description/

// using three pointers i, st, end
// Time complexity is O(n2) because the first for loop is O(n) and then what the second for loop does
// is visiting every element from i+1 to the end.

// Found this way is easier to prevent having duplicated items in the result array than trying with constructing an obj


var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    var res = [];
    var len = nums.length;
    
    for (var i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let st = i + 1, end = len - 1; st < end;) {
            const sum = nums[i] + nums[st] + nums[end];
            if (sum === 0) {
                res.push([nums[i], nums[st], nums[end]]);
                
                st++;end--;
                
                while (st < end && nums[st] === nums[end - 1]) {
                    st++
                }
                
                while (st < end && nums[end] === nums[end + 1]) {
                    end--
                }
            } else if (nums[i] + nums[st] + nums[end] > 0) {
                end--
            } else {
                st++
            }
        }
    }
    
    return res;
};