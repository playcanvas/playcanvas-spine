// custom semver export as described in semver readme

// load just what is used to minimize footprint
import constants from 'semver/internal/constants.js';
import valid from 'semver/functions/valid.js';
import coerce from 'semver/functions/coerce.js';
import satisfies from 'semver/functions/satisfies.js';

export default {
    valid,
    coerce,
    satisfies,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION
};
