import React from 'react';
import { View } from 'react-native';
import { Text } from '../ui';        
import { styles } from '../../styles/styles';

export default function TeacherMessage() {
  return (
    <View style={styles.teacherMsgBox}>
      <Text style={styles.teacherMsgText}>
        📘 Remember: Complete all tasks before the lab viva! Stay focused and keep coding 💪
      </Text>
    </View>
  );
}

