import * as Vibrant from 'node-vibrant';

const css = document.documentElement.style;

export default {
  setBg: bg => ({ bg }),
  setBgColor: bgColor => ({ bgColor }),
  setAColor: aColor => ({ aColor }),

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

    css.setProperty('--bg-img', `url('${bg}')`);
    css.setProperty('--bg-color', bgColor);
    css.setProperty('--a-color', aColor);

    actions.setAColor(aColor);
    actions.setBgColor(bgColor);
  }),

  upload: e => (state, actions) => {
    if (e.srcElement.files) {
      const src = URL.createObjectURL(e.srcElement.files[0]);
      actions.setPalette(src);
    }
  },
};
