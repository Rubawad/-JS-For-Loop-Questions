// JS Questions on 'for' Loops

// Question 1
// Write a function called sumArray that takes an array of numbers and returns the sum of all numbers using a for loop.
const sumArray = (arr) => {
  // TODO: write your code here
  let sum = 0;
  for(let i=0; i<arr.length; i++ ){
      sum +=arr[i];
  }
  return sum ;
};
// sumArray([1, 2, 3]) => 6
// sumArray([10, 20, 30]) => 60

// Question 2
// Write a function called countOccurrences that takes an array and a value, and returns the number of occurrences of that value in the array using a for loop.
const countOccurrences = (arr, value) => {
  // TODO: write your code here
  let occ = 0;
    for(i=0; i<arr.length; i++){
       if(arr[i] == value){
           occ++;
       }

    }
  return occ;

};
// countOccurrences([1, 2, 2, 3], 2) => 2
// countOccurrences(['a', 'b', 'c', 'a'], 'a') => 2

// Question 3
// Write a function called reverseString that takes a string and returns its reverse using a for loop.
const reverseString = (str) => {
  // TODO: write your code here
  debugger
  let reverse = "" ;
   for(let h=str.length-1; h>=0; h--){
       reverse += str[h];
   }
   return reverse;
  
};
// reverseString('hello') => 'olleh'
// reverseString('world') => 'dlrow'

// Question 4
// Write a function called findMax that takes an array of numbers and returns the largest number using a for loop.
const findMax = (arr) => {
  // TODO: write your code here
  let max = arr[0];
   for(p=1; p<arr.length; p++){
      if(max < arr[p]){
         max=arr[p];
      }else{
        continue;
      }
   }
   return(max);
  
};
// findMax([1, 2, 3]) => 3
// findMax([10, 5, 20, 8]) => 20

// Question 5
// Write a function called isAllPositive that takes an array of numbers and returns true if all numbers are positive, using a for loop.
const isAllPositive = (arr) => {
  // TODO: write your code here
  let zero = 0;
  let t = true;
  for(k=0; k<arr.length; k++){
    if(arr[k] >= zero){
      t &&= true;
    }else{
      t &&= false;
    }
}
return t;
};
// isAllPositive([1, 2, 3]) => true
// isAllPositive([-1, 2, 3]) => false

// Question 6
// Write a function called containsZero that takes an array of numbers and returns true if there's at least one zero in the array, using a for loop.
const containsZero = (arr) => {
  // TODO: write your code here
  const zero = 0;
    let z ='';
    for(let c=0; c<arr.length; c++){
       if(arr[c] == zero){
        z = true;
       }
       }
        let o = z || false;
    return o;
};
// containsZero([1, 2, 3, 0]) => true
// containsZero([1, 2, 3]) => false

// Question 7
// Write a function called multiplyElements that takes an array of numbers and returns the product of all elements using a for loop.
const multiplyElements = (arr) => {
  // TODO: write your code here
  let d = 1;
  for(c=0; c<arr.length; c++){
      d *= arr[c];
  }
  return d;
};
// multiplyElements([1, 2, 3, 4]) => 24
// multiplyElements([2, 5, 6]) => 60

// Question 10
// Write a function called listEvenNumbers that takes a number and lists all even numbers up to that number using a for loop.
const listEvenNumbers = (num) => {
  // TODO: write your code here
  const list = [2];
  for(i=3;i<=num ; i++){
    if(i % 2 == 0){
     list.push(i);
     
    }else{
     continue;
    }
 }
 return list;
};
// listEvenNumbers(6) => '2 4 6'
// listEvenNumbers(10) => '2 4 6 8 10'

// Question 11
// Write a function called repeatString that takes a string and a number, and repeats the string that many times using a for loop.
const repeatString = (str, num) => {
  // TODO: write your code here
  let repeat = '';
  for(let r=1; r<=num; r++){
      repeat += str;
 }
 console.log(repeat);
};
// repeatString('abc', 3) => 'abcabcabc'
// repeatString('x', 5) => 'xxxxx'

// Question 12
// Write a function called createPattern that takes a number and returns a string of '*' repeated in a pattern up to that number using a for loop.
const createPattern = (num) => {
  // TODO: write your code here
  for(let i=1; i<=num; i++){
      let l = '';
    for(let o=1; o<=i; o++){
      l += '*';
    }
    console.log(l);
    /\n/;
  }
};
// createPattern(3) => '*\n**\n***'
// createPattern(5) => '*\n**\n***\n****\n*****'

// Question 13
// Write a function called arraySumTo that takes an array of numbers and a target sum, and checks if any pair of numbers in the array adds up to the target sum.
const arraySumTo = (arr, target) => {
  // TODO: write your code here
  let t = false;
  for(let i=0; i<arr.length; i++){

    for(let u=i+1; u<=arr.length; u++){
       if(arr[i] + arr[u] == target){
         t = true;
       }else{
        continue;
       } 
    }
  }
  return t || false;
};
// arraySumTo([1, 2, 3, 4], 5) => true (because 1+4 or 2+3)
// arraySumTo([1, 2, 3], 6) => false

// Question 14
// Write a function called findDuplicates that takes an array and returns an array of all duplicates using a for loop.
const findDuplicates = (arr) => {
  // TODO: write your code here
  let y = [];
  for(let i=0; i<arr.length; i++){
    for(let u=i+1; u<arr.length; u++){
       if(arr[i] === arr[u]){
          y.push(arr[i]);
       } 
    }
  }
  return y;
};
// findDuplicates([1, 2, 3, 2, 4, 4]) => [2, 4]
// findDuplicates(['a', 'b', 'a']) => ['a']

// Question 15
// Write a function called countVowels that takes a string and returns the number of vowels in the string using a for loop.
const countVowels = (str) => {
  // TODO: write your code here
  let i = 0;
  for(let d=0; d<str.length; d++){
    if (str[d].toLowerCase() === 'a' || str[d].toLowerCase() === 'o' || str[d].toLowerCase() === 'e' || str[d].toLowerCase() === 'u' ||
     str[d].toLowerCase() === 'i'){
        i++;
      }else{
        continue;
      }
  }
  return i;
};
// countVowels('hello') => 2
// countVowels('world') => 1

// Question 16
// Write a function called fibonacciSequence that takes a number and returns an array of Fibonacci sequence up to that number using a for loop.
const fibonacciSequence = (num) => {
  // TODO: write your code here
  const res =[0,1]
  for (let i= 2;i<num;i++) {
    const n = res[i-1] + res[i-2];
    res.push(n)
  }
  
  return res;
};
// fibonacciSequence(5) => [0, 1, 1, 2, 3]
// fibonacciSequence(8) => [0, 1, 1, 2, 3, 5, 8]

// Question 17
// Write a function called isPalindrome that takes a string and returns true if the string is a palindrome (same forward and backward), using a for loop.
const isPalindrome = (str) => {
  // TODO: write your code here
  let c = null;
  let g = null;
  for(let q=0; q<str.length; q++){
    if(g === null){
      g = str[q];
    }else{  
    g += str[q] ;
    }
 }
  for(let t=str.length-1; t>=0; t--){
    if(c === null){
      c = str[t];
    }else{  
    c += str[t] ;
    }
  }
  if(c === g){
    console.log('true');
  }else{
    console.log('false');
  }
};
// isPalindrome('racecar') => true
// isPalindrome('hello') => false

// Question 19
// Write a function called findLongestWord that takes an array of words and returns the longest word using a for loop.
const findLongestWord = (words) => {
  // TODO: write your code here
  let long = words[0].length;
   for(p=1; p<words.length; p++){
      if(long < words[p].length){
        long=words[p];
      }else{
        continue;
      }
   }
   return(long);
};
// findLongestWord(['apple', 'banana', 'grape']) => 'banana'
// findLongestWord(['sky', 'sun', 'moon', 'star']) => 'moon'

// Question 20
// Write a function called sumOfMultiples that takes two numbers, and returns the sum of all multiples of the first number up to the second number using a for loop.
const sumOfMultiples = (multiple, limit) => {
  // TODO: write your code here
  let y = 1;
  let sum = 0;
  let f = 0;
  for(const e=multiple; sum <= limit; y++){
    f = e * y;
    sum += f;     
  }
  console.log(sum);

};
// sumOfMultiples(3, 10) => 18 (3 + 6 + 9)
// sumOfMultiples(5, 20) => 50 (5 + 10 + 15)

// Question 22
// Write a function called areConsecutive that takes an array of numbers and returns true if the numbers are consecutive, otherwise false.
const areConsecutive = (arr) => {
  // TODO: write your code here
  let con = true;
  let unCon = true;
  for(let w=0; w<arr.length-1; w++){
      if(arr[w] === arr[w+1]-1){
        con &&= true;
      }else{
        unCon &&= false;
        break;
      }
  }
  return con && unCon;
};
// areConsecutive([1, 2, 3, 4]) => true
// areConsecutive([1, 3, 2, 4]) => false
