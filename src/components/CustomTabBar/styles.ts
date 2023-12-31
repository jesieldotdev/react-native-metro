import styled from 'styled-components/native';

export const Container = styled.View`
  /* background-color: red; */
  justify-content: center;
  align-items: center;
`;
export const Content = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  background-color: rgba(255,255,255, .9);
  gap: 8px;
  elevation: 10;
  shadow-color: "#000";
  shadow-opacity: 0.2;
  shadow-radius: 3.80px;
  /* padding : 16px; */
  border-radius: 99px;
`;

export const ButtonTab = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

`
