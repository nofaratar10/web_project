$(document).ready(function () {
  $("#alertsText").html("התראות פעילות: 2");

  $("#toggleAlerts").click(function () {
    $("#alertsArea").fadeToggle(400);
  });

  $("#markAll").click(function () {
    $("#alertsArea").addClass("msg");
    $("#alertsArea").html("<p><strong>בוצע:</strong> כל ההתראות סומנו כנקראו.</p>");
    $("#alertsText").html("התראות פעילות: 0");
  });
});
