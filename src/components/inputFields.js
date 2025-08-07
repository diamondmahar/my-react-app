import './inputField.css';
const InputFields = (props) => {
    const { type, placeholder, name, label } = props;
    return (
        <div className='input-field'>
            <label>
                {label}
            </label>

            <input
                className="resuseable-input"
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}
export default InputFields;