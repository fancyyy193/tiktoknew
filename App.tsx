import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Dimensions, useColorScheme, Image } from 'react-native';

// Kích thước màn hình
const { width, height } = Dimensions.get('window');

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        {/* Video Placeholder */}
        <View style={styles.videoContainer}>
          <Text style={styles.videoText}>Video Placeholder</Text>
        </View>

        {/* Controls */}
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlText}>❤</Text>
            <Text style={styles.controlCount}>123</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlText}>💬</Text>
            <Text style={styles.controlCount}>45</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Text style={styles.controlText}>🔗</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoText: {
    color: '#fff',
    fontSize: 24,
  },
  controlsContainer: {
    width: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  controlButton: {
    alignItems: 'center',
  },
  controlText: {
    fontSize: 24,
    color: '#fff',
  },
  controlCount: {
    color: '#fff',
    fontSize: 14,
  },
});

export default App;
