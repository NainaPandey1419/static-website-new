import blogBackgroundImage from '../assets/blogBackground.jpeg'; 

const BlogStyles = {
  mainContainer: (theme) => ({
    position: 'relative',
    color: 'white',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
    padding: theme.spacing(4, 0),
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${blogBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'brightness(60%)',
      zIndex: -1,
    },
  }),
  accentBar: (theme) => ({
    width: '80px',
    height: '4px',
    backgroundColor: '#f77b24',
    marginBottom: theme.spacing(2),
  }),
  title: (theme) => ({
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: {
      xs: '36px',
      sm: '44px',
      md: '54px',
    },
    fontWeight: 800,
    lineHeight: 1.2,
    textAlign: 'center',
    color: 'white',
    marginBottom: theme.spacing(4),
  }),
  card: (theme) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }),
  cardMedia: {
    height: 140,
  },
  cardContent: (theme) => ({
    flexGrow: 1,
    fontFamily: 'Nunito Sans, sans-serif',
  }),
  readMoreButton: (theme) => ({
    marginTop: 'auto',
    alignSelf: 'flex-start',
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: 600,
    color: theme.palette.primary.main,
  }),
};

export default BlogStyles;