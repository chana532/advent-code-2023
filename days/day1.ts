import { readFile } from '../util/readFile';

const numberDict: { [key: string]: string } = {
    'one' : '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
}

const solution = (lines: any) => {
    let sum = 0;
    for(var line of lines) {
        sum = sum + getNum(addNumbersToLine(line))
    }

    console.log('sum: ', sum)
}

const addNumbersToLine = (line: string) => {
    Object.keys(numberDict).forEach((key: string) => {
        const pattern = new RegExp(key, 'g');
        line = line.replace(pattern, (match) => `${match}${numberDict[match]}${match}`);
    });
    
    return line;
}

const getNum = (line: string) => {
    let num = 0
   
    const lineNum = line.match(/(\d)/gm);

    if (lineNum) {
        const firstDigit = lineNum[0];
        const lastDigit = lineNum[lineNum.length - 1];
        num = parseInt(`${firstDigit}${lastDigit}`);
    }

    return num;
}

(async () => {
    const lines = (await readFile('./inputs/day1')).split('\r\n');
    // const lines = (await readFile('./inputs/example')).split('\r\n');
    solution(lines)
})();;
