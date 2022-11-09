import React from "react";
import { useForm } from "react-hook-form";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewPartie() {
    const { register, handleSubmit } = useForm();
    // if()
    const onSubmit = data => console.log(data);

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    {...register("name", { required: true, maxLength: 20 })}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    {...register("code", { required: true, maxLength: 4 })}
                />
                <FormGroup>
                    <FormControlLabel value="CP" control={<Checkbox {...register("CP")} />} label="CP" />
                    <FormControlLabel value="TEAM" control={<Checkbox {...register("TEAM")} />} label="TEAM" />
                    <FormControlLabel value="PO" control={<Checkbox {...register("PO")} />} label="PO" />
                    <FormControlLabel value="SM" control={<Checkbox {...register("SM")} />} label="SM" />
                </FormGroup>
                <Button variant="contained" type="submit">Créer</Button>
            </form>
        </div>
    );
}

export default NewPartie;