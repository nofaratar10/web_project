(function () {
  var form = document.getElementById("meetingForm");

  var personRole = document.getElementById("personRole");
  var fullName = document.getElementById("fullName");
  var personId = document.getElementById("personId");
  var contactPhone = document.getElementById("contactPhone");
  var meetingTopic = document.getElementById("meetingTopic");
  var meetingDate = document.getElementById("meetingDate");
  var meetingDetails = document.getElementById("meetingDetails");

  var formMessage = document.getElementById("formMessage");

  function setError(field, errEl, msg) {
    field.classList.add("field-error");
    errEl.innerHTML = msg;
  }

  function clearError(field, errEl) {
    field.classList.remove("field-error");
    errEl.innerHTML = "";
  }

  function isPhoneValid(val) {
    // ולידציה JS 1: חייב להתחיל ב-05 ולהיות 10 ספרות
    return /^05[0-9]{8}$/.test(val);
  }

  function isTextLongEnough(val) {
    // ולידציה JS 2: מינימום 20 תווים
    return (val || "").trim().length >= 20;
  }

  form.onsubmit = function (e) {
    var ok = true;

    // reset message
    formMessage.style.display = "none";
    formMessage.innerHTML = "";

    // role
    if (personRole.value === "") {
      setError(personRole, document.getElementById("roleError"), "נא לבחור סוג פונה.");
      ok = false;
    } else {
      clearError(personRole, document.getElementById("roleError"));
    }

    // full name
    if (fullName.value.trim().length < 2) {
      setError(fullName, document.getElementById("nameError"), "נא להכניס שם תקין.");
      ok = false;
    } else {
      clearError(fullName, document.getElementById("nameError"));
    }

    // id (9 digits)
    if (!/^[0-9]{9}$/.test(personId.value.trim())) {
      setError(personId, document.getElementById("idError"), "מספר מזהה חייב להיות 9 ספרות.");
      ok = false;
    } else {
      clearError(personId, document.getElementById("idError"));
    }

    // phone (JS)
    if (!isPhoneValid(contactPhone.value.trim())) {
      setError(contactPhone, document.getElementById("phoneError"), "טלפון חייב להיות בפורמט 05XXXXXXXX.");
      ok = false;
    } else {
      clearError(contactPhone, document.getElementById("phoneError"));
    }

    // topic
    if (meetingTopic.value === "") {
      setError(meetingTopic, document.getElementById("topicError"), "נא לבחור נושא פגישה.");
      ok = false;
    } else {
      clearError(meetingTopic, document.getElementById("topicError"));
    }

    // date
    if (meetingDate.value === "") {
      setError(meetingDate, document.getElementById("dateError"), "נא לבחור תאריך.");
      ok = false;
    } else {
      clearError(meetingDate, document.getElementById("dateError"));
    }

    // details (JS)
    if (!isTextLongEnough(meetingDetails.value)) {
      setError(meetingDetails, document.getElementById("detailsError"), "נא לכתוב לפחות 20 תווים.");
      ok = false;
    } else {
      clearError(meetingDetails, document.getElementById("detailsError"));
    }

    if (!ok) {
      e.preventDefault();
      formMessage.style.display = "block";
      formMessage.innerHTML = "יש שגיאות בטופס — בדקי את השדות המסומנים.";
      return false;
    }

    // משוב מידי גם אם שולחים לשרת
    formMessage.style.display = "block";
    formMessage.innerHTML = "הטופס תקין. שולח/ת ושומר/ת לבסיס הנתונים...";
    return true;
  };
})();
