const List = () => {
    const Listitems = [
        { id: 0, title: 'Сделать зарядку' },
        { id: 1, title: 'Выпить кофе' },
        { id: 2, title: 'Написать React приложение' }
    ]

    const render = Listitems.map((el) => {
        return <li className="todo-item" key={el.id}>
                    <span className="todo-item-text">{el.title}</span>
                    <div className="btn-group">
                    <button className="btn btn-outline-dark btn-sm">Важное</button>
                    <button className="btn btn-outline-danger btn-sm">Удалить</button>
                    </div>
                </li>
    })

    const emptyItem = <li className="todo-item justify-content-center"> <span className="todo-item-text">Список дел пуст</span></li>

    // const listWrapper = 
    return (
        <ul className="todo-list">
            {Listitems.length > 0 ?  render : emptyItem}
        </ul>
    )
}

export default List