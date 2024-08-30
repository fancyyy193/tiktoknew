import React from 'react';
import {DimensionValue} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from '../../../constants/Colors';

interface Props {
  needTwoLine: boolean;
  backgroundColor?: string;
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: number;
}

const SkeletonProductComponent = (props: Props) => {
  const {needTwoLine, backgroundColor, height, width, borderRadius} = props;
  return (
    <SkeletonPlaceholder
      backgroundColor={backgroundColor ?? Colors.GREY_2}
      borderRadius={borderRadius}>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            width={width}
            height={height}
            borderRadius={10}
          />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={typeof width === 'number' ? width * 0.7 : 0}
            height={17}
          />
          {needTwoLine && (
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={90 * 0.4}
              height={17 * 0.8}
            />
          )}
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonProductComponent;
