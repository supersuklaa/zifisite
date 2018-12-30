import * as Vibrant from 'node-vibrant';

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
        .map(i => Math.round(i))
        .concat([opacity])
        .join(', ');

      bgColor = `rgba(${rgba})`;
    }

    if (palette.LightVibrant) {
      aColor = palette.LightVibrant.getHex();
    } else if (palette.LightMuted) {
      aColor = palette.LightMuted.getHex();
    }

    document.body.style.backgroundImage = `url('${bg}')`;
    document.documentElement.style.setProperty('--bg-color', bgColor);
    document.documentElement.style.setProperty('--a-color', aColor);

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
