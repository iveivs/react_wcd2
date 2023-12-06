function Counter(props) {
    return (
        <input
            className="form-control mb-3"
            disabled
            value={props.counter}
        />
    );
}

export default Counter;