import React from "react";
import { useForm } from "react-hook-form";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function ParticiperDaily() {
    const { register, handleSubmit } = useForm();
    const [story, setStory] = React.useState('');

    const handleChange = (event) => {
        setStory(event.target.value);
      };
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


        <h1 class="mb-16 text-2xl font-medium text-center">Story du jour</h1>
        <Box class="mb-3" sx={{ minWidth: 120 }}>
        <FormControl onSubmit={handleSubmit(onSubmit)} variant="standard" fullWidth>
        <InputLabel id="select-label">Choisissez votre story</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={story}
          label="Story"
          onChange={handleChange}
          {...register("story", { required: true })}
        >
                <MenuItem value={"story1"}>story1</MenuItem>
                <MenuItem value={"story2"}>story2</MenuItem>
                <MenuItem value={"story3"}>story3</MenuItem>
        </Select>
      </FormControl>
    </Box>
                <Box class="mb-0.5"><Button variant="contained" type="submit">Simuler sa productivité</Button></Box>
                <Box class="mt-2.5"><Button variant="contained" type="submit">Retour</Button></Box>
    </div>
);
}

export default ParticiperDaily;