import React from "react";
import "../Css/Accueil.css"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import logo from '../logo.svg'

function Accueil() {
    return (
        <div className="App">
            <header className="Accueil-header">
                <img src={logo} className="Acceuil-logo" alt="logo" />
                <h2>Scrumy</h2>
                <Box>
                    <Box sx={{ my: 3, mx: 2 }}>
                        <Button variant="contained" href="/newpartie">Créer une partie</Button>
                    </Box>
                    <Box sx={{ my: 3, mx: 2 }}>
                        <Button variant="contained">Rejoindre une partie</Button>
                    </Box>
                </Box>


            </header>
        </div>
    );
}

export default Accueil;
