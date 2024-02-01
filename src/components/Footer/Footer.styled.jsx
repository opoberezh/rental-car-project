
import styled from '@emotion/styled';

export const FooterContainer = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
 
  justify-content: space-evenly;
  gap: 12px;
  
  background: linear-gradient(to top,   #000000,
    #000046,
    #1CB5E0,
    #0B44CD);

  @media screen and (max-width: 425px) {
    gap: 8px;
   
  }
`;

export const FooterList = styled.ul`
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
  @media screen and (max-width: 425px) {
    gap: 5px;
    flex-direction: column;
  }
  
`;

export const SocialNet = styled.a`
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0 1px 2px rgba(0, 0, 70, 0.4);

  &:hover {
    color:  #00baff;
    text-shadow: 0 1px 2px rgba(0, 0, 70, 0.6);
    position: relative;
    transition: width 0.3s ease;
  }
`;
export const Span = styled.span`
  vertical-align: top;
`;
