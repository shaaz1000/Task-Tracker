import React,{useState} from 'react'
import {Text,View,TouchableOpacity,StyleSheet,StatusBar,SafeAreaView,TextInput} from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const LoginScreen = ({navigation}) => {
    const {navigate} = navigation
    const [emailId,setEmailId] = useState("")
    const [Password,setPassword] = useState("")
    // const [LoginDetails,setLoginDetails] = useState({
    //     emailId:"",
    //     password:""
    // })
    return(
       <>
       <StatusBar backgroundColor="#939b62" barStyle="light-content"/>
       <SafeAreaView style={{flex: 1,backgroundColor:"white"}}>
       <View style={styles.topContentStyle}>
            <Text style={styles.greetingStyle}>Welcome Back</Text>
       </View>
       <View style={styles.bottomContent}>
            <Text style={styles.displayTextStyle}>Email Id</Text>
            <TextInput
                placeholder='Email Id'
                label="Email Id"
                onChangeText={(emailId)=>{
                    setEmailId(emailId)
                }}
                style={styles.inputStyle}
            />  
            <Text style={[styles.displayTextStyle,{marginTop:hp("3%")}]}> Password</Text>
            <TextInput
                secureTextEntry={true}  
                placeholder="Password"
                style={styles.inputStyle}
                onChangeText={(password)=>setPassword(password)}
            />
            <TouchableOpacity 
                onPress={()=>navigate("Home")}
                disabled={emailId.length >0 && Password.length > 0 ? false : true}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
       </View>
       </SafeAreaView>
       </>
    )
}

const styles = StyleSheet.create({
    topContentStyle:{
        height:hp("30%"),
       
        width:wp("100%"),
        backgroundColor:"#939b62",
        borderBottomLeftRadius:wp("10%"),
        borderBottomRightRadius:wp("10%")
    },
    greetingStyle:{
        top:hp("10%"),
        fontSize:hp("4%"),
        padding:hp("1%"),
        marginHorizontal:wp("5%"),
        justifyContent:"center",
        alignSelf:"center",
        color:"#ffb26b",
        fontWeight:"bold"
    },
    bottomContent:{
        marginHorizontal:wp("10%"),
        marginTop:hp("7%")
    },
    displayTextStyle:{
        fontFamily:"serif",
        fontSize:hp("2.5%"),
        fontWeight:"600",
        //padding:10,
        color:"#ff7b54"
    },
    inputStyle:{
        backgroundColor:"#e1e5ea",
        borderRadius:20,
        padding:hp("2%"),
        marginVertical:hp("2.5%"),
        color:"black"
    },
    buttonStyle:{
        alignSelf:"center",
        marginTop:hp("2.5%"),
        backgroundColor:"#ffd56b",
        width:wp("30%"),
        borderRadius:10
    },
    buttonTextStyle:{
        fontSize:hp("2.5%"),
        padding:hp("2%"),
        fontWeight:"bold",
        alignSelf:"center",
        color:"#939b62"
    }
})

export default LoginScreen