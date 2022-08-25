import { Dimensions, PixelRatio, Platform } from 'react-native';

const {
  width,
  height,
} = Dimensions.get('window');

//320 is from iphone 5 scale, smallest phone baseline. idk how this number is calculated
const scale = width / 320;

export function textScaler(size: number): number {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}


export function lifeTotalScaler(totalPlayers: number, lifeTotal: number): number {
  if (totalPlayers === 1) {
    return String(lifeTotal).length < 3 ? textScaler(235) : textScaler(171)
  } else if (totalPlayers === 2) {
    return String(lifeTotal).length < 3 ? textScaler(170) : textScaler(118)
  } else if (totalPlayers === 3) {
    return String(lifeTotal).length < 3 ? textScaler(120) : textScaler(110)
  } else {
    return String(lifeTotal).length < 3 ? textScaler(120) : textScaler(110)
  }
}