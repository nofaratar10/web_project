(function () {
  var name = localStorage.getItem("selectedStudentName");
  var id = localStorage.getItem("selectedStudentId");

  document.getElementById("studentName").innerHTML = name ? name : "לא נבחר/ה סטודנט/ית";
  document.getElementById("studentId").innerHTML = id ? id : "—";

  var note = document.getElementById("noteArea");
  var btn = document.getElementById("highlight");

  btn.onclick = function () {
    // שינוי עיצוב דינמי: מוסיפים/מורידים מחלקה
    if (note.className.indexOf("msg") === -1) {
      note.className = note.className + " msg";
      note.innerHTML = "הערה הודגשה לצורך מעקב.";
    } else {
      note.className = note.className.replace(" msg", "");
      note.innerHTML = "כאן אפשר להציג הערות טיפול (בשלב זה דמה).";
    }
  };
})();
