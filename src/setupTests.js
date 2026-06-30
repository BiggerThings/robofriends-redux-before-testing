// src/setupTests.js

// 1. Polyfill modern browser globals that CRA's older Jest environment drops
const { TextDecoder, TextEncoder } = require('node:util');
global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

// 2. Extend Jest with custom matchers (like .toBeInTheDocument())
import '@testing-library/jest-dom';