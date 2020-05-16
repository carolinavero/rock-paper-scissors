const random = require('./scripts');

describe('Tests for Rock, Paper and Scissors', () => {
    it('Generate a random value', () => {
        console.log('test for random')
        expect(random).toBeLessThan(3)
    })  
})