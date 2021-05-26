import {
  $GridLayout,
  $WriteForm,
  $TodoList,
  $UsingList,
  $DoneList,
  card,
  $ModifyModal,
} from "./component.js";

import { createDate, cardDelet } from "./utils/utils.js";

const todos = JSON.parse(localStorage.getItem("todos")) || [];
const usings = JSON.parse(localStorage.getItem("usings")) || [];
const dones = JSON.parse(localStorage.getItem("dones")) || [];

//투두 리스트에 보이게 화면 그려줄 차례.
// const cardRender = () => {
//   const $listArea = document.querySelector(".list_area");
//   $listArea.innerHTML = card(todo, "todo");
// };
// 내 논리로는 입력된 카드들이 보이기 위해서는 카드랑 연결될 태그를 가지고 와서, 태그에 카드관련 태그를 넣어주면 되는거 아냐 ㅇㅅㅇ

// 연결될 태그의 클래스명이 같지만 연결될 위치(todo, usig, done은 다름) -> 함수를 사용하자
//map함수는 모든 배열의 값에 function을 실행하는 매서드이다.
//todos라는 변수에 들어가있는 데이터 하나하나하 각각에 html을 그려줘야한다. =map사용
//todos도 있지만 usings, dones 각각 있다.
//일반화(lists)=현재 존재하는 데이터 값들=배열에 각각 html을 그려주고, 해당(list)하는 title값과 date,contents를 넣어준다.
//map함수에는 리턴을 해줘야 뱉어낸 값들이 보인다
const cardRender = (lists, btnName) => {
  const newArr = lists.map((item) => card(item, btnName));
  console.log(newArr);
  return newArr.join("");
};

// 입력했을 때 저장된다.
const FromEvt = () => {
  const FormArea = document.querySelector(".form_area");
  const TitleInput = document.querySelector(".title_input");
  const ContentInput = document.querySelector(".content_input");
  FormArea.addEventListener("submit", (e) => {
    e.preventDefault(); //매소드라서 ()붙여주기
    const title = TitleInput.value; //여기에 값이 나오는걸  console.log 로 확인하고 싶으면 어느타이밍에 확인 가능?
    const content = ContentInput.value;
    if (!title) return alert("할 일을 입력하세요");
    if (!content) return alert("내용을 입력하세요");
    const formdata = { title, content, date: createDate() }; //여기서 만든 값을 배열로  TOdo리스트에 넣어줘야해. 그래서 먼저 배열을 만든다.
    localStorage.setItem("todos", JSON.stringify(todos)); //todos를 로컬스토리지에 저장한다.
    todos.push(formdata); //  배열에 폼데이터 넣어준다.
    render(); //  저장 후에 화면을 다시 그려줘야 보인다.  reload대신 하는 것.
  });
};

const render = () => {
  const $root = document.querySelector("#root");
  $root.innerHTML = $GridLayout;
  const col = document.querySelectorAll(".column");
  col[0].innerHTML = $WriteForm;
  col[1].innerHTML = $TodoList;
  col[2].innerHTML = $UsingList;
  col[3].innerHTML = $DoneList;
  FromEvt();

  const todoUl = document.querySelector(".todo .list_area");
  todoUl.innerHTML = cardRender(todos, "todos");
  const usingUl = document.querySelector(".using .list_area");
  usingUl.innerHTML = cardRender(usings, "usings");
  const doneUl = document.querySelector(".done .list_area");
  doneUl.innerHTML = cardRender(dones, "dones");
};

render();

// //3. 데이터는 배열이다. parse는 객체로 변환시켜줌.
// const todos = JSON.parse(localStorage.getItem("todos")) || [] //둘의 순서가 상관이 있나?

// //4.입력한 데이터가 리스트로 보이려면 cardrender을 실행시켜야함.

// //2. 입력하면 저장된다:함수만들기
// const FormEvnet = () => {
//   //html에서 가지고 온 값을 담는 변수명은 $붙이기
//   const $form = document.querySelector('.form_area')
//   const $todoInput = document.querySelector('.title_input');
//   const $contentInput = document.querySelector('.content_input');

//   $form.addEventListener("submit", (e) => {
//     e.preventdefault;
//     const title = $todoInput.value;
//     const contents = $contentInput.value;
//     const formdata = {title, contents, date: createDate()}
//     if (!title) return alert("할 일을 입력해주세요.");
//     if (!contents) return alert("내용을 입력해주세요.");
//     //저장장소는 localstorage
//     localStorage.setItem("todos",JSON.stringify(todos));
//     todos.push(formdata)

//     //rneder을 실행시켜야 localstorage에 저장된다!
//     render();
//   })

// }

// //1. 함수를 실행시켜줄 때 마다 화면을 그리도록
// const render = () => {
//   const rootArea = document.querySelector('#root');
//   rootArea.innerHTML = $GridLayout;
//   const col = document.querySelectorAll('.column');
//   col[0].innerHTML = $WriteForm
//   col[1].innerHTML = $TodoList;
//   col[2].innerHTML = $UsingList;
//   col[3].innerHTML = $DoneList;

// FormEvnet();

// }

// render();
