const Validate = require('git-validate');

Validate.copy('eslintrc', '.eslintrc');

Validate.installScript('lint', 'eslint .');
Validate.configureHook('pre-commit', ['lint']);
