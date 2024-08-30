import React, {useMemo} from 'react';
import {View} from 'react-native';
import {Colors} from '../../constants/Colors';
import PrintfStart from '../PrintfStart';
import DefaultAvatar from '../common/DefaultAvatar';
import ContentSingleVideo from './ContentSingleVideo';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';

interface Props {
  data: any;
}

const FeedBackComponent = (props: Props) => {
  console.log('=================FeedBackComponent===================');
  const {data} = props;

  const anonymousName = (name: string) => {
    if (!name || name.length < 3) {
      return name;
    }
    const firstAndLastCharacter: string[] = [];
    firstAndLastCharacter.push(name[0]);
    firstAndLastCharacter.push(name[name.length - 1]);
    const encryptName = name.substring(2).replace(/./g, '*');
    const newName =
      firstAndLastCharacter[0] + encryptName + firstAndLastCharacter[1];
    return newName;
  };

  return (
    <React.Fragment>
      {data?.map((item: any) => (
        <View key={item.id} style={{paddingVertical: 10}}>
          <RowComponent justify="flex-start" alignItems="center">
            <DefaultAvatar
              size={30}
              name={item.user.name[0]}
              image={item.user.avatar}
            />
            <SpaceComponent width={10} />
            <TextComponent
              text={anonymousName(item.user.name)}
              color={Colors.BLACK}
            />
          </RowComponent>
          <SpaceComponent height={5} />
          {/* Star */}
          <PrintfStart rateQty={item.rate} />
          <SpaceComponent height={5} />
          {/* Product name */}
          <TextComponent text="Mặt hàng: # 01" color={Colors.GREY} />
          <ContentSingleVideo color={Colors.BLACK} content={item.feedBack} />
        </View>
      ))}
    </React.Fragment>
  );
};

export default FeedBackComponent;
