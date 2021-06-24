import React from 'react';
import styled from 'styled-components';

function Order1() {
    return (
        <Order1Style id="order1">
            <h1>Внесете ги вашите податоци</h1>
            <p>Лековите кои ви се препишени од страна на вашиот лекар, вработените ќе можат да ги проследат со помош на вашиот матичен број.</p>
            <div className="maticen">
            <label>Матичен број:  </label><input className="maticen"  />
            </div>
            <h2>Информации за вашата достава</h2>
            <div className="wrapper">
            <div className="labels">
                <label>Име:  </label>
                <label>Презиме:  </label>
                <label>Улица:  </label>
                <label>Изберете град:  </label>
                <label>Телефон:  </label>
                <label>Емаил:  </label>
                <label>Белешка:  </label>
                </div>
        <div className="inputs">
            <div className="ime">
           <input className="ime1"/>
            </div>
            <div className="prezime">
            <input className="prezime1"/>
            </div>
            <div className="prezime">
            <input className="ulica1" />
            </div>
            <div className="grad">
            <select><option>Скопје</option></select>
            </div>
            <div className="tel">
           <input className="tel1"  />
            </div>
            <div className="email">
            <input className="email1"/>
            </div>
            <div className="be">           
            <input className="beleska1" />
            </div>
         </div>
         </div>    
         <li className="nav-item">
                     <a href="#order1" activeClassName="active-class" className="btn1">Нарачај</a>
                </li>
        </Order1Style>
    )
}
const Order1Style = styled.div`
    height:100vh;
    width:calc(100%-13rem);
    margin-left: 13rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color: #0080ff;
    }
    h2{
        margin: 1% 0 1% 0;
        color: #0080ff;
    }
    p{
        color: #2d2d2d;
        text-align: center;
        width: 70%;
        margin: 1% 0 1% 0;
        font-size: 1.3125rem;
    }
    .wrapper{
        display:flex;
    }
    label{
        margin-top:30px;
        color: #0080ff;
        font-size: 1rem;
    }
    .labels{
        display:flex;
        flex-direction: column;
        margin-top: -15px;
    }
    .inputs{
        width: 33.3%;
        height: 40%;
        margin-top: 5px;
    }
    .btn1{
  text-shadow: -1px -1px 10px rgba(255,255,255,0.5);
  border: 1px solid #0080ff;
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 1.1rem;
   border:none;
   background: #0080ff;
   padding: 0.8rem 2rem;
   margin-bottom: 0.5rem;
   border-radius: 10%;
   margin-top: 0.4rem;
   cursor: pointer;
   transition: 1s ease;
   display:block;
   box-shadow: 3px 2px 10px #0080ff,
                -1px -1px 1px #0080ff;
   font-weight: 500;
    transition: infinite 1s ease;
}
.btn1:hover{
  background-color: #58ACFA;
}
    input{
        border: 0px solid #0080ff;
            text-align: center;
            margin-bottom: 10px;
            margin-left: 20px;
            border: 1px solid rgba(0,0,0,0.1);
            color: #0080ff;
            border-radius: 10px;
            width: 20vw;
            height: 2.4rem;
            font-size: 1.3125rem;
            box-shadow:  3px -1px 2px rgba(63,155,191,0.3),
                     10px 1px 4px rgba(63,155,191,0.3);
    }
    select{
        border: 0px solid #0080ff;
            margin-bottom: 10px;
            margin-right: 10px;
            border: 1px solid rgba(0,0,0,0.1);
            margin-left: 20px;
            color: #0080ff;
            border-radius: 10px;
            width: 20vw;
            height: 2.4rem;
            font-size: 1.3125rem;
            box-shadow:  3px -1px 2px rgba(63,155,191,0.3),
                     10px 1px 4px rgba(63,155,191,0.3);
    }
`;

export default Order1;
