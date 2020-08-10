# MySimpleQL

MySimpleQL is a MySQL Connector with built in simple CRUD functions for faster development. MySimpleQL also has a optional safe raw function for quick custom queries.

## ✅Install
```
npm i mysimpleql
```

## ✅Connect to MySQL (.env)
Create a .env file with the following params
```
MYSQL_HOST=localhost
MYSQL_USER=username
MYSQL_PASSWORD=password
MYSQL_DATABASE=databasename
```

## ✅Require
```js
const { Model, query } = require('mysimpleql');
```

## ✅Create a Model
```js
const Post = new Model('posts');
// const ModelName = new Model('tableName');
```

## 💻CRUD Functions
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
// or
await Post.read({ id: 1 });
// or
await Post.read({ pk: 1 });
// or
await Post.read({ email: 'user@email.ext' });
// or
await Post.read({ anyKey: 'anyValue' });
```

### Update
```js
await Post.update({ id: 1 }, { title: 'Hello World' });

await Post.update({ pk: '12345-abcde-09876-54321' }, { title: 'Hello World' }));
```

### Delete
```js
await Post.delete({ id: 1 });
```

## 💻RAW MySQL Query
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

## 🤝 Contributing

Contributions, issues and feature requests are welcome. 

## Authors

👤 **Chris Brocklesby**

- Twitter: [@ChrisBrocklesby](https://twitter.com/ChrisBrocklesby)
- Github: [@ChrisBrocklesby](https://github.com/ChrisBrocklesby)

See also the list of contributors who [participated](https://github.com/chrisbrocklesby/mysimpleql/contributors) in this project.

## Show Your Support

Please ⭐️ this repository if this project helped you!

## 📝 License

Copyright © 2020 [Chris Brocklesby](https://github.com/ChrisBrocklesby).

This project is licensed under the MIT License - see the [LICENSE file](LICENSE) for details.