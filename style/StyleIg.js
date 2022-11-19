import { StyleSheet } from "react-native";
const style=StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'white'
    },
    viewRow1:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white'
    },
    viewRow2:{
        flex:2,
        flexDirection:'row',
        backgroundColor:'white'
    },
    viewGambar:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    viewStory:{
        flex:1,
        paddingStart : 10,
    },
    gambarProfil:{
        width: 80,
        height:80,
        borderRadius:80/2
    },
    IconGambar:{
        width:30,
        height:30,
        margin: 10
    },
    textAngka:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    textAngkaSub:{
        fontSize: 14
    },
    subDescription:{
        color:'blue',
    },
    gridGambar: {
        width:130,
        height:130,
        borderColor: 'black'
    }
    
  });

  export {style};