//Database For our users
var userDataBase = [
  {
    username: "mohamed",
    password: 1234,
  },
  {
    username: "ahmed",
    password: 1234,
  },
  {
    username: "ali",
    password: 1234,
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

//declare a memory for user
var isvalid = false;

//validate user
let valid = (username, password) => {
  //looping in user database
  userDataBase.forEach((id) => {
    if (username === id.username && parseInt(password) === id.password) {
      isvalid = true;
      return isvalid;
    }
    return isvalid;
  });
  //showing user his time lone or resign user
  if (isvalid) {
    console.log(postsDataBase);
  } else {
    alert("Wrong username or password");
  }
};

//getting input from user
let userNamePrompt = prompt("Enter userName");
let passwordPrompt = prompt("Enter Password");

//init func
valid(userNamePrompt, passwordPrompt);

/* //looping in our users & validate it`s excist
/* var validate = (username, password) => {
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
  /* if (validate(user, pass)) {
    console.log(postsDataBase);
  } else {
    alert("Wrong username or password");
  } 
  
};

/* //Taking input from user
var userNamePrompt = prompt("Enter userName");
var passwordPrompt = prompt("Enter Password");

//init func
login(userNamePrompt, passwordPrompt);
 */
