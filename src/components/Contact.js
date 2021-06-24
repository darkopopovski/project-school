import React from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import untitled from './Untitled.jpg';
function Contact() {
    return (
        <ContactStyle id="contact">
            <div className="section2">
                <div className="left">
                    <div className="adress">
                     <LocationOnIcon className="icon3"/>
                    <h2>Адреса</h2>
                    </div>
                    <p>Руѓер Бошковиќ 16, Скопје 1000</p>
                    
                    <div className="talk">
                    <PhoneIcon className="icon3"/>
                    <h2>Ајде да зборуваме</h2>
                    </div>
                    <p>+389 012 32134</p>
                   
                    <div className="general">
                    <MailIcon className="icon3"/>
                    <h2>Генерална подршка</h2>
                    </div>
                    <p>contact@auxilium.in.via</p>
                   
                </div>
                <div className="right2">
                    <h2>Пратете ни порака</h2>
                    <div className="double">
                        <input placeholder="Име"/>
                        <input className="2nd" placeholder="Презиме"/>
                    </div>
                    <div className="email3">
                        <input className="email1" placeholder="Емаил" />
                    </div>
                    <div className="subject">
                    <input className="subject1" placeholder="Опис" />
                    </div>
                    <div className="message2">
                        <textarea className="message1" placeholder="Напишете ја вашата порака тука."/>
                    </div>
                    <div className="button3">
                        <a href="#" className="btn3">Потврди</a>
                    </div>
                </div>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled.div`
        height:100vh;
        width: calc(100% - 13rem);
        margin-left: 13rem;
        .section2{
            width:100%;
            height:100%;
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            @media only screen and (max-width: 768px){
                flex-direction: column;
    }
        }
        .adress{
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            
        }
        .talk{
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 5%;
        }
        .general{
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 5%;
        }
        .double{
            display:flex;
        }
        .section2{
            color: lightgreen;
            font-size: 2vw;
            
        }
        .left{
            background-image: url(${untitled});
            height:100%;
            width:100%;
            display:flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            text-shadow: -1px 1px 1px #000;
            @media only screen and(max-width: 800px){
                width:100%;
                position:relative;
            }
        }
        .left h2{
            color:white;
            font-size: 2.5vw;
        }
        .icon3 {
            font-size: 2.5vw;
            color: lightgreen;
            text-shadow: -1px 1px 4px #fff;
        }
        .right2{
            height:100%;
            width:50%;
            display:flex;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .right2 h2{
            color: #0080ff;
            text-shadow: -1px 1px solid #fff;
        }
        .right2 input{
            border: 0px solid #0080ff;
            text-align: center;
            margin-bottom: 10px;
            margin-right: 10px;
            border: 1px solid rgba(0,0,0,0.1);
            color: #0080ff;
            border-radius: 10px;
            width: 20vw;
            height: 2.4rem;
            font-size: 1.3125rem;
            box-shadow:  3px -1px 2px rgba(63,155,191,0.3),
                     10px 1px 4px rgba(63,155,191,0.3);
        }
        .right2 .email1{
            width: 20rem;
        }
        .right2 .message1{
            width: 40vw;
            height: 25vw;
            border: none;
            border: 1px solid rgba(0,0,0,0.1);
            margin-top: 5px;
            font-size: 1.5rem;
            box-shadow:  3px -1px 2px rgba(63,155,191,0.3),
                     10px 1px 4px rgba(63,155,191,0.3);
        }
        .btn3{
  text-shadow: -1px -1px 10px rgba(255,255,255,0.5);
  border: 1px solid #0080ff;
  font-family: 'Roboto', sans-serif;
  color: white;
   border:none;
   background: #0080ff;
   padding: 0.8rem 2rem;
   margin-bottom: 2rem;
   border-radius: 10%;
   cursor: pointer;
   transition: 1s ease;
   display:block;
   box-shadow: 3px 2px 10px #0080ff,
                -1px -1px 1px #0080ff;
   font-weight: 500;
    transition: infinite 1s ease;
    margin-top: 10px;
}
.btn3:hover{
  background-color: #58ACFA;
}

`;
export default Contact;
