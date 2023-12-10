import "./style.scss"
const Count = ({count, increase, id, decreace, changeValue}) => {
    return ( 
        <div className="count">
            <div className="count__box">
                <input onChange={(e)=>{changeValue(id, +e.target.value)}} type="number" className="count__input" min="1" max="100" value={count}/>
            </div>
            <div className="count__controls">
                <button onClick={()=>{increase(id)}} type="button" className="count__up">
                    <img src="./img/icons/icon-up.svg" alt="Increase"/>
                </button>
                <button onClick={()=>{decreace(id)}} type="button" className="count__down">
                    <img src="./img/icons/icon-down.svg" alt="Decrease"/>
                </button>
            </div>
        </div>
     );
}
 
export default Count;