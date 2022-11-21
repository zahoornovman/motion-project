import React from 'react';
import styled from 'styled-components';
import { StyledHobbiesIcon } from './StyledHobbies';

export const StyledInputText = (props) => {
    return (
        <InputText>
            <label htmlFor="input">{props.label}</label>
            <input
                name="input"
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            ></input>
        </InputText>
    );
};

export const InputText = styled.div`
    min-width: 250px;
    margin: 20px 30px;

    > * {
        width: 100%;
        display: block;
    }

    label {
        font-size: 12px;
        line-height: 30px;
        /* identical to box height */

        color: #00000070;
    }

    input {
        border: none;
        border-bottom: 1px solid #00000020;
    }
`;

export const StyledInputHobbies = (props) => {
    return (
        <div>
            <label htmlFor="input">{props.label}</label>
            <div>
                {props.value.map((hobby, index) => {
                    return (
                        <StyledHobbiesIcon key={index}>
                            {Object.values(hobby)}
                        </StyledHobbiesIcon>
                    );
                })}
            </div>
            <input
                name="input"
                placeholder={props.placeholder}
                // onChange={props.onChange}
                // value={props.value}
            ></input>
        </div>
    );
};

export const InputHobbies = styled.div``;

export const StyledInputFile = (props) => {
    return (
        <InputFile>
            <label htmlFor="fileUpload">{props.label}</label>
            <input
                name="fileUpload"
                type="file"
                // placeholder={props.placeholder}
                onChange={props.onChange}
                // value={props.value}
            >
                {props.innerHTML}
            </input>
        </InputFile>
    );
};

export const InputFile = styled.div`
    min-width: 250px;
    margin: 20px 30px;

    > * {
        width: 100%;
        display: block;
    }

    label {
        font-size: 12px;
        line-height: 30px;

        color: #00000070;
    }

    input {
        border: none;
        border-bottom: 1px solid #00000020;
    }

    /* input {
        display: none;
    }

    label {
        display: none;
        height: 40px;
        width: 120px;
        font-size: 10px;
        border-radius: 30px;
        border: 1px solid grey;
        background-color: white;
        text-transform: uppercase;

        :hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }
    } */
`;
