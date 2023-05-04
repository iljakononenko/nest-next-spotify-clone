import React, {useRef} from 'react';

interface FileUploadProps {
    setFile: Function;
    accept: string;
}

const FileUpload:React.FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement | null>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e?.target.files[0])
    }

    return (
        <div onClick={() => ref?.current.click()}>
            <input
                style={{display: "none"}}
                type="file"
                accept={accept}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUpload;
