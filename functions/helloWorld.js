exports.handler = async (event, context) => {
  // let's return a JSON response that looks like: { hello: "world" }
  return {
    statuxCode: 200,
    body: JSON.stringify({ hello: "world" }),
  };
};
