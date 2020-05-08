import React, {useState, useRef} from 'react';
import {
  Animated,
  PanResponder,
  ScrollView,
  Dimensions,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Router} from '../../utils/RouterConstants';

const SWIPE_THRESHOLD = 0.05 * Dimensions.get('window').width;

const resetPosition = position => {
  Animated.spring(position, {
    toValue: {x: 0, y: 0},
    useNativeDriver: true,
  }).start();
};

const CustomScrollView = props => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [topBarVisible, setTopBarVisibility] = useState(true);
  const position = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 2);
      },
      onPanResponderMove: (event, gesture) => {
        position.setValue({x: gesture.dx, y: 0});
      },
      onPanResponderRelease: (event, gesture) => {
        const currentTabIndex = Router.indexOf(
          Router.find(tab => tab.componentId === props.componentId),
        );
        if (
          currentTabIndex !== Router.length - 1 &&
          gesture.dx < -SWIPE_THRESHOLD
        ) {
          Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
            bottomTabs: {
              currentTabIndex: currentTabIndex + 1,
            },
          });
        } else if (currentTabIndex !== 0 && gesture.dx > SWIPE_THRESHOLD) {
          Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
            bottomTabs: {
              currentTabIndex: currentTabIndex - 1,
            },
          });
        }
        resetPosition(position);
      },
    }),
  ).current;
  return (
    <Animated.View
      style={position.getTranslateTransform()}
      {...panResponder.panHandlers}>
      <ScrollView
        onScrollEndDrag={event => {
          setScrollPosition(event.nativeEvent.contentOffset.y);
        }}
        onScroll={event => {
          if (
            topBarVisible &&
            event.nativeEvent.contentOffset.y - scrollPosition > 55
          ) {
            setTopBarVisibility(false);
            Navigation.mergeOptions(props.componentId, {
              topBar: {
                visible: false,
              },
            });
          } else if (
            !topBarVisible &&
            scrollPosition - event.nativeEvent.contentOffset.y > 5
          ) {
            setTopBarVisibility(true);
            Navigation.mergeOptions(props.componentId, {
              topBar: {
                visible: true,
              },
            });
          }
        }}>
        <View style={{height: 55}} />
        {props.children}
      </ScrollView>
    </Animated.View>
  );
};

export default CustomScrollView;
