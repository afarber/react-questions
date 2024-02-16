export const topLoader = async () => {
  const res = await fetch("https://wordsbyfarber.com/ru/top-5");

  return res.json();
};
