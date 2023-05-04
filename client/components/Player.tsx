import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import styles from "../styles/Player.module.scss"
import {ITrack} from "@/types/track";
import TrackProgress from "@/components/TrackProgress";

const Player = () => {
    const track: ITrack = { name: "Track 1", artist: "Illia", text: "Text of track", timesListened: 0, imgSrc: "image/f16363a2-a22e-415e-95ac-36149663a628.png", audio: "audio/f7aa0c3e-8769-4e9d-a0d9-ba9c94282b5c.mp3", comments: [], _id: "6453c5c7df068e9e13faa44e" };

    const active = false;

    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()} style={{marginRight: 6}}>
                {
                    active
                        ?   <Pause />
                        :   <PlayArrow />
                }
            </IconButton>
            <Grid container direction={'column'} style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress leftValue={0} rightValue={100} onChange={() => {}} />
            <VolumeUp style={{marginLeft: 'auto', marginRight: 10}} />
            <TrackProgress leftValue={0} rightValue={100} onChange={() => {}} />
        </div>
    );
};

export default Player;
