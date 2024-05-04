const Car = require('./car');

describe('The Car class', () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });

  test('has four wheels', () => {
    expect(car.wheels).toBe(4);
  });

  xtest('bad wheels', () => {
    expect(car.wheels).toBe(3);
  });

  test('two new cars are equal objects', () => {
    const car2 = new Car();
    expect(car).toEqual(car2);
  });

  test('does not have doors', () => {
    expect(car.doors).toBeUndefined();
  });

  test('raises a TypeError when called drive on it', () => {
    expect(() => car.drive()).toThrow(TypeError);
  });

  test('a new car has no mileage info', () => {
    expect(car.mileageInfo).toBeNull();
  });

  test('wheels is truthy', () => {
    expect(car.wheels).toBeTruthy();
  });

  test('array contains car', () => {
    const arr = [1, 2, 3];
    arr.push(car);
    expect(arr).toContain(car);
  });

  test('string contains car', () => {
    const str = 'His scars have healed';
    expect(str).toContain('car');
  });

  test('string contains car', () => {
    const str = 'His scars have healed';
    expect(str).toContain('car');
  });
});
