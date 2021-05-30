export const $GridLayout = `
<div class="ui grid">
  <div class="four wide column"></div>
  <div class="four wide column"></div>
  <div class="four wide column"></div>
  <div class="four wide column"></div>
</div>
`;

export const $WriteForm = `
<div class="form_area">
  <form class="ui form">
    <div class="field">
      <label>TITLE</label>
      <input class="title_input" type="text" name="first-name" placeholder="title">
    </div>
    <div class="field">
      <label>Content</label>
      <input class="content_input" type="text" name="last-name" placeholder="content">
    </div>
    <button class="ui primary button" type="submit">Submit</button>
  </form>
</div>
`

export const card = (item, btnName) => {
  return `
  <div class="ui cards" style="width: 95%">
  <div class="card" style="width: 100%">
      <div class="btn_area">
          ${
            btnName !== "todos"
              ? `
              <button class="${btnName} prev"><i class="large red history icon"></i></button>
              `
              : ""
          }
          <button class="${btnName} next">
            <i class="large teal check circle outline icon link"></i>
          </button>
          <button class="${btnName} modify">
            <i class="large edit outline icon link"></i>
          </button>
          <button class="${btnName} delete">
            <i class="large grey red close icon link"></i>
          </button>
      </div>
      <div class="content">
          <div class="header">${item.title}</div>
          <div class="meta">${item.date}</div>
          <div class="description">${item.contents}</div>
      </div>
  </div>
</div>
  `
};

export const $TodoList = `
<div class="kanban_board todo">
  <h2 class="ui header">
    <i class="keyboard icon"></i>
    <div class="content">
      TODO
    </div>
  </h2>
  <div class="list_area">
    
  </div>
</div>
`

export const $UsingList = `
<div class="kanban_board using">
  <h2 class="ui header">
    <i class="flask icon"></i>
    <div class="content">
      USING
    </div>
  </h2>
  <div class="list_area"></div>
</div>
`;

export const $DoneList = `
<div class="kanban_board done">
  <h2 class="ui header">
    <i class="flag checkered icon"></i>
    <div class="content">
      DONE
    </div>
  </h2>
  <div class="list_area"></div>
</div>
`;

export const $ModifyModal = `
  <div class="modal_contents">
    <button class="modal_close"><i class="large grey white close icon link"></i></button>
    <h1 class="modal_header">수정</h1>
    <div class="modal_body">
      <form class="ui form">
        <div class="field">
          <label>TITLE</label>
          <input class="title_input" type="text" name="first-name" placeholder="title">
        </div>
        <div class="field">
          <label>Content</label>
          <input class="content_input" type="text" name="last-name" placeholder="content">
        </div>
      </form>
    </div>
    <div class="modal_footer">
      <button class="ui primary button">
        Save
      </button>
    </div>
  </div>
`;