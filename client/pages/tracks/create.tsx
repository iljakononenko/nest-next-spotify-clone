import React, {useState} from 'react';
import MainLayout from "@/layouts/MainLayout";
import StepWrapper from "@/components/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import FileUpload from "@/components/FileUpload";
import {useInput} from "@/hooks/useInput";
import {useRouter} from "next/router";
import axios from "axios";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [image, setImage] = useState(null);
    const [audio, setAudio] = useState(null);
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('artist', artist.value)
            formData.append('text', text.value)
            formData.append('picture', image)
            formData.append('audio', audio)
            axios.post('http://localhost:5000/tracks', formData)
                .then(resp => router.push('/tracks'))
                .catch(e => console.log(e))
        }
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                <h1>Track Adding</h1>
                {
                    activeStep === 0 &&
                    <Grid container direction={'column'} style={{padding: 20}}>
                        <TextField
                            {...name}
                            style={{marginTop: 10}}
                            label={'Track name'}
                        />
                        <TextField
                            {...artist}
                            style={{marginTop: 10}}
                            label={'Artist name'}
                        />
                        <TextField
                            {...text}
                            style={{marginTop: 10}}
                            label={'Track lyrics'}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {
                    activeStep === 1 &&
                    <FileUpload setFile={setImage} accept={"image/*"}>
                        <Button>Load image</Button>
                    </FileUpload>
                }
                {
                    activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept={"audio/*"}>
                        <Button>Load audio</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Forward</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;
