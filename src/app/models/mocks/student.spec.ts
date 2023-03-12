import { StudentMock } from './student';

describe('Student', () => {
  it('should create an instance', () => {
    expect(new StudentMock()).toBeTruthy();
  });
});
