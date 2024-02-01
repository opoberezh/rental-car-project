import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  padding: 34px 40px;
  @media screen and (max-width: 425px) {
    padding: 34px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 100px;
  top: 14px;
  right: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;



export const CarImage = styled.img`
  width: 100%;
  width: 461px; 
  height: 248px;
  display: block;
  object-fit: cover;
  border-radius: 14px;
  @media screen and (max-width: 425px) {
    width: 300px; 
  }
`;

export const WrapInfo = styled.div`
  margin-top: 14px;

`;

export const TitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 8px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const Description = styled.p`
  line-height: 1.43;
  margin-top: 14px;
  font-size: 14px;
  width: 461px;
  @media screen and (max-width: 425px) {
    width: 300px; 
    font-size: 12px;
  }
`;
export const OptionsTitel = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 400px;
  font-size: 12px;
  letter-spacing: -0.24px;

  @media screen and (max-width: 425px) {
    width: 270px;
  }
`;

export const ConditionItem = styled.li`
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;
  padding: 7px 14px;
`;

export const ConditionSpan = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const StyledButton = styled(Link)`
display: inline-block;
border-radius: 12px;
padding: 12px 50px;
text-decoration: none;
width: 168px;
height: 44px;
 border: none;
  background: #3470ff;
  color: #fff;
  margin-top: 24px;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;

  

  
  
  
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
