import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://demo.bactrungnam.xyz/'}} 
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
