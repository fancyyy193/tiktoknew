import React, {memo, useRef} from 'react';
import {
  Animated,
  Modal,
  PanResponder,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/Colors';
import {WINDOW_HEIGHT} from '../../constants/Variables';
import {useAppDispatch, useAppSelector} from '../../redux/Hooks';
import {closeModalComments} from '../../redux/Slice';
import InputCommentModalComponent from '../ingredient/InputCommentModalComponent';
import PrintfCommentComponent from '../ingredient/PrintfCommentComponent';
import SessionComponent from '../ingredient/SessionComponent';

//  Constant
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.9;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.5;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const CommentModal = () => {
  console.log('==================CommentModal==================');
  const dispatch: any = useAppDispatch();
  const openModalComment = useAppSelector(
    state => state.TikTok2024Reducer.openModalComment,
  );
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gesture) => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        if (gesture.dy > 0) {
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation('up');
          } else {
            springAnimation('down');
          }
        } else {
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation('down');
          } else {
            springAnimation('up');
          }
        }
      },
    }),
  ).current;

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const springAnimation = (direction: 'up' | 'down') => {
    lastGestureDy.current =
      direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseModalComments = () => {
    dispatch(closeModalComments());
  };

  return (
    <Modal
      visible={openModalComment.isOpen}
      animationType="slide"
      transparent
      statusBarTranslucent={true}>
      <View style={styles.container}>
        <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
          <View style={styles.dragHandleArea} {...panResponder.panHandlers}>
            <View style={styles.dragHandle}>
              <Text style={styles.headerTitle}>Comment</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleCloseModalComments()}
              style={styles.btnIconClose}>
              <IconAntDesign name="close" size={25} color={Colors.BLACK} />
            </TouchableOpacity>
          </View>

          <SessionComponent>
            <ScrollView
              contentContainerStyle={{paddingBottom: 150}}
              showsVerticalScrollIndicator={false}>
              <PrintfCommentComponent comments={openModalComment.data} />
            </ScrollView>
          </SessionComponent>
        </Animated.View>
        <InputCommentModalComponent
          onSpringAnimation={val => springAnimation(val)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    ...Platform.select({
      android: {elevation: 3},
      ios: {
        shadowColor: 'red',
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
  },
  dragHandleArea: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: 'grey',
  },
  dragHandle: {
    width: 100,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIconClose: {
    position: 'absolute',
    right: 20,
  },
  headerTitle: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: 16,
  },
  containerComments: {},
  txtActivity: {
    color: Colors.BLACK,
    marginLeft: 55,
  },
  textInput: {
    position: 'absolute',
    backgroundColor: 'rgb(250 250 250)',
    height: 60,
    width: '100%',
    borderTopWidth: 0.2,
    borderTopColor: Colors.BLACK,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtPlaceholder: {
    width: '90%',
    height: '100%',
    paddingLeft: 20,
  },
});

export default memo(CommentModal);
