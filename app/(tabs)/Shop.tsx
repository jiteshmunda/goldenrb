import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView, WebViewNavigation } from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Corrected import

export default function Shop() {
  const [canGoBack, setCanGoBack] = useState<boolean>(false); // State to manage if back button is needed
  const webViewRef = useRef<WebView>(null); // Reference to the WebView

  // Function to handle the navigation change in the WebView
  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    // Show back button only if not on the main shop page
    setCanGoBack(navState.url !== 'https://goldenrb.com/mobileshop/');
  };

  // Function to handle back button press
  const handleBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.stopLoading(); // Stop any current loading
      webViewRef.current.injectJavaScript('window.location.href = "https://goldenrb.com/mobileshop/";');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      
      {/* Back button, visible only if user navigates away from main page */}
      {canGoBack && (
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={24} color="white" style={styles.backIcon} />
          <Text style={styles.backButtonText}> Back to main shop page</Text>
        </TouchableOpacity>
      )}

      {/* WebView */}
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://goldenrb.com/mobileshop/' }}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </SafeAreaView>
  );
}

// Styles for the back button and other UI elements
const styles = StyleSheet.create({
  backButton: {
    backgroundColor: 'red',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to start to put arrow and text inline
    flexDirection: 'row', // Make the arrow and text appear in a row
    width: '100%',
  },
  backIcon: {
    marginRight: 10, // Space between the arrow and the text
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
