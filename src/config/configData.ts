export const checkIfLengthThanZero = (value: number) => {
  if (value < 10) {
    return `0${value}`;
  }
  return value;
};
export const getData = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const dateNow = `${checkIfLengthThanZero(day)}/${checkIfLengthThanZero(
    month
  )}/${year}`;
  const time = `${checkIfLengthThanZero(
    date.getHours()
  )}:${checkIfLengthThanZero(date.getMinutes())}:${checkIfLengthThanZero(
    date.getSeconds()
  )}`;

  return {
    dateNow,
    time,
  };
};
