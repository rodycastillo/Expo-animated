import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated';

export default function App() {
  const scale = useSharedValue(1.8)
  const animatedStyle = useAnimatedStyle(()=>{
    return {
      borderRadius: 100,
      transform: [{scale: scale.value}]
    }
  })
  useEffect(() => {
    scale.value = withRepeat(withSpring(1.2), -1, true)
  }, [])
  return (
    <View style={styles.container}>
      <View style={ styles.boxAnimated }>
        <Animated.View style={ [styles.box, animatedStyle] }/>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={ styles.img }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxAnimated: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 170,
    height: 170,
    position: 'absolute',
    borderRadius: 85
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: '#FFBDBD'
  }
});
