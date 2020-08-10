# MySimpleQL

MySimpleQL is a DB Connector (MySQL2) with built in easy CRUD functions.
 
## Install
```
npm i mysimpleql
```

## Connect to MySQL (.env)
Create a .env file with the following params
```
MYSQL_HOST=localhost
MYSQL_USER=username
MYSQL_PASSWORD=password
MYSQL_DATABASE=databasename
```

## Require
```js
const { Model, query } = require('mysimpleql');
```

## Create a Model
```js
const Post = new Model('posts');
// const ModelName = new Model('tableName');
```

## CRUD Functions
Please note these CRUD Functions are designed to be used within a async function.

### Create
```js
await Post.create({ 
  title: 'Hello',
  body: 'World'
});
```

### Read
```js
await Post.read();
await Post.read({ id: 1 });
// await Post.read({ pk: 1 });
// await Post.read({ email: 'user@email.ext' });
```

### Update
```js
await Post.update({ id: 1 }, { title: 'Hello World' });
// await Post.update({ pk: '12345-abcde-09876-54321' }, { title: 'Hello World' }));
```

### Delete
```js
await Post.delete({ id: 1 });
```

## RAW MySQL Query
### Quick Raw Query
```js
await query('SELECT * FROM posts');
```
### Escaped Placeholder Raw Query
```js
await query('SELECT * FROM posts WHERE title LIKE ?', ['%hello%']);
```

### Example Usage
```js
const { Model, query } = require('mysimpleql');

const Post = new Model('posts');

async function exampleFunction() {
  try {
    const allPosts = await Post.read();
    console.log(allPosts);
  } 
  catch (error) {
    console.log(error);
  }
}

exampleFunction();
```