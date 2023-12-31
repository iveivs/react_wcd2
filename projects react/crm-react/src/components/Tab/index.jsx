import { useEffect, useState } from "react";
const Tab = () => {
	const [users, setUsers] = useState()

	const someData = fetch('http://localhost:8000/users')
	.then(res => res.json())
	.then(data => console.log(data))
	console.log(someData);

    useEffect(()=> {
        document.body.className = "with-nav body--dashboard"
    }, [])
    return (
        <>
            <div className="left-panel blue-skin">
                <div className="left-panel__logo">
                    <div className="left-panel__logo-title">CRM заявки</div>
                    <div className="left-panel__logo-subtitle">
                        учебный проект webcademy
                    </div>
                </div>

                <div className="left-panel__user clearfix">
                    <div className="left-panel__user-photo">
                        <img src="img/avatars/avatar-128.jpg" alt="Avatar" />
                    </div>
                    <div className="left-panel__user-name">
                        Петр <br />
                        Васильевич
                    </div>
                </div>

                <div className="left-panel__navigation">
                    <div className="left-panel__navigation-title">Заявки</div>
                    <ul>
                        <li>
                            <a
                                data-value="all"
                                data-role="left-status"
                                href="#"
                                className="active"
                            >
                                Все вместе
                            </a>
                        </li>
                        <li>
                            <a
                                data-value="new"
                                data-role="left-status"
                                href="#"
                            >
                                Новые
                                <div className="badge" id="badge-new">
                                    12
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                data-value="inwork"
                                data-role="left-status"
                                href="#"
                            >
                                В работе
                            </a>
                        </li>
                        <li>
                            <a
                                data-value="complete"
                                data-role="left-status"
                                href="#"
                            >
                                Завершенные
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="main-wrapper">
			<div className="container-fluid">
				<div className="admin-heading-1">Все заявки</div>

				<form action="">
					
					<div className="row mb-3 justify-content-start">
						
						<div className="col">
							<div id="topStatusBar" className="btn-group" role="group" aria-label="...">
								<button href="#" className="btn btn-light" data-value="all">Все</button>
								<button href="#" className="btn btn-light" data-value="new">Новые</button>
								<button href="#" className="btn btn-light" data-value="inwork">В работе</button>
								<button href="#" className="btn btn-light" data-value="complete">Завершенные</button>
							</div>
						</div>
						
						<div className="col">
							<select className="custom-select" id="productSelect">
								<option value="all" selected>Все продукты</option>
								<option value="course-html">Курс по верстке</option>
								<option value="course-js">Курс по JavaScript</option>
								<option value="course-vue">Курс по VUE JS</option>
								<option value="course-php">Курс по PHP</option>
								<option value="course-wordpress">Курс по WordPress</option>
							</select>
						</div>
						
					</div>
				</form>

				<table className="table fs-14">
					<thead>
						<tr>
							<th>ID</th>
							<th>дата</th>
							<th>продукт</th>
							<th>имя</th>
							<th>email</th>
							<th>телефон</th>
							<th>статус</th>
							<th></th>
						</tr>
					</thead>
					<tbody id="tbody">
						<tr>
							<th scope="row">1</th>
							<td>01.04.2020</td>
							<td>Курс по верстке</td>
							<td>Петр Сергеевич</td>
							<td>info@inbox.ru</td>
							<td>+7 (909) 77-55-777</td>
							<td>
								<div className="badge badge-pill badge-danger">Новый</div>
							</td>
							<td>
								<a href="edit.html">Редактировать</a>
							</td>
						</tr>
						{/* <tr>
							<th scope="row">2</th>
							<td>01.04.2020</td>
							<td>Курс по верстке</td>
							<td>Василий Петрович</td>
							<td>info@gmail.ru</td>
							<td>+7 (909) 77-55-777</td>
							<td>
								<div className="badge badge-pill badge-warning">В работе</div>
							</td>
							<td>
								<a href="edit.html">Редактировать</a>
							</td>
						</tr> */}
						{/* <tr>
							<th scope="row">1</th>
							<td>01.04.2020</td>
							<td>Курс по верстке</td>
							<td>Николай Владимирович</td>
							<td>info@mail.ru</td>
							<td>+7 (909) 77-55-777</td>
							<td>
								<div className="badge badge-pill badge-success">Завершенный</div>
							</td>
							<td>
								<a href="edit.html">Редактировать</a>
							</td>
						</tr> */}
					</tbody>
				</table>
			</div>
		</div>
        </>
    );
}
 
export default Tab;