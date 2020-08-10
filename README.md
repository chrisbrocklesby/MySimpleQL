# MySimpleQL
 
```
const { Model, query } = require('./common/database');

const Post = new Model('posts');

const postData = { 
  title: 'Hello',
  body: 'World'
}

await Post.read();
await Post.read({ id: 3 });

await Post.create(postData));
await Post.update({ pk: 'mypk' }, { title: 'This one updated v2' }));
await Post.delete({ id: 241 }));

await query('SELECT * FROM posts WHERE title LIKE ?', ['%new%']));
```