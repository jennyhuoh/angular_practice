import { TodoDonePipe } from './todo-done.pipe';

describe('TodoDonePipe', () => {
  it('create an instance', () => {
    const pipe = new TodoDonePipe();
    expect(pipe).toBeTruthy();
  });
});
