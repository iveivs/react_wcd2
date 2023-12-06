function Controls(props) {

    const btns = [
        {title: 'Minus', action: 'decrease'},
        {title: 'Reset', action: 'reset'},
        {title: 'Plus', action: 'increase'}
    ]

    const jsxBtns = btns.map((btn)=> {
        return (
            <button
                key={btn.action}
                type="button"
                className="btn btn-outline-primary"
                onClick={props[btn.action]}
                >
                {btn.title}
            </button>
        )
    })

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            {jsxBtns}
        </div>
    );
}

export default Controls;