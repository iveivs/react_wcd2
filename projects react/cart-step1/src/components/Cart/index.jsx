import { useEffect } from "react";
import { useState } from "react";
import CartFooter from "../CartFooter/CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "./../../data"

const Cart = () => {
    const [cart, setCart] = useState(data)

    const [total, setTotal] = useState({
        price: cart.reduce((prev, current) => {
            return prev + current.priceTotal
        }, 0),
        count: cart.reduce((prev, current) => {
            return prev + current.count
        }, 0)
    })

    useEffect(() => {
        setTotal({
            price: cart.reduce((prev, current) => {
                return prev + current.priceTotal
            }, 0),
            count: cart.reduce((prev, current) => {
                return prev + current.count
            }, 0)
        })
    }, [cart])

    const deleteProduct = (id) => {
        setCart((cart) => {
            return cart.filter((product) => {
                return id !== product.id
            })
        })
    }
    
    const increase = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if(product.id === id) {
                    return {
                        ...product,
                        count: ++product.count,
                        priceTotal: product.count * product.price
                    }
                }
                return product
            })
        })
    }

    const decreace = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if(product.id === id) {

                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1

                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    };
                }
                return product
            })
        })
    }

    const changeValue = (id, value) => {
        setCart((cart) => {
            return cart.map((product) => {
                if(product.id === id) { 
                    return {...product,
                        count: value,
                        priceTotal: value * product.price
                    }
                }
                return product
            })
        })
    }

    const products = cart.map((product) => {
        return <Product 
                    deleteProduct={deleteProduct} 
                    product={product} 
                    key={product.id} 
                    increase={increase}
                    decreace={decreace}
                    changeValue={changeValue}/>
    })

    console.log('prod', products);
    return ( 
        <section className="cart">
            <CartHeader />
            {products}
            <CartFooter total={total} />
        </section>
    );
}
 
export default Cart;