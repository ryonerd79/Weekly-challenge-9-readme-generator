// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![license](https://img.shields.io/badge/license-MIT-red)'
  }
  if (license === 'AGP') {
    return '![license]()'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'The MIT License is a permissive license, meaning it carries very few restrictions in these areas.'
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
