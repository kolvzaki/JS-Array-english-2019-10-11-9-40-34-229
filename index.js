// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
const res1 = () => {
  let res = a.map((item,index)=>{
    item = item * 2
    return item
  })
  console.log(res);
  return res
}

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
const res2 = () =>{
  return colors.join(' ')
}
// case 2 output: 'Red+Green+White+Black'
const res3 = () => {
  return colors.join('+')
}
// case 3 output: 'Red,Green,White,Black'
const res4 = () => {
  return colors.join()
}

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
const res5 = () => {
  return a.sort((v1,v2)=>{
    return v2-v1
  })
}

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
const res6 = () => {
  let k = {}
  let e = a[0]
  let total = 0
  let arr = []
  a.forEach((item)=>{
    k[item] ? k[item]+=1 : k[item] = 1
  })
  for(const i in k){
    if(total<k[i]){
      total = k[i]
      e = i
      arr = []
    } else if(total === k[i]){
      arr.push(i)
    }
  }
  arr.push(e)
  console.log(arr.join());
  return arr.join()
}