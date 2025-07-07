interface ActionInterface{
    type:string,
    payload:string
}

export const userPreferenceState={
    bedRoom:"",
    food:"",
    tenure:""
};

export const userReducer=(state=userPreferenceState,action:ActionInterface)=>{
    if(action.type==="bedroom"){
        return {...state,bedRoom:action.payload};
    }
    if(action.type==="food"){
        return {...state,food:action.payload};
    }
    if(action.type==="tenure"){
        return {...state,tenure:action.payload};
    }
    else{
        return state;
    }
}