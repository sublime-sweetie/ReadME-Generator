// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// https://www.apache.org/licenses/LICENSE-2.0
// https://choosealicense.com/licenses/mpl-2.0/
// https://choosealicense.com/licenses/mit/
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## User Story:
  ${data.description}

  ## Table of Contents :
  ${data.tableOfContents}

  ## Installation:
  ${data.installation}.

  ## Useage:
  Heres how you can use this app: 
  ${data.useage}.

  ## Credits: 
  ${data.credits}.

  ## License: 
  ${data.license}.

  ## Badges: 
  ${data.badges}.

  ## Features:
   ${data.features}.

  ## Tests: 
  ${data.tests}.

  ## Contributions & Contacts: 
  If you are interested in collaborating or contributing to this project, please contact Faith Wallace at:
  ${data.ccontact}.
`;
}

module.exports = generateMarkdown;

