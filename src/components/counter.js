import './counter.css';
const Counter = () => {
    const handleIncrement = (event, extra) => {
        console.log(event.target);
        console.log("Increment button clicked");
        console.log(extra);
    };
    const handleDecrement = (event) => {
        console.log(event.target);
        console.log("Decrement button clicked");
    };

    return (
        <div className="counter">
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={(event) => handleIncrement(event, "extra params")}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;
