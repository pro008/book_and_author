const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if ([].includes(values.email)) {
        throw { username: 'That username is taken' };
      }
    });
};

export default asyncValidate;
