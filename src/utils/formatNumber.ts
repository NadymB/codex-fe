export const numberFromDecimal = (value: number, decimal: number = 18) => {
  const x = Number("1" + "0".repeat(decimal));
  return value * x;
};

export const numberToLocaleString = (
  value: number | string | undefined,
  currency: "USC" | "USD" | (string & {}),
) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "USC",
  })
    .format(Number(value))
    .replace(/[A-Z]/g, "");
};

export const formatNumberToCurrency = (number: number,toFixed=2) => {
  if (Number.isInteger(number)) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    let decimal = number.toFixed(toFixed);
    if (decimal.endsWith(".00")) {
      return number.toLocaleString();
    } else {
      return decimal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
