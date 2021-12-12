function runProgram(input) {
    var str = input.trim().split("").map(Number);
    
   
    var dp = [];
 
    for(var i =0;i<str.length;i++)
    {
 
     var count=0;
        for(var j =i;j<str.length;j++)
        {
            
            if(str[j]%2==0)
            {
                count++;
            }
        }
       dp.push(count);
    }
    console.log(dp.join(" "))
 
    
   }
   if (process.env.USERNAME === "hp") {
     runProgram(`574674546476`);
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
   
   