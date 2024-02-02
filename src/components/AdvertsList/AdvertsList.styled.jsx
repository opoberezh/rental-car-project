import styled from '@emotion/styled';

export const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 width: 100%;
 padding: 0 0 24px 0;
`;
export const ListWrapper = styled.ul`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
`;
export const ButtonLoadMore = styled.button`
color: #3470FF;
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
text-decoration-line: underline;
width: 150px;
background: transparent;
border: none;
margin: 0 auto;
&:hover{
  color: #0B44CD;
}
`;
