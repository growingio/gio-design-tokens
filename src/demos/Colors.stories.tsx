import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ColorsPanel from './ColorsPanel';
import ColorCard from './ColorCard';
import * as allTokens from '../../es/index';

import './ColorsPanel.less';
import './ColorCard.less';

const filterTokens = (prefix: string) => Object.keys(allTokens).filter((name: string) => name.startsWith(prefix));

const colorsKey = ['White', 'Gray', 'Black', 'Blue', 'Green', 'Yellow', 'Red'];
export const Palette = () => (
  <>
    {colorsKey.map((color) => (
      <ColorsPanel title={color}>
        {filterTokens(`ColorPalette${color}`).map((key) => (
          <ColorCard color={allTokens[key]} name={key.slice(12)} />
        ))}
      </ColorsPanel>
    ))}
  </>
);

export const Extended = () => (
  <ColorsPanel title="Visualization">
    {filterTokens('ColorExtended').map((key) => (
      <ColorCard color={allTokens[key]} name={key.slice(13)} />
    ))}
  </ColorsPanel>
);

export default {
  title: 'Colors',
  // component: DatePicker,
  // parameters: {
  //   docs: {
  //     page: Page,
  //   },
  // },
} as Meta;
