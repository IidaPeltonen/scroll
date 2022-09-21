import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import DATA from './Data';

export default function App() {
/* 
  let testData = []
  for (let i = 0 ; i < 50; i++) {
    testData = [...DATA, ...testData]
  } */

  const Item = ({person}) => {
  return (
    <View style={{marginTop: StatusBar.currentHeigth || 20}}>
          {/* <ScrollView> 
            {testData.map((item, index) => 
            <Text style={{fontSize:20}} key={index}>{item.fname}</Text>)} 
           </ScrollView>  */}
    <View style={style.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item person={item}/>}
      />
    </View> 
    </View>
  );
          }
        }


const style = StyleSheet.create({
  container: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
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
})
  
