import { Container, Title,  Button, HomeWrapper, Logo } from './Home.styled';


const Home = () => {
  return (
    <HomeWrapper>
      <Container> 
      
      <Title>Take it easy with<Logo> carFORrent</Logo> Enjoy your trip</Title>
     
      <Button to={'/catalog'}>Let's start</Button>
    </Container>
    </HomeWrapper>
    
  );
};

export default Home;
