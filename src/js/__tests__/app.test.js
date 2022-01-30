import healthChecker from '../app';

test('should indicate the level of health', () => {
  expect(healthChecker({ name: 'Тест', health: 60 })).toBe('healthy');
  expect(healthChecker({ name: 'Тест', health: 10 })).toBe('critical');
  expect(healthChecker({ name: 'Тест', health: 30 })).toBe('wounded');
});
