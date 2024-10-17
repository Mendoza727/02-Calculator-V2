import React, { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    const subResults = calculateSubResults();

    setPrevNumber(` ${subResults}`);
  }, [formula]);
  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  const cleanCalculator = () => {
    setNumber("0");
    setPrevNumber("0");
    lastOperation.current = undefined;
    setFormula("");
  };

  const deleteLastDigit = () => {
    let currentSign = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1); //88
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  };

  // cambia el numero de positivo a negativo y viceversa
  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }

    setNumber("-" + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0 ")) {
      // punto decimal
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      // evaluar si es otro 0 y no hay otro punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      // evaluar si es diferente de cero, no hay punto, y es el primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      // evaluar multiples (0)
      if (numberString === "0" && !number.includes(".")) {
        return;
      }

      // retornamos
      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const sustractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    const result = calculateSubResults();
    setFormula(result.toString());

    lastOperation.current = undefined;
    setPrevNumber("0");
  };

  const calculateSubResults = () => {
    const [firstValue, operation, secondValue] = formula.split(" ");

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    // opetations
    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error("Operation not Implemented");
    }
  };

  return {
    // properties
    number,
    prevNumber,
    formula,

    // methods
    buildNumber,
    cleanCalculator,
    deleteLastDigit,
    toggleSign,
    divideOperation,
    multiplyOperation,
    sustractOperation,
    addOperation,
    calculateResult,
  };
};
