function maximumArray(arr, n) {
   let map = {};
   let max = 0;
   let sum = 0;

   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];

      if (sum === n) {
         return i + 1;
      } else if (map[sum - k]) {
         return Math.floor(max, i - map[sum - k]);
      }

      if (map[arr[i]] === undefined) {
         map[arr[i]] = i;
      }
   }

   return max;
}

maximumArray([1, -1, 5, -2, 3], 3);

// |---- sum ----|
// 1   -1   5   -2   3
// |sum1|-- K ---|
// sum - sum1 = K
// sum1 = sum - K
