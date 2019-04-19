import React, { Component } from "react";
import { View, Image, Button, Text } from "react-native";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";

class FactCard extends Component {
    render() {
        return(
            <View
                style={{
                    elevation : 1,
                    shadowColor: "black",
                    shadowOffset: { width : 1, height : 1},
                    shadowOpacity: 0.7,
                    width : wp("90%"),
                    backgroundColor : "white"
                }}
            > 
            {" "}
            <Image 
                style={{ with: wp("90%"), height: hp("30%") }} 
                source={{ uri: `https://picsum.photos/${hp("30%")}/${wp("90%")}?image=92`}}/>
            <Text>hfusqfuyq hdsqudfeyf dy hdsufhquyf y sh fqq yudy  dsfqy ydgqgdqg d</Text>
            <Button title="see the source" onPress={() => console.log("todo")}></Button>
            </View>
            
        );
    }
}

export default FactCard;