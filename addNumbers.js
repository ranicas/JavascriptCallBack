var readline = require('readline');
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback){
   
    function getSum(callback) {
        reader.question("Enter a number", function (numString) {
            var num = parseInt(numString);
            sum = sum + num;
            console.log(sum);
            callback();
        });
    }
    
   function loopStep() {
       if (numsLeft == 0) {
           completionCallback(sum);
           return;
       };

       numsLeft--;
       
       getSum(loopStep);   
   }; 
   
   loopStep();
};


addNumbers(0, 3, function (sum) {
    console.log("Total Sum: " + sum);
    reader.close();
});


