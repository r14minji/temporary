import {
  $GridLayout,
  $WriteForm,
  $TodoList,
  $UsingList,
  $DoneList,
  card,
  $ModifyModal,
} from "./component.js"

import {createDate} from "./utils/utils.js"

//3. 데이터는 배열이다. parse는 객체로 변환시켜줌.
const todos = [] || JSON.parse(localStorage.getItem("todos"))

//4.입력한 데이터가 리스트로 보이려면 cardrender을 실행시켜야함.

//2. 입력하면 저장된다:함수만들기
const FormEvnet = () => {
  //html에서 가지고 온 값을 담는 변수명은 $붙이기
  const $form = document.querySelector('.form_area')
  const $todoInput = document.querySelector('.title_input');
  const $contentInput = document.querySelector('.content_input');
  
  $form.addEventListener("submit", (e) => {
    e.preventdefault;
    const title = $todoInput.value;
    const contents = $contentInput.value;
    const formdata = {title, contents, date: createDate()}
    if (!title) return alert("할 일을 입력해주세요.");
    if (!contents) return alert("내용을 입력해주세요.");
    //저장장소는 localstorage
    localStorage.setItem("todos",JSON.stringify(todos));
    todos.push(formdata)

    //rneder을 실행시켜야 localstorage에 저장된다!
    render();
  })

}

//1. 함수를 실행시켜줄 때 마다 화면을 그리도록
const render = () => {
  const rootArea = document.querySelector('#root');
  rootArea.innerHTML = $GridLayout;
  const col = document.querySelectorAll('.column');
  col[0].innerHTML = $WriteForm
  col[1].innerHTML = $TodoList;
  col[2].innerHTML = $UsingList;
  col[3].innerHTML = $DoneList;

FormEvnet();

}

render();
