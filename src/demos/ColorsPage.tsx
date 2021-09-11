import React from 'react';
import { Canvas, Title, Heading, Story } from '@storybook/addon-docs';

export default function ColorsPage() {
  return (
    <>
      <Title>Colors 颜色</Title>
      <Heading>Palette 色板</Heading>
      <Canvas>
        <Story id="colors--palette" />
      </Canvas>
      <Heading>Extended/Visualization 延伸/可视化色彩库</Heading>
      <Canvas>
        <Story id="colors--extended" />
      </Canvas>
    </>
  );
}
