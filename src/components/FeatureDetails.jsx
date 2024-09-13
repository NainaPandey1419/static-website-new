import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import VisaIcon from '@mui/icons-material/Assignment';
import DriverIcon from '@mui/icons-material/DirectionsCar';
import GuideIcon from '@mui/icons-material/Tour';
import AgencyIcon from '@mui/icons-material/Business';
import ChatIcon from '@mui/icons-material/Chat';
import ExperienceIcon from '@mui/icons-material/Star';
import ItineraryIcon from '@mui/icons-material/Map';
import WhiteboardIcon from '@mui/icons-material/Dashboard';
import LiveStreamIcon from '@mui/icons-material/Videocam';
import GamesIcon from '@mui/icons-material/SportsEsports';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FlightIcon from '@mui/icons-material/Flight';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DateRangeIcon from '@mui/icons-material/DateRange';
import RouteIcon from '@mui/icons-material/Route';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HotelIcon from '@mui/icons-material/Hotel';
import CommuteIcon from '@mui/icons-material/Commute';
import EventIcon from '@mui/icons-material/Event';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CommunityIcon from '@mui/icons-material/People';
import japanIcon from '../assets/japan.png';
import compassIcon from '../assets/compass.png';
import communityIcon from '../assets/community.png';
import bagpackIcon from '../assets/bagpack.png';
import communityIcon2 from '../assets/communityIcon2.jpeg';
import bagpackIcon2 from '../assets/bagpackIcon2.jpeg';
import aiAssistantIcon from '../assets/assistant.png';
import roadmapIcon from '../assets/roadmap.png';
import aggregator from '../assets/aggregator.jpeg';
import shop from '../assets/shop.jpeg';

import '../App.css';
import { featureDetailsStyles } from "./FeatureDetailsStyles";

const FeatureDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const featuresData = {
    Aggregator: {
      title: "THE ULTIMATE AGGREGATOR",
      subtitle: "ALL-IN-ONE BOOKING PLATFORM!",
      features: [
        { icon: <HotelIcon />, title: "Hotel Listing Websites", description: "Compare and book hotels across various platforms for the best rates." },
        { icon: <CommuteIcon />, title: "Commute Providers", description: "Find the most convenient commute options for your journey." },
        { icon: <EventIcon />, title: "Events & Tickets Booking Platforms", description: "Book tickets for events, shows, and attractions at your destination." },
        { icon: <StoreIcon />, title: "Online Travel Agencies (OTAs)", description: "Access a wide range of travel services offered by leading OTAs." },
      ],
      mainIcon: aggregator,
      decorativeIcon: bagpackIcon2,
      gridCols: 2,
    },
    DTCommunity: {
      title: "DT COMMUNITY",
      subtitle: "JOIN, SHARE, AND ENGAGE",
      features: [
        { icon: <CommunityIcon />, title: "Join Groups", description: "Become part of groups that match your travel interests." },
        { icon: <ChatIcon />, title: "Engage in Discussions", description: "Discuss travel plans, experiences, and tips with like-minded people." },
        { icon: <ExperienceIcon />, title: "Share Experiences", description: "Post your travel experiences, reviews, and itineraries." },
      ],
      mainIcon: communityIcon2,
      decorativeIcon: bagpackIcon2,
      gridCols: 3,
    },
    DTShop: {
      title: "DT SHOP",
      subtitle: "SHOP FOR YOUR TRAVEL NEEDS",
      features: [
        { icon: <ShoppingCartIcon />, title: "Travel Gear", description: "Browse and purchase essential travel gear and accessories." },
        { icon: <StoreIcon />, title: "Exclusive Deals", description: "Get access to exclusive deals and discounts on travel products." },
        { icon: <FavoriteIcon />, title: "Curated Collections", description: "Shop from a collection of handpicked travel items." },
      ],
      mainIcon: shop,
      decorativeIcon: bagpackIcon2,
      gridCols: 3,
    },
    Services: {
      title: "GETAWAY STORE & SERVICES",
      subtitle: "YOUR ONE-STOP TRAVEL SOLUTION!",
      features: [
        { icon: <VisaIcon />, title: "Visa Services", description: "Our Agents will help you expedite your visas with the best prices." },
        { icon: <DriverIcon />, title: "Drivers", description: "Our Verified Personal & Commercial Vehicle drivers will give you quality and safe getaways." },
        { icon: <GuideIcon />, title: "Travel Guide", description: "We provide you with travel guides who are experienced, entertaining and know the best about places." },
        { icon: <AgencyIcon />, title: "Travel Agencies", description: "Want a custom getaway package? Our partner agencies are experts in doing that and you can compare their proposals in our portal." },
      ],
      mainIcon: japanIcon,
      decorativeIcon: compassIcon,
      gridCols: 2,
    },
    Campanion: {
      title: "COMPANION",
      subtitle: "EXPLORE AND CONNECT!",
      features: [
        { icon: <ChatIcon />, title: "Chat", description: "Chat with multiple enthusiasts globally. Create your own chatroom" },
        { icon: <ExperienceIcon />, title: "Experiences", description: "Create your profile and share your experiences and reviews." },
        { icon: <ItineraryIcon />, title: "Itinerary", description: "Create, share, or sell your itineraries with your personal experiences and preferences." },
        { icon: <WhiteboardIcon />, title: "White Board", description: "Get a whiteboard where you can plan your getaways to your group." },
        { icon: <LiveStreamIcon />, title: "Live Stream", description: "Live stream your experience with others and request their support." },
        { icon: <GamesIcon />, title: "Play Games", description: "Play exciting games and quizzes and win Dash Points for your travels." },
      ],
      mainIcon: communityIcon,
      decorativeIcon: bagpackIcon,
      gridCols: 3,
    },
    DAIna: {
      title: "AI BOOKING",
      subtitle: "ROADMAP",
      description: "Take Suggestions of your Trip from our AI Assistant by providing the details like your getaway Type, Budget, your interest and the day getaway (Trip) or directly Chat with the AI Assistant (DAIna).",
      features: [
        {
          title: "USER INPUTS",
          items: [
            { icon: <LocationOnIcon />, text: "Current Location" },
            { icon: <AttachMoneyIcon />, text: "Budget (Daily/Total)" },
            { icon: <FlightIcon />, text: "Destination/Desired Getaway (if Any)" },
            { icon: <FavoriteIcon />, text: "Your Preferences/Interest" },
            { icon: <DateRangeIcon />, text: "Dates of your Plan" },
          ]
        },
        {
          title: "AI OUTPUTS",
          items: [
            { icon: <RouteIcon />, text: "Personalized Getaway Itineraries" },
            { icon: <TrendingUpIcon />, text: "Dynamic Price Optimization" },
            { icon: <EmojiObjectsIcon />, text: "Intelligent Getaway Suggestion" },
          ]
        },
        {
          title: "Cherry on cake",
          items: [
            { icon: <ChatIcon />, text: "AI Trained Chatbot Model" },
          ]
        }
      ],
      mainIcon: aiAssistantIcon,
      decorativeIcon: roadmapIcon,
      gridCols: 3,
    },
  };

  const currentFeature = featuresData[title] || {};

  if (!currentFeature.title) {
    return <Typography style={{color:'black'}}>Feature not found</Typography>;
  }

  const renderFeatureContent = () => {
    if (title === 'DAIna') {
      return (
        <Grid container spacing={4} sx={featureDetailsStyles.benefitsContainer}>
          {currentFeature.features.map((section, sectionIndex) => (
            <Grid item xs={12} md={4} key={sectionIndex}>
              <Paper elevation={2} sx={{...featureDetailsStyles.sectionItem, animation: `slideUp 0.5s ease-out ${0.2 * (sectionIndex + 1)}s`}}>
                <Typography variant="h6" sx={featureDetailsStyles.sectionTitle}>
                  {section.title}
                </Typography>
                {section.items.map((item, itemIndex) => (
                  <Box key={itemIndex} sx={featureDetailsStyles.itemContainer}>
                    {React.cloneElement(item.icon, { sx: featureDetailsStyles.icon })}
                    <Typography variant="body2" sx={featureDetailsStyles.itemText}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}
                {section.title === "Cherry on cake" && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <img src={roadmapIcon} alt="Roadmap" style={{ width: '333px', height: 'auto' }} />
                  </Box>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      );
    } else {
      return (
        <Grid container spacing={4} sx={featureDetailsStyles.benefitsContainer}>
          {currentFeature.features.map((feature, index) => (
            <Grid item xs={12} md={12 / currentFeature.gridCols} key={index}>
              <Paper elevation={2} sx={{...featureDetailsStyles.benefitItem, animation: `slideUp 0.5s ease-out ${0.2 * (index + 1)}s`}}>
                {React.cloneElement(feature.icon, { sx: featureDetailsStyles.icon })}
                <Typography variant="h6" sx={featureDetailsStyles.sectionTitle}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={featureDetailsStyles.itemText}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  return (
    <Container maxWidth="lg" sx={featureDetailsStyles.container}>
      <Paper elevation={3} sx={{...featureDetailsStyles.paper, animation: 'fadeIn 0.5s ease-out'}}>
        <Typography variant="h2" component="h1" sx={{...featureDetailsStyles.title, animation: 'slideDown 0.5s ease-out'}}>
          {currentFeature.title}
        </Typography>

        <Typography variant="h4" sx={{...featureDetailsStyles.subtitle, animation: 'slideDown 0.5s ease-out 0.2s'}}>
          {currentFeature.subtitle}
        </Typography>

        {currentFeature.description && (
          <Typography variant="body1" sx={{...featureDetailsStyles.description, animation: 'fadeIn 0.5s ease-out 0.4s'}}>
            {currentFeature.description}
          </Typography>
        )}

        {renderFeatureContent()}

        {currentFeature.mainIcon && (
          <Box sx={{textAlign: 'center', animation: 'fadeIn 0.5s ease-out 1s'}}>
            <img src={currentFeature.mainIcon} alt={currentFeature.title} style={featureDetailsStyles.mainIcon} />
          </Box>
        )}

        {currentFeature.decorativeIcon && title !== 'DAIna' && (
          <Box sx={{
            position: 'absolute',
            [title === 'Campanion' ? 'left' : 'right']: '10%',
            [title === 'Campanion' ? 'bottom' : 'top']: '10%',
            animation: 'floatAnimation 3s ease-in-out infinite'
          }}>
            <img src={currentFeature.decorativeIcon} alt="Decorative Icon" style={{width: '100px'}} />
          </Box>
        )}

        <Box sx={{textAlign: 'center', animation: 'fadeIn 0.5s ease-out 1.2s'}}>
          <Button 
            variant="contained" 
            onClick={() => navigate('/features')} 
            sx={featureDetailsStyles.backButton}
          >
            Back to Features
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default FeatureDetails;