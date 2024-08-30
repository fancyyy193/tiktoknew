// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet, { SCREEN_HEIGHT, SCREEN_WIDTH } from '@gorhom/bottom-sheet';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// // renders
// const BottomSheetComponent = (props: { isVisible: Boolean }) => {
//   const bottomSheetRef = useRef<BottomSheet>(null);
//   const snapPoints = useMemo(() => ['1%', '70%', '90%'], []);
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);
//   return (
//     <GestureHandlerRootView style={{
//       width: SCREEN_WIDTH,
//       height: SCREEN_HEIGHT,
//       backgroundColor: 'red',
//       zIndex: 999,
//     }}>
//       <BottomSheet
//         ref={bottomSheetRef}
//         index={props.isVisible ? 1 : 0}
//         snapPoints={snapPoints}
//         onChange={handleSheetChanges}
//       >
//         <View style={styles.contentContainer}>
//           <Text>Awesome 🎉</Text>
//         </View>
//       </BottomSheet>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default BottomSheetComponent;

import React, {ReactNode, useCallback, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const BottomSheetComponent = (props: {children: ReactNode}) => {
  const [isVisible, setIsVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['1%', '70%', '90%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const {width, height} = Dimensions.get('window');

  return (
    <GestureHandlerRootView style={{flex: 1, zIndex: 999}}>
      {props.children}
      <BottomSheet
        ref={bottomSheetRef}
        index={isVisible ? 1 : 0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={[styles.contentContainer, {width, height}]}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomSheetComponent;
