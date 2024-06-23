
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const inputId = document.querySelector('#userEmail');
const inputPw = document.querySelector('#userPassword');
const form = document.querySelector('.login-form');


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


//정규표현식을 사용한 validation
function isValidEmail(node, text){
  emailReg(text) ? node.classList.remove('is--invalid') : node.classList.add('is--invalid')
}

function isValidPw(node, text){
  pwReg(text) ? node.classList.remove('is--invalid') : node.classList.add('is--invalid')
}


//상태 변수 관리
function handleInputChange(e,type){
  if(type === 0)
    isValidEmail(inputId, e.target.value);
  else
    isValidPw(inputPw, e.target.value);
}

inputId.addEventListener('input', e => handleInputChange(e,0));
inputPw.addEventListener('input', e => handleInputChange(e,1));


//로그인 버튼 클릭시 조건처리
form.addEventListener('submit', e => {
  e.preventDefault(); //405 에러 처리

  if(inputId.value === user.id && inputPw.value === user.pw)
    window.location.href = 'welcome.html';
  else 
    alert('아이디 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.');
});
