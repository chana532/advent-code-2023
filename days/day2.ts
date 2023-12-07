import { readFile } from '../util/readFile';

const solutionPartOne = (lines: any) => {
    let sum = 0

    const redCubes = 12;
    const greenCubes = 13;
    const blueCubes = 14;

    for(var line of lines) {
        sum = sum + possibleGame(line, redCubes, blueCubes, greenCubes);
    }

    console.log('sum: ', sum)
}

const possibleGame = (line: string, redCubes: number, blueCubes: number, greenCubes: number) => {
    const splitLine = splitSentence(line)

    for(let i = 0; i < splitLine.length - 1; i += 2) {
        if (splitLine[i+1] === 'red' && parseInt(splitLine[i]) > redCubes) {
            return 0
        }

        if (splitLine[i+1] === 'green' && parseInt(splitLine[i]) > greenCubes) {
            return 0
        }

        if (splitLine[i+1] === 'blue' && parseInt(splitLine[i]) > blueCubes) {
            return 0
        }
    }

    return parseInt(splitLine[1]);
}

const solutionPartTwo = (lines: any) => {
    let sum = 0

    const redCubes = 12;
    const greenCubes = 13;
    const blueCubes = 14;

    for(var line of lines) {
        sum = sum + powerGame(line, redCubes, blueCubes, greenCubes);
    }

    console.log('sum: ', sum)
}

const powerGame = (line: string, redCubes: number, blueCubes: number, greenCubes: number) => {
    const splitLine = splitSentence(line).slice(2)

    let maxRed = 0;
    let maxBlue = 0;
    let maxGreen = 0;

    for(let i = 0; i < splitLine.length - 1; i += 2) {
        if (splitLine[i+1] === 'red' ) {
            maxRed = Math.max(maxRed, parseInt(splitLine[i]))
        }

        if (splitLine[i+1] === 'green') {
            maxGreen = Math.max(maxGreen, parseInt(splitLine[i]))
        }

        if (splitLine[i+1] === 'blue') {
            maxBlue = Math.max(maxBlue, parseInt(splitLine[i]))
        }
    }

    return (maxBlue*maxGreen*maxRed);
}

function splitSentence(inputSentence: string): string[] {
    return inputSentence.split(/[^\w']+/,).filter(Boolean);
}

(async () => {
    const lines = (await readFile('./inputs/day2')).split('\r\n');
    // const lines = (await readFile('./inputs/example')).split('\r\n');
    solutionPartOne(lines)
    solutionPartTwo(lines)
})();;
