# poster 구현

: 썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀌는 코드 로직.


</br>

### 실행 결과
![실행 결과](/mission02/poster/poster실행결과.gif)

</br>

### 해결 과정
#### 1. 변수
- 태그 선택
```js
const body = document.querySelector('body');
const nickName = document.querySelector('.nickName');
const visualImg = document.querySelector('.visual img');
const navigation = document.querySelector('.nav');
const ul = document.querySelector('ul');
```

- playing: 현재 플레이 중인 오디오를 담을 변수
```js
let playing = null;
```

</br>

#### 2. 이벤트 처리
```js
navigation.addEventListener('click',handleClick)
```

</br>

#### 3. 함수
##### (1) navigation 클릭 시 이벤트
```js
function handleClick(e){
  const target = e.target.closest('li');

  if(!target) return;

  const index = target.dataset.index;

  setBgColor(index);
  setImage(index);
  setNameText(index);

  setFocus(target);
  setAudio(index);
}
```

</br>

##### (2) 배경 색상 변경
```js
function setBgColor(index){
  const colorA = data[index-1].color[0];
  const colorB = data[index-1].color[1];

  body.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
}
```

</br>

##### (3) 메인 이미지 변경
```js
function setImage(index){
  visualImg.src = `./assets/${data[index-1].name}.jpeg`;
  visualImg.alt = data[index-1].alt;
}
```

</br>

##### (4) 텍스트 변경
```js
function setNameText(index){
  nickName.textContent = data[index-1].name;
}
```

</br>

##### (5) 포커스 변경 (포커스 이미지 테두리)
```js
function setFocus(target){
  const children = [...ul.children];

  children.forEach( li => li.classList.remove('is-active'));

  target.classList.add('is-active');
}
```

</br>

##### (6) 오디오 변경
```js
function setAudio(index){
  //오디오가 재생 중인지 체크
  if(playing){
    playing.stop();
  }

  const audioSource = `./assets/audio/${data[index-1].name}.m4a`;
  const player = new AudioPlayer(audioSource);

  player.play();

  playing = player;
}
```