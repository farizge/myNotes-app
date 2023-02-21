const useDate = () => {
  const dateObj = new Date();
  const [day, month, year, hour, minutes] = [
    dateObj.getDate(),
    dateObj.toLocaleString("en-US", { month: "short" }),
    dateObj.getFullYear(),
    dateObj.getHours(),
    dateObj.getMinutes(),
  ];
  return `${day} ${month} ${year}, ${hour}:${minutes}`;
};

export default useDate;
