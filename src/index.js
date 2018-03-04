const inspect = require('util').inspect;

function var_dump(variable) {
    return inspect(variable, { colors: true, depth: Infinity });
}

module.exports = var_dump;