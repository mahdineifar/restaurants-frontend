import {Appearance} from 'react-native';

export const STATUS_BAR_COLOR = '#131573';
export const CONTENT_BACKGROUND_COLOR =
  Appearance.getColorScheme() === 'dark' ? '#121212' : 'white';
export const PRIMARY_COLOR = '#0288d1';
export const BOTTOM_TABS_BACKGROUND_COLOR =
  Appearance.getColorScheme() === 'dark' ? 'black' : 'white';
export const TEXT_COLOR =
  Appearance.getColorScheme() === 'dark' ? 'white' : 'black';
