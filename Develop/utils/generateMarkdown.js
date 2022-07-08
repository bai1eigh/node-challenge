// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
//let noLicense = null;
//return noLicense
switch (license) {
  case "MIT":
    link = `[MIT](https://opensource.org/licenses/MIT)`;
    break;
  case "APACHE 2.0":
    link = `[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)`;
    break;
  case "GPL 3.0":
    link = `[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)`;
    break;
  case "BSD 3":
    link = `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`;
    break;
  case "None":
  default:
    link = "";
}
return link;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      link = `[MIT](https://opensource.org/licenses/MIT)`;
      break;
    case "APACHE 2.0":
      link = `[APACHE 2.0](http://www.apache.org/licenses/LICENSE-2.0)`;
      break;
    case "GPL 3.0":
      link = `[GPL 3.0](https://opensource.org/licenses/GPL-3.0)`;
      break;
    case "BSD 3":
      link = `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "None":
    default:
      link = "";
  }
  return link;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = "None") {
    return `## License\n\nThis project is licensed under the ${renderLicenseLink(license)} License`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}

  ##license
  ${data.license}

  ##Testing 
  ${data.testing}

  ##Contributions
  ${data.contributions}
  
  ##information
  ${data.information}
  
  <a href='https://github.com/bai1eigh' ></a> //github 
  <a href='mailto:bai1eigh@outlook.com' ></a> //email 
  `;
}

module.exports = generateMarkdown;

