function Button() {

    //InLine:
    const styles = {
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 25px",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
        }
    
    return(
        <button style = {styles}>Click me</button>
    );
}

export default Button