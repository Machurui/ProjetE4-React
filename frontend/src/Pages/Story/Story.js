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

export default function Sprint() {
    let stories = [
        {
            id: 1,
            name: 'test1',
            point: '2',
        },
        {
            id: 2,
            name: 'test2',
            point: '4',
        },
        {
            id: 3,
            name: 'test3',
            point: '1',
        },
    ]

    return (
        <div className="">
            <Box>
                <Header />
                <List class="" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {stories.map((story) => (
                        <ListItem key={story.id} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={story.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {story.point} pts
                                        </Typography>
                                        <IconButton value={story.id} aria-label="Edit">
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
