function numberofways(n,arr)
{
if(n<0)
{
    return 0;
}
if(n==1||n==0)
{
    return 1;
}
if(arr[n]!=-1)
{
    return arr[n]
}
return arr[n]=numberofways(n-1,arr)+numberofways(n-3,arr)+numberofways(n-4,arr);

}




function runProgram(input) {
    var input =+input;
    var arr = [];

for(var i =0;i<input+1;i++)
{
    arr.push(-1);
}

    var ans = numberofways(input,arr);
    console.log(ans);

   
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
  
  