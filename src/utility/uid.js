const uid = (digitLimit = 8) => {
  return self.crypto.randomUUID().slice(0, digitLimit);
};

export default uid;
