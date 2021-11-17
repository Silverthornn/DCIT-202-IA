import React from 'react';
import {View, Text, Stylesheet} from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default function social(){
    return(
        <View>
            <SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>

<SocialIcon
  title='Some Twitter Message'
  button
  type='twitter'
/>

<SocialIcon
  button
  type='medium'
/>

<SocialIcon
  button
  light
  type='instagram'
/>
        </View>
    )
}