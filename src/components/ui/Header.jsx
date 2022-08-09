import { Typography } from '@material-ui/core';

export const Header = ({ text, ...props }) => {
    return <Typography {...props}>{text}</Typography>;
};
