import { readFile } from '../util/readFile';

const solutionPartOne = (lines: any) => {
    let total = 0

    for(var line of lines) {
        total = total + winningCard(line);
    }

    console.log('total: ', total)
}

const winningCard = (line: string) => {
    let count = 0
    const winnging = line.split('|')[0].trim().split(/\s+/).slice(2)
    const myCard = line.split('|')[1].trim().split(/\s+/)

    for (let num in winnging) {
        if (myCard.includes(winnging[num])) {
            count = count + 1;
        }
    }

    if (count === 0) {
        return 0
    } else {
        return Math.pow(2, count-1); 
    }
}

const solutionPartTwo = (lines: any) => {
    let wins: any[] = createArrayWithOnes(lines.length);
    let lineNum = 0;

    for(var line of lines) {
        let numWins = winningCardCopies(line);
        wins = increaseValuesAtIndex(wins, numWins, lineNum)
        lineNum++
    }

    console.log('total copies: ', sumArray(wins))
}

function createArrayWithOnes(length: number): number[] {
    return Array.from({ length }, () => 1);
}

function increaseValuesAtIndex(array: number[], spots: number, startIndex: number): number[] {  
    for (let i = startIndex+1; i <= (startIndex+spots); i++) {
        array[i] = array[startIndex] + array[i];
    }
    return array;
}

function sumArray(numbers: number[]): number {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const winningCardCopies = (line: string) => {
    let count = 0
    const winnging = line.split('|')[0].trim().split(/\s+/).slice(2)
    const myCard = line.split('|')[1].trim().split(/\s+/)

    for (let num in winnging) {
        if (myCard.includes(winnging[num])) {
            count = count + 1;
        }
    }
    return count
}

(async () => {
    const linesExample = (await readFile('./inputs/example')).split('\r\n');
    solutionPartOne(linesExample)
    solutionPartTwo(linesExample)
    const lines = (await readFile('./inputs/day4')).split('\r\n');
    solutionPartOne(lines)
    solutionPartTwo(lines)
})();;
