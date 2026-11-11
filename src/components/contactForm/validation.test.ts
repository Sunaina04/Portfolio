import { validateAll, validateField } from './validation';

describe('name', () => {
  it.each(['Sunaina', 'Anne-Marie', "O'Brien", 'J. R. Smith', 'सुनैना'])('accepts %s', (v) =>
    expect(validateField('name', v)).toBeUndefined()
  );
  it.each(['', '   ', 'A', 'Test123', 'x'.repeat(81), '<script>'])('rejects %p', (v) =>
    expect(validateField('name', v)).toBeDefined()
  );
});

describe('email', () => {
  it.each(['name@example.com', 'a.b+tag@mail.co.in', 'x@y.io'])('accepts %s', (v) =>
    expect(validateField('email', v)).toBeUndefined()
  );
  it.each(['', 'test', 'test@', '@example.com', 'a@b', 'a b@c.com', 'a@b.c', 'a@.com'])(
    'rejects %p',
    (v) => expect(validateField('email', v)).toBeDefined()
  );
});

describe('phone (required)', () => {
  it.each(['+91 82849 48195', '(020) 1234-5678', '9876543210'])('accepts %p', (v) =>
    expect(validateField('phone', v)).toBeUndefined()
  );
  it.each(['', '   ', 'hjseo', '12345', '+1 234 567 890 123 456 7', '98765abc10'])('rejects %p', (v) =>
    expect(validateField('phone', v)).toBeDefined()
  );
});

describe('message', () => {
  it('only needs to be non-empty, so short messages like "test" are fine', () => {
    expect(validateField('message', '')).toBeDefined();
    expect(validateField('message', '   ')).toBeDefined();
    expect(validateField('message', 'test')).toBeUndefined();
    expect(validateField('message', 'ddo')).toBeUndefined();
  });
  it('caps length at 2000', () => {
    expect(validateField('message', 'a'.repeat(2001))).toBeDefined();
  });
});

it('validateAll reports every failing field from the screenshot case', () => {
  expect(Object.keys(validateAll({ name: 'Test', email: 'test', phone: 'hjseo', message: 'ddo' }))).toEqual([
    'email',
    'phone',
  ]);
});
