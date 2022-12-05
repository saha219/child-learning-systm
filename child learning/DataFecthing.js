import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import RickAndMorty from './RickAndMorty'

const DataFecthing = () => {
    const [po,setPo]=useState([])
    const [obj,setObj]=useState()
    const [count,setCount]=useState(1)

    useEffect(()=>{
        axios.get('https://api.sampleapis.com/rickandmorty/characters')
        .then(response => {
            console.log(response)
            setPo(response.data)
        })
        
        .catch(err=>{
            console.log(err)
        })
    
    },[])
    const setter=()=>{
        setCount(count+1)
    }
    const backer=()=>{
        setCount(count-1)
    }
  return (
    <View style={styles.sCont}>
        {
            po.map((post)=>{
            if(post.id==count){
               return <RickAndMorty next={()=>setter()} back={()=>backer()} key={post.id} x={post}/>
            }
            })
        }
      
    </View>
  )
}

export default DataFecthing

const styles = StyleSheet.create({
    sCont:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        paddingTop:20
      },
})