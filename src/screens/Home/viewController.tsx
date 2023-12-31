interface ViewControllerProps{
  navigation: any
}

const HomeViewController = ({navigation}: ViewControllerProps) => {
  const mockOrders = [
    {
      name: 'Familia',
      mediaUrl: require('../../../assets/img.png'),
      formattedPrice: 'R$800,00',
      inventory: {
        quantity: 1,
        status: 'Paid',
      },
    },
    {
      name: 'Colegas',
      mediaUrl: require('../../../assets/img.png'),
      formattedPrice: 'R$500,00',
      inventory: {
        quantity: 3,
        status: 'Paid',
      },
    },
    {
      name: 'Clientes',
      mediaUrl: require('../../../assets/img.png'),
      formattedPrice: 'R$1000,00',
      inventory: {
        quantity: 4,
        status: 'Unpaid',
      },
    },
    // Adicione mais objetos conforme necessário
  ];


  function goToScreen(route: string, data?: any) {
    navigation.navigate(route, { data: data });
  }
  return {
    mockOrders,
    goToScreen

  };
};

export default HomeViewController;
