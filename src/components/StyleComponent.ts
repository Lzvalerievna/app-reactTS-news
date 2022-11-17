import styled, { css} from "styled-components";


export const ContainerApp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: 50%;
  transform: translate(-50%,-50%);
  width: 1248px;
  height: 1248px;
  background: 
    linear-gradient( #42567A, transparent 1px),
    linear-gradient(90deg,#42567A, transparent 1px);
    background-size: 624px 624px;
    border: 1px solid #42567A;
`;

export const AppName = styled.h1`
  margin: 0;
  width: 353px;
  height: 134px;
  font-size: 56px;
  color: #696c7a;
  line-height: 120%;
  padding-left: 78px;
  padding-top: 178px;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
`;

export const EventDates = styled.div`
  display: flex;
  font-size: 200px;
  margin-top: -365px;
  margin-left: 120px;
`;

export const FirstDate = styled.div`
  color: #5D5FEF;
`;

export const LastDate = styled.div`
  color: #EF5DA8;
  padding-left: 60px;
`;

export const MySwiper = styled.div`
  width: 1060px;
  margin-top: 170px;
  margin-left: 95px;
  overflow: hidden;
`;
export const SliderDate = styled.h1`
  font-size: 26px;
  color: #3877EE;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
`;

export const SliderText = styled.p`
  padding-bottom: 30px;
  color: #565861;
  font-size: 24px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
`;

export const EventsList = styled.div`
  font-size: 25px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
`;

export const ContentBox = styled.div`
  margin: 0 auto;
  margin-top: -140px;
  width: 500px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 200px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 1px solid #9D45CC;
  font-size: 0;
  `;

export const ButtonContainer = styled.div`
  position: absolute;
  transform:  rotate(60deg);
`;

export const ButtonName = styled.div`
  position: absolute;
  font-size: 30px;
  margin-left: 440px;
  margin-top: -10px;
  opacity: 0;
  color: #9D45CC;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
`;

export const ButtonId = styled.button<{left: string, top: string, corner: string, classActive: string}>`
  position: absolute;
  left: ${({left}) => left};
  top: ${({top}) => top};
  border-radius: 50%;
  padding: 0;
  width: 15px;
  height:15px;
  margin-left: -7px;
  margin-top: -7px;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  background-color: #9D45CC;
  font-size: 7px;
  cursor: pointer;
  transform: rotate(${({corner}) => corner});
  font-family: 'Rubik', sans-serif;
  font-weight: 500;

${({classActive}) => {
  switch (classActive) {
     case 'true':
        return css `
           width: 50px;
           height: 50px;
           margin-left: -20px;
           margin-top: -27px;
           border-radius: 50%;
           align-items: center;
           justify-content: center;
           background-color: #9D45CC;
           color: white;
           font-size: 24px;
           cursor: not-allowed;
           font-family: 'Rubik', sans-serif;
           font-weight: 500;
        `;
        default:
            return css`
          `;
    }
}}
`;

export const NavPagination =styled.div`
  margin-left: 80px;
`;

const ButtonGroop = styled.button`
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  margin-top: 15px;
  cursor: pointer;
  background-color: #9D45CC;
  
  &:after {
    color: white;
    font-size: 24px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
  }
  
  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
    border: 1px solid gray;
    &:after {
      color: gray;
    }
  }
`;

export const ButtonPrev =styled(ButtonGroop)`
  &:after {
     content: '<';
  }
`;
export const ButtonNext =styled(ButtonGroop)`
  margin-left: 20px;
    &:after {
      content: '>';
      color: white;
    }
`;

export const PaginationNum = styled.div`
  margin-left: 5px;
  display: block;
  margin-top: -100px;
  font-size: 24px;
  color: #9D45CC;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
`;













