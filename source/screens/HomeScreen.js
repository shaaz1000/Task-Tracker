import React from 'react'
import {Text,View} from "react-native"
import { Appbar } from 'react-native-paper';
const HomeScreen = ({navigation , route}) => {
    // const {UserName,Name} = route.params
   
    // UserName.map(({id,name})=>{
    //     console.log(id,name,"id aayi hai")
    // })
    const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
    return(
        <>
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Home " />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <Text>Home srs</Text>
        </View>
        </>
    )
}



export default HomeScreen