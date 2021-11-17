import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { SearchBar, Icon, Tab, TabView, Image, ListItem } from "react-native-elements";
import { useState } from "react";



export default function home(params){
    const navigation = params.navigation;
    const [index, setIndex] = useState(index)

    const list = function listing(){
        <ListItem>
            <login/>
        </ListItem>
    }

    return(
        <View>
            <View style={styles.top}>
                <SearchBar
                placeholder = 'search here..'
                style={{color:"white"}} />
                <Icon name = "shopping-cart" onPress ={()=>{navigation.navigate("Cart")}}/>
                <Icon name="settings" onPress ={()=>{navigation.navigate("Login")}} />
                <TouchableOpacity>
                    <Text onPress ={()=>{navigation.navigate("Social")}} >Social Media</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{fontFamily:"open sans",
                 fontSize: 20,
                  marginBottom:10,
                   marginTop:10,
                   fontWeight: "bold", 
                   alignItems: "center",
                   justifyContent: "center"}}>Welcome To Silver City Mall</Text>
            </View>
            <View>
            <Tab value={index} onChange={setIndex}>
                <Tab.Item title="fashion" />
                <Tab.Item title="phones" />
                <Tab.Item title="shoes" />
            </Tab>
            <TabView  value={index} onChange={setIndex}>
                <TabView.Item>
                <View>
                {/* <Image
                source={require('./assets/jeans.jpg')}
                style={{ width: 200, height: 200 }}
                
                /> */}
                {/* <Image
                source={require('./assets/bag.jpg')}
                style={{ width: 200, height: 200 }}
                />
                <Image
                source={require('./assets/jean.jpg')}
                style={{ width: 200, height: 200 }}
                />
                <Image
                source={require('./assets/shirts.jpg')}
                style={{ width: 200, height: 200 }}
                />
                <Image
                source={require('./assets/watch.jpg')}
                style={{ width: 200, height: 200 }}
                /> */}
                </View>
                </TabView.Item>
            
            
                <TabView.Item>
                <View>
                {/* <Image
                source={require('./assets/phones.jpg')}
                style={{ width: 200, height: 200 }}
                /> */}
                <Image
                 source={{uri:'https://www.freeimages.com/photo/cell-phone-2-1525544',
                            width:200, height:200}}
                 />
                
                </View>
                </TabView.Item>
            
                <TabView.Item>
                <View>
               
                {/* <Image
                source={require('./assets/shoes.jpg')}
                style={{ width: 200, height: 200 }}
                /> */}
                </View>
                
                </TabView.Item>
            </TabView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    top:{
        paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',

        
    }
})