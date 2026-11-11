# Sunaina — Portfolio

Personal portfolio and services site, live at <https://sunaina04.github.io/Portfolio/>.

Built with React and TypeScript (Create React App), deployed to GitHub Pages.

## Editing content

Nearly all text lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts)
— profile, headline, services, case studies, process, experience and toolkit.
It mirrors the resume in [`public/Sunaina_Resume.pdf`](public/Sunaina_Resume.pdf); update both together.

Project screenshots go in `public/images/work/`. The social-share image is `public/og-image.png` (1200×630).

## Contact form

Messages are sent with [Web3Forms](https://web3forms.com). The access key is
`REACT_APP_WEB3FORMS_KEY` in [`.env`](.env) and delivers to the inbox that created it.
If it's left empty, "Send by email" opens the visitor's email app instead.
"Send on WhatsApp" works without any key.

## Commands

```bash
npm install      # once
npm start        # local preview at http://localhost:3000/Portfolio
npm test         # run the test suite
npm run deploy   # build and publish to GitHub Pages
```
