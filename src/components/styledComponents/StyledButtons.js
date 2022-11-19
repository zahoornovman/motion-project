import styled from 'styled-components';

// should maybe create a basic button to hold basic styles
// like border-radius, text-transform, padding
// then use as base for the rest (different size, different background, border etc)

/* Example:

import Button from '../../style/buttons.js'

const ButtonBigger = styled(Button)`
  font-size: 15px;
`;

*/

export const PrimaryButton = styled.button`
    border-radius: 30px;
    text-transform: uppercase;
    padding: 10px 10px;
    border: none;
    margin-top: 8em;
    width: 130px;
    height: 60px;
    color: white;
    background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
`;

export const SecondaryButton = styled.button`
    height: 40px;
    width: 130px;

    font-size: 10px;

    margin: 0px 5px;
    padding: 10px 10px;

    border-radius: 30px;
    border: 1px solid grey;

    background-color: white;

    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.07);

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

        //!!!!!!!Below Code not working. Check later!!!!!!!!!
        // background-color: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        // font-color: white;
    }
`;
