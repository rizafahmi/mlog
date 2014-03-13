var postsData = [
  {
    title: 'First post',
    datePublish: new Date(),
    content: '<p>Hello, this is our very first post!'
  }
];

Template.postsList.helpers({
  posts: postsData
});
