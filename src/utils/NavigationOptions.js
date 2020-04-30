import {
  BOTTOM_TABS_BACKGROUND_COLOR,
  PRIMARY_COLOR,
  TEXT_COLOR,
} from './Colors';

export const topBar = {
  borderColor: PRIMARY_COLOR,
  borderHeight: 1,
  title: {
    color: TEXT_COLOR,
    alignment: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  backButton: {
    color: 'white',
  },
  background: {
    color: BOTTOM_TABS_BACKGROUND_COLOR,
  },
};

export const bottomTabs = {
  backgroundColor: BOTTOM_TABS_BACKGROUND_COLOR,
};

export const bottomTab = {
  selectedIconColor: PRIMARY_COLOR,
  selectedTextColor: PRIMARY_COLOR,
  iconColor: TEXT_COLOR,
};

export const bottomTabsChildren = (id, name, text, icon) => ({
  stack: {
    id,
    children: [
      {
        component: {
          id,
          name,
          options: {
            topBar: {
              title: {
                text,
              },
            },
          },
        },
      },
    ],
    options: {
      bottomTab: {
        text,
        icon,
      },
    },
  },
});
