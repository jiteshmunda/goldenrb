import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      {/* Set the StatusBar color */}
      <StatusBar barStyle="light-content" backgroundColor="black" />
      
      {/* WebView */}
      <WebView source={{ uri: 'https://www.elasticplayer.xyz/goldenrb/' }} />
    </SafeAreaView>
  );
}
