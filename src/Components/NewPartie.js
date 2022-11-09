import React from "react";
import { useForm } from "react-hook-form";

function NewPartie() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
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
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>
            <input type="submit" />
        </form>
    );
}

export default NewPartie;