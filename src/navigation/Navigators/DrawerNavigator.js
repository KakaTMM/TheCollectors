import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Menu from 'app/src/components/Main/Menu';
import Shop from 'app/src/components/Main/Shop/Shop';


const DrawerNavigator = createDrawerNavigator({
    Menu: {
      screen: Menu
    },
    Shop: {
      screen: Shop
    }
  });

export default createAppContainer(DrawerNavigator);
