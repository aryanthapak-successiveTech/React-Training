import Welcome from "../Components/Welcome";
import { LoginContextProvider } from "../context/LoginContext";

const Question1=()=>{
    return(
        // <LoginContextProvider>
            <Welcome/>
        /* </LoginContextProvider> */
        
    )
}

export default Question1;