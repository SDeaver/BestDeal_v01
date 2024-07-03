import React, { useState, useRef } from 'react';
import { Text, Pressable, View, Keyboard, Animated } from 'react-native';
import { formatCurrency } from "react-native-format-currency";

import InputRow from './components/InputRow';
import CompareButton from './components/CompareButton';

import { allStyles } from './styles/AllStyles';
import { animTiming } from './styles/AnimTiming';
import { text } from './styles/Text';



export default function App() {

  const [leftPrice, setLeftPrice] = useState('0');
  const [rightPrice, setRightPrice] = useState('0');
  const [leftQuantity, setLeftQuantity] = useState('');
  const [rightQuantity, setRightQuantity] = useState('');
  const [leftPricePerUnit, setLeftPricePerUnit] = useState('');
  const [rightPricePerUnit, setRightPricePerUnit] = useState('');
  const [leftDisplayedPricePerUnit, setLeftDisplayedPricePerUnit] = useState('');
  const [rightDisplayedPricePerUnit, setRightDisplayedPricePerUnit] = useState('');
  const [leftIsBestDeal, setLeftIsBestDeal] = useState(false);
  const [rightIsBestDeal, setRightIsBestDeal] = useState(false);
  const [fadedOut, setFadedOut] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;


  function pricePerUnitFadeIn(leftVal, rightVal) {

     Animated.timing(fadeAnim, {
        toValue: 1,
        duration: animTiming.fadeInTime,
        useNativeDriver: true,
     }).start(() => {
        fadeAnim.removeAllListeners();
     });

    const listenerId = fadeAnim.addListener((newFadeVal) => {
        let lPricePerUnit = (newFadeVal.value * leftVal);
        let rPricePerUnit = (newFadeVal.value * rightVal);
        const [lPricePerUnitOutput, lValueFormattedWithoutSymbol, lSymbol] = formatCurrency({ amount: Number(lPricePerUnit).toFixed(2), code: text.currencyCode });
        const [rPricePerUnitOutput, rValueFormattedWithoutSymbol, rSymbol] = formatCurrency({ amount: Number(rPricePerUnit).toFixed(2), code: text.currencyCode });

        setLeftDisplayedPricePerUnit(lPricePerUnitOutput);
        setRightDisplayedPricePerUnit(rPricePerUnitOutput);
    })

  };

  function pricePerUnitFadeOut() {

     Animated.timing(fadeAnim, {
        toValue: 0,
        duration: animTiming.fadeOutTime,
        useNativeDriver: true,
      }).start(() => {
        setFadedOut(true);
        fadeAnim.removeAllListeners();
     });

    };

  function chooseBoxStyle(isBestDeal) {

    if (isBestDeal) {
       return (allStyles.calcBoxBestDeal);
    }
    else {
       return (allStyles.calcBox);
    }

  }

  function updateLeftPrice(newVal) {
    resetOutput();
    setLeftPrice(newVal);
  }

  function updateRightPrice(newVal) {
    resetOutput();
    setRightPrice(newVal);
  }

  function updatetLeftQuantity(newVal) {
    resetOutput();
    setLeftQuantity(newVal);
  }

  function updateRightQuantity(newVal) {
    resetOutput();
    setRightQuantity(newVal);
  }

  function resetOutput() {

    if (fadedOut) {
      return;
    }

    setLeftIsBestDeal(false);
    setRightIsBestDeal(false);

    pricePerUnitFadeOut();

  }

  function checkBadInput()
  {
    if (leftPrice == 0) {
      return true;
    }
    else if (rightPrice == 0) {
      return true;
    }
    else if (leftQuantity <= 0)
    {
      return true;
    }
    else if (rightQuantity <= 0)
    {
      return true;
    }
    else if (isNaN(leftQuantity))
    {
      return true;
    }
    else if (isNaN(rightQuantity))
    {
      return true;
    }
    else {
      return false;
    }
  }


  function outputCompare() {

    const lPricePerUnit = Number( leftPrice / leftQuantity );
    const rPricePerUnit = Number( rightPrice / rightQuantity);

    setLeftPricePerUnit(lPricePerUnit); 
    setRightPricePerUnit(rPricePerUnit);

    setLeftIsBestDeal(!(lPricePerUnit > rPricePerUnit));
    setRightIsBestDeal(!(lPricePerUnit < rPricePerUnit));
    
    setLeftDisplayedPricePerUnit('$0.00');
    setRightDisplayedPricePerUnit('$0.00');

    pricePerUnitFadeIn(lPricePerUnit, rPricePerUnit); 
    setFadedOut(false);
  }  

  return (

    <Pressable style={allStyles.mainContainer} onPress={Keyboard.dismiss}>

      <View style={allStyles.calcBoxContainer}>

        {/* left box */}
        <Animated.View style={chooseBoxStyle(leftIsBestDeal)}>

          <View style={allStyles.calcInputContainer}>
            <Text style={allStyles.priceTitle}>{text.price}</Text>
            <InputRow type={'price'} defaultValue={'0'} updateValue={updateLeftPrice}/>
          </View>

          <View style={allStyles.calcInputContainer}>
            <Text style={allStyles.quantityTitle}>{text.quantity}</Text>
            <InputRow type={'quantity'} defaultValue={''} updateValue={updatetLeftQuantity}/>
          </View>

          <View style={allStyles.calcInputContainer}></View>

          <View style={allStyles.calcOutputContainer}>
            <Text style={allStyles.perUnitTitle}>{text.pricePerUnit}</Text>
            <View style={allStyles.calcBoxInputRow}>
                <View style={allStyles.calcBoxOutput}>
                  <Animated.Text style={[allStyles.calcBoxOutputText, {opacity: fadeAnim}]}>{leftDisplayedPricePerUnit}</Animated.Text>
                </View>
            </View>
          </View>

        </Animated.View>

        {/* right box */}
        <Animated.View style={chooseBoxStyle(rightIsBestDeal)}>

          <View style={allStyles.calcInputContainer}>
            <Text style={allStyles.priceTitle}>{text.price}</Text>
            <InputRow type={'price'} defaultValue={'0'} updateValue={updateRightPrice}/>
          </View>

          <View style={allStyles.calcInputContainer}>
            <Text style={allStyles.quantityTitle}>{text.quantity}</Text>
            <InputRow type={'quantity'} defaultValue={''} updateValue={updateRightQuantity}/>
          </View>

          <View style={allStyles.calcInputContainer}></View>

          <View style={allStyles.calcOutputContainer}>
            <Text style={allStyles.perUnitTitle}>{text.pricePerUnit}</Text>
            <View style={allStyles.calcBoxInputRow}>
                <View style={allStyles.calcBoxOutput}>
                  <Animated.Text style={[allStyles.calcBoxOutputText, {opacity: fadeAnim}]}>{rightDisplayedPricePerUnit}</Animated.Text>
                </View>
            </View>
          </View>

        </Animated.View>

      </View>

      <View style={allStyles.compareButtonContainer}>
        <CompareButton pressFunction={outputCompare} buttonIsLocked={checkBadInput()}/>
      </View>

      <View style={allStyles.footer}>
        {/* add footer stuff here */}
      </View>

    </Pressable>
  );

} 