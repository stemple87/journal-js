var count = require('./../js/count.js').count;

$(document).ready(function(){
  $('#form-entry').submit(function(event){
    event.preventDefault();
    var title = $('#titleId').val();
    var journalEntry = $('#textAreaId').val();
    var output = count(journalEntry);
      $('#titleToPage').text(title);
      $('#paragraphToPage').text(journalEntry);
      $('#outputToPage').text("Your journal entry had " + output + " words.");
  });
});
