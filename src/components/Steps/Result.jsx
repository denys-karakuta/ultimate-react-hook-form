import { useState } from 'react';
import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { InsertDriveFile } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

import { PrimaryButton } from '../UI/PrimaryButton';
import { useData } from '../../context/DataContext';
import { sendData } from '../../utils/sendData';

const styles = {
    paper: {
        marginBottom: '30px',
    },
    table: {
        marginBottom: '30px',
    },
};

const Result = () => {
    const [success, setSuccess] = useState(false);
    const { data } = useData();

    const { files } = data;

    const entries = Object.entries(data).filter(
        (entry) => entry[0] !== 'files'
    );

    const onSubmit = () => {
        const formData = new FormData();
        data?.files?.forEach((file) => {
            formData.append('files', file, file.name);
        });

        entries.forEach((entry) => {
            formData.append(entry[0], entry[1]);
        });

        sendData(formData, setSuccess);
    };

    if (success) {
        return <Confetti />;
    }

    return (
        <Box className='box'>
            <Typography component='h2' variant='h4' mt={2} mb={2}>
                👌 Result
            </Typography>

            <TableContainer sx={styles.paper} component={Paper}>
                <Table sx={styles.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Field</TableCell>
                            <TableCell align='right'>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry) => (
                            <TableRow key={entry[0]}>
                                <TableCell component='th' scope='row'>
                                    {entry[0]}
                                </TableCell>
                                <TableCell align='right'>
                                    {entry[1]?.toString()}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {files && (
                <>
                    <Typography component='h2' variant='h5' mt={2}>
                        📦 Files
                    </Typography>
                    <List>
                        {files.map((f, index) => (
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
                </>
            )}

            <Grid
                container
                spacing={2}
                justifyContent='space-between'
                alignItems='flex-end'
            >
                <Grid item>
                    <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
                </Grid>
                <Grid item>
                    <Link to='/' className={'start-over'}>
                        Start over
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Result;
