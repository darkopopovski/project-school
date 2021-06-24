import React from 'react'
import styled from 'styled-components';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AddBoxIcon from '@material-ui/icons/AddBox';

function Order() {
    return (
        <OrderStyle  id="order">
            <h1>Нарчај го продуктот</h1>
                <section className="section1">
                    <div className="article">
                        <AirportShuttleIcon className="icon1"/>
                        <p>Брза достава до вашата адреса во рок од 1час.</p>
                    </div>

                    <div className="article">
                        <AddBoxIcon className="icon1"/>
                        <p>Во соработка со повеќето аптеки ширум целата држава.</p>
                    </div>

                    <div className="article">
                        <LocalAtmIcon className="icon1"/>
                        <p>Плаќање при достава до вашиот дом, од аптеката.</p>
                    </div>
                </section>
            <div className="input">
                <input placeholder="Кликнете тука и внесете ја вашата Локација"type="text" className="input"/>
            </div>
            <li className="nav-item">
                     <a href="#order1" activeClassName="active-class" className="btn1">Следно</a>
                </li>

        </OrderStyle>
    )
}

const OrderStyle = styled.div`
    
   height:100vh;
   width:calc(100% - 13rem);
   margin-left:13rem;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   position:relative;
@media only screen and(max-width:768px){
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
p{
    width: 12ch;
}
   .section1{
       width: 65rem;
       height: 47rem;
       display:flex;
       flex-direction: row;
       align-items: center;
       justify-content:center;
       color: #0080ff;
       border-radius: 70px;
       @media only screen and(max-width: 768px){
           flex-direction: column;
       }
       
   }
   .article{
        text-align:center;
        width: 33.5%;
        margin-left: 1px;
        margin-right: 1px;
        font-size: 3vw;
        border-radius: 70px;
        height: 100%;
        box-shadow:  3px -1px 2px rgba(63,155,191,0.3),
                     10px 1px 4px rgba(63,155,191,0.3);
        align-items: center;
        display:flex;
        flex-direction: column;
        justify-content: center;
        position:relative;
        font-weight: 500;
        @media only screen and(max-width: 768px){
        align-items: center;
        display:flex;
        flex-direction: column;
        justify-content: center;
       }

    }
   .input{
      width:25vw;
      height: 3vw;
      margin: 0.3rem 0 1rem 0;
      border: none;
      border-bottom: 1px solid #0080ff;
      text-align: center;
   }
   .btn1{
  text-shadow: -1px -1px 10px rgba(255,255,255,0.5);
  border: 1px solid #0080ff;
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 1.3125rem;
   border:none;
   background: #0080ff;
   padding: 0.8rem 2rem;
   margin-bottom: 0.85rem;
   border-radius: 10%;
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
.icon1{
    font-size:5vw;
    color: #0050ff;
}
`;

export default Order;
