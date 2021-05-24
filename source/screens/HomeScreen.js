import React,{useState} from 'react'
import {Text,View,Dimensions,StatusBar, ScrollView} from "react-native"
import { Appbar,IconButton, Colors,FAB, Portal, Provider } from 'react-native-paper';
import {connect} from "react-redux"
const {width,height} = Dimensions.get("window")
const CustomHeader = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
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

const HomeScreen = ({navigation,jobReducer}) => {
    const [state, setState] = useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    console.log(jobReducer,"dd")
    return(
        <>
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <CustomHeader/>
        <ScrollView>
            <Text>Hell-</Text>
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