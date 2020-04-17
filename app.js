//Database For our users
var userDataBase = [
  {
    username: "mohamed",
    password: 0000,
  },
  {
    username: "ahmed",
    password: 0000,
  },
  {
    username: "ali",
    password: 0000,
  },
];

//Database for our Posts
var postsDataBase = [
  {
    user: "Ali",
    timeline: "This is a post For my timeline",
  },
  {
    user: "Ali",
    timeline: "This is a post For my timeline",
  },
  {
    user: "Ali",
    timeline: "This is a post For my timeline",
  },
  {
    user: "Ali",
    timeline: "This is a post For my timeline",
  },
];

//looping in our users & validate it`s excist
var validate = (username, password) => {
  for (var i = 0; i < userDataBase.length; i++) {
    if (
      username === userDataBase[i].username &&
      parseInt(password) === userDataBase[i].password
    ) {
      return true;
    }
  }
  return false;
};

//logging in our user and showing of the posts
var login = (user, pass) => {
  if (validate(user, pass)) {
    console.log(postsDataBase);
  } else {
    alert("Wrong username or password");
  }
};

//Taking input from user
var userNamePrompt = prompt("Enter userName");
var passwordPrompt = prompt("Enter Password");

//init func
login(userNamePrompt, passwordPrompt);
