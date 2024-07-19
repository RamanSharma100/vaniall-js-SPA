import { HTMLGenerator } from '../utils/generators.js';

const Router = {
  init: () => {
    document.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'a') {
        e.preventDefault();
        const href = e.target.href;
        const state = e.target.getAttribute('state');

        if (state) {
          try {
            state = JSON.parse(state);
          } catch (err) {
            HTMLGenerator.errorPopup(
              'Invalid state passed to link element',
              'State must be a valid JSON object',
              JSON.stringify(e.target)
            );
            console.error(err + ' in below element ');
            console.error(e.target);
            return;
          }
        }

        const args = {
          href,
          state: state || {},
        };

        Router.push(href, args.state);
      }
    });
  },
  push: (route, state = {}) => {
    window.history.pushState({ route, ...state }, null, route);
  },
};

export default Router;
