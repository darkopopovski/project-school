import Sidebar from '../src/components/Sidebar';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Order from './components/Order';
import Contact from './components/Contact';
import Order1 from './components/Order1';
import About from './components/About';
import Myhealth from './components/MyHealth';

function App() {
    return ( <
        AppStyle id = "app" >

        <
        Sidebar / >
        <
        div className = "main-content" >
        <
        section className = "section" >
        <
        h1 > Auxilium in via < /h1>  <
        p className = "paragraph" > Онлајн платформа што ги обединува најдобрите аптеки, најбезбедни и најбрзи услуги понудени од креираната мрежа на аптеките ширум целата држава. < /p>  <
        li className = "nav-item" >
        <
        a href = "#order"
        activeClassName = "active-class"
        className = "btn" > Нарачај < /a> </li >
        <
        /section> 

        <
        footer className = "footer" >
        <
        FacebookIcon className = "icon" / >
        <
        LinkedInIcon className = "icon" / >
        <
        TwitterIcon className = "icon" / >
        <
        /footer>  <
        /div >  <
        About / >
        <
        Contact / >
        <
        Order / >
        <
        Order1 / >
        <
        Myhealth / >
        <
        /AppStyle>
    );
}
const AppStyle = styled.div `
.main-content{
    height:100vh;
    width: calc(100% - 13rem);
    margin-left:13rem;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    text-align: center;
    @media only screen and (max-width: 768px){
      width: 768px;
      margin-left: 0;
        
}
h1{
  font-size:5vw;
  color: #0080ff;
  @media only screen and (max-width: 640px){
        text-align:center;
        width:8rem;
        font-size:5.5vw;
        margin-right:5%;
        margin-left:-20%;
    }
}
.section{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.paragraph{
  word-break:break-word;
  width:55ch; 
  color: #8d8d8d;
  font-size:1.8vw;
  font-weight: 600;
  text-shadow: -1px -1px 0.001rem #fff;
}
.footer{
  display:flex;
  justify-content: center;
  align-items:center;
  width:100%;
  height:5vh;
  @media only screen and (max-width: 640px){
        margin-left: -20%;
    }
} 
.icon{
  color: #0080ff;
  font-size: 3vw;
  text-shadow: -11px -11px 0.1px #000;
  transition: 0.2s ease;
  @media only screen and (max-width: 768px){
        font-size:7.0vw;
    }
}
.icon:hover{
  color: #1d1d1d;
  cursor:pointer;
}

.btn{
  text-shadow: -1px -1px 10px rgba(255,255,255,0.5);
  border: 1px solid #0080ff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5125rem;
  color: white;
   border:none;
   background: #0080ff;
   padding: 0.5rem 1.3rem;
   margin: 20% 0 20% -5%;
   border-radius: 10%;
   cursor: pointer;
   transition: 1s ease;
   display:block;
   box-shadow: 3px 2px 10px #0080ff,
                -1px -1px 1px #0080ff;
   font-weight: 500;
   @media only screen and (max-width: 640px){
        margin: 10% 20% 5% -20%;
    }
    transition: infinite 1s ease;
}
.btn:hover{
  background-color: #58ACFA;
}
}
`;

export default App;