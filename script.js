function addTask() {
  let subject = document.getElementById("subject").value;
  let time = document.getElementById("time").value;

  if(subject == "" || time == "") {
    alert("Please enter subject and time!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = subject + " 📚 at " + time;

  document.getElementById("taskList").appendChild(li);

  document.getElementById("subject").value = "";
  document.getElementById("time").value = "";
}