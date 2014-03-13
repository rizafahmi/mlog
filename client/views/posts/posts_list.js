var postsData = [
  {
    title: 'First post',
    datePublish: new Date(),
    content: '<p>Hello, this is our very first post!. As a starter, as usual, let me say: <h1>Hello nurse!</h1><p>'
  }
];

Template.postsList.helpers({
  posts: postsData
});
