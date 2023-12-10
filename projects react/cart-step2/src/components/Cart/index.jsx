import { useEffect, useState, createContext } from "react";
import CartFooter from "../CartFooter/CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import ButtonAdd from "../ButtonAdd";
import {serverPath} from "../../helpers/variables"
// import data from "./../../data"

export const AppContext = createContext(null)

const Cart = () => {
    const [cart, setCart] = useState(null)
    const [total, setTotal] = useState(null)
    const [fetchData, setFetchData] = useState(true)

    useEffect(() => {
        fetch(serverPath + 'products').then((res) => {
            return res.json()
        }).then((data) => {
            setCart(data)

        })
    }, [fetchData])

    useEffect(() => {
        if(cart) {
            setTotal({
                price: cart.reduce((prev, current) => {
                    return prev + current.priceTotal
                }, 0),
                count: cart.reduce((prev, current) => {
                    return prev + current.count
                }, 0)
            })
        }
        
    }, [cart])

    const deleteProduct = (id) => {
        fetch(serverPath + 'products/' + id, {
            method: 'DELETE'
        }).then((res) => {
            if(res.ok) {
                setFetchData((value)=>{
                    return !value
                })
            }
        })
    }
    
    const increase = (id) => {
        // setCart((cart) => {
        //     return cart.map((product) => {
        //         if(product.id === id) {
        //             return {
        //                 ...product,
        //                 count: ++product.count,
        //                 priceTotal: product.count * product.price
        //             }
        //         }
        //         return product
        //     })
        // })

        const product = cart.find(product => id === product.id)

        const data = {
            ...product,
            count: product.count + 1,
            priceTotal: (product.count + 1) * product.price
        }

        fetch(serverPath + 'products/' + id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then((res) => {
            res.ok && setFetchData((value) => !value)
        })
        
    }

    const decreace = (id) => {
        // setCart((cart) => {
        //     return cart.map((product) => {
        //         if(product.id === id) {

        //             const newCount = product.count - 1 > 1 ? product.count - 1 : 1

        //             return {
        //                 ...product,
        //                 count: newCount,
        //                 priceTotal: newCount * product.price
        //             };
        //         }
        //         return product
        //     })
        // })

        const product = cart.find(product => id === product.id)
        const newCount = product.count - 1 > 1 ? product.count - 1 : 1

        const data = {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price
        }

        fetch(serverPath + 'products/' + id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then((res) => {
            res.ok && setFetchData((value) => !value)
        })
    }

    const changeValue = (id, value) => {
        // setCart((cart) => {
        //     return cart.map((product) => {
        //         if(product.id === id) { 
        //             return {...product,
        //                 count: value,
        //                 priceTotal: value * product.price
        //             }
        //         }
        //         return product
        //     })
        // })

        const product = cart.find(product => id === product.id)

        const data = {
            ...product,
            count: value,
            priceTotal: value * product.price
        }

        fetch(serverPath + 'products/' + id, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then((res) => {
            res.ok && setFetchData((value) => !value)
        })
    }

    // const products = cart.map((product) => {
    //     return <Product 
    //                 deleteProduct={deleteProduct} 
    //                 product={product} 
    //                 key={product.id} 
    //                 increase={increase}
    //                 decreace={decreace}
    //                 changeValue={changeValue}/>
    // })

    const addProduct = () => {
        
        const titles = ['Apple macBook Air', 'Apple watch', 'Mac pro']
        const images = ['macbook.jpg', 'apple-watch.jpg', 'mac-pro.jpg']
        const prices = [50000, 60000, 70000 ]

        const randomValue = (array) => {
            return array[Math.floor(Math.random() * array.length)]
        }

        const price = randomValue(prices)

        const data = {
            img: randomValue(images),
            title: randomValue(titles),
            count: 1,
            price: price,
            priceTotal: price,
        }

        fetch(serverPath + 'products/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then((res) => {
            res.ok && setFetchData((value) => !value)
        })
    }

    const products = () => {
        return cart.map((product) => {
            return <Product 
                        product={product} 
                        key={product.id} />
            })
    }

    return ( 
        
        <AppContext.Provider value={{ deleteProduct, increase, decreace, changeValue, addProduct}}>
        <section className="cart">
            <CartHeader />
            {cart && products()}
            {total && <CartFooter total={total} />}
        </section>
        <section className="button-wrapper">
            <ButtonAdd title="Add Product" />
        </section>
        </AppContext.Provider>
        
    );
}

export default Cart;