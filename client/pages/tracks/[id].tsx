import React, {useState} from 'react';
import {ITrack} from "@/types/track";
import MainLayout from "@/layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import axios from "axios";
import {useInput} from "@/hooks/useInput";

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const router = useRouter();

    const username = useInput('')
    const comment = useInput('')

    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: comment.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <MainLayout title={"Music platform - " + track.name + " - " + track.artist}>
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
                    {...username}
                    label="Your name"
                    fullWidth
                />
                <TextField
                    {...comment}
                    label="Your Comment"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button onClick={addComment}>Send comment</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div key={comment._id}>
                        <div>Username - {comment.username}</div>
                        <div>Comment - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id)
    return {props: {serverTrack: response.data}}
}
