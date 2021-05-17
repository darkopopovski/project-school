
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    --background-color: #fff;
    --sidebar-color: #2E9AFE;
    --font-color-sidebar: #EFFBF5;
    --div-color: #68b4ff; 
    --div2-color: #dfefff;
}
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
body{
    width:100%;
    height:100vh;
    list-style-type:none;
}
a{
    text-decoration:none;
    font-size:inherit;
}
`;
export default GlobalStyle;
