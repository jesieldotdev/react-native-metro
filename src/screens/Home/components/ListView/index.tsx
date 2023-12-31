import React, {useCallback} from 'react';
import {StyleSheet, Alert, FlatList} from 'react-native';
import {
  Colors,
  BorderRadiuses,
  View,
  ListItem,
  Text,
  Image,
  Button,
} from 'react-native-ui-lib';
import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ListViewProps {
  listData: any[];
  goToScreen: ()=> any

}

const ListView = ({listData, goToScreen}: ListViewProps) => {

  const keyExtractor = useCallback((item: any) => item.name, []);

  const renderRow = useCallback((row: any, id: number) => {
    const statusColor =
      row.inventory.status === 'Paid' ? Colors.green30 : Colors.red30;

    return (
      <View>
        <ListItem
          activeBackgroundColor={Colors.grey60}
          activeOpacity={0.3}
          height={77.5}
          onPress={() => Alert.alert(`pressed on order #${id + 1}`)}>
          <ListItem.Part left>
            {/* <Image source={row.mediaUrl} style={styles.image} /> */}
            <S.IconLeft>
              <Icon name="account-group-outline" size={32} color="#8f2abd" />
            </S.IconLeft>
          </ListItem.Part>
          <ListItem.Part
            middle
            column
            containerStyle={[styles.border, {paddingRight: 17}]}>
            <ListItem.Part containerStyle={{marginBottom: 3}}>
              <Text
                grey10
                text70
                style={{flex: 1, marginRight: 10}}
                numberOfLines={1}>
                {row.name}
              </Text>
              <Text grey10 text70 style={{marginTop: 2}}>
                {row.formattedPrice}
              </Text>
            </ListItem.Part>
            <ListItem.Part>
              <Text
                style={{flex: 1, marginRight: 10}}
                text90
                grey40
                numberOfLines={1}>
                {`${row.inventory.quantity}`}{' '}
                {row.inventory.quantity > 1 ? 'despesas' : 'despesa'}
              </Text>
              <Text text90 color={statusColor} numberOfLines={1}>
                {row.inventory.status === 'Paid' ? 'Pago' : 'Não pago'}
              </Text>
            </ListItem.Part>
          </ListItem.Part>
        </ListItem>
      </View>
    );
  }, []);

  return (
    <S.Container>
      <FlatList
        data={listData}
        renderItem={({item, index}) => renderRow(item, index)}
        keyExtractor={keyExtractor}
      />
      <Button
      onPress={()=> goToScreen('NewGroup')}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 'auto',
          marginTop: 32,
          width: 260,
        }}
        outline
        outlineColor="#8f2abd">
        <Text
          
          style={{
            fontWeight: 600,
            color: '#898989',
          }}>
          Adicionar grupo +
        </Text>
      </Button>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 54,
    height: 54,
    borderRadius: BorderRadiuses.br20,
    marginHorizontal: 14,
  },
  border: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey70,
  },
});

export default ListView;
