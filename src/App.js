import Sidebar from '../src/components/Sidebar';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function App() {
  return (
    <AppStyle>
      <Sidebar />
      <div className="main-content">
          <section className="section">
            <h1>Auxilium in via</h1>
            <p className="paragraph">Онлајн платформа што ги обединува најдобрите аптеки, најбезбедни и најбрзи услуги понудени од креираната мрежа на аптеките ширум целата држава.</p>
           </section>
           <footer className="footer">
               <FacebookIcon className="icon"/>
               <LinkedInIcon className="icon"/>
               <TwitterIcon className="icon"/>
           </footer>
      </div>
    </AppStyle>
  );
}
const AppStyle = styled.div`

.main-content{
    height:100vh;
    width: calc(100% - 13rem);
    margin-left:13rem;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    text-align: center;
}
h1{
  font-size:5vw;
  color: #0080ff;
  text-shadow: -1px 1px 1px #000;
  @media only screen and (max-width: 640px){
        text-align:center;
        width:8rem;
        font-size:5.5vw;
        margin-right:5%;
        margin-left:-7%;
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
  color: #ee12;
  font-size:2vw;
  text-shadow: -1px 1px 0.1px #000;
  @media only screen and (max-width: 640px){
        width:10rem;
        text-align:center;
        font-size:5.5vw;
        margin-left:-7%;
    }
}
.footer{
  display:flex;
  justify-content: center;
  align-items:center;
  width:100%;
  height:5vh;
} 
.icon{
  color: #0080ff;
  font-size: 3vw;
  text-shadow: -11px -11px 0.1px #000;
  transition: 0.2s ease;
  @media only screen and (max-width: 640px){
        font-size:8.7vw;
    }
}
.icon:hover{
  color: #1d1d1d;
  cursor:pointer;
}
`;
export default App;
