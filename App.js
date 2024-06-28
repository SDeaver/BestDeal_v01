import React, {useState,useRef, useEffect} from 'react';
import { Pressable, View, Keyboard, Text, Animated, InteractionManager } from 'react-native';
import CalcBox from './components/CalcBox';
import CompareButton from './components/CompareButton';
import { allStyles } from './styles/AllStyles';
// import { text } from './styles/TitleText';

export default function App() {

  const [leftPricePerUnit, setLeftPricePerUnit] = useState('');
  const [rightPricePerUnit, setRightPricePerUnit] = useState('');
  const [displayPricePerUnit, setDisplayPricePerUnit] = useState(false);
  const [leftIsBestDeal, setLeftIsBestDeal] = useState(false);
  const [rightIsBestDeal, setRightIsBestDeal] = useState(false);


  function changeDisplayPricePerUnit(newVal) {
    setDisplayPricePerUnit(newVal);
    setLeftIsBestDeal(false);
    setRightIsBestDeal(false);
  }

  function checkBadInput()
  {

    if (leftPricePerUnit == '') {
      return true;
    }
    else if (leftPricePerUnit == 'Infinity') {
      return true;
    }
    else if (isNaN(leftPricePerUnit)) {
      return true;
    }
    else if (rightPricePerUnit == '') {
      return true;
    }
    else if (rightPricePerUnit == 'Infinity') {
      return true;
    }
    else if (isNaN(rightPricePerUnit)) {
      return true;
    }
    else {
      return false;
    }
  }

  function finalCompare() {

    const numLeft = Number(leftPricePerUnit);
    const numRight = Number(rightPricePerUnit);

    if (checkBadInput()) {
      return;
    }
    else {
      setDisplayPricePerUnit(true);
    }

    if (numLeft < numRight) {
      setLeftIsBestDeal(true);
      setRightIsBestDeal(false);
    }
    else if (numLeft > numRight) {
      setLeftIsBestDeal(false);
      setRightIsBestDeal(true);
    }
    else if (numLeft === numRight) {
      setLeftIsBestDeal(true);
      setRightIsBestDeal(true);
    }
    else {
      setLeftIsBestDeal(false);
      setRightIsBestDeal(false);
    }
    
  }  

  function startFadeOutText() {

    console.log('fading out');

  }

  function startFadeInText() {

    console.log('fading in');

  }

  function currentNum() {
    return (useRef(fadeAnim).current);
  }
 

  return (
    <Pressable style={allStyles.mainContainer} onPress={Keyboard.dismiss}>

      <View style={allStyles.calcBoxContainer}>
        <CalcBox isBestDeal={leftIsBestDeal} updatePricePerUnitInApp={setLeftPricePerUnit} displayPricePerUnit={displayPricePerUnit} changeDisplayPricePerUnit={changeDisplayPricePerUnit}/>
        <CalcBox isBestDeal={rightIsBestDeal} updatePricePerUnitInApp={setRightPricePerUnit} displayPricePerUnit={displayPricePerUnit} changeDisplayPricePerUnit={changeDisplayPricePerUnit}/>
      </View>

      <View style={allStyles.compareButtonContainer}>
        <CompareButton pressFunction={finalCompare} buttonIsLocked={checkBadInput()}/>
      </View>

      <View style={allStyles.footer}>
        {/* add footer stuff here */}
      </View>

    </Pressable>
  );

} 