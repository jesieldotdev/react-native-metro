import styled from 'styled-components/native';

export const Container = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 32px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background-color: #eee;
  padding: 2px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const AddImage = styled.TouchableOpacity``;

export const IconLeft = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;

  /* background-color: #363636; */
  background-color: #f8e2fd;
  gap: 8px;
  /* elevation: 10; */
  shadow-color: '#000';
  shadow-opacity: 0.2;
  shadow-radius: 3.8px;
  padding: 18px;
  border-radius: 8px;
  margin: 8px;
`;

export const ChipsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
`;
