export const featureDetailsStyles = {
  container: {
    py: 8,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  paper: {
    p: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 245, 230, 0.9)',
    color: 'black'
  },
  title: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 700,
    color: '#f77b24',
    mb: 2,
    textAlign: 'center',
    fontSize: { xs: '2rem', md: '3rem' }
  },
  subtitle: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 600,
    color: '#68426c',
    mb: 4,
    textAlign: 'center',
    fontSize: { xs: '1.5rem', md: '2rem' }
  },
  description: {
    mb: 2,
    textAlign: 'center',
    fontSize: { xs: '1rem', md: '1.1rem' }
  },
  benefitsContainer: {
    mb: 4,
    mt: 4
  },
  benefitItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    p: 3
  },
  icon: {
    fontSize: 48,
    color: '#f77b24',
    mb: 2,
  },
  sectionTitle: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 600,
    color: '#68426c',
    mb: 2,
    textAlign: 'center'
  },
  benefitDescription: {
    textAlign: 'center',
    fontSize: '0.9rem'
  },
  communityIcon: {
    maxWidth: '200px',
    mt: 4
  },
  backButton: {
    backgroundColor: '#f77b24',
    color: '#fff',
    mt: 4,
    '&:hover': {
      backgroundColor: '#e66d1f',
    },
  },
  sectionItem: {
    padding: 2,
    height: '100%',
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 1,
  },
  itemText: {
    marginLeft: 1,
  },
mainIcon:{
  width: '340px',
  height: '300px'
}
  
};