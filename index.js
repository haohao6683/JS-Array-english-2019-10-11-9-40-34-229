<html>
<head>
<script>
// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0; i<a.length; i++){
  a[i] = a[i]*2;
}
alert(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1 = colors.join(" ");
var case2 = colors.join("+");
var case3 = colors.join(",");
alert(case1);
alert(case2);
alert(case3);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(x, y) {
  return y - x;
});
alert(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'0
// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'0
function findMost (arr) {
  if (!arr.length) return;
  if (arr.length === 1) return 1;
  let maxName, maxNum = 0
  let res = arr.reduce((res, currentNum) => {
    res[currentNum] ? res[currentNum] += 1 : res[currentNum] = 1
    if (res[currentNum] > maxNum) {
      maxNum = res[currentNum]
      maxName = currentNum
    }
    return res
  }, {})
  return '出现次数最多的元素为:' + maxName + ', 出现次数为:' + maxNum;
}
alert(findMost(a));
</script>
</head>

<body>
</body>
</html>
