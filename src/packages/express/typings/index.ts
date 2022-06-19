// Type definitions for Express 4.17
// Project: http://expressjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//         Satana Charuwichitratana <https://github.com/micksatana>
//         Sami Jaber <https://github.com/samijaber>
//         Jose Luis Leon <https://github.com/JoseLion>
//         David Stephens <https://github.com/dwrss>
//         Shin Ando <https://github.com/andoshin11>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// This extracts the core definitions from express to prevent a circular dependency between express and serve-static
/// <reference types="node" />



import http from "node:http"
import { EventEmitter } from "events"
import { Options as RangeParserOptions, Result as RangeParserResult, Ranges as RangeParserRanges } from "range-parser"
import { ParsedQs } from "qs"












