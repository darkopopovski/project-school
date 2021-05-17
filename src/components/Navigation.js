import styled from 'styled-components';
import React from 'react'
import {NavLink} from 'react-router-dom';
import avatar from './avatar.png';
function Navigation() {
    return (
        <NavigationStyle>
            <div className='avatar'>
            <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                     <NavLink  to="/home" activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink  to="/about" activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink  to="/contact" activeClassName="active-class">Contact</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink  to="/myhealth" activeClassName="active-class">My Health</NavLink>
                </li>
                
            </ul>
            <footer>
                <p>@2021 Copyright FCSE</p>
            </footer>
        </NavigationStyle>
    )
}

const NavigationStyle = styled.div`
      p{
          font-size: 0.7rem;
          color:white;
      }
      font-size: 1.3125rem;
      display:flex;
      justify-content:space-between;
      flex-direction:column;
      align-items:center;
      height:100%;
      width:100%;
      position:relative;
      border-right: solid 1px #086A87;
      .avatar{
          width:95%;
          margin-top:10%;
          overflow:hidden;
          
             img{  
              width:100%;
              border-radius:50%;
          }
      }
      a{
          color: white;
      }
      .nav-items{
          width:100%;
          text-align: center;
          height: 35vh;
          .active-class{
              background-color: #086A87;
              transition: 0.3s ease;
              border:1px solid rgba(0,0,0,0.2);
          }
          li{
              display:block;
              a{
                  display: block;
                  font-weight: 600;
                  padding: .3rem 0;
                  position: relative;
                  z-index:10;
                  &:hover{
                      cursor: pointer;
                  }
                  &::before{
                      content: "";
                      position:absolute;
                      bottom:0;
                      left:0;
                      width: 0;
                      height: 50%;
                      background-color: #eeef;
                      transition: All 0.4s cubic-bezier(1,-0.26,.07,.92);
                      opacity: 0.21;
                      z-index:3;
                  }
              }
              a:hover::before{
                  width:98%;
                  height:100%;
                  
              }
          }
      }
      footer{
          width:100%;
          display:flex;
          align-items: center;
          justify-content:center;
          height:7vh;
      }
`;

export default Navigation;
