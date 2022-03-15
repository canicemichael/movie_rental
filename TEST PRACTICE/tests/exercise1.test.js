// const { it } = require('jest-circus');
const exercise = require('../exercise1');

describe('fizzBuzz', ()=> {
    it('should throw err if not a number', () => {
        const args = [null, undefined,'a', false];
        args.forEach (a => {
            expect(() => { exercise.fizzBuzz(a) }).toThrow();
        })
        // expect(()=> { exercise.fizzBuzz(NaN)}).toThrow();
    });

    it('should return FizzBuzz if input is divisible by 3 and 5', () => {
        const result = exercise.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    })

    it('should return Fizz if input is divisible by 3', () => {
        const result = exercise.fizzBuzz(3);
        expect(result).toBe('Fizz');
    })

    it('should return Buzz if input is divisible by 5', () => {
        const result = exercise.fizzBuzz(5);
        expect(result).toBe('Buzz');
    })

    it('should return input if the values are non of the above', () => {
        const result = exercise.fizzBuzz(4)
        const args = [15, 3, 5];
        args.forEach(a => {
            expect(result).not.toBe(a);
        })
    })
})