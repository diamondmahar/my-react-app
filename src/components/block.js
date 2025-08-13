import './block.css'

const Block = (props) => {
    const { title, price, list, className, button } = props;
    return (
        <div className={`block ${className}`}>
            <div>
                <h2>{title}</h2>
                <h2>{price}</h2>
                <div className="features">
                    <ul>
                        <li>{list[1]}</li>
                        <li>{list[2]}</li>
                        <li>{list[3]}</li>
                        <li>{list[4]}</li>
                    </ul>
                        <button className="btn">{button}</button>
                </div>
            </div>
        </div>
    )
}
export default Block;