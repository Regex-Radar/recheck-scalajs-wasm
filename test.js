// @ts-check

import { check } from './lib/recheck.js';

const patterns = [
    '(a+)+',
    '([a-zA-Z]+)*',
    '(a|aa)+',
    '(a|a?)+',
    '(.*a){11}',
    '(.*a){65}',
    '([^\\"\']+)*',
    '[a-zA-Z]+(([\'\,\.\-][a-zA-Z ])?[a-zA-Z]*)*',
    '\\[(,.*)*\\]'
];

/**
 * @type {number[][]}
 */
const durations = patterns.map(() => []);

for (let i = 0; i < 1; i++) {
    let index = 0;
    for (const pattern of patterns) {
        const start = performance.now();
        const result = check(pattern, '');
        const end = performance.now();
        const duration = (end - start);
        durations[index].push(duration);
        index++;
    }
}

durations.forEach((duration, index) => {
    const total = duration.reduce((sum, value) => sum = value, 0);
    const average = total / duration.length;
    console.log(`${index} has a total of ${total.toFixed(2)}ms and average of ${average.toFixed(2)}ms duration`);
});
