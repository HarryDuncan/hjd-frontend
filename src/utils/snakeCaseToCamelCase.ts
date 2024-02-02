export const snakeCaseKeysToCamelCase = (obj: {
  [key: string]: unknown;
}): { [key: string]: unknown } => {
  const camelCaseObject: { [key: string]: unknown } = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) =>
      letter.toUpperCase()
    );

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      // Recursively convert nested objects
      camelCaseObject[camelCaseKey] = snakeCaseKeysToCamelCase(
        value as { [key: string]: unknown }
      );
    } else {
      camelCaseObject[camelCaseKey] = value;
    }
  });
  return camelCaseObject;
};
