import styled from 'styled-components';

export const StyledProfileCardEdit = styled.section`
    margin: 120px auto 34px;
    min-height: 100%;
    height: 730px;
    width: 80%;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background-color: #ffffff;
    border-radius: 4px;

    box-shadow: 0px 0px 1px #00000020, 0px 10px 20px #00000005;
`;

export const StyledAvatar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    min-width: 320px;
    height: 100%;
    border-right: 2px solid #00000010;

    /* #update-image,
    #delete-save, */
    div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        margin: 70px auto;
    }

    img {
        height: 100px;
        width: 100px;
        margin: auto 0px 20px 0px;
    }

    #update-image > button {
        width: 150px;
    }

    #delete-save > button {
        width: 200px;
        height: 46px;
        margin: 10px auto;
    }
`;

export const StyledUserDetailsContainer = styled.div`
    /* height: 100%; */
`;

export const StyledForm = styled.form``;

export const StyledHobbiesSection = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    margin: 40px 30px 30px;

    div {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        margin: 16px 0%;
        p {
            margin: 5px;
            padding: 8px;
            background-color: lightgray;
            background: #00000005;
            border: 1px solid #00000005;
            border-radius: 18px;
        }
    }
`;
