
import './card.css'
const Card = (props) => {
    const { img, p } = props;
    return (
        <div className="card">
            <h2 className="card-title">Card Component</h2>
            <img src={img} alt="Logo" className="card-logo" height="150px" width="200px" />
            <p>{p}</p>
            <button className="card-button">click me! </button>
        </div >
    );
}
export default Card;