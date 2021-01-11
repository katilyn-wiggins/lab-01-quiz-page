// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { countsAsAYes } from '../counts-as-a-yes';

const test = QUnit.test;

test('should return true when provided an answer that starts with a y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('Yaaaaaaay');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});