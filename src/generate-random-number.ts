const createRandomNumber = (): number =>
    Date.now() + (Math.random() * 100);

export default createRandomNumber;