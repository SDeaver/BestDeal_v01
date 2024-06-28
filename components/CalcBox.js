import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { formatCurrency } from "react-native-format-currency";;
import InputRow from './InputRow';
import { allStyles } from '../styles/AllStyles';
import { text } from '../styles/Text';


export default function CalcBox( { isBestDeal, updatePricePerUnitInApp, displayPricePerUnit, changeDisplayPricePerUnit } ) {

   const [priceValue, setPriceValue] = useState('0');
   const [quantityValue, setQuantityValue] = useState('');
   const [pricePerUnit, setPricePerUnit] = useState('');

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

      setPricePerUnit( () => {
         return ( newVal );
      } );
      updatePricePerUnitInApp ( () => {
         return ( newVal );
      } );
   }

   function showPricePerUnit()
   {
      const [pricePerUnitOutput, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: Number(pricePerUnit).toFixed(2), code: text.currencyCode })

      if (displayPricePerUnit) {
         return (pricePerUnitOutput);
      }
      else {
         return ('');
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
               <Text style={allStyles.calcBoxOutput}>{showPricePerUnit()}</Text>
            </View>
         </View>

      </View>
   );

}  