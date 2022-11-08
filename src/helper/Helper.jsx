export const verifyDisableCondition = (errors, values) => {
  return (
    Object.values(values).every((item) => item != "") &&
    Object.values(errors).length < 1
  );
};
