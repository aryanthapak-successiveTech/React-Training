export const useLocalStorage=()=>{
    const storeData=(key,payload)=>{
        localStorage.setItem(key,payload);
    }

    const removeData=(key)=>{
        localStorage.removeItem(key);
    }

    const getData=(key)=>{
        localStorage.getItem(key);
    }

    return{storeData,removeData,getData}

}