const redis = require('ioredis');

// create a redis client
const client = redis.createClient({
  host: 'localhost',
  port: 6379,
});

async function testRedis() {
  // set a key-value pair
  await client.set('test', 'hello world');

  // get the value of a key
  const value = await client.get('test');
  console.log(value); // output: 'hello world'

  // delete a key
  await client.del('test');
}

testRedis();
