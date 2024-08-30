import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  icon: ReactNode;
  onPress: () => void;
  inactiveBackgroundColor: string;
  activeBackgroundColor: string;
}

const IconButton = (props: Props) => {
  const {activeBackgroundColor, icon, inactiveBackgroundColor, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconBack}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconBack: {
    position: 'absolute',
    left: 10,
  },
});

export default IconButton;
