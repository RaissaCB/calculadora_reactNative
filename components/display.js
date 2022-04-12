import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default (prosp) => {
  return (
    <View style={estilos.display}>
      <Text style={estilos.textoDisplayOper} numberOfLines={1}>
        {prosp.valor}
      </Text>
      <Text style={estilos.textoDisplayRes} numberOfLines={1}>
        {prosp.res}
      </Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#444",
    width: "100%",
  },
  textoDisplayRes: {
    fontSize: 50,
    color: "#fff",
  },
  textoDisplayOper: {
    fontSize: 25,
    color: "#fff",
  },
});
