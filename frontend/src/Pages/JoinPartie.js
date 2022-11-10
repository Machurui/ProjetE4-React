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

function JoinPartie() {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        if (data.TEAM === false && data.PO === false && data.SM === false) {
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
            axios.post('http://localhost:2000/joinpartie', {
                name: data.name,
                pseudo: data.pseudo,
                team: data.TEAM,
                po: data.PO,
                sm: data.SM,
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    return (
        <div className="">
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
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1 class="mb-20 text-2xl font-medium text-center">Rejoindre une Partie</h1>
            <Box class="mb-0.5"><TextField
                    required
                    id="outlined-required"
                    label="Code de la partie"
                    {...register("code", { required: true })}
                /></Box>
                <Box><TextField
                    required
                    id="outlined-required"
                    label="Votre pseudo"
                    {...register("pseudo", { required: true })}
                /></Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox {...register("TEAM")} />} label="TEAM" />
                    <FormControlLabel control={<Checkbox {...register("PO")} />} label="PO" />
                    <FormControlLabel control={<Checkbox {...register("SM")} />} label="SM" />
                </FormGroup>
                <Button variant="contained" type="submit">Rejoindre</Button>
            </form>
        </div>
    );
}

export default JoinPartie;