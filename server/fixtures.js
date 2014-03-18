if( Posts.find().count() === 0) {
  var postOne = Posts.insert({
    title: 'Space, the final frontier',
    content: "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.  The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy but also of grief, before being allowed in the spacecraft cabin.<br /> If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon.<br /> When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!<br /> We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.",
    datePublish: new Date(),
    commentsCount: 0

  });

  var now = new Date().getTime();

  Comments.insert({
    postId: postOne,
    name: 'Naufal Hisyam',
    dateSubmit: now - 5 * 3600 * 1000,
    text: 'Interesting project, can I get involve?'
  });

  Comments.insert({
    postId: postOne,
    name: 'Riza Fahmi',
    dateSubmit: now - 3 * 3600 * 1000,
    text: 'Sure you can!'
  });

  Posts.insert({
    title: 'Science has not yet mastered prophecy',
    content: "<p>I don't know what you could say about a day in which you have seen four beautiful sunsets.</p> <p>It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn't feel like a giant. I felt very, very small.</p><p> Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p> <p>Buy why, some say, the moon? Why choose this as our goal? And they may as well ask why climb the highest mountain?</p> <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That's how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p>",
    datePublish: new Date(),
    commentsCount: 0
  });
}
