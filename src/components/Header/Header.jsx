import React from 'react';


import logoMini from '../../assets/logoMini.svg'
import { HeaderContainer, StyledHeader, LinkStyled, Container, Img, ImgWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader>
      <Container>
        <ImgWrapper>
        <Img src={logoMini} alt="Logo"/>
      </ImgWrapper>
       
        <LinkStyled className="animated"  to="/">
          Home
        </LinkStyled>
        <LinkStyled className="animated" to="/catalog">
          Catalog
        </LinkStyled>
        <LinkStyled  className="animated" to="/favorite">
          Favorites
        </LinkStyled>
      </Container>
    </StyledHeader>
    </HeaderContainer>

  );
};
