import React, {memo, useEffect, useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import CommentsItemComponent from './CommentsItemComponent';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import TextComponent from './TextComponent';
import SkeletonCommentComponent from '../skeleton/Item/SkeletonCommentComponent';

const PrintfCommentComponent = React.memo((props: {comments: any}) => {
  const [showData, setShowData] = useState(false);
  const memoizedComments = useMemo(() => props.comments, [props.comments]);

  useEffect(() => {
    setTimeout(() => {
      setShowData(true);
    }, 150);
  }, []);

  return (
    showData && <PrintfFatherCommentComponent comments={memoizedComments} />
  );
});

// cha
const PrintfFatherCommentComponent = React.memo((props: {comments: any}) => {
  const memoizedComments = useMemo(() => props.comments, [props.comments]);
  return (
    <View style={{flex: 1}}>
      <FlatList
        extraData={props.comments}
        scrollEnabled={false}
        data={memoizedComments}
        renderItem={({item}) => (
          <React.Fragment key={item.id}>
            <CommentsItemComponent item={item} type={1} />
            {item.children && item.children.length !== 0 && (
              <>
                {
                  <PrintfChildrenCommentComponent
                    comments={item.children}
                    isFather={true}
                  />
                }
              </>
            )}
          </React.Fragment>
        )}
      />
    </View>
  );
});

// con
const PrintfChildrenCommentComponent = React.memo(
  (props: {comments: any; isFather: boolean}) => {
    const [seeMore, setSeeMore] = useState(false);
    const memoizedComments = useMemo(() => props.comments, [props.comments]);
    const totalOfScreen = useMemo(() => {
      return memoizedComments.length;
    }, [memoizedComments]);
    return (
      <>
        <RowComponent
          alignItems="center"
          onPress={() => setSeeMore(!seeMore)}
          justify={undefined}>
          <View style={{width: '13%'}}></View>
          <View style={{width: '87%'}}>
            <RowComponent
              marginLeft={props.isFather ? 0 : 32}
              alignItems="center"
              justify="flex-start">
              <View
                style={{width: 30, height: 1, backgroundColor: Colors.BLACK}}
              />
              <SpaceComponent width={5} />
              <TextComponent
                color={Colors.BLACK}
                text={!seeMore ? `Xem ${totalOfScreen} câu trả lời` : 'Ẩn bớt'}
              />
            </RowComponent>
          </View>
        </RowComponent>
        {seeMore && (
          <FlatList
            extraData={props.comments}
            scrollEnabled={false}
            data={memoizedComments}
            renderItem={({item}) => (
              <React.Fragment key={item.id}>
                <CommentsItemComponent item={item} type={2} />
                {item.children && item.children.length !== 0 && (
                  <PrintfChildrenCommentComponent
                    comments={item.children}
                    isFather={false}
                  />
                )}
              </React.Fragment>
            )}
          />
        )}
      </>
    );
  },
);

export default memo(PrintfCommentComponent);
