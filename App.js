/* import { StatusBar } from 'expo-status-bar'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import DATA from './Data'

export default function App () {
  let testData = []
  for (let i = 0; i < 50; i++) {
    testData = [...DATA, ...testData]
  }

  return (
    <View style={{ marginTop: StatusBar.currentHeigth || 0 + 20 }}>
      <ScrollView>
        {testData.map((item, index) => (
          <Text style={{ fontSize: 20 }} key={index}>
            {item.fname}
          </Text>
        ))}
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemView: {
    backgroundColor: '#c8c8c8',
    padding: 10,
    margin: 5
  },
  itemText: {
    fontSize: 32,
    margin: 10
  }
}) */

import { StatusBar } from 'expo-status-bar'
import { FlatList, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import DATA from './Data'

export default function App () {

  return (
    <ScrollView style={styles.container}>
    <View>
      <FlatList
        data={DATA}
        renderItem={({item})=> <Item person={item}></Item>}
      />
    </View>
    </ScrollView>
  )
}

const Item = ({person}) => {
  return(
    <View>
      <View>
        <Text style={styles.itemText}>{person.lname} {person.fname}</Text>
        <Image style={styles.image} source={{uri: person.img}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  itemView: {
    backgroundColor: '#c8c8c8',
    padding: 10,
    margin: 5
  },
  itemText: {
    fontSize: 32,
    margin: 10
  },
  image: {
    width: 100,
    height: 150
  }
})


