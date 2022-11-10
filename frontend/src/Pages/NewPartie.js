import React from "react";
import { useForm } from "react-hook-form";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import Box from '@mui/material/Box';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link } from "react-router-dom";

function NewPartie() {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        if (data.CP === false && data.TEAM === false && data.PO === false && data.SM === false) {
            toast.error('Vous devez sélectionner au minimum un rôle.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        } else {
            axios.post('http://localhost:2000/newpartie', {
                name: data.name,
                pseudo: data.pseudo,
                cp: data.CP,
                team: data.TEAM,
                po: data.PO,
                sm: data.SM,
            })
            .then(function (response) {
                <Link to="/dashboardPartie"/>
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    return (

        <div class="">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <form class="" onSubmit={handleSubmit(onSubmit)}>
            <Box>
            <Box><TextField
                    // class="bg-gray-200 rounded-md"
                    required
                    id="outlined-required"
                    label="Nom de la partie"
                    {...register("name", { required: true })}
                /></Box>
                
                <Box class="mb-0.5"><TextField
                    // class="bg-gray-200 rounded-md"
                    required
                    id="outlined-required"
                    label="Votre pseudo"
                    {...register("pseudo", { required: true })}
                /></Box>
                </Box>

                <FormGroup>
                    <FormControlLabel control={<Checkbox {...register("TEAM")} />} label="TEAM" />
                    <FormControlLabel control={<Checkbox {...register("PO")} />} label="PO" />
                    <FormControlLabel control={<Checkbox {...register("SM")} />} label="SM" />
                </FormGroup>
                <Button variant="contained" type="submit">Créer</Button>
                
            </form>
        </div>

    );
}

export default NewPartie;