import React, {useState} from 'react';
import MainLayout from "@/layouts/MainLayout";
import StepWrapper from "@/components/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import FileUpload from "@/components/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [image, setImage] = useState(null);
    const [audio, setAudio] = useState(null);

    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
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
                            style={{marginTop: 10}}
                            label={'Track name'}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={'Artist name'}
                        />
                        <TextField
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
