import React from 'react';
import CustomText from '../components/common/CustomText';
import {connect} from 'react-redux';
import CustomScrollView from '../components/common/CustomScrollView';

const Home: () => React$Node = props => {
  return (
    <CustomScrollView componentId={props.componentId}>
      <CustomText>first</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
      <CustomText>HomePage</CustomText>
    </CustomScrollView>
  );
};

const mapStateToProps = state => ({
  theme: state.configuration.theme,
});

export default connect(mapStateToProps)(Home);
