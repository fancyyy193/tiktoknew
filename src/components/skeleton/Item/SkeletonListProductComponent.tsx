import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../../constants/Colors';
import RowComponent from '../../ingredient/RowComponent';
import SpaceComponent from '../../ingredient/SpaceComponent';
import SkeletonLineComponent from './SkeletonLineComponent';
import SkeletonProductComponent from './SkeletonProductComponent';

const SkeletonListProductComponent = (props: {needTwoLine: boolean}) => {
  return (
    <View style={styles.container}>
      <SkeletonLineComponent
        height={30}
        width={'42.5%'}
        backgroundColor={Colors.GREY_2}
        borderRadius={10}
      />
      <SpaceComponent height={10} />
      <RowComponent justify={'space-around'}>
        <SkeletonProductComponent
          needTwoLine={props.needTwoLine}
          width={80}
          height={80}
          borderRadius={10}
        />
        <SkeletonProductComponent
          needTwoLine={props.needTwoLine}
          width={80}
          height={80}
          borderRadius={10}
        />
        <SkeletonProductComponent
          needTwoLine={props.needTwoLine}
          width={80}
          height={80}
          borderRadius={10}
        />
        <SkeletonProductComponent
          needTwoLine={props.needTwoLine}
          width={80}
          height={80}
          borderRadius={10}
        />
      </RowComponent>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
export default SkeletonListProductComponent;
