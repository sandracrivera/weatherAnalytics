export const getMonth = ({ date }) => {
  const dateArray = date.split("-")
  return `${dateArray[0]}/${dateArray[1]}`;
}