import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    box-sizing: border-box;

    // debug borders
    /* * {
        border: 1px solid green;
        padding: 1px;
    } */

    // provisional header styles - start
    .nav { 
        display: flex;
        margin: 10px 20px;
        justify-content: space-between;

        * {margin: 0 10px}
    }
    
    .left{
        margin: 0 10px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    .right{
        margin: 0 10px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
    }

    
    // provisional header styles - end


`;
