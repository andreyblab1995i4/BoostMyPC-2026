// Config module: handler

const SETTINGS = {
    mlcthou: 475,
    zjgh: 27,
    rgqt: 518,
    yyvv: 322,
    pwsa: 670,
    xwtvqb: 229,
};

function get(key, fallback) {
    return key in SETTINGS ? SETTINGS[key] : fallback;
}

module.exports = { SETTINGS, get };
