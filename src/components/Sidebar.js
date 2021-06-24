import React from 'react';
import styled from 'styled-components';
import Navigation from "./Navigation";
function Sidebar() {
    return (
        <SidebarStyle>
          <Navigation />
        </SidebarStyle>
    )
}

const SidebarStyle = styled.div`
    position: fixed;
    height:100vh;
    width:13rem;
    left:0;
    background-color: #58ACFA;
    box-shadow: 1px 1px 2px #0090ff,
                -2px -2px 5px #0090ff;
    @media only screen and (max-width: 768px){
        top:0;
        width:100%;
        height:70px;
        position:fixed;
    }
`;

export default Sidebar;
