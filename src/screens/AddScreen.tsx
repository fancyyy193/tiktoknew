import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const AddScreen = () => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      // Chuyển hướng đến màn hình 'Shop' ngay khi màn hình này được hiển thị
      navigation.navigate('Shop');
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Redirecting to Shop...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'NotoSerifKhojki-VariableFont_wght',
    fontSize: 18,
  },
});

export default AddScreen;
