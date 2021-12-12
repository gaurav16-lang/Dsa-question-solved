function runProgram(input) {
    var input =input.trim().split("\n");
    
    var num = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
  
  
    let omax =0;
    var dp =[]
    for(var i=0;i<=num;i++)
    {
        dp.push(0);
    }
    for(var i =0;i<dp.length;i++)
    {
        var max =0;
        for(var j =0;j<i;j++)
        {
            if(arr[j]<arr[i])
            {
                if(dp[j]>max)
                {
                    max =dp[j];
                }
            }
        }
  
  
        dp[i] =max+1;
      
  
        if(dp[i]>omax)
        {
            omax = dp[i];
        }
    }
    console.log(omax);
     
    }
    if (process.env.USERNAME === "hp") {
      runProgram(`9
      10 22 9 33 21 50 41 60 80`);
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
    
    