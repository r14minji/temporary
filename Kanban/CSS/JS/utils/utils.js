// 함수: if문 사용. 어떤 문자열을 받아서 길이가 1일 경우 '0숫자'로 리턴한다.
const doubleNum = (num) => {
  if (String(num).length === 1) {
    return `0${num}`;
  }
  return num;
};

export const createDate = () => {
  const today = new Date();
  const year = today.getFullYear(); // 메소드() 마무리 해주기!!!
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours(); //시간도 시 분 으로 나누기!!
  const minute = today.getMinutes();
  const writeDate = `${year}-${doubleNum(month)}-${doubleNum(date)} ${doubleNum(
    hour
  )}:${doubleNum(minute)}}`; //함수 호출할 때 두자리 모양으로 호출해야한다.
  return writeDate;
};

//삭제를 클릭했을 때, 배열에서 지워지고, 그 배열을 다시 저장한다.
//삭제를 클릭하기위해 버튼태그를 가지고 온다. (당연히 여러개이다.) 쿼리셀렉올 이용할 경우 배열이 아니라 노드리스트이기 때문에 [...]이용한다.
// 클릭 이벤트를 실행한다. 여러개 중에 각각에 이벤트를 걸어야하기 때문에 foreach를 사용한다.
// 이벤트는 버튼 클릭시, i번째 버튼으로부터 1개가 삭제된다. ***삭제되는건 버튼이 아니라 i번째 formdata가 삭제!
// 어떻게 가져오지? 파라미터로!
//배열에서 데이터 삭제하는 매서드
// 다시 로컬스토리지에 저장했쒀. 그럼 이제 뭐하지? 리로드해줘야지
//질문,,, 변수를 파라미터로 넘겨도 됨?
// todos, todos

export const cardDelete = (area, list, render) => {
  const deletBtn = document.querySelectorAll(`.${area}.delete`);
  [...deletBtn].forEach((btn, i) => {
    btn.addEventListener("click", () => {
      list.splice(i, 1);
      localStorage.setItem(area, JSON.stringify(list));
      render();
    });
  });
};

// nextCard
export const nextCard = (prevList, nextList, prevArea, nextArea, render) => {
  const nextBtn = document.querySelectorAll(`.${prevArea}.next`);
  [...nextBtn].forEach((btn, i) => {
    btn.addEventListener("click", () => {
      nextList.push(prevList[i]);
      prevList.splice(i, 1);
      localStorage.setItem(prevArea, JSON.stringify(prevList));
      localStorage.setItem(nextArea, JSON.stringify(nextList));
      render();
    });
  });
};

// prevCard
export const prevCard = (prevList, nextList, prevArea, nextArea, render) => {
  const prevBtn = document.querySelectorAll(`.${prevArea}.prev`);
  [...prevBtn].forEach((btn, i) => {
    btn.addEventListener("click", () => {
      nextList.push(prevList[i]);
      prevList.splice(i, 1);
      localStorage.setItem(prevArea, JSON.stringify(prevList));
      localStorage.setItem(nextArea, JSON.stringify(nextList));
      render();
    });
  });
};
