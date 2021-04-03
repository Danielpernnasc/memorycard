import React from "react";
import  { Dashboard, DashboardMenu, DashboardButton }  from "../../Components";

const HomePage = () => (
    <Dashboard>    
        <DashboardMenu title="Jogo da Memória"> 
            <DashboardButton to="/game">Inicia Jogo</DashboardButton>
        </DashboardMenu>  
    </Dashboard>
);
export default HomePage;