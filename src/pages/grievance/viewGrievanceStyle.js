import styled from "styled-components";

export const Card = styled.div`
  height: calc(70vh);
  margin: 10px;
  padding: 0;
  @media(max-width: 1200px){
    height: auto;
  }
`;

export const Button = styled.button`
  margin: 10px;
  width: 30%;
`;
export const CardCarousel =styled.div`
  width:80%;
  min-hei
`;

export const ATag = styled.a`
 margin-bottom: 50px;
`;

export const ActionCorner =styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  @media(max-width: 700px){
    height: auto;
    margin-bottom: 50px;
  }
  @media(min-width: 990px) and(max-width:1400px){
    width: 50%;
  }
`;
export const Text = styled.p`
  height: 40%;
  padding-top: 20px;
`;

export const Description = styled.div`
  height: 42%;
  width: 90%;
`;

export const ButtonDiv=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProgressHead=styled.div`
  //margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  //width: 80%;
  @media(min-width: 990px) and(max-width:1400px){
    width: 50%;
  }
`;
export const CardFooter = styled.div`
  width: 95%;
  margin: 15px;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  @media(max-width: 1200px){
    margin: 0;
    width: auto;
  }
`;