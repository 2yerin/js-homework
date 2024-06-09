function getNumberAtArray(arr, index) {
  if(!Array.isArray(arr))
    throw new Error('arr의 값이 배열이 아닙니다.');

  if(typeof index !== 'number')
    throw new Error('index의 값이 숫자가 아닙니다.');

  if(0 <= index && index < arr.length){
    return arr[index];
  }else{
    throw new Error('index의 범위값이 유효하지 않습니다.');
  }
}