import React from 'react';
import styled from 'styled-components';
import { SecondaryButton } from './StyledButtons';
import { StyledHobbiesIcon } from './StyledHobbies';
import cross from '../../assets/svgs/cross.svg';

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
        color: #00000070;
    }

    input {
        border: none;
        border-bottom: 1px solid #00000020;
    }

    button {
        margin-left: 20px;
    }
`;

export const StyledInputTextHobbies = (props) => {
    return (
        <InputTextHobby>
            <label htmlFor="input">{props.label}</label>
            <div>
                {props.hobbies.map((hobby, index) => {
                    return (
                        <StyledHobbiesIcon
                            onClick={props.removeHobby}
                            key={index}
                        >
                            {hobby}
                            <img src={cross} alt="" />
                        </StyledHobbiesIcon>
                    );
                })}
            </div>
            <div>
                <input
                    name="input"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                ></input>
                <SecondaryButton onClick={props.onClick}>add</SecondaryButton>
            </div>
        </InputTextHobby>
    );
};

export const InputTextHobby = styled.div`
    min-width: 250px;
    margin: 20px 30px;
    /* width: 100%; */
    justify-content: center;
    /* text-align: center; */

    label {
        font-size: 12px;
        line-height: 30px;
        color: #00000070;
        text-align: left;
    }

    input {
        border: none;
        border-bottom: 1px solid #00000020;
        min-width: 250px;
    }

    button {
        margin: 10px 20px;
        /* width: 30%; */
        img {
            display: inline-block;
            width: 10px;
            height: 10px;
            opacity: 0.5;
            text-align: center;
            margin-left: 10px;
            vertical-align: center;
        }
    }
`;

export const StyledInputFile = (props) => {
    return (
        <InputFile>
            <label>{props.label}</label>
            <input
                name="fileUpload"
                type="file"
                onChange={props.onChange}
                ref={props.reference}
            ></input>
        </InputFile>
    );
};

export const InputFile = styled.div`
    display: none;
`;
