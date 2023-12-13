import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getTestData } from "../../helpers/test-data";

const Form = () => {
	const [name, setName] = useState(getTestData().name)
	const [phone, setPhone] = useState(getTestData().phone)
	const [email, setEmail] = useState(getTestData().email)
	const [product, setProduct] = useState(getTestData().product)

	const renderTestData = () => {
		const testData = getTestData()

		setName(testData.name)
		setPhone(testData.phone)
		setEmail(testData.email)
		setProduct(testData.product)
	}
	

	const handleSubmit = (e) => {
        e.preventDefault();
		const obj = {
			name,
			phone,
			email,
			product,
			status: "new",
			data: new Date()
		}
		console.log(obj);

		renderTestData()

		fetch("http://localhost:8000/users" , {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(obj),
		}).then((res) => {
			if(res.ok) {
				console.log('ADDED');
				renderTestData()
			}
		}).catch((err) => {
			console.log('error is' , err);
		})
	}

	

	const showInput = (event) => {
		console.log(event.target.value);
	}

	useEffect(()=> {
		document.body.className = "with-nav radial-bg flex-center"
	},[])
    return (
        <div className="white-plate white-plate--payment">
            <div className="container-fluid">
                <div className="white-plate__header text-center">
                    <p className="white-plate__logo">
                        <span>Форма</span> заявок
                    </p>
                </div>

                <div className="white-plate__line-between white-plate__line-between--main"></div>

                <form onSubmit={handleSubmit} id="form" method="POST" action="">
                    <label>Ваши данные:</label>
                    <div className="form-group">
                        <input
							
                            id="name"
                            type="text"
                            name="name"
                            autoComplete="on"
                            className="form-control"
                            placeholder="Имя и Фамилия"
                            required
							value={name}
							onChange={(e) => {setName(e.target.value)}}
							
                        />
                    </div>
                    <div className="form-group">
                        <input
                            id="phone"
                            type="text"
                            name="phone"
                            autoComplete="on"
                            className="form-control"
                            placeholder="Телефон"
							value={phone}
							onChange={(e) => {setPhone(e.target.value)}}
							
                        />
                    </div>
                    <div className="form-group">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="on"
                            className="form-control"
                            placeholder="Email"
                            required
							value={email}
							onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Продукт:</label>
                        <select
							value={product}
							onChange={(e) => {setProduct(e.target.value)}}
                            id="product"
                            name="product"
                            className="form-control"
                        >
                            <option value="course-html">Курс по верстке</option>
                            <option value="course-js">
                                Курс по JavaScript
                            </option>
                            <option value="course-vue">Курс по VUE JS</option>
                            <option value="course-php">Курс по PHP</option>
                            <option value="course-wordpress">
                                Курс по WordPress
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-lg btn-primary btn-block">
                            Оформить заявку
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;