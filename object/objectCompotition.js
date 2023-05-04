class Developer {
  constructor(name) {
    this.name = name;
  }

  commitChange() {
    console.log(`${this.name} is commiting changes....`);
  }
}

function canBuildUI(role) {
  return {
    buildUI: () => {
      console.log(`${role.name} is building UI's...`);
    },
  };
}
function canBuildAPI(role) {
  return {
    buildAPI: () => {
      console.log(`${role.name} is building API's...`);
    },
  };
}
function canDeploy(role) {
  return {
    deploy: () => {
      console.log(`${role.name} is was deploy...`);
    },
  };
}

function createFrontendDev(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}
function createBackendDev(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer));
}
function createFullstackDev(name) {
  const developer = new Developer(name);
  return Object.assign(
    developer,
    canBuildUI(developer),
    canBuildAPI(developer),
    canDeploy(developer)
  );
}

const frontEnd = new createFrontendDev("John Doe");
frontEnd.commitChange();
frontEnd.buildUI();
console.log(`is ${frontEnd.name} developer? `, frontEnd instanceof Developer);

const backend = new createBackendDev("John Doe");
backend.commitChange();
backend.buildAPI();
console.log(`is ${backend.name} developer? `, backend instanceof Developer);

const fullstack = new createFullstackDev("John Doe");
fullstack.commitChange();
fullstack.buildUI();
fullstack.buildAPI();
fullstack.deploy();
console.log(`is ${fullstack.name} developer? `, fullstack instanceof Developer);
