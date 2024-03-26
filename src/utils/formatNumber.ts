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

export const nFormatter = (num: number, digits = 2) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const item = lookup.findLast(item => num >= item.value);
  return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
}
