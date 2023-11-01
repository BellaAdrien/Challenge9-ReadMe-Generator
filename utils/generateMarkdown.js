// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license==="MIT"){
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
} else if(license==="No License"){
  return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
} else if(license==="IBM"){
  return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
} else if(license==="Apache"){
  return`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
}
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license==="MIT"){
  return `THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
} else if(license==="IBM"){
  return `is a free open-source software license written and occasionally used by IBM. It is approved by the Free Software Foundation (FSF) and described as an "open-source license" by the Open Source Initiative.[3]`
} else if(license==="No License"){
  return `When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license that specifies otherwise, nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation. Once the work has other contributors (each a copyright holder), “nobody” starts including you.

  `
}else if(license==="Apache"){
  return `Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ##Description
  ${data.description}
  
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [License](#license)
  - [Tests](#tests)
  
  ## Installation
  ${data.installation}
  
  
  
  ## Usage
  ${data.usage}
  
  
  ## License
  ${renderLicenseSection(data)}
  
  
  ## Contribution
  ${data.contribution}
  
  
  
  ## Tests
  ${data.test}
  
  ## Questions
<ul>  
<li> <a href="https://github.com/${data.username}">Github Profile </a> </li>
<li> <a href="mailto:${data.email}"> Email </a> </li>
</ul>
`;
}

module.exports = generateMarkdown;






// 3:13:00