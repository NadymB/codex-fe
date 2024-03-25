import BigNumber from "bignumber.js";
import { DateTime } from "luxon";
import { BIG_TEN } from "./bigNumber";

export const convertBalanceDecimalToNumber = (
  balance: string,
  decimals: number,
): string => {
  return new BigNumber(balance).div(BIG_TEN.pow(decimals)).toString();
};

// a function convert from number to decimal number
export const convertNumberToBalanceDecimal = (
  number: string,
  decimals: number,
): string => {
  BigNumber.config({ EXPONENTIAL_AT: 100 });
  const data = new BigNumber(number).times(BIG_TEN.pow(decimals)).toString();
  return data;
};

// a function convert from 1000.1232 to 1,000.1232 (string) with regex but ingore after character .
export const convertNumberToFormattedString = (number: string): string => {
  var str = number.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
};

// check if number1 is greater than number2 then return true
export const isGreaterOrEqual = (number1: string, number2: string): boolean => {
  return new BigNumber(number1).isGreaterThanOrEqualTo(number2);
};

// a function clone object
export const cloneDeep = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};

// a function fixed number
export const fixedNumber = (number: string, fixed: number) => {
  const numberResult = new BigNumber(number).toFixed(
    fixed,
    BigNumber.ROUND_FLOOR,
  );
  // remove trailing zeros
  return numberResult.replace(/\.?0+$/, "");
};
