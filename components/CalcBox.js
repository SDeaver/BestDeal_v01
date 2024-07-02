import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Animated } from 'react-native';
import { formatCurrency } from "react-native-format-currency";
import InputRow from './InputRow';
import { allStyles } from '../styles/AllStyles';
import { text } from '../styles/Text';


export default function CalcBox( { isBestDeal, updatePricePerUnit, displayedPricePerUnit, stylePricePerUnit } ) {

   const [priceValue, setPriceValue] = useState('0');
   const [quantityValue, setQuantityValue] = useState('');
   // const [pricePerUnit, setPricePerUnit] = useState('');

   // useEffect(() => {

   //    console.log(stylePricePerUnit);

   //  }, [stylePricePerUnit]);

   



   function updatePriceValue(newValue) {

      setPriceValue(newValue);
      updatePricePerUnit (newValue / quantityValue);


   }

   function updateQuantityValue(newValue) {

      setQuantityValue(newValue);
      updatePricePerUnit (priceValue / newValue);

   }

   // function showPricePerUnit() {
   //    const [pricePerUnitOutput, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: Number(pricePerUnit).toFixed(2), code: text.currencyCode })
   //    const [lockedPricePerUnitOutput, lockedValueFormattedWithoutSymbol, lockedSymbol] = formatCurrency({ amount: Number(lockedPricePerUnit).toFixed(2), code: text.currencyCode })

   //    if (displayPricePerUnit === 'show') {
   //       return (pricePerUnitOutput);
   //    }
   //    else if (displayPricePerUnit === 'startFadeIn') {
   //       setDisplayPricePerUnit('show');
   //       fadeIn();
   //       return (pricePerUnitOutput);
   //    }
   //    else if (displayPricePerUnit === 'startFadeOut') {
   //       setDisplayPricePerUnit('hide');
   //       fadeOut();
   //       return (lockedPricePerUnitOutput);
   //    }
   //    else if (displayPricePerUnit === 'hide') {
   //       return (lockedPricePerUnitOutput);
   //    }
   //    else {
   //       return ('');
   //    }

   // }

   return(
      <Animated.View style={chooseBoxStyle()}>

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
                  <Animated.Text style={stylePricePerUnit}>{displayedPricePerUnit}</Animated.Text>
               </View>
            </View>
         </View>

      </Animated.View>
   );

}  