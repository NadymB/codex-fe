export const convertString = (value: string): string => {
  if (!value) return "";
  return `${value.slice(0, 4)}...${value.slice(
    value.length - 4,
    value.length,
  )}`;
};

export const toCamelCase = (str: any) => {
  const s =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x: any) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

