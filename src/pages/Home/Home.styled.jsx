import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import bmwHero from '../../assets/bmwHero.jpg'

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bmwHero});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;

export const Container = styled.div`
  display: flex;
  
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 375px;
  padding: 100px 20px 0 20px;
  @media (min-width: 1440px){
    width: 425px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.17;
  text-align: center;
  color: #ffffff;
  @media (min-width: 768px){
    font-size: 32px;
  }
  @media (min-width: 1440px){
    font-size: 38px;
  }
`;



export const Button = styled(Link)`
  display: flex;
  width: 140px;
  height: 4px;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #0b44cd;
  }
`;

export const Logo = styled.span`
font-family: 'Rubik Glitch Pop', system-ui;
font-size: 32px;
color: #000000;
text-shadow:
    0 0 5px #3470ff,
    0 0 10px #3470ff,
    0 0 20px #ffffff,
    0 0 40px #00baff,
    0 0 80px #00baff;
    @media (min-width: 768px){
      font-size: 38px;
    }
    @media (min-width: 1440px){
      font-size: 42px;
    }
`;