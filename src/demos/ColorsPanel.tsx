import React from 'react';

interface ColorsPanelProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

function ColorsPanel({ title, children }: ColorsPanelProps) {
  const prefixCls = 'demo-colors-panel';
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}__header`}>{title}</div>
      <div className={`${prefixCls}__divider`} />
      <div className={`${prefixCls}__body`}>{children}</div>
    </div>
  );
}

export default ColorsPanel;
