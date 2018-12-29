import { h } from 'hyperapp';

const BgColorBlock = () => ({ bgColor }) => {
  const style = { background: bgColor };

  return (
    <li>
      background color: <span style={style}>{bgColor}</span>
    </li>
  );
};

const AColorBlock = () => ({ aColor }) => {
  const style = { color: aColor };

  return (
    <li>
      highlight color: <span style={style}>{aColor}</span>
    </li>
  );
};

export default () => ({ bgs }, { setPalette, upload }) => (
  <div>
    <h2>zifi<span>site</span></h2>
    This site you are visiting right now.
    <h3>
      cool things
    </h3>
    <ol>
      <li>
        You can change the background:
        <select onchange={e => setPalette(bgs[e.srcElement.selectedIndex])}>
          {bgs.map(img => (
            <option>{img}</option>
          ))}
        </select>
      </li>
      <li>
        You can actually change the background:
        <ul>
          <li>be careful with big files</li>
          <li>files are not saved anywhere</li>
        </ul>
        <input type='file' accept='image/*' onchange={e => upload(e)} />
      </li>
      <li>
        Site (or your device tbh) calculates colors from the background:
        <ul>
          <BgColorBlock />
          <AColorBlock />
        </ul>
      </li>
    </ol>
    <h3>
      toolkit
    </h3>
    <ul>
      <li>hyperapp</li>
      <li>eslint</li>
      <li>parcel</li>
      <li>node-vibrant</li>
    </ul>
  </div>
);
