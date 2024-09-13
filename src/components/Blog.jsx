import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import blogStyles from './BlogStyles.js';

const Blog = () => {
  const theme = useTheme();

  const blogPosts = [
    { title: 'Exploring the Amazon', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMJX-CLkZpythWmRbbSeOMb-Ihc4Lv2FKmg&s', excerpt: 'Journey through the world\'s largest rainforest...' },
    { title: 'Tokyo: A Neon Wonderland', image: 'https://i.pinimg.com/736x/2d/68/4c/2d684c46317b4f9ebb4b5525db7d190b.jpg', excerpt: 'Discover the vibrant culture of Japan\'s capital...' },
    { title: 'Safari Adventures in Kenya', image: 'https://www.masaimarasafari.in/wp-content/uploads/2024/04/1-elephant.webp', excerpt: 'Witness the majesty of African wildlife...' },
  ];

  return (
    <Box sx={blogStyles.mainContainer(theme)}>
      <Container maxWidth="lg">
        <Box sx={blogStyles.accentBar(theme)} />
        <Typography variant="h2" component="h1" sx={blogStyles.title(theme)}>
          Travel Blog
        </Typography>
        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={blogStyles.card(theme)}>
                <CardMedia
                  component="img"
                  sx={blogStyles.cardMedia}
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={blogStyles.cardContent(theme)}>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                </CardContent>
                <Button size="small" sx={blogStyles.readMoreButton(theme)}>
                  Read More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;