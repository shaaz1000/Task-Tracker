import React,{useState} from 'react'
import {Text,View,SafeAreaView,StyleSheet,StatusBar, TouchableOpacity,ScrollView} from 'react-native'
import { Appbar,IconButton,TextInput ,FAB} from 'react-native-paper';
import moment from "moment"
const ExpenseFormScreen = ({navigation}) => {
    const _goBack = () => navigation.goBack();
    const [CurrentCount,setCurrentCount] = useState(0)
    const _handleSearch = () => console.log('Searching');
    const [Name,setName] = useState("")
    const [Price,setPrice] = useState("")
    const [Note,setNote] = useState("")
    const PresentDate = moment().format("D-MM-YYYY")
    const AddDays = moment().add(CurrentCount,"days").format("D-MM-YYYY")
    const SubDays = moment().subtract(CurrentCount,"days").format("D-MM-YYYY")
    console.log(AddDays,"Dayssss",PresentDate,"pr")
    return(
        <>
        <Appbar.Header statusBarHeight={10} style={{backgroundColor:"blue"}}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="New Expense" />
      <Appbar.Action icon="sort-variant" onPress={_handleSearch} />
    </Appbar.Header>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Text style={styles.labelStyle}>Date</Text>
        <View style={{flexDirection:"row"}}>
            {
                CurrentCount > 0 ?
                
                <Text style={styles.dateStyle}>{SubDays}</Text>
                :
                <Text style={styles.dateStyle}>{PresentDate}</Text>
            }
            
            <TouchableOpacity 
                style={{marginLeft:10,}}
                onPress={()=>{
                    setCurrentCount(CurrentCount + 1)
                }}
            >
                <Text style={{color:"white",height:50,width:50,borderRadius:25,backgroundColor:"red",fontSize:40,textAlign:"center"}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10,}}
                onPress={()=>setCurrentCount(CurrentCount + 1)}
            >
                <Text style={{color:"white",height:50,width:50,borderRadius:25,backgroundColor:"green",fontSize:40,textAlign:"center"}}>-</Text>
            </TouchableOpacity>
        </View>
    <Text style={styles.labelStyle}>Category</Text>
    <Text style={styles.dateStyle}>Uncategorized</Text>
    <TextInput
        label="Name"
        mode="outlined"
        onChangeText={(name)=>setName(name)}
        placeholder="Name"
        style={styles.inputStyle}
    />
    <TextInput
        label="Price"
        mode="outlined"
        placeholder="Price"
        style={styles.inputStyle}
        onChangeText={(price)=>setPrice(price)}
    />
    <TextInput
        label="Note"
        placeholder="Note"
        mode="outlined"
        multiline={true}
        style={styles.inputStyle}
        onChangeText={(Note)=>setNote(Note)}
    />
    </ScrollView>
    <FAB
        onPress={()=>{
            console.log("h")
        }}
        disabled={Name.length >0 || Price.length > 0 || Note.length > 0 ? false : true}
        icon="file"
        color="white"
        style={{bottom:20,alignSelf:"flex-end",right:10,backgroundColor:"orange"}}
       
    
    />
        </>
    )
}

const styles = StyleSheet.create({
    labelStyle:{
        fontSize:15,
        color:"grey",
        fontWeight:"bold",
        margin:10
    },
    dateStyle:{
        padding:10,
        borderWidth:2,
        borderRadius:10,
        borderColor:"orange",
        textAlign:"center",
        width:"40%",
        marginLeft:10
    },
    inputStyle:{
        marginHorizontal:10,
        marginTop:10,
        fontSize:17
    }
})

export default ExpenseFormScreen