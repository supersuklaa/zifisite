import * as Vibrant from 'node-vibrant';

const css = document.documentElement.style;

export default {
  setBg: (bg) => {
    css.setProperty('--bg-img', `url('${bg}')`);
    return { bg };
  },

  setBgColor: (bgColor) => {
    css.setProperty('--bg-color', bgColor);
    return { bgColor };
  },

  setAColor: (aColor) => {
    css.setProperty('--a-color', aColor);
    return { aColor };
  },

  setPalette: bg => (state, actions) => Vibrant.from(bg).getPalette((err, palette) => {
    if (err) {
      console.log('wooops 😅');
      return;
    }

    const opacity = '.75';

    let bgColor = `rgba(0, 0, 0, ${opacity})`;
    let aColor = '#aaa';

    if (palette.DarkVibrant) {
      const rgba = palette.DarkVibrant
        .getRgb()
        .concat([opacity])
        .join(', ');

      bgColor = `rgba(${rgba})`;
    }

    if (palette.LightVibrant) {
      aColor = palette.LightVibrant.getHex();
    }

    actions.setAColor(aColor);
    actions.setBgColor(bgColor);
  }),
};
