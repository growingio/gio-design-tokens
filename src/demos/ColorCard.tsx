import React from 'react';

interface ColorCardProps {
  color: string;
  name: string;
}

function ColorCard({ color, name }: ColorCardProps) {
  const prefixCls = 'demo-color-card';
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}__header`}>{name}</div>
      <div className={`${prefixCls}__body`}>
        <div className={`${prefixCls}__white`} />
        <div className={`${prefixCls}__black`} />
        <div className={`${prefixCls}__circle`} style={{ backgroundColor: color }} />
      </div>
    </div>
  );
}

export default ColorCard;
