import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Details = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Movie Details</Text>
    </View>
  );
};

export default Details;
