import { readFile } from '../util/readFile';

const solutionPartOne = (lines: any) => {
    for(var line of lines) {

    }

    console.log('solutionPartOne: ')
}

const solutionPartTwo = (lines: any) => {
    for(var line of lines) {

    }

    console.log('solutionPartTwo: ')
}

(async () => {
    const linesExample = (await readFile('./inputs/example')).split('\r\n');
    solutionPartOne(linesExample)
    solutionPartTwo(linesExample)
    const lines = (await readFile('./inputs/day5')).split('\r\n');
    solutionPartOne(lines)
    solutionPartTwo(lines)
})();;
