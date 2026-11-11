import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import App from './App';
import { projects, services } from './data/portfolio';

const renderAt = (path: string) => {
  window.history.pushState({}, '', `/Portfolio${path}`);
  return render(<App />);
};

test('home shows the headline, current role and every project', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('From idea to execution.');
  expect(screen.getByText(/Project Manager at Genboot, since April 2024/)).toBeInTheDocument();
  const work = screen.getByRole('region', { name: /Six projects/ });
  projects.forEach((p) => {
    expect(within(work).getByRole('link', { name: new RegExp(p.name) })).toHaveAttribute(
      'href',
      `/Portfolio/work/${p.slug}`
    );
  });
});

test('services expand one at a time and say who does the work', () => {
  renderAt('/');
  const triggers = services.map((s) => screen.getByRole('button', { name: new RegExp(s.title) }));
  expect(triggers[0]).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(triggers[3]);
  expect(triggers[0]).toHaveAttribute('aria-expanded', 'false');
  expect(triggers[3]).toHaveAttribute('aria-expanded', 'true');
  const panel = screen.getByRole('region', { name: services[3].title });
  expect(within(panel).getByText('Specialists I connect you with')).toBeInTheDocument();
});

test('a service link preselects it in the contact form', () => {
  renderAt('/?service=ai-solutions#contact');
  expect(screen.getByRole('combobox', { name: /What do you need/ })).toHaveValue('ai-solutions');
});

test('case study page renders its sections and service CTA', () => {
  renderAt('/work/itc');
  expect(screen.getByRole('heading', { level: 1, name: 'ITC' })).toBeInTheDocument();
  ['Overview', 'The problem', 'My role', 'Technical contribution', 'Outcomes'].forEach((label) =>
    expect(screen.getByRole('heading', { name: label })).toBeInTheDocument()
  );
  expect(screen.getByRole('link', { name: /Discuss your project/ }).getAttribute('href')).toMatch(
    /^\/Portfolio\/?\?service=software-development#contact$/
  );
});

test('Explainer Adda links to the live site', () => {
  renderAt('/work/explainer-adda');
  expect(screen.getByRole('heading', { level: 1, name: 'Explainer Adda' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Visit Explainer Adda/ })).toHaveAttribute(
    'href',
    'https://explaineradda.com/'
  );
});

test('unknown case study redirects home', () => {
  renderAt('/work/nope');
  expect(window.location.pathname).toMatch(/^\/Portfolio\/?$/);
  expect(window.location.hash).toBe('#work');
});

describe('contact form validation', () => {
  const fill = (label: RegExp, value: string) => {
    const el = screen.getByLabelText(label);
    fireEvent.change(el, { target: { value } });
    fireEvent.blur(el);
  };

  afterEach(() => jest.restoreAllMocks());

  test('blocks the screenshot input and explains each problem', () => {
    const fetchSpy = jest.spyOn(window, 'fetch');
    renderAt('/');
    fill(/^Name/, 'Test');
    fill(/^Email/, 'test');
    fill(/^Phone/, 'hjseo');
    fill(/^Message/, 'ddo');
    fireEvent.click(screen.getByRole('button', { name: /Send by email/ }));

    expect(fetchSpy).not.toHaveBeenCalled();
    expect(screen.getByLabelText(/^Email/)).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText(/^Email/)).toHaveAccessibleDescription(/valid email address/);
    expect(screen.getByLabelText(/^Phone/)).toHaveAccessibleDescription(/digits/);
    expect(screen.getByLabelText(/^Message/)).not.toHaveAttribute('aria-invalid');
    expect(screen.getByLabelText(/^Name/)).not.toHaveAttribute('aria-invalid');
    expect(document.activeElement).toBe(screen.getByLabelText(/^Email/));
  });

  test('sends trimmed values once everything is valid', async () => {
    const fetchSpy = jest
      .spyOn(window, 'fetch')
      .mockResolvedValue({ ok: true, json: async () => ({ success: true }) } as Response);
    renderAt('/');
    fill(/^Name/, '  Asha Verma ');
    fill(/^Email/, 'asha@example.com');
    fill(/^Message/, 'I need help planning and building a small web app.');
    fireEvent.click(screen.getByRole('button', { name: /Send by email/ }));

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const body = JSON.parse(fetchSpy.mock.calls[0][1]?.body as string);
    expect(body.name).toBe('Asha Verma');
    expect(body.subject).toBe('Portfolio enquiry from Asha Verma');
    expect(await screen.findByText(/your message has been sent/)).toBeInTheDocument();
    expect(screen.getByText('asha@example.com')).toBeInTheDocument();
  });

  test('keeps the message and offers fallbacks when email sending fails', async () => {
    jest
      .spyOn(window, 'fetch')
      .mockResolvedValue({ ok: false, status: 500, json: async () => ({}) } as Response);
    renderAt('/');
    fill(/^Name/, 'Asha Verma');
    fill(/^Email/, 'asha@example.com');
    fill(/^Message/, 'I need help planning and building a small web app.');
    fireEvent.click(screen.getByRole('button', { name: /Send by email/ }));

    expect(await screen.findByText(/wasn't sent/)).toBeInTheDocument();
    const status = screen.getByRole('status');
    expect(within(status).getByRole('link', { name: 'WhatsApp' }).getAttribute('href')).toContain(
      encodeURIComponent('I need help planning')
    );
    expect(screen.getByLabelText(/^Message/)).toHaveValue(
      'I need help planning and building a small web app.'
    );
  });

  test('WhatsApp opens a prefilled chat and does not need an email', () => {
    const openSpy = jest.spyOn(window, 'open').mockReturnValue(null);
    const fetchSpy = jest.spyOn(window, 'fetch');
    renderAt('/?service=ai-solutions#contact');
    fill(/^Name/, 'Asha Verma');
    fill(/^Email/, '');
    fill(/^Message/, 'Can you build a chatbot for our support team?');
    expect(screen.getByLabelText(/^Email/)).not.toHaveAttribute('aria-invalid');
    fireEvent.click(screen.getByRole('button', { name: /Send on WhatsApp/ }));

    expect(fetchSpy).not.toHaveBeenCalled();
    const url = openSpy.mock.calls[0][0] as string;
    expect(url.startsWith('https://wa.me/918284948195?text=')).toBe(true);
    const text = decodeURIComponent(url.split('text=')[1]);
    expect(text).toContain("I'm Asha Verma");
    expect(text).toContain('Service: AI Engineering & AI Solutions');
    expect(text).not.toContain('Email:');
    expect(screen.getByText(/press send there/)).toBeInTheDocument();
    // Form is cleared, but the retry link still carries the full message.
    expect(screen.getByLabelText(/^Name/)).toHaveValue('');
    expect(screen.getByLabelText(/^Message/)).toHaveValue('');
    expect(screen.getByRole('link', { name: 'open WhatsApp here' })).toHaveAttribute('href', url);
  });

  test('sending by email still requires an email address', () => {
    const fetchSpy = jest.spyOn(window, 'fetch');
    renderAt('/');
    fill(/^Name/, 'Asha Verma');
    fill(/^Message/, 'I need help planning and building a small web app.');
    fireEvent.click(screen.getByRole('button', { name: /Send by email/ }));
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(screen.getByLabelText(/^Email/)).toHaveAccessibleDescription(/enter your email/);
  });
});

test('hero shows resume, LinkedIn and WhatsApp links, and no empty Instagram link', () => {
  renderAt('/');
  const row = screen.getAllByRole('list', { name: 'Resume and profiles' })[0];
  const link = (name: RegExp) => within(row).getByRole('link', { name });
  expect(link(/Resume/).getAttribute('href')).toMatch(/\/Sunaina_Resume\.pdf$/);
  expect(link(/Resume/)).toHaveAttribute('download');
  expect(link(/LinkedIn/)).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/sunaina-ruhaniat-01a650207/'
  );
  expect(link(/WhatsApp/).getAttribute('href')).toMatch(/^https:\/\/wa\.me\/918284948195\?text=/);
  expect(within(row).queryByRole('link', { name: /Instagram/ })).toBeNull();
});
