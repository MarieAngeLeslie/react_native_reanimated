import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSharedValue, withSpring } from 'react-native-reanimated';

export default function App() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 200 }}>
      <Animated.View style={[styles.animatedViewMainBlock, { width }]} />
      <Button onPress={handlePress} title='expand me' />
    </View>
  );
}

const styles = StyleSheet.create({
  animatedViewMainBlock: {
    height: 100,
    backgroundColor: 'violet',
  },
});
