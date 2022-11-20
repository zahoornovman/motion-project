import React from 'react';
import styled from 'styled-components';

export const StyledInputText = (props) => {
    // const [value, setValue] = React.useState(props.value);
    return (
        <div>
            <label htmlFor="input">{props.label} (Styled)</label>
            <input
                name="input"
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            ></input>
        </div>
    );
};

export const StyledInput = styled.div``;
