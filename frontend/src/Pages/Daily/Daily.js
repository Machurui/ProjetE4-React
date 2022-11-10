import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Header from "../Components/Header";

export default function Daily() {
    return (
        <div className="">
            <Box>
                {/* <Header /> */}
                {/* liste des dailys */}
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/">Clôturer le daily</Button>
                </Box>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/">Retour</Button>
                </Box>
            </Box>
        </div>
    );
}