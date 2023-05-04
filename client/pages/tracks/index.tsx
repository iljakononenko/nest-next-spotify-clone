import React from 'react';
import MainLayout from "@/layouts/MainLayout";
import {Button, Card, Grid, Box} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "@/types/track";
import TrackList from "@/components/TrackList";

const Index = () => {

    const router = useRouter();
    const tracks: ITrack[] = [
        { name: "Track 1", artist: "Illia", text: "Text of track", timesListened: 0, imgSrc: "image/f16363a2-a22e-415e-95ac-36149663a628.png", audio: "audio/f7aa0c3e-8769-4e9d-a0d9-ba9c94282b5c.mp3", comments: [], _id: "6453c5c7df068e9e13faa44e" },
        { name: "Track 1", artist: "Illia", text: "Text of track", timesListened: 0, imgSrc: "image/f16363a2-a22e-415e-95ac-36149663a628.png", audio: "audio/f7aa0c3e-8769-4e9d-a0d9-ba9c94282b5c.mp3", comments: [], _id: "6453c5c7df068e9e13faa44d" },
        { name: "Track 1", artist: "Illia", text: "Text of track", timesListened: 0, imgSrc: "image/f16363a2-a22e-415e-95ac-36149663a628.png", audio: "audio/f7aa0c3e-8769-4e9d-a0d9-ba9c94282b5c.mp3", comments: [], _id: "6453c5c7df068e9e13faa44f" },
    ]

    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent={'space-between'}>
                            <h1>Tracks list</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Load</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;
