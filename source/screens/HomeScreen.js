import React,{useEffect, useState} from 'react'
import {Text,View,Dimensions,StatusBar, ScrollView,FlatList,Animated} from "react-native"
import { Appbar,IconButton, Colors,FAB, Portal, Provider } from 'react-native-paper';
import {connect} from "react-redux"
import * as JobAction from "../redux/action/jobAction"
const {width,height} = Dimensions.get("window")
const CustomHeader = () => {
    
    return(
        <>
        <View style={{width,backgroundColor:"blue",height:height/8}}>
            <View style={{flexDirection:"row"}}>
                <IconButton
                    icon="menu"
                    color="white"
                    size={30}
                />
               
                <IconButton
                    icon="sort-ascending"
                    color="white"
                    size={30}
                />
                <IconButton
                    icon="magnify"
                    color="white"
                    size={30}
                />
                <IconButton
                    icon="replay"
                    color="white"
                    size={30}
                />
            </View>
        </View>
        </>
    )
}

const HomeScreen = ({navigation,jobReducer,dispatch}) => {
    const [state, setState] = useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    
    const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
    const [data,setData] = useState([])
    const getApiData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response=>response.json())
      .then(data=>{
        
        setData(data)
      })
      .catch(err =>{
        console.log(err,"err")
      })
    }

    useEffect(()=>{
      getApiData()
      PostData()
    },[])
    const reduxAction = () => {
      dispatch(JobAction.getJobInfo())
    }

    const renderItem = (item) => {
      console.log(item.body,"line 69")
    }

    const PostData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body : JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
      }).then(response=>response.json())
      .then(data=>{
        console.log(data)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    return(
        <>
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <CustomHeader/>
        <ScrollView>
            <FlatList
              data={data}
              keyExtractor={({id}) => id }
              renderItem={({item})=>{
                return renderItem(item)
              }}
              showsVerticalScrollIndicator={false}
            />
        </ScrollView>

        <FAB.Group
          open={open}
          icon={open ? 'close' : 'plus'}
          actions={[
            {
              icon: 'microphone',
              label: 'Speak Something',
              style:{
                backgroundColor:"blue"
            },
            
              onPress: () => console.log('Pressed star'),
              small: false,
            },
            {
              icon: 'pencil',
              label: 'write',
              style:{
                  backgroundColor:"blue"
              },
              onPress: () => navigation.navigate("Expense Form"),
              small: false,
            },
            // {
            //   icon: 'pencil',
            //   label: 'Hello',
            //   style:{
            //       backgroundColor:"blue"
            //   },
            //   onPress: () => reduxAction(),
            //   small: false,
            // },
          ]}
          fabStyle={{backgroundColor:"blue"}}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
         
        />
        
       
        </>
    )
}

// pass 2 things to connect mapStateToProps && mapDispatchToProps

const mapStateToProps = state => ({
  jobReducer : state.jobReducer.jobInfo
})
export default connect(mapStateToProps)(HomeScreen)