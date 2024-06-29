import React, { useState, useRef } from 'react';
import { Text, View, Animated } from 'react-native';
import { formatCurrency } from "react-native-format-currency";;
import InputRow from './InputRow';
import { allStyles } from '../styles/AllStyles';
import { text } from '../styles/Text';
import { animTiming } from '../styles/AnimTiming';


export default function CalcBox( { isBestDeal, updatePricePerUnitInApp, displayPricePerUnit, changeDisplayPricePerUnit, lockedPricePerUnit } ) {

   const [priceValue, setPriceValue] = useState('0');
   const [quantityValue, setQuantityValue] = useState('');
   const [pricePerUnit, setPricePerUnit] = useState('');

   const fadeAnim = useRef(new Animated.Value(0)).current;

   function fadeIn() {
      Animated.timing(fadeAnim, {
         toValue: 1,
         duration: animTiming.fadeInTime,
         useNativeDriver: true,
      }).start();
   };

   function fadeOut() {
      Animated.timing(fadeAnim, {
         toValue: 0,
         duration: animTiming.fadeOutTime,
         useNativeDriver: true,
      }).start();
   };

   function chooseDealStyle() {

      if (isBestDeal) {
         return (allStyles.calcBoxBestDeal);
      }
      else
      {
         return (allStyles.calcBox);
      }
   }

   function updatePriceValue(newValue) {

      setPriceValue(newValue);
      updatePricePerUnit(newValue, quantityValue);
   }

   function updateQuantityValue(newValue) {

      setQuantityValue(newValue);
      updatePricePerUnit(priceValue, newValue);
   }

   function updatePricePerUnit(priceVal, quantityVal) {
     
      changeDisplayPricePerUnit(false);
      
      const newVal = (priceVal / quantityVal);

      setPricePerUnit(newVal);
      updatePricePerUnitInApp (newVal);
   }

   function showPricePerUnit()
   {
      const [pricePerUnitOutput, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: Number(pricePerUnit).toFixed(2), code: text.currencyCode })
      const [lockedPricePerUnitOutput, lockedValueFormattedWithoutSymbol, lockedSymbol] = formatCurrency({ amount: Number(lockedPricePerUnit).toFixed(2), code: text.currencyCode })

      if (displayPricePerUnit) {
         fadeIn();
         return (pricePerUnitOutput);     
      }
      else {
         fadeOut();
         return (lockedPricePerUnitOutput);
      }
   }


   return(
      <View style={chooseDealStyle()}>

         <View style={allStyles.calcInputContainer}>
            <Text style={allStyles.priceTitle}>{text.price}</Text>
            <InputRow type={'price'} defaultValue={'0'} updateValue={updatePriceValue}/>
         </View>

         <View style={allStyles.calcInputContainer}>
            <Text style={allStyles.quantityTitle}>{text.quantity}</Text>
            <InputRow type={'quantity'} defaultValue={''} updateValue={updateQuantityValue}/>
         </View>

         <View style={allStyles.calcInputContainer}></View>

         <View style={allStyles.calcOutputContainer}>
            <Text style={allStyles.perUnitTitle}>{text.pricePerUnit}</Text>
            <View style={allStyles.calcBoxInputRow}>
               <View style={allStyles.calcBoxOutput}>
                  <Animated.Text style={[allStyles.calcBoxOutputText, {opacity: fadeAnim}]}>{showPricePerUnit()}</Animated.Text>
               </View>
            </View>
         </View>
      </View>
   );

}  