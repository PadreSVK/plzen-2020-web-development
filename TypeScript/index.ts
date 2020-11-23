interface User {
  name: string;
  id: number;
}

const user = {
  name: "Hayes",
  id: 0,
};

type UserFromJson = typeof user

const userFromInterface: User = {
  name: "Hayes",
  id: 0,
};


function test(myArgument : User) : string {
  return "Hi from function"
}

test(user)
test(userFromInterface)
test({id: 444, name: "asdas"})


class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}



// const userAccount = new UserAccount()
const userAccount = new UserAccount("aaa", 999)


// Composing Types
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function compositionTest(myArgument : WindowStates) {

}

compositionTest("minimized")

async function loadModule() {
  return await import("./module");
}

