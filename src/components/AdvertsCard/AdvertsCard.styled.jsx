import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 274px;
  height: 426px;
  margin: 0 0 50px 0;
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 271px;
  height: 271px;
  margin-bottom: 14px;
`;

export const Image = styled.img`
  width: 100%;
  height: 274px;
  object-fit: cover;
  border-radius: 14px;
`;

export const WrapperTitle = styled.div`
  width: 274px;
  height: auto;
  align-items: center;
  color: #121417;
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  width: 274px;
  height: 24px;
  overflow: hidden;
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
`;

export const Price = styled.p`
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
`;

export const Description = styled.ul`
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  width: 274px;
  height: 40px;
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  font-weight: 400;
  line-height: 1.5;
  row-gap: 4px;
  justify-content: flex-start;
  margin-bottom: 28px;
  & > li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
  & li {
    color: rgba(18, 20, 23, 0.5);
    font-family: 'Manrope';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const StyledButtonWrapper = styled.div``;

export const StyledButton = styled.button`
  display: inline-blok;
  width: 274px;
  height: 44px;
  // padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  color: #ffffff;
  text-transform: none;
  background-color: #3470ff;
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid #3470ff;
  outline: none;

  &:hover {
    background-color: #0b44cd;
    border: 1px solid #0b44cd;
  }
`;
