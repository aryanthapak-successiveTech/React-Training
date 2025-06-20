import styles from "@/app/Assignment-2/Styles/PersonDetails.module.css"
const PersonDetails=({firstName,lastName,age})=>{
    return(
        <div>
            <div className={styles["details"]}>
                <h3>First Name : </h3>
                <p>{firstName}</p>
            </div>
            
            <div className={styles["details"]}>
                <h3>Last Name : </h3>
                <p>{lastName}</p>
            </div>
            
            <div className={styles["details"]}>
                <h3>Age Name : </h3>
                <p>{age}</p>
            </div>
            
            
        </div>
    )
}

export default PersonDetails;