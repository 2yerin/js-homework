# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

</br>

### 실행 결과
![실행 결과](/mission01/naver_login/result/실행%20결과.gif)

</br>

### 해결 과정
#### 1. validation
- 아이디, 비밀번호 입력 값이 없을 경우 
: input 태그의 required
</br>
-  입력 형식이 틀린 경우
: handleInputChange -> isValidEmail -> emailReg 함수
</br>
- 로그인 입력값이 user에 존재하지 않는 경우
: form 태그 'submit' 이벤트 실행 시 조건 처리


</br>

#### 2. 변수
- user : 유저 정보를 담은 객체
``` js
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}
```

- inputID : id 입력 input 태그
```js
const inputId = document.querySelector('#userEmail');
```

- inputPw : pw 입력 input 태그
```js
const inputPw = document.querySelector('#userPassword');
```

- form : 로그인 form 태그
```js
const form = document.querySelector('.login-form');
```


</br>

#### 3. 상태 변수 관리
##### (1) input 태그에 이벤트 처리
```js
function handleInputChange(e,type){
  if(type === 0)
    isValidEmail(inputId, e.target.value);
  else
    isValidPw(inputPw, e.target.value);
}

inputId.addEventListener('input', e => handleInputChange(e,0));
inputPw.addEventListener('input', e => handleInputChange(e,1))
```
- input 태그에 이벤트를 걸어서 값을 입력 받을 때마다 handleInputChange 함수로 이동한다.
- handleInputChange 함수에서 type 값을 통해 id, pw워드 중 입력받은 칸을 체크해서 isValidEmail 혹은 isValidPw 함수로 이동한다.


</br>

##### (2) 정규 표현식을 사용한 이메일 형식 체크
```js
function isValidEmail(node, text){
  emailReg(text) ? node.classList.remove('is--invalid') : node.classList.add('is--invalid')
}

function isValidPw(node, text){
  pwReg(text) ? node.classList.remove('is--invalid') : node.classList.add('is--invalid')
}
```

- emailReg, pwReg 함수에서 정규표현식을 통해 이메일과 비밀번호를 올바른 형식으로 작성했는지 체크한다.
</br>
- 올바르게 작성 한 경우 -> 해당 input 태그에 'is--invalid' 클래스 삭제
- 올바르지 않은 경우 -> 해당 input 태그에 'is--invalid' 클래스 생성
</br>
- is--invalid 클래스가 생성된 경우 에러 메세지를 보여준다.

</br>

![입력 형식 오류](/mission01/naver_login/result/입력%20형식%20오류.png)

#### 4. 로그인 버튼 클릭시 조건처리
```js
form.addEventListener('submit', e => {
  e.preventDefault(); //405 에러 처리

  if(inputId.value === user.id && inputPw.value === user.pw)
    window.location.href = 'welcome.html';
  else 
    alert('아이디 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.');
});
```
- 로그인 버튼을 클릭해 form 태그의 정보가 전달될 때 id와 pw의 로그인 값이 user 객체의 정보와 일치하는지 확인한다.
</br>

- 올바른 경우 -> 페이지 이동
- 올바르지 않은 경우 -> 에러 메세지

</br>

![로그인 실패](/mission01/naver_login/result/로그인%20실패.png)

![로그인 성공](/mission01/naver_login/result/로그인%20성공.png)

