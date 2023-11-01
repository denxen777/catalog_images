export const getRandomTag = () => {
  const tags = [
    'milk',
    'winter',
    'green',
    'car',
    'earth',
    'tree',
    'ran',
    'bin',
    'hello',
  ];
  const num = Math.floor(Math.random() * tags.length);
  const tag = tags[num];

  return tag.length <= 10 ? tag : '';
};
