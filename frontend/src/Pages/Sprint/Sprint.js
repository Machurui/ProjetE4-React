import React from "react";
import Box from '@mui/material/Box';
import Header from "../../Components/Header";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

export default function Sprint() {
    let sprints = [
        {
            id: 1,
            name: 'test1',
            dateDebut: '20220105',
            dateFin: '20220125',
            point: '100',
        },
        {
            id: 2,
            name: 'test2',
            dateDebut: '20220208',
            dateFin: '20220225',
            point: '80',
        },
        {
            id: 3,
            name: 'test3',
            dateDebut: '20220405',
            dateFin: '20220425',
            point: '120',
        },
    ]

    return (
        <div className="">
            <Box>
                <Header />
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {sprints.map((sprint) => (
                        <ListItem key={sprint.id} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={sprint.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {moment(sprint.dateDebut).format("DD/MM/YYYY")} - {moment(sprint.dateFin).format("DD/MM/YYYY")}
                                        </Typography>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {sprint.dateDebut - sprint.dateFin + "j"} - {sprint.point} pts 
                                        </Typography>
                                        <IconButton value={sprint.id} aria-label="Edit">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="Edit">
                                            <DeleteIcon />
                                        </IconButton>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/">Créer une story</Button>
                </Box>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Button variant="contained" href="/">Retour</Button>
                </Box>
            </Box>
        </div>
    );
}