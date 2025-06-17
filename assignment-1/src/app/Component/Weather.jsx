const Weather=(props)=>{
    const temperature=props.temperature
    return(
        <>
        {temperature<10 && <p>It's cold today!</p>}
        {temperature>25 && <p>It's sunny today!</p>}
        {temperature>10 && temperature<25 && <p>It's normal today!</p>}
        </>
    )
}

export default Weather;