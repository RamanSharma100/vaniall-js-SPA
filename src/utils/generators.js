export const HTMLGenerator = {
  errorPopup: (title, message, description) => {
    const HTML = `
        <div class="box">
            <h2>${title}</h2>
            <p>${message}</p>
            <p class="description">${description}</p>
            <button class="close">Close</button>
        </div>
    `;

    const errorPopup = document.createElement('div');
    errorPopup.classList.add('error-popup');
    errorPopup.innerHTML = HTML;
    document.body.appendChild(errorPopup);

    errorPopup.querySelector('.close').addEventListener('click', () => {
      errorPopup.classList.remove('show');
      errorPopup.remove();
    });

    setTimeout(() => {
      errorPopup.classList.add('show');
    }, 100);
  },
};
