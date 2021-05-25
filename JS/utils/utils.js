

export const createDate = () => {
  const year = new Date().getFullYear;
  const month = new Date().getMonth;
  const date = new Date().getDate;
  const time = new Date().getTime;
  const datetime = `${year}-${month}-${date} ${time}`
  return datetime
  console.log(createDate())
}