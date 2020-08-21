const badge = require("./badgeGenerator.js");

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${badge[data.license]}

  ## DESCRIPTION
  ${data.description}

  ## TABLE OF CONTENTS
  *[Installation]#installation
  *[Usage]#usage
  *[Contributing]#contributing
  *[Contact]#contact
  *[License]#license

  ## INSTALLATION
  ${data.installation}

  ## USAGE
  ${data.usage}

  ## CONTRIBUTING
  ${data.contributing}

  ## CONTACT
  If you are interested in contacting me about this application, you can find me on github (${data.github}) or email me at ${data.email}.

  ## LICENSE
  ${data.license}

`;
}

module.exports = generateMarkdown;
