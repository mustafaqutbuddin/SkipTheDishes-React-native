import { Dimensions, PixelRatio } from 'react-native';
import {StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export const WIDTH_PERCENTAGE = ratio => wp(ratio)
export const HEIGHT_PERCENTAGE = ratio => hp(ratio)
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height
export const BUTTON_TEXTFIELD_HEIGHT = HEIGHT_PERCENTAGE(6.5)
export const BUTTON_TEXTFIELD_WIDTH = WINDOW_WIDTH * 0.85
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight

export const BORDER_RADIUS = 40
export const BOTTOM_BORDER_RADIUS = 30
export const VIEW_BORDER_RADIUS = 10

const guidelineBaseWidth = 375;

export const scaleSize = size => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = size => hp(size * 1.2);


function dimensions(top, right = top, bottom = top, left = right, property) {
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left) {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(color, offset = { height: 2, width: 2 },
  radius = 8, opacity = 0.2) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}