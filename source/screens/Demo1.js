import React,{useState} from 'react'
import {Text,View,SafeAreaView,StatusBar, FlatList,TouchableOpacity} from "react-native"

const Demo = () => {
    const [isButtonPressed,setButtonPress] = useState(false)
    const [Data,setData] = useState([])
    let demoData = [{
        type: "articles",
        id: "1",
        attributes: {
            title: "JSON:API paints my bikeshed!",
            body: "The shortest article. Ever.",
            created: "2015-05-22T14:56:29.000Z",
            updated: "2015-05-22T14:56:28.000Z"
        },
        relationships: {
            author: {
                data: { 
                    id: 42, 
                    type: people
                }
            }
        }
    }]

    const fetchData = () => {
        fetch("")
    }

    const DisplayData = {
        type: "people",
        id: "42",
        attributes: {
            name: "John",
            age: 80,
            gender: "male"
        }
    }

    const renderItem = (item) => {
        return (
            <>
                <View style={{marginHorizontal:10,padding:10,borderRadius:10,marginVertical:10}}>
                    <TouchableOpacity onPress={()=>setButtonPress(true)}>
                    <Text>
                        {item.attributes.title}
                    </Text>
                    </TouchableOpacity>
                    {
                        isButtonPressed ? 
                        <>
                        <Text>{DisplayData.attributes.name}</Text>
                        <Text>{DisplayData.attributes.age}</Text>
                        <Text>{DisplayData.attributes.gender}</Text>
                        </>
                        :
                        null
                    }
                </View>
            </>
        )
    }
    return(
        <>
        <StatusBar backgroundColor="yellow" barStyle="light-content"/>
        <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
            <FlatList
                data={demoData}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>{
                    return renderItem(item)
                }}
                keyExtractor={({id})=>id}
            />
        </SafeAreaView>
        </>
    )
}

export default Demo

