// https://leetcode.com/problems/longest-palindromic-substring/description/
// based on https://www.youtube.com/watch?v=Fi5INvcmDos&t=588s
// Dp approach by storing the result already calculated. 



var longestPalindrome = function(s) {
    if(s.length === 0 || s.length === 1 ) return s;
  
  
    let len = s.length;
    let obj = {};
  
    let table = [];
  
    for (let item of s){
      table.push(new Array(len).fill(0))
    }
  
    let result = s[0];
    // for length 1
    let i = 0;
    while (i < len) {
      table[i][i] = 1;
      i++;
    }
  
    // for length 2
    i = 0;
   
    while (i < len -1) {
      if (s[i] === s[i+1]) {
        table[i][i+1] = 1;
        result = s.slice(i, i+2);
      }
      i++;
    }
  
  
    // length is greater than 2 
    let k = 3;
    while (k <= len) {
      i = 0;
  
      while (i <= len - k) {
        let j = i + k -1;
        if(table[i+1][j-1] && s[i] === s[j]) {
          table[i][j] = 1;
          if(k > result.length) {
            result = s.slice(i, j+1);
          }
        }
        i++;
      }
      k++;
    }
    return result
  
      
  };