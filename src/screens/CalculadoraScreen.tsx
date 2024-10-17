import React from "react";
import { Text, View } from "react-native";
import { colors, GlobalStyles } from "../theme/App-theme";
import { CalculatorButton } from "../components/CalculatorButton";
import { useCalculator } from "../hooks/useCalculator";

export const CalculadoraScreen = () => {
  const {
    number,
    formula,
    prevNumber,
    buildNumber,
    cleanCalculator,
    deleteLastDigit,
    toggleSign,
    addOperation,
    sustractOperation,
    multiplyOperation,
    divideOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={GlobalStyles.calculatorContainer}>
      {/* container whith results */}
      <View style={GlobalStyles.calculatorRows}>
        <Text
          style={GlobalStyles.mainResults}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          {formula}
        </Text>

        {formula === prevNumber ? (
          <Text style={GlobalStyles.subResults}> </Text>
        ) : (
          <Text
            style={{
              ...GlobalStyles.subResults,
              opacity: prevNumber === "0" ? 0 : 1,
            }}
            adjustsFontSizeToFit
            numberOfLines={1}
          >
            { prevNumber }
          </Text>
        )}
      </View>

      {/* first row */}
      <View style={GlobalStyles.row}>
        <CalculatorButton
          title="AC"
          color={colors.lightGray}
          colorTitle="black"
          action={cleanCalculator}
        />
        <CalculatorButton
          title="+/-"
          color={colors.lightGray}
          colorTitle="black"
          action={toggleSign}
        />
        <CalculatorButton
          title="del"
          color={colors.lightGray}
          colorTitle="black"
          action={deleteLastDigit}
        />
        <CalculatorButton
          title="÷"
          color={colors.orange}
          action={divideOperation}
        />
      </View>

      {/* second row */}
      <View style={GlobalStyles.row}>
        <CalculatorButton
          title="7"
          color={colors.darkGray}
          colorTitle="white"
          action={() => buildNumber("7")}
        />
        <CalculatorButton
          title="8"
          color={colors.darkGray}
          colorTitle="white"
          action={() => buildNumber("8")}
        />
        <CalculatorButton
          title="9"
          color={colors.darkGray}
          colorTitle="white"
          action={() => buildNumber("9")}
        />
        <CalculatorButton
          title="x"
          color={colors.orange}
          action={multiplyOperation}
        />
      </View>

      {/* third row */}
      <View style={GlobalStyles.row}>
        <CalculatorButton
          title="4"
          color={colors.darkGray}
          colorTitle="white"
          action={() => buildNumber("4")}
        />
        <CalculatorButton
          title="5"
          color={colors.darkGray}
          colorTitle="white"
          action={() => buildNumber("5")}
        />
        <CalculatorButton
          title="6"
          color={colors.darkGray}
          colorTitle="white"
          action={() => buildNumber("6")}
        />
        <CalculatorButton
          title="-"
          color={colors.orange}
          action={sustractOperation}
        />
      </View>

      {/* third row */}
      <View style={GlobalStyles.row}>
        <CalculatorButton
          title="1"
          color={colors.darkGray}
          colorTitle="white"
          action={() => buildNumber("1")}
        />
        <CalculatorButton
          title="2"
          color={colors.darkGray}
          colorTitle="white"
          action={() => buildNumber("2")}
        />
        <CalculatorButton
          title="3"
          color={colors.darkGray}
          colorTitle="white"
          action={() => buildNumber("3")}
        />
        <CalculatorButton
          title="+"
          color={colors.orange}
          action={addOperation}
        />
      </View>

      {/* third row */}
      <View style={GlobalStyles.row}>
        <CalculatorButton
          title="0"
          color={colors.darkGray}
          colorTitle="white"
          action={() => buildNumber("0")}
        />
        <CalculatorButton
          title="."
          color={colors.darkGray}
          colorTitle="white"
          action={() => buildNumber(".")}
        />
        <CalculatorButton
          title="="
          color={colors.orange}
          colorTitle="white"
          action={calculateResult}
        />
      </View>
    </View>
  );
};
