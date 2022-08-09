import { Typography } from '@mui/material';

export const Header = ({ children, ...props }) => {
    return <Typography {...props}>{children}</Typography>;
};
