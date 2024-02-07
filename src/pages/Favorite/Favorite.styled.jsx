import styled from '@emotion/styled';

export const FavSection = styled.div`
  padding-bottom: 100px;
  margin-top: 100px;
  max-width: 1280px;
  min-height: calc(100vh - 132px);
  padding: 16px;
  margin: auto;

  @media (min-width: 768px) {
    padding-top: 100px;
  }
`;

export const MessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const FavText = styled.h2`
  margin: auto;
  text-align: center;
  font-size: 2rem;
  color: #1a1a1a; 
`;
