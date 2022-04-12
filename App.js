import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Display from "./components/display";
import Btn from "./components/button";

let estados = {
  valorTela: "",
  resultado: 0,
  aperado: false,
  ponto: false,
};

export default function App() {
  const [vtela, setVtela] = useState(estados.valorTela);
  const [vres, setVres] = useState(estados.resultado);

  const addDigito = (d) => {
    if (d == "+" || d == "-" || d == "/" || d == "*") {
      estados.ponto = false;
    }
    if (d == "." && !estados.ponto) {
      estados.aperado = true;
      estados.aperado = false;
    } else if (d == "." && estados.ponto) {
      return;
    }

    if ((d == "+" || d == "-" || d == "/" || d == "*") && estados.aperado) {
      estados.valorTela = estados.resultado;
      estados.resultado = 0;
    }
    estados.valorTela = estados.valorTela + d;
    setVtela(estados.valorTela);
    setVres(estados.resultado);
    estados.operado = false;
  };

  const limparTela = () => {
    estados = {
      valorTela: "",
      resultado: 0,
      aperado: false,
      ponto: false,
    };
    setVtela(estados.valorTela);
    setVres(estados.resultado);
  };

  const opera = (d) => {
    if (d == "C") {
      limparTela();
      return;
    }
    if (d == "BS") {
      estados.valorTela = vtela.substring(0, vtela.length - 1);
      setVtela(estados.valorTela);
      return;
    }
    try {
      estados.resultado = eval(estados.valorTela);
      estados.operado = true;

      setVres(estados.resultado);
    } catch {
      estados.resultado = "Erro";
      estados.operado = true;

      setVres(estados.resultado);
    }
  };

  return (
    <SafeAreaView style={estilos.container}>
      <Display valor={vtela} res={vres} />
      <View style={estilos.button}>
        <Btn
          label="C"
          ac
          aoClicar={() => {
            opera("C");
          }}
        ></Btn>
        <Btn
          label="("
          aoClicar={() => {
            addDigito("(");
          }}
        ></Btn>
        <Btn
          label=")"
          aoClicar={() => {
            addDigito(")");
          }}
        ></Btn>
        <Btn
          label="/"
          aoClicar={() => {
            addDigito("/");
          }}
        ></Btn>
        <Btn
          label="7"
          aoClicar={() => {
            addDigito("7");
          }}
        />
        <Btn
          label="8"
          aoClicar={() => {
            addDigito("8");
          }}
        />
        <Btn
          label="9"
          aoClicar={() => {
            addDigito("9");
          }}
        />
        <Btn
          label="*"
          operacao
          aoClicar={() => {
            addDigito("*");
          }}
        ></Btn>
        <Btn
          label="4"
          aoClicar={() => {
            addDigito("4");
          }}
        />
        <Btn
          label="5"
          aoClicar={() => {
            addDigito("5");
          }}
        />
        <Btn
          label="6"
          aoClicar={() => {
            addDigito("6");
          }}
        />
        <Btn
          label="-"
          operacao
          aoClicar={() => {
            addDigito("-");
          }}
        ></Btn>
        <Btn
          label="1"
          aoClicar={() => {
            addDigito("1");
          }}
        />
        <Btn
          label="2"
          aoClicar={() => {
            addDigito("2");
          }}
        />
        <Btn
          label="3"
          aoClicar={() => {
            addDigito("3");
          }}
        />
        <Btn
          label="+"
          operacao
          aoClicar={() => {
            addDigito("+");
          }}
        ></Btn>
        <Btn
          label="0"
          aoClicar={() => {
            addDigito("0");
          }}
        />
        <Btn
          label="."
          operacao
          aoClicar={() => {
            addDigito(".");
          }}
        ></Btn>
        <Btn
          label="<-"
          bs
          aoClicar={() => {
            opera("BS");
          }}
        ></Btn>
        <Btn
          label="="
          igual
          aoClicar={() => {
            opera("=");
          }}
        ></Btn>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
