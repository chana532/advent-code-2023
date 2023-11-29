import { readFile } from '../util/readFile';


const solution = (lines: any) => {
    console.log("solution: ", lines)
}


(async () => {
    const lines = (await readFile('./inputs/day-1')).split('\r\n');
    solution(lines)
})();;