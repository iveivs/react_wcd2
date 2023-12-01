function ControlBar(props) {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
			<button onClick={()=>{props.decrise()}} type="button" className="btn btn-outline-primary" id="btnMinus">Minus</button>
			<button onClick={()=>{props.reset()}} type="button" className="btn btn-outline-primary" id="btnReset">Reset</button>
			<button onClick={()=>{props.increase()}}  type="button" className="btn btn-outline-primary" id="btnPlus">Plus</button>
		</div>
    )
}

export default ControlBar