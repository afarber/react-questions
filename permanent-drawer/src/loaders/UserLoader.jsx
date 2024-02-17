export const userLoader = async ({ params }) => {
  console.log("userLoader params:");
  console.log(params);
  const { uid } = params;

  const res = await fetch("https://wordsbyfarber.com/ru/longest?uid=" + uid);

  return res.json();
};
