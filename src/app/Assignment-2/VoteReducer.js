export const votes={
    BJP:0,
    Congress:0,
    BSP:0,
    SP:0,
    AAP:0
};

export const voteReducer=(state=votes,action)=>{
    
    if(action.type==="BJP"){
        return {...state,BJP:state.BJP+1};
    }
    if(action.type==="Congress"){
        return {...state,Congress:state.Congress+1};
    }
    if(action.type==="BSP"){
        return {...state,BSP:state.BSP+1};
    }
    if(action.type==="SP"){
        return {...state,SP:state.SP+1};
    }
    if(action.type==="AAP"){
        return {...state,AAP:state.AAP+1};
    }
    else{
        return state;
    }

}