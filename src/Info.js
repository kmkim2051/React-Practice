import React, { useReducer } from 'react';

// reducer 
// 현재 상태(state), 업데이트를 위해 필요한 정보(action)를 전달받아
// 새로운 상태를 반환하는 함수 (불변성 지켜아함)
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  // useReducer(): state, dispatch를 반환
  //  -state: 현재 상태
  //  -dispatch: 액션을 발생시키는 함수 (파라미터로 액션값을 넣어주면 리듀서 함수 호출)
  // 파라미터: 1) 리듀서 함수, 2) 해당 리듀서의 기본값
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
  const onChange = e => {
    // 이벤트 객체의 값을 액션으로 전달
    // useReducer의 액션은 어떤 값도 사용 가능하다.
    dispatch(e.target);
  }

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;