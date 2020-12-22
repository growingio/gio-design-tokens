import React from 'react';
import TokenTable from './tokenTable';
import { ExampleType } from './interfaces';
import { textColorExample } from './examples';

export default () => <TokenTable prefix="ColorText" example={textColorExample as ExampleType} />;
