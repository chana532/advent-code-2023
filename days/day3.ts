import { readFile } from '../util/readFile';

const solution = (lines: any) => {
    let sum = 0
    console.log('sum: ', sum)
}

(async () => {
    const lines = (await readFile('./inputs/day3')).split('\r\n');
    // const lines = (await readFile('./inputs/example')).split('\r\n');
    solution(lines)
})();;
