import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ defaultImageSource }) {
  return (
    <Image source={defaultImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});