
$(document).ready(function(){

  $('#serchBar').on("keyup",function(){
    var value = $(this).val().toLowerCase();
      $(this).on("keypress",function(e){
        if(e.which == 12){
          console.log("enter");
        }
      });
    $(".item").filter(function() {
      var found = $(this).text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(found);

    });
  });
});
