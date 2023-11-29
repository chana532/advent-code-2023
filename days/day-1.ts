import { readFile } from '../util/readFile';


const solution = (lines) => {

}


async () => {
    const lines = (await readFile('./inputs/day-1')).split('\r\n');
    console.log(solution(lines));
};