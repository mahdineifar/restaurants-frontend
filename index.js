import {Navigation} from 'react-native-navigation';
import registerScreens from './src/screens/Screens';
import {bottomTabsChildren} from './src/utils/NavigationOptions';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        children: [
          bottomTabsChildren(
            'HomeScreen',
            'HomeScreen',
            'Accueil',
            require('./src/assets/icons/home.png'),
          ),
          bottomTabsChildren(
            'PlacesScreen',
            'PlacesScreen',
            'Découvrir',
            require('./src/assets/icons/explore.png'),
          ),
          bottomTabsChildren(
            'AddPostScreen',
            'AddPostScreen',
            'Publier',
            require('./src/assets/icons/add.png'),
          ),
          bottomTabsChildren(
            'FavoritesScreen',
            'FavoritesScreen',
            'Favoris',
            require('./src/assets/icons/favorite.png'),
          ),
          bottomTabsChildren(
            'AccountScreen',
            'AccountScreen',
            'Compte',
            require('./src/assets/icons/account.png'),
          ),
        ],
      },
    },
  });
});
