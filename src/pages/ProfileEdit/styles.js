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
    min-width: 260px;
    height: 100%;
    border-right: 2px solid #00000010;
    > * {
        border: 1px solid green;
    }

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

    button {
        margin: 0;
    }
`;

export const StyledUserDetailsContainer = styled.div`
    height: 100%;
`;
export const StyledTopContainer = styled.div`
    max-height: 70%;
    display: flex;
    border-bottom: 2px solid #00000010;
    border-top: 2px solid #00000000;
`;

export const StyledContactSection = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin: 40px 30px 30px;

    #about {
        line-height: 26px;
    }

    #contact-info {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    p {
        margin-bottom: 20px;
    }
`;

export const StyledHeader = styled.span`
    display: inline-block;
    font-size: 14px;
    margin-bottom: 10px;
`;

export const StyledItem = styled.div`
    margin: 20px 0 5px 0;
`;

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

export const StyledStatsContainer = styled.div`
    max-height: 30%;
    height: 30%;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
`;

export const StyledStat = styled.div`
    min-height: 100%; // goig over a bit like borderbox is not working ??
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    p {
        font-size: 24px;
    }

    span {
        opacity: 0.5;
    }
`;
