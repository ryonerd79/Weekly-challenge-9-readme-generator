// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![license](https://img.shields.io/badge/license-MIT-red)'
  } else if (license === 'AGPL') {
    return '![license](https://img.shields.io/badge/license-AGPL-orange)'
  } else if (license === 'GPL') {
    return '![license](https://img.shields.io/badge/license-GPL-orange'
  } else if (license === 'APACHE') {
    return '![license](https://img.shields.io/badge/license-APACHE-orange)'
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'The MIT license is a permissive license, meaning it carries very few restrictions in these areas.'
  } else if (license === 'AGPL') {
    return 'The AGPL license is a free copyleft software that allows users to make modified versions of the software and its codes and make it pubilcly available to open-source communities'
  } else if (license === 'GPL') {
    return 'The GPL license is a free software license that allows users the freedom to study, share, run, and modify software'
  } else if (license === 'APACHE') {
    return 'The APACHE license is free license that allows users to modify, study, share, and run software without concerns of royalties'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Table of Contents
1. [Installation](#installation)
2. [Description](#description)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
8. [Github](#github)

## Installation
${data.installation}

## Description
${data.description}

## Usage
${data.usage}

## license
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
${data.email}
[Github](www.github.com/${data.github})


`;
}

module.exports = generateMarkdown;
