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

nums.sort((a, b) => a - b);
var res = [];
var n = nums.length;

for (var i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
    }
    for (var j = i + 1, k = n - 1; j < k;) {
        if (nums[i] + nums[j] + nums[k] === 0) {
            res.push([nums[i], nums[j], nums[k]]);
            
            j++;k--;
            
            while (j < k && nums[j] === nums[j - 1]) {
                j++
            }
            
            while (j < k && nums[k] === nums[k + 1]) {
                k--
            }
        } else if (nums[i] + nums[j] + nums[k] > 0) {
            k--
        } else {
            j++
        }
    }
}

return res;