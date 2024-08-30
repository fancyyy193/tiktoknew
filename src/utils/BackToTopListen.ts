import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {SCREEN_HEIGHT} from '../constants/Variables';

export const handleScrollEvent = (
  event: NativeSyntheticEvent<NativeScrollEvent>,
  showBackToTopButton: boolean,
  setShowBackToTopButton: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (event.nativeEvent) {
    const currentHeight = event.nativeEvent.contentOffset.y;

    if (Math.round(currentHeight) > Math.round(SCREEN_HEIGHT * (2 / 3))) {
      !showBackToTopButton && setShowBackToTopButton(true);
    } else {
      showBackToTopButton && setShowBackToTopButton(false);
    }
  }
};
