import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, InputAdornment, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../assets/logo.png';
import { footerStyles } from './FooterStyles';

const Footer = () => {
  return (
    <Box sx={footerStyles.footerBox} style={{height:'380px'}}>
      <Container sx={footerStyles.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box sx={footerStyles.logoBox}>
              <img src={logo} alt="Company Logo" style={footerStyles.logoImage} />
            </Box>
            <Typography variant="body1" sx={footerStyles.description}>
              DASHTINY travel fund is a good way to track your travel money.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="https://www.instagram.com/dashtiny.dt/" target="_blank" rel="noopener" sx={{ color: 'inherit' }}>
                <InstagramIcon sx={footerStyles.socialIcon} />
              </Link>
              <Link href="https://www.linkedin.com/company/dashtiny/" target="_blank" rel="noopener" sx={{ color: 'inherit' }}>
                <LinkedInIcon sx={footerStyles.socialIcon} />
              </Link>
              <Link href="https://www.facebook.com/yourdashtiny" target="_blank" rel="noopener" sx={{ color: 'inherit' }}>
                <FacebookIcon sx={footerStyles.socialIcon} />
              </Link>
              <Link href="https://twitter.com/yourdashtiny" target="_blank" rel="noopener" sx={{ color: 'inherit' }}>
                <TwitterIcon sx={footerStyles.socialIcon} />
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={footerStyles.sectionTitle}>
              About
            </Typography>
            <Typography variant="body1" component="div" sx={{ mb: 1 }}>
              • Technical Info
            </Typography>
            <Typography variant="body1" component="div">
              • Other Products
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={footerStyles.sectionTitle}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>140, Kashmiri Colony, Niranjanpur, Dehradun, Uttarakhand-248001, India</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>82913 95670</Typography>
            <Typography variant="body1" sx={{ mt: 1}}>info@dashtiny.com</Typography>
            <Typography variant="body1" sx={{ mt: 1}}>operations@dashtiny.com</Typography>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h5" gutterBottom sx={footerStyles.subscribeTitle}>
              Subscribe <span style={{color:'#f77b24'}}>Newsletter</span>
            </Typography>
            <Box component="form" noValidate sx={footerStyles.subscribeForm}>
              <TextField
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                sx={footerStyles.subscribeInput}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        type="submit"
                        variant="contained"
                        sx={footerStyles.subscribeButton}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Typography 
          variant="body2" 
          align="center" 
          sx={footerStyles.copyright}
        >
          Copyright 2022 Dashtiny. All right reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
