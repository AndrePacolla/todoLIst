const inputTask = document.querySelector(".input-task");
const buttonTask = document.querySelector(".button-adc-task");
const ul = document.querySelector(".list-task");

let myList = [];

function getTask() {
  if (inputTask.value.length) {
      myList.push({
      task: inputTask.value,
      complete: false,
    });
  } else {
    alert("ATENÇÃO Campo vazio.. Adicione uma tarefa ! ");
  }

  inputTask.value = "";
  showTask();
}

function showTask() {
  let newList = "";

  myList.forEach((value, index) => {
    newList += `
    <li class="task ${value.complete && "done"}">
      <img class='checked' src="assets/checked.png" alt="checked" onclick ='completeTask(${index})'/>
      <p>${value.task}</p>
      <img class='trash' src="assets/trash.png" alt="trash" onclick ='deleteTask(${index})'/>
    </li>`;
  });

  ul.innerHTML = `${newList}`;
}

function completeTask(i) {
  myList[i].complete = !myList[i].complete;
  showTask();
}

function deleteTask(i) {
  myList.splice(i, 1);
  showTask();
}


buttonTask.addEventListener("click", getTask);
