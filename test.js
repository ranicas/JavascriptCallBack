// function scheduleGreatMovieReminder (movie) {
//   // remind in one min
//   setTimeout(function () {
//       console.log("Remember to watch: " + movie);
//     }, 2 * 1000
//   );
// }
//
// scheduleGreatMovieReminder("Citizen Kane");
// scheduleGreatMovieReminder("Touch of Evil");
// scheduleGreatMovieReminder("The Third Man");
//
//

function setMovieReminder(movie, callback){
  setTimeout(function(){
    callback();
    console.log("watch " + movie);
    
  }, 1000)
}
setMovieReminder("Amelie", function(){
  setMovieReminder("Ratatoullie", function(){
    setMovieReminder("Inception", function(){ console.log("we're done!")});
  })
})


setReminder for amelie => remind in 1 second
  amelie callback => set reminder for rat, display amelie info
    rat callback => set reminder for inception, display rat info
      inception callback => print we
    
    var fn = function (callback) {
        addTwoNumbers(function (result) {
          totalSum += result;

          console.log("sum: " + result);
          console.log("totalSum: " + totalSum);

          callback();
        });
      }, 
        
      var completionFn = function () {
        console.log("All done! totalSum: " + totalSum);
        reader.close();}
        
      absurdTimes(3, fn, completionFn);
      
      