

let percentage = 0;



$(".btn").on("click", function(event) {
  $(".btn").removeClass("btn_clicked")
  $(this).addClass("btn_clicked");
  if(!($(this).hasClass("btn_custom"))){
    percentage = Number($(this).text().replace("%", ""));
  }

  calculate();
});

$(".btn.btn_custom").on("input", function(event) {
  percentage = Number($(this).val());
  calculate();
});


$("#num_people_input").on("input", function(event) {
  if($(this).val() === "0"){
    $(".t2.text_input").addClass("zero_input");
  } else {
    $(".t2.text_input").removeClass("zero_input");
  }
});

$("#bill_input").on("input", function(event) {
  if($(this).val() === "0"){
    $(".t1.text_input").addClass("zero_input");
  } else {
    $(".t1.text_input").removeClass("zero_input");
  }
});


$("form").on("input", function(event) {
  calculate();
});


$(".reset_btn").on("click", function(event) {
  $("#bill_input").val("");
  $(".btn").removeClass("btn_clicked");
  percentage = "";
  $(".btn.btn_custom").val("");
  $("#num_people_input").val("");


  $(".tip").text("$0.00");
  $(".total_bill").text("$0.00");
});



function calculate(){
  const bill = Number($("#bill_input").val());
  const num_people = Number($("#num_people_input").val());

  const isBill = (bill !== 0) && (!Number.isNaN(bill));
  const isPercentage = (percentage !== 0) && (!Number.isNaN(percentage));
  const isNumPeople = (num_people !== 0) && (!Number.isNaN(num_people));

  if(isBill && isPercentage && isNumPeople){
    let splittedBill = bill / num_people;
    let tip = splittedBill * (percentage/100);
    let total = splittedBill + tip;

    const tipString = "$" + tip.toFixed(2);
    const totalString = "$" + total.toFixed(2);


    $(".tip").text(tipString);
    $(".total_bill").text(totalString);

  }
}
