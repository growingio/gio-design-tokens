import React from 'react';

interface ColorCardProps {
  color: string;
  name: string;
  onClick?: React.MouseEventHandler;
}

function ColorCard({ color, name, onClick }: ColorCardProps) {
  const prefixCls = 'demo-color-card';
  return (
    <div className={prefixCls} onClick={onClick}>
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
