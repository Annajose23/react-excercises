function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let a = A.sort();
 for(var i=0; i<=a.length; i++){
   if(a[i]>0 && a[i] !== 0 && a[i] !== a[i+1]){
     if(a[i] + 1 !== a[i+1]){
       return a[i]+1;
       break;
     }
   } else return 1;
 }
  
}

console.log(solution([-1,-3]));