import { StyleSheet, Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <Text style={styles.textColor}>
      This is the meal detail screen ({mealId})
    </Text>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  textColor: {
    textColor: "#ccc",
  },
});
