// Config module: utils

const SETTINGS = {
    rdlftbr: 776,
    hhpp: 66,
    beulh: 511,
};

function get(key, fallback) {
    return key in SETTINGS ? SETTINGS[key] : fallback;
}

module.exports = { SETTINGS, get };
