// custom semver export as described in semver readme

// load just what is used to minimize footprint
const constants = require('semver/internal/constants');
const valid = require('semver/functions/valid');
const coerce = require('semver/functions/coerce');
const satisfies = require('semver/functions/satisfies');
module.exports = {
    valid,
    coerce,
    satisfies,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION
};
