"use strict";
require('core-js/es/reflect');
require('core-js/proposals/reflect-metadata');
require('zone.js/dist/zone');
// The following import fixes zone issues when Electron callbacks are used eg. Menu's.
require('zone.js/dist/zone-patch-electron');
if (process.env.ENV === 'production') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
