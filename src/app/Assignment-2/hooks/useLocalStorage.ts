export const useLocalStorage=()=>{
    const storeData=(key:string,payload:string)=>{
        localStorage.setItem(key,payload);
    }

    const removeData=(key:string)=>{
        localStorage.removeItem(key);
    }

    const getData=(key:string)=>{
        localStorage.getItem(key);
    }

    return{storeData,removeData,getData}

}