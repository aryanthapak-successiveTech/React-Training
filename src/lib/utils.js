export const validateName = (payload) => {
  if (!payload.match(/^[a-zA-Z]+$/)) {
    return false;
  }

  return true;
};

export const validateEmail = (payload) => {
  if (!payload.match(/^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/)) {
    return false;
  }

  return true;
};

export const validateNumber=(payload)=>{
    if(!payload.match(/^[6-9][0-9]{9}$/)){
        return false;
    }

    return true;
}

