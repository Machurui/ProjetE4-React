import React from "react";
import { useForm } from "react-hook-form";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            
        } else{

        }
    }

    return (
        <div className="App">
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
                <TextField
                    required
                    id="outlined-required"
                    label="Nom de la partie"
                    {...register("name", { required: true})}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Votre pseudo"
                    {...register("pseudo", { required: true})}
                />
                <FormGroup>
                    <FormControlLabel control={<Checkbox {...register("CP")} />} label="CP" />
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