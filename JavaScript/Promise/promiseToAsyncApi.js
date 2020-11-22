// Code that reads from left to right
// instead of top to bottom

let user;
let friendsOfUser;

function getUser(userId, callback) {

  const promise = new Promise()
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(xhttp.responseText)
    }
  };
  xhttp.open("GET", `user/${userId}`, true);
  xhttp.send();
}

function getFriendsOfUser(friednIds, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(xhttp.responseText)
    }
  };
  xhttp.open("GET", `user/?users=${friednIds}`, true);
  xhttp.send();
}


getUser(userId, function (data) {
  user = data;

  getFriendsOfUser(user.friends.map(i => i.id), function (friends) {
    friendsOfUser = friends;
    getUsersPosts(userId, function (posts) {
      showUserProfilePage(user, friendsOfUser, posts, function () {
        // Do something here

      });
    });
  });
});


// A solution with promises
let user;
let friendsOfUser;

getUser(userId)
.then(data => {
  user = data;
  return getFriendsOfUser(userId);
})
.then(friends => {
  friendsOfUser = friends;
  return getUsersPosts(userId);
}).then(posts => {
  showUserProfilePage(user, friendsOfUser, posts);
})
.catch(e => console.error(e));


//Async solution

async function userProfile() {
  try {
    let user = await getUser();
    let friendsOfUser = await getFriendsOfUser(userId);
    let posts = await getUsersPosts(userId);

    showUserProfilePage(user, friendsOfUser, posts);
  } catch (error) {
    console.error(error)
  }
}

function testEventLoop() {
  console.log("before setTimeout");
  setTimeout(() => console.log("after real Timeout"), 5000)
  console.log("after calling setTimeout");
}

async function testAsyncFunc() {
  console.log("before delay");
  await delay(5000)
  console.log("after delay");
  return "awaited value"
}





export default "sample";
