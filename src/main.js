const buttonId = document.getElementById("add-button");
const inputId = document.getElementById("new-todo");
const unorderedListId = document.getElementById("todo-list");

// 1. 버튼 클릭시 input 값 생성
buttonId.addEventListener("click", () => {
  const buttonValue = inputId.value;
  displayValue(buttonValue);
});

// 2. 엔터 클릭시 input 값 생성
inputId.addEventListener("keyup", (event) => {
  const enterValue = inputId.value;
  if (event.key === "Enter") {
    displayValue(enterValue);
  }
});

// 3. 받은 input 값 리스트에 추가
function displayValue(buttonEnterValue) {
  if (buttonEnterValue != "") {
    // li 태그 생성
    let newList = document.createElement("li");
    newList.classList.add("list-item");

    // input, label 담을 div 생성
    let liDiv = document.createElement("div");
    liDiv.classList.add("list-div");

    // input 태그 생성
    let newCheckBox = document.createElement("input");
    newCheckBox.type = "checkbox";
    newCheckBox.classList.add("todo");

    // label 태그 생성
    let newLabel = document.createElement("label");
    newLabel.textContent = buttonEnterValue;

    // li 태그 삭제 버튼 생성
    let deleteBtn = document.createElement("button");
    let text = document.createTextNode("삭제");
    deleteBtn.classList.add("delete");
    deleteBtn.appendChild(text);

    newList.appendChild(liDiv);
    liDiv.appendChild(newCheckBox);
    liDiv.appendChild(newLabel);
    liDiv.appendChild(deleteBtn);

    // ul 태그 안에 li 태그 적용
    unorderedListId.appendChild(newList);

    // 입력 필드값 초기화
    inputId.value = "";
  } else {
    // input 값이 비워져 있을 때 예외처리
    alert("할 일을 입력해보세요!");
  }
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const deleteItem = event.target.closest(".list-item");
    deleteItem.remove();
  }
});
