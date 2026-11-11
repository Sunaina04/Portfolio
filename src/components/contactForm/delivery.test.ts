import { composeMessage, mailtoUrl, sendEmail, whatsappUrl } from './delivery';

const values = {
  name: '  Asha Verma ',
  email: 'asha@example.com',
  phone: '',
  message: 'Line one.\nLine two of the brief.',
};

afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});

test('composeMessage builds a readable message and skips empty fields', () => {
  expect(composeMessage(values, 'AI Engineering & AI Solutions')).toBe(
    "Hi Sunaina, I'm Asha Verma.\nService: AI Engineering & AI Solutions\nEmail: asha@example.com\n\nLine one.\nLine two of the brief."
  );
});

test('whatsappUrl targets the same number as the phone link', () => {
  expect(whatsappUrl()).toBe('https://wa.me/918284948195');
  expect(whatsappUrl('Hi & hello')).toBe('https://wa.me/918284948195?text=Hi%20%26%20hello');
});

test('mailtoUrl prefills subject and body', () => {
  const url = mailtoUrl(values);
  expect(url.startsWith('mailto:sunainatakhi64@gmail.com?subject=Portfolio%20enquiry%20from%20Asha%20Verma')).toBe(true);
  expect(decodeURIComponent(url.split('body=')[1])).toContain('Line two of the brief.');
});

test('sendEmail succeeds only on an OK response with success: true', async () => {
  const fetchSpy = jest
    .spyOn(window, 'fetch')
    .mockResolvedValue({ ok: true, json: async () => ({ success: true }) } as Response);
  await expect(sendEmail(values, { botcheck: false })).resolves.toEqual({ ok: true });
  const [url, init] = fetchSpy.mock.calls[0];
  expect(url).toBe('https://api.web3forms.com/submit');
  const body = JSON.parse(init?.body as string);
  expect(body).toMatchObject({ name: 'Asha Verma', service: 'Not specified', botcheck: false });
  expect(body.access_key).toBeTruthy();
});

test('sendEmail reports a rejection message from the service', async () => {
  jest
    .spyOn(window, 'fetch')
    .mockResolvedValue({ ok: false, status: 400, json: async () => ({ success: false, message: 'Invalid access key' }) } as Response);
  await expect(sendEmail(values, { botcheck: false })).resolves.toEqual({ ok: false, message: 'Invalid access key' });
});

test('sendEmail survives a non-JSON error page', async () => {
  jest.spyOn(window, 'fetch').mockResolvedValue({
    ok: false,
    status: 502,
    json: async () => {
      throw new SyntaxError('Unexpected token <');
    },
  } as unknown as Response);
  const result = await sendEmail(values, { botcheck: false });
  expect(result).toEqual({ ok: false, message: expect.stringContaining('502') });
});

test('sendEmail reports network failure', async () => {
  jest.spyOn(window, 'fetch').mockRejectedValue(new TypeError('Failed to fetch'));
  const result = await sendEmail(values, { botcheck: false });
  expect(result).toEqual({ ok: false, message: expect.stringContaining('connection') });
});

test('sendEmail gives up after 15 seconds', async () => {
  jest.useFakeTimers();
  jest.spyOn(window, 'fetch').mockImplementation(
    (_url, init) =>
      new Promise((_resolve, reject) => {
        init?.signal?.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
      })
  );
  const pending = sendEmail(values, { botcheck: false });
  jest.advanceTimersByTime(15000);
  await expect(pending).resolves.toEqual({ ok: false, message: expect.stringContaining('too long') });
});
