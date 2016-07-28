$(document).ready(function() {
/*
  $.ajax({
      url : "blog.txt",
      dataType: "text",
      success : function (data) {
          $(".blog").html(data);
      }
  });
*/
	$("#education").click(function() {
		$("#collapsable1").slideToggle("slow");
	});
	$("#programming").click(function() {
		$("#collapsable2").slideToggle("slow");
	});

 	$("#other").click(function() {
		$("#collapsable3").slideToggle("slow");

	});

 	$("#photography").click(function() {
		$("#collapsable4").slideToggle("slow");

	});

 	$("#plein-air").click(function() {
		$("#collapsable5").slideToggle("slow");
	});

 	$("#still-life").click(function() {
		$("#collapsable6").slideToggle("slow");

	});
});
