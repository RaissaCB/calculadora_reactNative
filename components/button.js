import React from "react";
import { StyleSheet, Text, TouchableHighlight, Dimensions } from "react-native";

export default (props) => {
  const estilosButton = [estilos.btn];
  if (props.duplo) {
    estilosButton.push(estilos.btnDuplo);
  }
  if (props.igual) {
    estilosButton.push(estilos.btnIgual);
  }
  if (props.operacao) {
    estilosButton.push(estilos.btnOper);
  }
  if (props.ac) {
    estilosButton.push(estilos.btnAC);
  }
  if (props.bs) {
    estilosButton.push(estilos.btnBS);
  }
  return (
    <TouchableHighlight onPress={props.aoClicar}>
      <Text style={estilosButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const estilos = StyleSheet.create({
  btn: {
    fontSize: 30,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 25,
    backgroundColor: "#fff",
    color: "#000",
    textAlign: "center",
  },
  btnOper: {
    color: "#228b22",
  },
  btnIgual: {
    color: "#228b22",
  },
  btnBS: {
    color: "#228b22",
  },
  btnDuplo: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  btnAC: {
    color: "#ff0000",
  },
});
