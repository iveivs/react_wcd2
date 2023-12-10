import { useContext } from "react";
import { AppContext } from "../Cart";
import './buttonAdd.scss'

const ButtonAdd = ({title}) => {
    const { addProduct } = useContext(AppContext)
    return ( 
        <button className='buttonAdd' onClick={addProduct}>{title}</button>
     );
}
 
export default ButtonAdd;