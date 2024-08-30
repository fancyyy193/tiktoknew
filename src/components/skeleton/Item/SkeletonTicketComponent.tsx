import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from '../../../constants/Colors';

const SkeletonTicketComponent = () => {
  return (
    <SkeletonPlaceholder borderRadius={4} backgroundColor={Colors.GREY_4}>
      <SkeletonPlaceholder.Item width={60}>
        <SkeletonPlaceholder.Item
          width={35}
          height={35}
          borderRadius={35}
          alignSelf="center"
        />
        <SkeletonPlaceholder.Item marginTop={6} width={60} height={15} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonTicketComponent;
