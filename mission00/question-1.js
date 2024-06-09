function getValueAtObject(obj, key) {
  if(typeof obj !== "object" || Array.isArray(obj))
    throw new Error('obj의 값이 객체가 아닙니다.');

  if(typeof key !== "string")
    throw new Error('key의 값이 문자열이 아닙니다.');

  if(obj.hasOwnProperty(key)){
    return obj[key];
  }else{
    throw new Error('해당 key값이 존재하지 않습니다.');
  }
}