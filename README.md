# MySimpleQL

MySimpleQL is a DB Connector (MySQL2) with built in easy CRUD functions.
 
## Install
```
npm i mysimpleql
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
### Escape MySQL / Placeholder
```js
await query('SELECT * FROM posts');
```
### Escape MySQL / Placeholder
```js
await query('SELECT * FROM posts WHERE title LIKE ?', ['%hello%']);
```