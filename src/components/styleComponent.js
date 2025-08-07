
import styled from "styled-components";


export const StyledButton = styled.button`
    background-color:#f53656 ;
    color :white ;
    padding: 10px 20px;
    border: none;`


export const styledHeader = styled.header`
        header {
    color: blueviolet;
    background-color: #4287f5;
    padding: 10px;
    text-align: center;
}

header div {
    display: flex;
    justify-content: center;
    align-items: center;
}

header nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
}


header li {
    list-style: none;
    margin: 0 15px;
    color: white;
}`



export const StyledInput = styled.input`
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        `

export const InputWrapper = styled.div`
    margin: 20px 0;
    `;

return (
    <InputWrapper>
        <StyledButton>Click Me!</StyledButton>
        <StyledInput type="text" placeholder="Type here..." />
        <HeaderComponent />
    </InputWrapper>

);

export default styleComponent;
