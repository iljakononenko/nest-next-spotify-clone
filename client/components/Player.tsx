import React, {useEffect} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import styles from "../styles/Player.module.scss"
import {ITrack} from "@/types/track";
import TrackProgress from "@/components/TrackProgress";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";

let audio;

const Player = () => {
    const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions();

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
        } else {
            setAudio();
            play();
        }
    }, [active])

    const setAudio = () => {
        if (active) {
            audio.src = 'http://localhost:5000/' + active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100;
        setVolume(Number(e.target.value))
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value);
        setCurrentTime(Number(e.target.value))
    }

    if (!active) {
        return null;
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={play} style={{marginRight: 6}}>
                {
                    pause
                        ?   <PlayArrow />
                        :   <Pause />
                }
            </IconButton>
            <Grid container direction={'column'} style={{width: 200, margin: '0 20px'}}>
                <div>{active?.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{active?.artist}</div>
            </Grid>
            <TrackProgress leftValue={currentTime} rightValue={duration} onChange={e => changeCurrentTime(e)} />
            <VolumeUp style={{marginLeft: 'auto', marginRight: 10}} />
            <TrackProgress leftValue={volume} rightValue={100} onChange={e => changeVolume(e)} />
        </div>
    );
};

export default Player;
