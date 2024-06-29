
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const body = document.querySelector('body');
const nickName = document.querySelector('.nickName');
const visualImg = document.querySelector('.visual img');
const navigation = document.querySelector('.nav');
const ul = document.querySelector('ul');

let playing = null;


//navigation 클릭 이벤트
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


// 배경 색상 변경
function setBgColor(index){
  const colorA = data[index-1].color[0];
  const colorB = data[index-1].color[1];

  body.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
}


// 메인 이미지 변경
function setImage(index){
  visualImg.src = `./assets/${data[index-1].name}.jpeg`;
  visualImg.alt = data[index-1].alt;
}


// 텍스트 변경
function setNameText(index){
  nickName.textContent = data[index-1].name;
}


// 포커스 변경 (포커스 이미지 테두리)
function setFocus(target){
  const children = [...ul.children];

  children.forEach( li => li.classList.remove('is-active'));

  target.classList.add('is-active');
}


// 오디오 변경
function setAudio(index){
  if(playing){
    playing.stop();
  }

  const audioSource = `./assets/audio/${data[index-1].name}.m4a`;
  const player = new AudioPlayer(audioSource);

  player.play();

  playing = player;
}


navigation.addEventListener('click',handleClick)