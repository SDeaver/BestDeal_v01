import React, {useState} from 'react';
import { Pressable, Text, View } from 'react-native';
import { allStyles } from '../styles/AllStyles';
import { text } from '../styles/Text';

function changeButtonStyle(isPressed, isLocked) {

   if (isLocked) {
      return (allStyles.compareButtonLocked);
   }
   else if (isPressed) {
     return (allStyles.compareButtonPressed);
   }
   else {
     return (allStyles.compareButton);
   }
 
 }

export default function CompareButton({ pressFunction, buttonIsLocked }) {

   const [buttonIsPressed, setButtonIsPressed] = useState(false);

   return (
      <Pressable
         onPressIn={() => {
            if (buttonIsLocked) {
               return;
            }
            setButtonIsPressed(true);
         }}
         onPressOut={() => {
            if (buttonIsLocked) {
               return;
            }
            pressFunction();
            setButtonIsPressed(false);
         }}
         style={changeButtonStyle(buttonIsPressed, buttonIsLocked)}
      >
         <View style={allStyles.verticalCenterView}>
            <Text style={allStyles.compareButtonText}>{text.compare}</Text>
         </View>
      </Pressable>

   );
}