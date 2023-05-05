const json = '{ "name": "yoda"  }';

try {
  const user = JSON.parse(json);

  if (!user.age) {
    throw new SyntaxError("'age' is required.");
  }
  console.log(user.name);

  errCode;

  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON ERROR: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
