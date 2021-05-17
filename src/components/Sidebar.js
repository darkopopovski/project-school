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
    background-color: #58ACFA;
    @media only screen and (max-width: 600px){
        width:10rem;
        height:110vh;
    }
`;

export default Sidebar;
