import React from 'react';
import { Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 6 }}>
      {'Made with ❤️ by '}
      <Link color="inherit" href="https://github.com/yourusername">
        Connect Technologie
      </Link>
    </Typography>
  );
};

export default Footer;