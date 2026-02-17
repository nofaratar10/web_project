(function () {
  function normalize(str) {
    return (str || "").toString().trim().toLowerCase();
  }

  var q = document.getElementById("q");
  var status = document.getElementById("status");
  var clear = document.getElementById("clear");
  var rowsWrap = document.getElementById("rows");
  var countNote = document.getElementById("countNote");

  function applyFilter() {
    var query = normalize(q.value);
    var st = status.value;

    var rows = rowsWrap.getElementsByTagName("tr");
    var shown = 0;

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var text = normalize(row.textContent);
      var rowStatus = row.getAttribute("data-status");

      var okText = (query === "" || text.indexOf(query) !== -1);
      var okStatus = (st === "all" || rowStatus === st);

      if (okText && okStatus) {
        row.style.display = "";
        shown++;
      } else {
        row.style.display = "none";
      }
    }

    countNote.innerHTML = "מוצגים כעת: " + shown + " סטודנטים";
  }

  q.onkeyup = applyFilter;
  status.onchange = applyFilter;

  clear.onclick = function () {
    q.value = "";
    status.value = "all";
    applyFilter();
  };

  // מעבר לתיק סטודנט + העברת מידע
  rowsWrap.onclick = function (e) {
    var target = e.target;
    if (target && target.className.indexOf("open") !== -1) {
      var id = target.getAttribute("data-id");
      var name = target.getAttribute("data-name");

      localStorage.setItem("selectedStudentId", id);
      localStorage.setItem("selectedStudentName", name);

      window.location = "student_profile.html";
    }
  };

  // פונקציה לצביעת רקע הסטטוס
  function colorStatusTags() {
    var tags = document.querySelectorAll(".tag");
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
      var text = normalize(tag.textContent);
      
      if (text === "פעיל") {
        tag.style.backgroundColor = "green";
        tag.style.color = "white";
      } else if (text === "בסיכון") {
        tag.style.backgroundColor = "red";
        tag.style.color = "white";
      } else if (text === "נסגר") {
        tag.style.backgroundColor = "yellow";
        tag.style.color = "black";
      }
    }
  }

  applyFilter();
  colorStatusTags();
})();
