import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  gap: 8px;
  align-items: flex-end;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
   gap: 14px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
 
`;
export const Wrapper = styled.div`
display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 48px;
  align-items: flex-end;
  

  
`;

export const Form = styled.form`
  display: flex;
 gap: 8px;
 text-align: start;
 @media screen and (max-width: 425px) {
  flex-direction: column;
  align-items: center;
 
}
  @media screen and (max-width: 768px) {
    // flex-direction: column;
    align-items: center;
   
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgba(138, 138, 137, 1);
  font-family: 'Manrope';
  padding-left: 5px;
  margin: 8px 0 0 0;
`;

export const InputLeft = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;

  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  &:focus {
    outline-color: #3470ff;
  }
  // @media screen and (max-width: 768px) {
  //   width: 120px;
  // }

`;

export const InputRight = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 45px;

  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  &:focus {
    outline-color: #3470ff;
  }
  // @media screen and (max-width: 768px) {
  //   width: 120px;
  // }
`;

export const UnitLeft = styled.span`
  position: absolute;
  display: block;
  left: 20px;
  top: 15px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
`;

export const UnitRight = styled.span`
  position: absolute;
  display: block;
  left: 180px;
  top: 15px;
  font-family: 'Manrope';
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  // @media screen and (max-width: 768px) {
  //   left: 140px;
  // }
`;

export const SearchButton = styled.button`
  display: inline-blok;
  width: 136px;
  height: 48px;
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
