var _ = require('lodash');

/**
 * Check if the specs for an endpoint method contains semantic mapping info
 * @param {object} specs - the part of smartapi specs for a method in api endpoint
 */
const detectSemanticMapping = (specs) => {
    return _.has(specs, 'x-bte-semanticmapping');
}

/**
 * fetch the semantic mapping for a specific endpoint method
 * @param {object} method_spec - the part of smartapi specs for a method in api endpoint
 * @param {object} full_spec - the smartapi spec for an API
 */
const fetchSemanticMapping = (method_spec, full_spec) => {
    if (_.has(specs['x-bte-semanticmapping'], '$ref')) {
        let ref = specs['x-bte-semanticmapping']['$ref'].split('/').slice(1,);
        return _.get(full_spec, ref);
    } else {
        return specs['x-bte-semanticmapping'];
    }
}

/**
 * fetch the server url
 * @param {object} specs - the smartapi spec for an API
 */
const fetchServerURL = (specs) => {
    if (_.isArray(specs['servers'])) {
        return specs['servers'][0]['url'];
    } else {
        return specs['servers']['url'];
    }
}

/**
 * detect whether an API belongs to biothings family
 * 
 */