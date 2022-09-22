import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { FlatList, ScrollView, StyleSheet, Text, View, Image, Row, SafeAreaView } from 'react-native'
import DATA from './Data'
import Search from './Search'
import Item from './Item'

export default function App () {
  const [items, setItems] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    setItems(DATA)
  }, [])

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lname.startsWith(search))
    setItems(searchArray)
  }

  const select = (id) => {
    setSelectedId(id)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem={({item})=> (
          <Item person={item} selectedId={selectedId} select={select} />
        )}
      />
    </SafeAreaView>
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


