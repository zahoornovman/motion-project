import styled from 'styled-components';

export const StyledBanner = styled.img`
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    max-height: 800px;
`;

export const StyledProfileCard = styled.section`
    position: relative;
    margin: 120px auto 34px;
    height: 400px;
    min-height: 100%;
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
    justify-content: center;
    min-width: 260px;
    height: 100%;
    border-right: 2px solid #00000010;

    div {
        margin: auto 0px 20px 0px;
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: 100px;
            height: auto;
        }
    }

    #name {
        margin: 6px 0px 4px 0px;
        font-size: 24px;
        text-align: center;
    }

    #location {
        margin: 4px 0px 5px 0px;
    }

    button {
        margin: 55px 0px auto 0px;
    }
`;

export const StyledUserDetailsContainer = styled.div`
    height: 100%;
    width: 100%;
`;
export const StyledTopContainer = styled.div`
    min-height: 70%;
    display: flex;
    border-bottom: 2px solid #00000010;
    border-top: 2px solid #00000000;
`;

export const StyledContactSection = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin: 40px 30px;
    max-width: 50%;

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
    margin: 40px 30px;
    max-width: 50%;
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
