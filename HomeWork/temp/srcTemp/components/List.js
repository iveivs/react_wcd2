const List = () => {
    const items = [
        { id: 0, title: 'Сделать зарядку' },
        { id: 1, title: 'Выпить кофе' },
        { id: 2, title: 'Написать React приложение' }
    ]

    const render = items.map((el) => {
        return <li key={el.id} >{el.title}</li>
    })

    // данный ниже вариант не рекомендуется, т.к. затрачивает больше ресурсов
    // от react при изменении(перерисовке) списка
    const items2 = ['task1', 'task2', 'task3', 'task4',]
    const render2 = items2.map((el, index) => {
        return <li className="green" key={index}>{el}</li>
    })




    const item1 = <li>Проснуться пораньше</li>
    return (
        <ul>
            {item1}
            {render}
            {render2}
        </ul>
    )
}

export default List


