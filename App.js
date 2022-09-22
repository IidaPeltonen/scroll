import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { FlatList, ScrollView, StyleSheet, Text, View, Image, Row, SafeAreaView } from 'react-native'
import DATA from './Data'
import Search from './Search'

export default function App () {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(DATA)
  }, [])

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lname.startsWith(search))
    setItems(searchArray)
  }

  return (

    <View style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem={({item})=> (
          <Item person={item} />
        )}
      />

    </View>
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


