import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_view_container}>
        <Text style={styles.text_prop}>1</Text>
      </View>
      <View style={styles.bottom_view_container}>
        <Text style={styles.text_prop}>2</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper_view_container: {
    backgroundColor: '#544E4F',
    flex: 1,
  },

  bottom_view_container: {
    backgroundColor: '#625D5D',
    flex: 1,
  },

  text_prop: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    margin: 200,
  },
});
export default App;
