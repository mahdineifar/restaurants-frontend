import React, {useEffect} from 'react';
import {StyleSheet, Alert, Appearance} from 'react-native';

import CustomText from '../components/common/CustomText';
import {connect} from 'react-redux';

const Home: () => React$Node = props => {
  useEffect(() => {
    console.log(props.theme);
  }, [props.theme]);
  return (
    <>
      <CustomText style={styles.sectionTitle}>Step One</CustomText>
      <CustomText style={styles.sectionDescription}>
        Edit <CustomText style={styles.highlight}>App.js</CustomText> to change
        this screen and then come back to see your edits.
      </CustomText>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const mapStateToProps = state => ({
  theme: state.configuration.theme,
});

export default connect(mapStateToProps)(Home);
