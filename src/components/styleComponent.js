
import styled from "styled-components";

function buttonComponent() {
    const StyledButton = styled.button`
    background-color:#f53656 ;
    color :white ;
    padding: 10px 20px;
    border: none;`

    function inputComponent() {
        const StyledInput = styled.input`
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        `
    }
    const InputWrapper = styled.div`
    margin: 20px 0;
    `;

    return (
        <InputWrapper>
            <StyledButton>Click Me!</StyledButton>
            <StyledInput type="text" placeholder="Type here..." />
        </InputWrapper>

    );
}

export { buttonComponent, inputComponent };