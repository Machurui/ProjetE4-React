import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Header from "../Components/Header";

export default function DashboardPartie() {
    return (
        <div className="">
            <Box>
                <Header />
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/sprint">Gérer les sprints</Button>
                </Box>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/story">Gérer les stories</Button>
                </Box>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/">Participer au daily</Button>
                </Box>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/">Gérer les participants</Button>
                </Box>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/daily">Gérer le daily</Button>
                </Box>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/">Quitter la partie</Button>
                </Box>
            </Box>
        </div>
    );
}