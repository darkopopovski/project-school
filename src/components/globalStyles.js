
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
    scroll-behavior: smooth;
}
:root{
    --background-color: #fff;
    --sidebar-color: #2E9AFE;
    --font-color-sidebar: #EFFBF5;
    --div-color: #68b4ff; 
    --div2-color: #dfefff;
}
*>{
  scroll-snap-align: start;
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
    scroll-snap-type: y mandatory;
        scroll-snap-type: mandatory;
        scrollbar-width: none;
        scroll-behavior: smooth;
        &::-webkit-scrollbar{
            display: none;
        }
}
a{
    text-decoration:none;
    font-size:inherit;
}
`;
export default GlobalStyle;
