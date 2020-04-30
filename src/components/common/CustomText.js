import React from 'react';
import {Text} from 'react-native';
import {TEXT_COLOR} from '../../utils/Colors';

const CustomText = ({children}) => {
  return (
    <Text
      style={{
        fontSize: 20,
        color: TEXT_COLOR,
      }}>
      {children}
    </Text>
  );
};

export default CustomText;
