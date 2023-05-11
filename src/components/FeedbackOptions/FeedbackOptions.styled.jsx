import styled from "@emotion/styled";


export  const OptionsList = styled.ul`
        display: flex;
    gap: 10px;
    padding: 0px;
    list-style: none;
    justify-content: space-around;
    align-items: center;
`;

export const OptionsItem = styled.li``;

export const Button = styled.button`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    height: 50px;
    /* border-radius: 50px; */
    background-color: transparent;
    cursor: pointer;
    border-image-source: linear-gradient(45deg, #f11197, #fcaf08, #24FE41);
    border-image-slice: 1;
    color: #d54d7b;
    font-family: "Libre Baskerville", serif;
    font-size: smaller;`;