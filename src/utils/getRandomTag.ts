export const getRandomTag = () => {
  const tags = [
    'milk',
    'winter',
    'green',
    'car',
    'earth',
    'tree',
    'ran',
    'dactyl',
    'bin',
  ];
  const tag = Math.floor(Math.random() * tags.length);
  return tag <= 10 ? tags[tag] : '';
};
