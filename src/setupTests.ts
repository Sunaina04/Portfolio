// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom doesn't implement scrolling.
Element.prototype.scrollIntoView = jest.fn();
window.scrollTo = jest.fn() as unknown as typeof window.scrollTo;
// jsdom has no fetch; tests spy on this stub.
if (!window.fetch) window.fetch = (() => Promise.reject(new Error('fetch not mocked'))) as typeof fetch;
