import React from 'react'
import {Text,View,TouchableOpacity} from "react-native"

const LoginScreen = ({navigation}) => {
    const {navigate} = navigation
    return(
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <TouchableOpacity onPress={()=>
                navigate("Home",{
                    UserName :  [{
                        id : 0,
                        name : "Devpal"
                    }],
                    Name:"Devpal" // key ki value kuch bhi ho sakti hai boolean , inetger , array , object , string
                })
                }>
            <Text>Login srs</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen