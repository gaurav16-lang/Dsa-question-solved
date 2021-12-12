function find(i,j,str1,str2,dp)
{
if(i>=str1.length || j>=str2.length)
{
    return 0
}
if(dp[i][j]!=-1)
{
    return dp[i][j];
}
if(str1[i]==str2[j])
{
    return 1+find(i+1,j+1,str1,str2,dp);
}
var ltree = find(i+1,j,str1,str2,dp);
var rtree = find(i,j+1,str1,str2,dp);
return dp[i][j]= Math.max(ltree,rtree);
}




function runProgram(input) {
    var str = input.trim().split("\n");
   
     var str1 = str[0].trim().split("");
     var str2 = str[1].trim().split("");
    
     var test =Math.max(str1.length,str2.length)
     
     var gfg = new Array(test);
    
     for (var i = 0; i < gfg.length; i++) {
      gfg[i] = new Array(test);
  }
  for (var i = 0; i < test; i++) {
    for (var j = 0; j < test; j++) {
        gfg[i][j] = -1;
    }
}
   
    var ans  = find(0,0,str1,str2,gfg)
    console.log(ans);
    
   
  }
  if (process.env.USERNAME === "hp") {
    runProgram(`AEDFHR
    ABCDGH`);
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
  
  