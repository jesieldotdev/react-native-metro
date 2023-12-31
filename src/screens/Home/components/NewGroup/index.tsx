import {Button, ChipsInput, Text, TextField, View} from 'react-native-ui-lib';
import * as S from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

export default function NewGroup() {
  const [chipSelected, setSelectedChip] = React.useState<string>('');
  const chips = [
    {name: 'Viagens', icon: 'plane'},
    {name: 'Imóveis', icon: 'home'},
    {name: 'Casal', icon: 'heart'},
    {name: 'Outros', icon: 'list'},
  ];

  function handleChipClick(chipName: string) {
    setSelectedChip(chipName);
  }

  return (
    <S.Container>
      <S.Content>
        <S.IconLeft>
          <MaterialCommunityIcons
            name="file-image-plus"
            size={42}
            color="#8f2abd"
          />
        </S.IconLeft>
        <TextField
          style={{
            width: '100px',
            fontSize: 24,
            color: '#778787',
          }}
          floatingPlaceholderStyle={{
            fontSize: 18,
          }}
          placeholder={'Nome'}
          floatingPlaceholder
          // onChangeText={onChangeText}
          enableErrors
          validate={['required', 'email', value => value.length < 30]}
          validationMessage={[
            'Field is required',
            'Email is invalid',
            'Password is too short',
          ]}
          showCharCounter
          maxLength={30}
        />
      </S.Content>

      <S.Content>
        <View
          style={{
            padding: 8,
            backgroundColor: '#eee',
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 20,
              color: '#898989',
            }}>
            Categoria{' '}
          </Text>
          <S.ChipsContainer>
            {chips.map(item => {
              return (
                <>
                  <Button
                    key={item.name}
                    onPress={() => handleChipClick(item.name)}
                    backgroundColor={
                      chipSelected === item.name ? '#8f2abd' : ''
                    }
                    outline={chipSelected !== item.name}
                    outlineColor={chipSelected !== item.name ? '#8f2abd' : ''}
                    style={{
                      marginRight: 8,
                      // backgroundColor:
                      //   chipSelected === item.name ? '#8f2abd' : '',
                    }}>
                    <Icon
                      style={{
                        marginRight: 4,
                      }}
                      name={item.icon}
                      size={18}
                      color={chipSelected !== item.name ? '#8f2abd' : '#fff'}
                    />
                    <Text
                      style={{
                        color: chipSelected !== item.name ? '#8f2abd' : '#fff',
                        fontWeight: 500,
                      }}>
                      {item.name}
                    </Text>
                  </Button>
                </>
              );
            })}
          </S.ChipsContainer>
        </View>
      </S.Content>
    </S.Container>
  );
}
