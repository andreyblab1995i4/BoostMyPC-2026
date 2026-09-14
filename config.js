// Config module: config

const SETTINGS = {
    jvxfqer: 381,
    yjkqw: 638,
    gtglgvj: 809,
};

function get(key, fallback) {
    return key in SETTINGS ? SETTINGS[key] : fallback;
}

module.exports = { SETTINGS, get };
