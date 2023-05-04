import React from 'react';
import {ITrack} from "@/types/track";
import MainLayout from "@/layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";

const TrackPage = () => {
    const router = useRouter();

    const track: ITrack = { name: "Track 1", artist: "Illia", text: "Text of track", timesListened: 0, imgSrc: "image/f16363a2-a22e-415e-95ac-36149663a628.png", audio: "audio/f7aa0c3e-8769-4e9d-a0d9-ba9c94282b5c.mp3", comments: [], _id: "6453c5c7df068e9e13faa44e" };

    return (
        <MainLayout>
            <Button variant={'outlined'} style={{fontSize: 32}} onClick={() => router.push('/tracks')}>
                Back to list
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={'http://localhost:5000/' + track.imgSrc} width={200} height={200} alt=""/>
                <div style={{marginLeft: 30}}>
                    <h1>Track name - {track.name}</h1>
                    <h1>Artist - {track.artist}</h1>
                    <h1>Times listened - {track.timesListened}</h1>
                </div>
            </Grid>
            <h1>Track lyrics</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField
                    label="Your name"
                    fullWidth
                />
                <TextField
                    label="Your Comment"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Send comment</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Username - {comment.username}</div>
                        <div>Comment - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;
