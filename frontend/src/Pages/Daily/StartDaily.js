import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Header from "../Components/Header";

export default function StartDaily() {
    return (
        <div className="">
            <Box>
                {/* <Header /> */}
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/">Démarrer le daily</Button>
                </Box>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/">Retour</Button>
                </Box>
            </Box>
        </div>
    );
}