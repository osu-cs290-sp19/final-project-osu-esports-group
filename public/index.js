function addMember(){
  var name = document.getElementById('join-name-input').value.trim();
  var email = document.getElementById('join-email-input').value.trim();
  var username = document.getElementById('join-username-input').value.trim();
  var year = document.getElementById('join-year-input').value.trim();
  var checkboxes = document.getElementsByTagName('input');
  if(name && email && username && year && (checkboxes[0].checked || checkboxes[1].checked || checkboxes[2].checked || checkboxes[3].checked)){
    var count = 0;
    var trueCheckbox;
    var gameid;
    for (var i = 0; i < checkboxes.length; i++){
      if(checkboxes[i].checked){
        trueCheckbox = checkboxes[i].value
        count++;
      }
    }
    if(count>1){
      alert("Check only one box!");
    } else {
    var postRequest = new XMLHttpRequest();
    var requestURL = '/join/addMember';
    postRequest.open('POST', requestURL);
    if(trueCheckbox==="League of Legends"){
      gameid = "league";
    } else if(trueCheckbox==="Overwatch"){
      gameid = "overwatch";
    } else if(trueCheckbox==="Rocket League"){
      gameid = "rocketleague";
    } else {
      gameid = "csgo";
    }
    var requestBody = JSON.stringify({
      name: name,
      username: username,
      year: year,
      email: email,
      game: trueCheckbox,
      gameid: gameid
    });

    postRequest.addEventListener('load', function (event) {
      if (event.target.status === 200) {
        console.log("Success");
        for (var i = 0; i < checkboxes.length; i++){
          checkboxes[i].checked = false;
        }
        var clearName = document.getElementById('join-name-input');
        var clearEmail = document.getElementById('join-email-input');
        var clearYear = document.getElementById('join-year-input');
        var clearUsername = document.getElementById('join-username-input');
        clearName.value = '';
        clearEmail.value = '';
        clearYear.value = '';
        clearUsername.value = '';
      } else {
        alert("Error storing photo: " + event.target.response);
      }
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(requestBody);
  }
  } else {
      alert("One of the fields is missing");
  }
}

window.addEventListener('DOMContentLoaded', function () {
  console.log("DOM conted loaded, Adding event listeners");
  var submitBtn = document.querySelector('.join-accept-button');
  if(submitBtn){
    submitBtn.addEventListener('click', addMember);
  }

});
