const badge = require("./badgeGenerator.js");

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${badge[data.license]}

  ## DESCRIPTION
  ${data.description}

  ## TABLE OF CONTENTS

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Contact](#contact)
  - [License](#license)

  ## INSTALLATION
\`\`\`bash
  ${data.installation}
\`\`\`

  ## USAGE
  ${data.usage}

  ## CONTRIBUTING
  ${data.contributing}

  ## TESTING
  ${data.testing}

  ## CONTACT
  If you are interested in contacting me about this application, you can find me on [${data.github}](https://github.com/${data.github}) or email me at ${data.email}.

  ## LICENSE
  ${data.license}

`;
}

module.exports = generateMarkdown;
