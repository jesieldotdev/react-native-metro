import {
  View,
  Text,
  StyleSheet,
  Touchable,
  Platform,
  TouchableOpacity,
} from 'react-native';
import * as S from './styles';

import {Button} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomTabBar({state, descriptors, navigation}) {
  return (
    <S.Container>
      <S.Content>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <S.ButtonTab
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <View
                style={{
                  alignItems: 'center',
                  padding: 4,
                }}>
                <View
                  style={{
                    padding: 8,
                    backgroundColor: isFocused ? '#f8e2fd' : 'transparent',
                    borderRadius: 99,
                  }}>
                  {/* <Text>{route.name}</Text> */}

                  <Icon
                    name={options.tabBarIcon}
                    size={34}
                    color={isFocused ? '#8f2abd' : '#535353'}
                  />
                </View>
              </View>
            </S.ButtonTab>
          );
        })}
      </S.Content>
    </S.Container>
  );
}

// const styles = StyleSheet.create({

//     container: {
//         color: 'red',
//         padding: 20, backgroundColor: 'red'
//     }
// });
