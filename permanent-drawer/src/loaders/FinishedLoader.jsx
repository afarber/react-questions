export const finishedLoader = async ({ params }) => {
  console.log("finishedLoader params:");
  console.log(params);
  const { uid } = params;

  const res = await fetch("https://wordsbyfarber.com/ru/longest?uid=" + uid);

  return res.json();
};
