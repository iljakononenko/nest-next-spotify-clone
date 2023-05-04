import React from 'react';

interface TrackProgressProps {
    leftValue: number;
    rightValue: number;
    onChange: () => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({leftValue, rightValue, onChange}) => {
    return (
        <div style={{display: 'flex'}}>
            <input type="range" min={leftValue} max={rightValue} value={leftValue} onChange={onChange} />
            <div>{leftValue} / {rightValue}</div>
        </div>
    );
};

export default TrackProgress;
