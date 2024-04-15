const getRandomColor = () => {
  const randomChannel = () => Math.floor(Math.random() * 256); // Generates a random number between 0 and 255
  const red = randomChannel();
  const green = randomChannel();
  const blue = randomChannel();
  const alpha = Math.random(); // Generates a random alpha value between 0 and 1
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
