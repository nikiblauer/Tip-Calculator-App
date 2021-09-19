

let percentage = 0;



$(".btn").on("click", function(event) {
  $(".btn").removeClass("btn_clicked")
  $(this).addClass("btn_clicked");
  percentage = Number($(this).text());
});


$("#num_people_input").on("input", function(event) {
  if($(this).val() === "0"){
    $(".t2.text_input").addClass("zero_input");
  } else {
    $(".t2.text_input").removeClass("zero_input");
  }
});


$("form").on("input", function(event) {
  let bill = Number($("bill_input").val());
  let num_people = Number($("num_people_input").val());

});
