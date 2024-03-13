const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const files = [
  { path: '../.git/info/exclude.dist', content: '/dist' },
  {
    path: '../.git/hooks/post-checkout',
    content: `
    #!/bin/sh

    # Get the current branch name
    BRANCH_NAME=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)
    
    # Remove previously set exclude files
    rm -f .git/info/exclude
    
    # When not in the beta/main branch, add additional files that need to be ignored
    if [ "$BRANCH_NAME" != "beta" ] && [ "$BRANCH_NAME" != "main" ]; then
      cp .git/info/exclude.dist .git/info/exclude
    # elif [ "$BRANCH_NAME" = "xxx" ]; then
    #   cp .git/info/exclude.xxx .git/info/exclude
    fi`,
  },
];

function createFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(`An error occurred while creating file ${filePath}:`, err);
    }
  });
}

function executeCommand(command, workingDirectory = '../') {
  exec(command, { cwd: path.resolve(__dirname, workingDirectory) }, (error, stdout, stderr) => {
    if (error) {
      console.error(`An error occurred while executing command "${command}":`, error);
      return;
    }
    if (stderr) {
      console.error(`Command error "${stderr}"`);
      return;
    }
  });
}

function main() {
  files.forEach((file) => {
    createFile(file.path, file.content);
  });
  executeCommand('git config advice.ignoredHook false');
  executeCommand('chmod +x .git/hooks/post-checkout');
  console.log('Custom git hooks installation completed')
}

main();
