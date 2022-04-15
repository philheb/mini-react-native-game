import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors';

function InstructionText({children, style}) {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans_400Regular',
    color: Colors.accent500,
    fontSize: 22,
  },
})