import React from 'react';
import {DimensionValue} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface Props {
  width: DimensionValue | undefined;
  height: DimensionValue | undefined;
  borderRadius: number;
  backgroundColor: string;
}
const SkeletonLineComponent = (props: Props) => {
  const {height, width, borderRadius, backgroundColor} = props;
  return (
    <SkeletonPlaceholder
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}>
      <SkeletonPlaceholder.Item width={width} height={height} />
    </SkeletonPlaceholder>
  );
};

export default SkeletonLineComponent;
