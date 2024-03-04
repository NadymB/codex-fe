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
