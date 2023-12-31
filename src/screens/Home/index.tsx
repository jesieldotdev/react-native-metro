import {NavigationContainer} from '@react-navigation/native';
import ListView from './components/ListView';
import * as S from './styles';
import HomeViewController from './viewController';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewGroup from './components/NewGroup';
import { Button } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Stack = createNativeStackNavigator();

const Home = ({navigation}: any) => {
  const viewController = HomeViewController({navigation});

  return (
    <S.Container>
      <ListView
        goToScreen={viewController.goToScreen}
        listData={viewController.mockOrders}
      />
    </S.Container>
  );
};

function HomeView() {
  return (
    <NavigationContainer screenOptions={{
      tabBarHideOnKeyboard: true,
    }} independent>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <Button style={{backgroundColor: 'transparent'}}>
                <Icon name="magnifier" size={18} />
              </Button>
            ),
          }}
        />
        <Stack.Screen name="NewGroup" options={{
            tabBarIcon: 'groups',
            title: 'Criar novo grupo'
            
          }}
        component={NewGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeView;
