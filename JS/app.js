//The URIs of the REST endpoint
IUPS =
  "https://prod-56.northeurope.logic.azure.com:443/workflows/c03a6e0459494fb48fe671fdee2f2779/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=MDOLrBlr145NiBNMY0m6HGC8iCyeW7XfvJYTvVaai_o";
RAI =
  "https://prod-46.northeurope.logic.azure.com:443/workflows/daf0d0a41caf4b7b89ae004b36f004fd/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SQHP8D4m1-NfwC1ZMUuAxvzC2ECNwqysVi_ZPnqACCg";
RAA =
  "https://prod-62.northeurope.logic.azure.com/workflows/4e36fb80ab9c4d7091e02dac6c923180/triggers/manual/paths/invoke/rest/v1/videos?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Eyyb7ayFKiZme25bj_cChxy-lPjV7lI6WlV-RhCiBbQ";
RAC =
  "https://prod-47.northeurope.logic.azure.com/workflows/d6eea5e8ce624513baf798f618a3a051/triggers/manual/paths/invoke/rest/v1/videos?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=CDexpiHl8aCsqaFSruqh58kXecN8mRvzEv-ktW7I5_8";
RACH =
  "https://prod-16.northeurope.logic.azure.com/workflows/7b2d87759ab141589a22195709208a78/triggers/manual/paths/invoke/rest/v1/videos?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=p0C_a6iVa5Ruwn9DHwVoMQGTG0eQhiT13kQEGgG7urE";
RAH =
  "https://prod-57.northeurope.logic.azure.com/workflows/f7a0e40d5b964fba8114a528229d2e60/triggers/manual/paths/invoke/restv1/videos?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rcUDz8ihabtoQND1Fv7WisZ8NywivRX69eCC7re18U0";
RIP =
  "https://prod-14.northeurope.logic.azure.com/workflows/75c05ec4647144f9b0669350eb0e77fc/triggers/manual/paths/invoke/rest/v1/videos?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Oz8LmBJk_Dr6U_o8ChRt8ZAJqvPllxWLsFPn0hx-91Q";
RIT =
  "https://prod-02.northeurope.logic.azure.com/workflows/73351c7b118d49ed8ec159cf098f0125/triggers/manual/paths/invoke/rest/v1/videos?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lPpJx2M9p3Ju4Taut2XPfUprqk0hS0qeLKSXMBmvmM8";
RIF =
  "https://prod-02.northeurope.logic.azure.com/workflows/dbca784d5f9046eb8203ede3e7b930b7/triggers/manual/paths/invoke/rest/v1/videos?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NUaIKV6X7AvzvWmrA6HcehukZiHLlzZ7v95qOGgMVvc";
RIE =
  "https://prod-50.northeurope.logic.azure.com/workflows/f31ef825e502438a8decbeddb5fe009d/triggers/manual/paths/invoke/rest/v1/videos?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=VB145oEd1pDk5qjsl-c2yAsQcGUAL7ue4RIJZAnQhJ0";
CIAURI =
  "https://prod-56.northeurope.logic.azure.com/workflows/41904a6ea4294d1ea48fcefb5a042080/triggers/manual/paths/invoke/rest/v1/users?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=3SsdCFFSeRhoGsJvwVMcdeHJeMouJaCrzbnfJjhgci0";
BLOB_ACCOUNT = "https://videostorageb00907769.blob.core.windows.net";

//Handlers for button clicks
$(document).ready(function () {
  //Handler for the new asset submission button
  $("#subNewForm").click(function () {
    //Execute the submit new asset function
    submitNewAsset();
    toggleGenreSearch();
    toggleAgeSearch();
  });

  $("#subNewForm").click(function () {
    //Run the get asset list function
    getVideoList();
  });

  $("#ActionSearch").click(function () {
    getActionList();
  });

  $("#HorrorSearch").click(function () {
    getHorrorList();
  });

  $("#ComedySearch").click(function () {
    getComedyList();
  });

  $("#ChildrensSearch").click(function () {
    getChildrensList();
  });

  $("#PGSearch").click(function () {
    getPGList();
  });

  $("#TwelveSearch").click(function () {
    getTwelveList();
  });

  $("#FifteenSearch").click(function () {
    getFifteenList();
  });

  $("#EighteenSearch").click(function () {
    getEighteenList();
  });
});

//A function to submit a new asset to the REST endpoint
function submitNewAsset() {
  //Adding new code below here
  var subObj = {
    FirstName: $("#NewFirstName").val(),
    Surname: $("#NewSurname").val(),
    EmailAddress: $("#NewEmailAddress").val(),
    Password: $("#NewPassword").val(),
  };

  subObj = JSON.stringify(subObj);
  $.post({
    url: CIAURI,
    data: subObj,
    contentType: "application/json; charset=utf-8",
  }).done(function (response) {
    getVideoList();
  });
}

//Added new code above here
function toggleGenreSearch() {
  var myAction = document.getElementById("ActionSearch");
  var myComedy = document.getElementById("ComedySearch");
  var myChildrens = document.getElementById("ChildrensSearch");
  var myHorror = document.getElementById("HorrorSearch");
  var myAge = document.getElementById("AgeSearchForm");
  var displayActionSetting = myAction.style.display;
  var displayHorrorSetting = myHorror.style.display;
  var displayComedySetting = myComedy.style.display;
  var displayChildrensSetting = myChildrens.style.display;
  if (displayActionSetting == "block") {
    myAction.style.display = "none";
  } else {
    myAction.style.display = "block";
  }
  if (displayHorrorSetting == "block") {
    myHorror.style.display = "none";
  } else {
    myHorror.style.display = "block";
  }
  if (displayComedySetting == "block") {
    myComedy.style.display = "none";
  } else {
    myComedy.style.display = "block";
  }
  if (displayChildrensSetting == "block") {
    myChildrens.style.display = "none";
  } else {
    myChildrens.style.display = "block";
  }
}

function toggleAgeSearch() {
  var myPG = document.getElementById("PGSearch");
  var myTwelve = document.getElementById("TwelveSearch");
  var myFifteen = document.getElementById("FifteenSearch");
  var myEighteen = document.getElementById("EighteenSearch");
  var displayPGSetting = myPG.style.display;
  var displayTwelveSetting = myTwelve.style.display;
  var displayFifteenSetting = myFifteen.style.display;
  var displayEighteenSetting = myEighteen.style.display;
  if (displayPGSetting == "block") {
    myPG.style.display = "none";
  } else {
    myPG.style.display = "block";
  }
  if (displayTwelveSetting == "block") {
    myTwelve.style.display = "none";
  } else {
    myTwelve.style.display = "block";
  }
  if (displayFifteenSetting == "block") {
    myFifteen.style.display = "none";
  } else {
    myFifteen.style.display = "block";
  }
  if (displayEighteenSetting == "block") {
    myEighteen.style.display = "none";
  } else {
    myEighteen.style.display = "block";
  }
}
//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getVideoList() {
  //Replace the current HTML in that div with a loading message
  $("#ImageList").html(
    '<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>'
  );
  $.getJSON(RAI, function (data) {
    //Create an array to hold all the retrieved assets
    var items = [];

    //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
    $.each(data, function (key, val) {
      items.push("<hr />");
      items.push(
        "<video controls width='320'> <source src='" +
          BLOB_ACCOUNT +
          val["filepath"] +
          "' height='40'/> </video> <br />"
      );
      items.push(
        "File : " + val["fileName"] + "(Genre: " + val["genre"] + ") <br />"
      );
      items.push(
        "Uploaded by: " +
          val["userName"] +
          " (user id: " +
          val["userID"] +
          ")<br />"
      );
      items.push("Age Rating: " + val["ageRating"] + "<br />");
      items.push("Producer: " + val["producer"] + "<br />");
      items.push("<hr />");
    });
    //Clear the assetlist div
    $("#ImageList").empty();
    //Append the contents of the items array to the ImageList Div
    $("<ul/>", {
      class: "my-new-list",
      html: items.join(""),
    }).appendTo("#ImageList");
  });
}
//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getActionList() {
  //Replace the current HTML in that div with a loading message
  $("#ImageList").html(
    '<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>'
  );
  $.getJSON(RAA, function (data) {
    //Create an array to hold all the retrieved assets
    var items = [];

    //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
    $.each(data, function (key, val) {
      items.push("<hr />");
      items.push(
        "<video controls width='320'> <source src='" +
          BLOB_ACCOUNT +
          val["filepath"] +
          "' height='40'/> </video> <br />"
      );
      items.push(
        "File : " + val["fileName"] + "(Genre: " + val["genre"] + ") <br />"
      );
      items.push(
        "Uploaded by: " +
          val["userName"] +
          " (user id: " +
          val["userID"] +
          ")<br />"
      );
      items.push("Age Rating: " + val["ageRating"] + "<br />");
      items.push("Producer: " + val["producer"] + "<br />");
      items.push("<hr />");
    });
    //Clear the assetlist div
    $("#ImageList").empty();
    //Append the contents of the items array to the ImageList Div
    $("<ul/>", {
      class: "my-new-list",
      html: items.join(""),
    }).appendTo("#ImageList");
  });
}
//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getComedyList() {
  //Replace the current HTML in that div with a loading message
  $("#ImageList").html(
    '<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>'
  );
  $.getJSON(RAC, function (data) {
    //Create an array to hold all the retrieved assets
    var items = [];

    //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
    $.each(data, function (key, val) {
      items.push("<hr />");
      items.push(
        "<video controls width='320'> <source src='" +
          BLOB_ACCOUNT +
          val["filepath"] +
          "' height='40'/> </video> <br />"
      );
      items.push(
        "File : " + val["fileName"] + "(Genre: " + val["genre"] + ") <br />"
      );
      items.push(
        "Uploaded by: " +
          val["userName"] +
          " (user id: " +
          val["userID"] +
          ")<br />"
      );
      items.push("Age Rating: " + val["ageRating"] + "<br />");
      items.push("Producer: " + val["producer"] + "<br />");
      items.push("<hr />");
    });
    //Clear the assetlist div
    $("#ImageList").empty();
    //Append the contents of the items array to the ImageList Div
    $("<ul/>", {
      class: "my-new-list",
      html: items.join(""),
    }).appendTo("#ImageList");
  });
}
//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getChildrensList() {
  //Replace the current HTML in that div with a loading message
  $("#ImageList").html(
    '<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>'
  );
  $.getJSON(RACH, function (data) {
    //Create an array to hold all the retrieved assets
    var items = [];

    //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
    $.each(data, function (key, val) {
      items.push("<hr />");
      items.push(
        "<video controls width='320'> <source src='" +
          BLOB_ACCOUNT +
          val["filepath"] +
          "' height='40'/> </video> <br />"
      );
      items.push(
        "File : " + val["fileName"] + "(Genre: " + val["genre"] + ") <br />"
      );
      items.push(
        "Uploaded by: " +
          val["userName"] +
          " (user id: " +
          val["userID"] +
          ")<br />"
      );
      items.push("Age Rating: " + val["ageRating"] + "<br />");
      items.push("Producer: " + val["producer"] + "<br />");
      items.push("<hr />");
    });
    //Clear the assetlist div
    $("#ImageList").empty();
    //Append the contents of the items array to the ImageList Div
    $("<ul/>", {
      class: "my-new-list",
      html: items.join(""),
    }).appendTo("#ImageList");
  });
}
//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getHorrorList() {
  //Replace the current HTML in that div with a loading message
  $("#ImageList").html(
    '<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>'
  );
  $.getJSON(RAH, function (data) {
    //Create an array to hold all the retrieved assets
    var items = [];

    //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
    $.each(data, function (key, val) {
      items.push("<hr />");
      items.push(
        "<video controls width='320'> <source src='" +
          BLOB_ACCOUNT +
          val["filepath"] +
          "' height='40'/> </video> <br />"
      );
      items.push(
        "File : " + val["fileName"] + "(Genre: " + val["genre"] + ") <br />"
      );
      items.push(
        "Uploaded by: " +
          val["userName"] +
          " (user id: " +
          val["userID"] +
          ")<br />"
      );
      items.push("Age Rating: " + val["ageRating"] + "<br />");
      items.push("Producer: " + val["producer"] + "<br />");
      items.push("<hr />");
    });
    //Clear the assetlist div
    $("#ImageList").empty();
    //Append the contents of the items array to the ImageList Div
    $("<ul/>", {
      class: "my-new-list",
      html: items.join(""),
    }).appendTo("#ImageList");
  });
}
//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getPGList() {
  //Replace the current HTML in that div with a loading message
  $("#ImageList").html(
    '<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>'
  );
  $.getJSON(RIP, function (data) {
    //Create an array to hold all the retrieved assets
    var items = [];

    //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
    $.each(data, function (key, val) {
      items.push("<hr />");
      items.push(
        "<video controls width='320'> <source src='" +
          BLOB_ACCOUNT +
          val["filepath"] +
          "' height='40'/> </video> <br />"
      );
      items.push(
        "File : " + val["fileName"] + "(Genre: " + val["genre"] + ") <br />"
      );
      items.push(
        "Uploaded by: " +
          val["userName"] +
          " (user id: " +
          val["userID"] +
          ")<br />"
      );
      items.push("Age Rating: " + val["ageRating"] + "<br />");
      items.push("Producer: " + val["producer"] + "<br />");
      items.push("<hr />");
    });
    //Clear the assetlist div
    $("#ImageList").empty();
    //Append the contents of the items array to the ImageList Div
    $("<ul/>", {
      class: "my-new-list",
      html: items.join(""),
    }).appendTo("#ImageList");
  });
}
//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getTwelveList() {
  //Replace the current HTML in that div with a loading message
  $("#ImageList").html(
    '<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>'
  );
  $.getJSON(RIT, function (data) {
    //Create an array to hold all the retrieved assets
    var items = [];

    //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
    $.each(data, function (key, val) {
      items.push("<hr />");
      items.push(
        "<video controls width='320'> <source src='" +
          BLOB_ACCOUNT +
          val["filepath"] +
          "' height='40'/> </video> <br />"
      );
      items.push(
        "File : " + val["fileName"] + "(Genre: " + val["genre"] + ") <br />"
      );
      items.push(
        "Uploaded by: " +
          val["userName"] +
          " (user id: " +
          val["userID"] +
          ")<br />"
      );
      items.push("Age Rating: " + val["ageRating"] + "<br />");
      items.push("Producer: " + val["producer"] + "<br />");
      items.push("<hr />");
    });
    //Clear the assetlist div
    $("#ImageList").empty();
    //Append the contents of the items array to the ImageList Div
    $("<ul/>", {
      class: "my-new-list",
      html: items.join(""),
    }).appendTo("#ImageList");
  });
}
//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getFifteenList() {
  //Replace the current HTML in that div with a loading message
  $("#ImageList").html(
    '<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>'
  );
  $.getJSON(RIF, function (data) {
    //Create an array to hold all the retrieved assets
    var items = [];

    //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
    $.each(data, function (key, val) {
      items.push("<hr />");
      items.push(
        "<video controls width='320'> <source src='" +
          BLOB_ACCOUNT +
          val["filepath"] +
          "' height='40'/> </video> <br />"
      );
      items.push(
        "File : " + val["fileName"] + "(Genre: " + val["genre"] + ") <br />"
      );
      items.push(
        "Uploaded by: " +
          val["userName"] +
          " (user id: " +
          val["userID"] +
          ")<br />"
      );
      items.push("Age Rating: " + val["ageRating"] + "<br />");
      items.push("Producer: " + val["producer"] + "<br />");
      items.push("<hr />");
    });
    //Clear the assetlist div
    $("#ImageList").empty();
    //Append the contents of the items array to the ImageList Div
    $("<ul/>", {
      class: "my-new-list",
      html: items.join(""),
    }).appendTo("#ImageList");
  });
}
//A function to get a list of all the assets and write them to the Div with the AssetList Div
function getEighteenList() {
  //Replace the current HTML in that div with a loading message
  $("#ImageList").html(
    '<div class="spinner-border" role="status"><span class="sr-only"> &nbsp;</span>'
  );
  $.getJSON(RIE, function (data) {
    //Create an array to hold all the retrieved assets
    var items = [];

    //Iterate through the returned records and build HTML, incorporating the key values of the record in the data
    $.each(data, function (key, val) {
      items.push("<hr />");
      items.push(
        "<video controls width='320'> <source src='" +
          BLOB_ACCOUNT +
          val["filepath"] +
          "' height='40'/> </video> <br />"
      );
      items.push(
        "File : " + val["fileName"] + "(Genre: " + val["genre"] + ") <br />"
      );
      items.push(
        "Uploaded by: " +
          val["userName"] +
          " (user id: " +
          val["userID"] +
          ")<br />"
      );
      items.push("Age Rating: " + val["ageRating"] + "<br />");
      items.push("Producer: " + val["producer"] + "<br />");
      items.push("<hr />");
    });
    //Clear the assetlist div
    $("#ImageList").empty();
    //Append the contents of the items array to the ImageList Div
    $("<ul/>", {
      class: "my-new-list",
      html: items.join(""),
    }).appendTo("#ImageList");
  });
}
