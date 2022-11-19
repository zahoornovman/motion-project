import React from 'react';
import styled from 'styled-components';

export const StyledInputText = (props) => {
    return (
        <div>
            <label htmlFor="input">{props.label}</label>
            <input
                name="input"
                placeholder={props.placeholder}
                onChange={props.onChange}
            ></input>
        </div>
    );
};

export const StyledInput = styled.div``;
