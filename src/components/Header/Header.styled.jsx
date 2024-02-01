import {  NavLink } from 'react-router-dom';
import styled from '@emotion/styled';


export const HeaderContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 12px;
  background: linear-gradient(to top,
    #0B44CD, #1CB5E0, #000046, #000000);

  @media screen and (min-width: 425px) {
    gap: 8px;
  }
`;

export const StyledHeader = styled.header`
// padding: 12px;
//   background-color: #0B44CD;
`;
export const ImgWrapper = styled.div`
 
  border-radius: 12px;
  background-color: #ffffff;
 
padding: 5px;
`;

export const Img = styled.img`
  width: 30px;

  @media screen and (min-width: 425px) {
   width: 50px;

  }
`;



export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 3rem;

  @media screen and (max-width: 425px) {
    gap: 8px;
  }
`;



export const LinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px 32px;
  font-family: Manrope;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 70, 0.4);

  @media screen and (max-width: 425px) {
    padding: 5px;
    font-size: 18px;
  }

  &.active {
    color:  #00baff;
    text-shadow: 0 1px 2px rgba(0, 0, 70, 0.6);
    animation: none;
    transition: none;
  
  }

  &.animated {
    position: relative;
    text-decoration: none;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      width: 0;
      height: 2px;
      background: #ffffff;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;


// export const Navigation = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const StyledLink = styled(Link)`
//   padding: 8px 16px;
//   color: #ffffff; /* White text color */
//   text-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
//   transition:
//     color 0.3s,
//     text-shadow 0.3s;

//   &:hover,
//   &:focus {
//     color: #00baff; /* Blue text color on hover/focus */
//     text-shadow:
//       0 0 5px #00baff,
//       0 0 10px #00baff,
//       0 0 20px #00baff,
//       0 0 40px #00baff,
//       0 0 80px #00baff;
//   }
// `;

// export const IconWrapper = styled.svg`
//   width: ${(props) => props.size || '12px'};
//   height: ${(props) => props.size || '12px'};
//   fill: ${(props) => props.color || '#ffffff'};
//   display: inline-block;
//   margin-right: 5px;
//   box-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
// `;
