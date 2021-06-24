import React from 'react';
import styled from 'styled-components';
import zegin from './zegin.png';
import eurofarm from './eurofarm.png';

function About() {
    return ( < AboutStyle id = "about" >
        <
        p > "Auxilium in via" - Help is on the way претставува нов сервис за онлајн испорака на лекови достапен ширум целата држава.Намената на овој сервис е воглавно помош на стари и изнемоштени лица и оние кои не се во можност да излегуваат од дома.Во соработка со две најголеми аптеки во државата, а тоа се Зегин и Еуро фарм. < /p>

        <
        div className = "wrapper" >
        <
        div className = "main" >
        <
        div className = "left" >
        <
        div className = "zegin" >
        <
        img src = { zegin }
        /> <
        /div> <
        p > Основните активности на веледрогеријата на Зегин вклучуваат внатрешна и надворешна трговија со лекови, медицински помагала, диететски, макробиотиски и козметични производи.Компанијата е една од најголемите и најуспешните во Република Македонија, со најдобра инфраструктура и најширока дистибутивна мрежа.Соработува со 400 аптеки низ Републиката, со клинични центри и општи болници. < /p>

        <
        /div>

        <
        div className = "right" >
        <
        div className = "eurofarm" >
        <
        img src = { eurofarm }
        /> <
        /div> <
        p > Ние сме модерна, иновативна, општествено - одговорна компанија која секојдневно се надградува и усовршува како сигурен, проверен и потврден партнер во трговијата на големо со фармацевтски производи во Република Македонија и регионот.Нашите почетоци не беа ниту лесни, ниту едноставни, но горди сме на секој чекор и на секој успех и предизвик. < /p>

        <
        /div> <
        /div> <
        /div> <
        /AboutStyle>
    )
}
const AboutStyle = styled.div `
   height:100vh;
   margin-left:13rem;
   display:flex;
   flex-direction: column;
   align-items:center;
   justify-content:center;
   position:relative;
    img{
        display: inline-block;
        margin-top: 5%;
    }
   p{
    width: 110ch;
    height: 20%;
    font-size: 18px;
    text-align: center;
    color: #4d4d4d;
   }

   .wrapper{
     width:calc(100% - 13rem);
     height: auto;
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
    margin-top: -50px;
     .left,.right{
         width:100%;
         height: 10%;
         display: flex;
         align-items:center;
         justify-content: center;
         flex-direction:column;
         border: 1px solid lightblue;
         margin: 1% 0 0 0;
     }
     p{
    margin: 0 0 1% 0;
    width: 90%;
    height: 20%;
    font-size: 15px;    
    color: #4d4d4d;
   }


   }
`;

export default About;