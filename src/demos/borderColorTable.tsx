import React from 'react';
import TokenTable from './tokenTable';
import { ExampleType } from './interfaces';
import { borderColorExample } from './examples';

export default () => <TokenTable prefix="ColorBorder" example={borderColorExample as ExampleType} />;
