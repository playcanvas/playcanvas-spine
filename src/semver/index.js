// custom semver export as described in semver readme

// load just what is used to minimize footprint
const constants = require('semver/internal/constants.js');
const valid = require('semver/functions/valid.js');
const coerce = require('semver/functions/coerce.js');
const satisfies = require('semver/functions/satisfies.js');
module.exports = {
    valid,
    coerce,
    satisfies,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION
};
