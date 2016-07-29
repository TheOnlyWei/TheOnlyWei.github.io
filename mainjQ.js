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
		$("#collapsable1").slideToggle("fast");
	});
	$("#programming").click(function() {
		$("#collapsable2").slideToggle("fast");
	});

 	$("#other").click(function() {
		$("#collapsable3").slideToggle("fast");

	});

 	$("#photography").click(function() {
		$("#collapsable4").slideToggle("fast");

	});

 	$("#plein-air").click(function() {
		$("#collapsable5").slideToggle("fast");
	});

 	$("#still-life").click(function() {
		$("#collapsable6").slideToggle("fast");

	});

});
