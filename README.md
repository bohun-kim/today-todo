# today_todo

![](https://velog.velcdn.com/images/bohun-kim/post/4ddb358d-a3b3-4305-abe6-78a449e61898/image.png)

자바스크립트를 이용하여 오늘을 할 일을 기록하는 투두리스트 입니다.

# 목표

- HTML, CSS, Javascript 만을 이용한 웹앱 만들기
- 자바스크립트 DOM 조작하여 동적으로 사이트 만들기

# 사용기술

- HTML, CSS, Javascript

# 소요기간

- 1일

# 주요기능

1. [input 값 받아오기](#input-값-받아오기)
2. [input 값 입력시 리스트 추가](#input-값-입력시-리스트-추가)
3. [리스트 삭제](#리스트-삭제)

# input 값 받아오기

```js
const buttonId = document.getElementById("add-button");
const inputId = document.getElementById("new-todo");

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
```

1. buttonId, inputId 변수는 html 에 add-button ID 를 가지고 있는 버튼 태그와 new-todo ID 를 가지고 있는 input 태그를 불러옵니다.

2. 그리고 나서 각각 addEventListener 를 통해서 버튼을 클릭했을 때와 Enter 키를 눌렀을 때의 값을 불러와서 화면에 직접적으로 출력해주는 함수인 displayValue() 에 인자 값으로 담아줍니다.

3. 이 때 keyup 메소드를 이용하여 누른 키보드 종류가 Enter 값이 맞을 때만 diplayValue() 함수가 실행됩니다.

# input 값 입력시 리스트 추가

```js
// 3. 받은 input 값 리스트에 추가
function displayValue(buttonEnterValue) {
  if (buttonEnterValue != "") {

    리스트가 추가되는 코드

  } else {
    // input 값이 비워져 있을 때 예외처리
    alert("오늘의 할 일을 입력해보세요!");
  }
}
```

1. 화면에 직접적으로 출력되는 displayValue(buttonEnterValue) 함수는 먼저 입력 필드 값을 입력하지 않고 추가 버튼을 클릭했을 때를 대비하여 입력값이 비어있지 않은 경우 실행되는 코드와 아닐 때의 코드를 작성했습니다.

```

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
    alert("오늘의 할 일을 입력해보세요!");
  }
}
```

2. html 에서 ul 태그를 기준으로 ul > li > div > input, label, button 태그 순으로 appendChild 메소드를 이용하여 리스트를 삽압했습니다.

3. 그리고 마지막으로 입력 필드값을 누르고 리스트가 생성이 됐을 때 필드값이 초기화하여 사용자가 입력 값을 직접 지우지 않도록 기능을 만들었습니다.

# 리스트 삭제

```js
// 4. 리스트 삭제 버튼
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const deleteItem = event.target.closest(".list-item");
    deleteItem.remove();
  }
});
```

4. 리스트 추가 시 삭제 버튼을 만들어 마음에 들지 않거나 완료한 할 일을 지울 수 있습니다.

# 보완할 점

1. html - 웹 표준 및 semantic tag 로 정리
2. css - 사용자들이 사용하고 싶은 스타일 구현
3. js - 라이브러리를 이용하여 금일 날짜 또는 달력을 볼 수 있는 기능
