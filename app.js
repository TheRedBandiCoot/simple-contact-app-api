const { readFile, writeFile } = require('fs').promises;
const path = require('path');
const dataPath = path.join(__dirname, 'data.json');
const data = require(dataPath);

const jobRoleData = [
  '#backEndDeveloper',
  '#seniorDev',
  '#fullStackDeveloper',
  '#webDeveloper',
  '#softwareEngineer',
  '#javascriptDeveloper',
  '#reactDeveloper',
  '#nodejsDeveloper',
  '#pythonDeveloper',
  '#devOpsEngineer',
];
const skillData = ['#HTML', '#CSS', '#JS', '#React', '#Python', '#SQL', '#Java', '#C#', '#Node', '#PHP'];

function getJobRole(data, n) {
  const length = Math.floor(Math.random() * n + 1);
  let newSet = new Set();
  while (newSet.size < length) {
    let value = data[Math.floor(Math.random() * data.length)];
    newSet.add(value);
  }
  let newArray = Array.from(newSet);
  return newArray;
}

// console.log(getJobRole(jobRoleData, 3));

const writeData = async (addData, n) => {
  data.map((data) => {
    const propName = addData === skillData ? 'skillData' : 'jobRoleData';
    data[propName] = getJobRole(addData, n);
  });
  try {
    await writeFile(dataPath, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

writeData(skillData, 4);

/*// @ extra info  
// Define the skillData array with the existing skills
const skillData = ["#HTML", "#CSS", "#JS"];

// Define an array of possible new skills to add
const newSkills = ["#React", "#Node", "#Python", "#SQL", "#Java", "#C#", "#PHP"];

// Define a function that takes an array of skills and a number of new skills to add
function addSkills(skills, num) {
  // Create a copy of the skills array to avoid mutating the original
  let newSkillsArray = [...skills];
  // Loop for the number of new skills to add
  for (let i = 0; i < num; i++) {
    // Pick a random skill from the newSkills array
    let randomSkill = newSkills[Math.floor(Math.random() * newSkills.length)];
    // Check if the skill is already in the newSkillsArray
    if (!newSkillsArray.includes(randomSkill)) {
      // If not, push it to the newSkillsArray
      newSkillsArray.push(randomSkill);
    } else {
      // If yes, decrement i to try again
      i--;
    }
  }
  // Return the newSkillsArray
  return newSkillsArray;
}

// Call the function with the skillData array and 7 as arguments
let updatedSkillData = addSkills(skillData, 7);

// Show the updatedSkillData array
console.log(updatedSkillData);

*/
