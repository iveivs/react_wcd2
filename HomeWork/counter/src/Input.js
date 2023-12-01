function Input(props) {
    return (
        <input 
            type="number" 
            className="form-control mb-3" 
            id="input" 
            disabled 
            value={props.inputValue}/>
    )
}

export default Input