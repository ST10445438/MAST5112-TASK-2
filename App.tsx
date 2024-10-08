import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SectionList, TouchableOpacity,SafeAreaView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to chris' resturant!</Text>
      <Text>Please take a moment toview our category</Text>
      <Text>Search fo your food among our available products</Text>
      <TouchableOpacity>
        <TextInput style={{backgroundColor: 'gray', color:'white', padding: 5, marginBottom: 50}}>Search For Food</TextInput>
      </TouchableOpacity>

      <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>

      <StatusBar style="auto" />
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
});

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export default App;