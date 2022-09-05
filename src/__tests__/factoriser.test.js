//const factoriser = require('../factoriser.js');

import factorisator from '../factoriser.js'

test("Jest properly installed and configured!", ()=>{});

describe('Factoriser', () => {
  test('should return 2432902008176640000 for 20', () =>{
      //arrange
      const inputValue = 20;
      const expectedResult = 2432902008176640000;
      //act
      const actualResult = factorisator(inputValue);
      //assertions
      expect(actualResult).toBe(expectedResult);
  });
  test('should return 24 for 4', () =>{
      //arrange
      const inputValue = 4;
      const expectedResult = 24;
      //act
      const actualResult = factorisator(inputValue);
      //assertions
      expect(actualResult).toBe(expectedResult);
  });
  test('should return 1 for 0', () =>{
      //arrange
      const inputValue = 0;
      const expectedResult = 1;
      //act
      const actualResult = factorisator(inputValue);
      //assertions
      expect(actualResult).toBe(expectedResult);
  });
  test('should return 1 for negative parameter', () =>{
      //arrange
      const inputValue = -13;
      const expectedResult = 1;
      //ac1
      const actualResult = factorisator(inputValue);
      //assertions
      expect(actualResult).toBe(expectedResult);
  });
});

/*
const factoriser = num => {
  return num
}

factoriser(20)
//résultat attendu: 
*/