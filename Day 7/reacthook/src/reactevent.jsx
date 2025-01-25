const revent=()=>{
    function handleClick()
    {
        alert("You click me")
    }
    return(
        <button onClick={handleClick}>Click me</button>
    )

}
export default revent;