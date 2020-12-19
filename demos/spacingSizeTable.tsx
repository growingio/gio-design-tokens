import React from 'react';
import TokenTable from './tokenTable';
import { ExampleType } from './interfaces';
import { spacingSizeExample } from './examples';

export default () => <TokenTable prefix="SizeSpacing" example={spacingSizeExample as ExampleType} />;
