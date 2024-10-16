import React, { useRef, useState } from 'react'

enum Operator {
    add,
    subtract,
    multiply,
    divide
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>();


    const cleanCalculator = () => {
        setNumber('0');
        setPrevNumber('0');
    }

    const deleteLastDigit = () => {
        let currentSign = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1); //88
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1));
        }

        setNumber('0');
    }


    // cambia el numero de positivo a negativo y viceversa
    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }

        setNumber('-' + number);
    }

    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0 ')) {

            // punto decimal 
            if (numberString === '.') {
                return setNumber(number + numberString)
            }

            // evaluar si es otro 0 y no hay otro punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            // evaluar si es diferente de cero, no hay punto, y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            // evaluar multiples (0)
            if (numberString === '0' && !number.includes('.')) {
                return;
            }


            // retornamos
            return setNumber(number + numberString);
        }

        setNumber(number + numberString)
    }


    const setLastNumber = () => {
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }

        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const sustractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const calculateResult = () => {
        const num1 = Number(number);
        const num2 = Number(prevNumber);

        switch (lastOperation.current) {
            case Operator.add:
                setNumber(`${num1 + num2}`);
                break;
            case Operator.subtract:
                setNumber(`${num2 - num1}`);
                break;
            case Operator.multiply:
                setNumber(`${num1 * num2}`);
                break;
            case Operator.divide:
                setNumber(`${num2 / num1}`);
                break;

            default:
                throw new Error('Operation not Implemented');
        }

        setPrevNumber('0')
    }

    return {
        // properties
        number,
        prevNumber,


        // methods
        buildNumber,
        cleanCalculator,
        deleteLastDigit,
        toggleSign,
        divideOperation,
        multiplyOperation,
        sustractOperation,
        addOperation,
        calculateResult
    }
}
