import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>ℹ️ Lorem Ipsum</Text>

        <Text style={{ fontWeight: 'bold' }}>HumedApp{"\n"}</Text> 
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis aliquet orci vitae viverra. Sed ullamcorper, leo nec semper sollicitudin, diam nibh sodales erat, in sagittis magna nulla eget erat. Pellentesque sem sapien, ullamcorper eu nec.</Text> 
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007acc',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
    lineHeight: 22,
  },
  footer: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
});
