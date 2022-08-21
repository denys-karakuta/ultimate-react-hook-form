import { Controller } from 'react-hook-form';
import Dropzone from 'react-dropzone';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
} from '@mui/material';
import { CloudUpload, InsertDriveFile } from '@mui/icons-material';

const styles = {
    paper: {
        backgroundColor: '#eee',
        textAlign: 'center',
        cursor: 'pointer',
        color: '#333',
        padding: '10px',
        marginTop: '20px',
    },
    icon: {
        marginTop: '16px',
        color: '#888888',
        fontSize: '42px',
    },
    errorMessage: {
        marginTop: '10px',
        color: 'red',
        fontSize: '18px',
    },
};

export const FileInput = ({ control, name, setValue, accept }) => {
    return (
        <Controller
            control={control}
            name={name}
            // rules={{
            //     Эти правила работают, но кастомный resolver тоже норм
            //     required: { value: true, message: 'This field is required' },
            // }}
            render={({ field: { onChange, onBlur, value }, fieldState }) => (
                <>
                    <Dropzone
                        accept={accept}
                        onDrop={(acceptedFiles) => {
                            setValue(name, acceptedFiles, {
                                shouldValidate: true,
                            });
                        }}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <Paper
                                variant='outlined'
                                sx={styles.paper}
                                {...getRootProps()}
                            >
                                <CloudUpload sx={styles.icon} />
                                <input
                                    {...getInputProps()}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                />
                                <p>
                                    Drag 'n' drop files here, or click to select
                                    files
                                </p>
                            </Paper>
                        )}
                    </Dropzone>

                    {fieldState.error && (
                        <Box sx={styles.errorMessage}>
                            {fieldState.error.message}
                        </Box>
                    )}

                    {value && !fieldState.error && (
                        <List>
                            {value.map((f, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFile />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={f.name}
                                        secondary={f.size}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    )}
                </>
            )}
        />
    );
};
