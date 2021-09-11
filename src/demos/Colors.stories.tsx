import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Toast from '@gio-design/components/es/components/toast';
import copy from 'copy-to-clipboard';
import ColorsPanel from './ColorsPanel';
import ColorCard from './ColorCard';
import ColorsPage from './ColorsPage';
import { dasherize } from './utils';
import * as allTokens from '../../es/index';

import '@gio-design/components/es/components/toast/style';
import './ColorsPanel.less';
import './ColorCard.less';

const filterTokens = (prefix: string) => Object.keys(allTokens).filter((name: string) => name.startsWith(prefix));
const onClick = (key: string) => {
  const name = `@${dasherize(key)}`;
  copy(name);
  action('Less variable:')(name);
  Toast.success(`Copied ${name} to clipboard.`, 2);
};
const colorsKey = ['White', 'Gray', 'Black', 'Blue', 'Green', 'Yellow', 'Red'];

export const Palette = () => (
  <>
    {colorsKey.map((color, i) => (
      <ColorsPanel key={`panel-${i}`} title={color}>
        {filterTokens(`ColorPalette${color}`).map((key, j) => (
          <ColorCard
            key={`panel-${i}-card-${j}`}
            color={allTokens[key]}
            name={key.slice(12)}
            onClick={() => {
              onClick(key);
            }}
          />
        ))}
      </ColorsPanel>
    ))}
  </>
);

export const Extended = () => (
  <ColorsPanel title="Visualization">
    {filterTokens('ColorExtended').map((key, i) => (
      <ColorCard
        key={`card-${i}`}
        color={allTokens[key]}
        name={key.slice(13)}
        onClick={() => {
          onClick(key);
        }}
      />
    ))}
  </ColorsPanel>
);

export default {
  title: 'Colors',
  parameters: {
    docs: {
      page: ColorsPage,
    },
  },
} as Meta;
