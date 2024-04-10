import styled from "styled-components";

export const StyledList =  styled.div `
    background-color: #ffff;
    max-width: 600px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #DDDDDD;

    margin: 40px auto;
    box-sizing: border-box;

    form{
        display: flex;
        justify-content: space-between;

        input{
            flex-grow: 1;
            border-radius: 5px;
            height: 54px;
            padding: 10px;
            border: solid 1px #cccccc;
            box-sizing: border-box;
        }

        button{
            background-color: #001D29;
            color: #ffff;
            width: 105px;
            margin-left: 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: all .3s;

            &:hover{
                background-color: black;
            }

            &:disabled{
                /* background-color: #cccccc;
                border: none; */
                opacity: 0.5;
            }
        }
    }
`