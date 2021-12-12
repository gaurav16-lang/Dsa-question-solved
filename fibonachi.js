



function fib(n,arr)
{
    
    if(n==0||n==1)
    {
        return n;
    }
    if(arr[n]!==-1)
    {
        return arr[n];
    }
    else{
        return arr[n]= fib(n-1,arr)+fib(n-2,arr);
    }
}








function runProgram(input) {
   var input=+input;
  
var arr = [];

for(var i =0;i<input+1;i++)
{
    arr.push(-1);
}

   var t = fib(input,arr);
   console.log(t);
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  