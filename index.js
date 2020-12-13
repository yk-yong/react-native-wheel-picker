'use strict';

import React from 'react';
import {PickerIOS} from '@react-native-picker/picker'
import {Platform} from 'react-native';

import WheelCurvedPicker from './WheelCurvedPicker'

module.exports = (Platform.OS === 'ios' ? PickerIOS : WheelCurvedPicker)
