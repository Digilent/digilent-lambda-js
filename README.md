# Digilent Lambda JS
Digilent wrapper module for AWS Lambda

This module depends on, but does not include aws-sdk.  This was an intentional design decision to prevent multiple copies of AWS SDK when using multiple Digilent AWS wrappers in bundle form.

#### Use with Ionic
1. Install AWS SDK `npm install --save aws-sdk`
2. Install DigilentLambdaJS: `npm install --save @digilent/digilent-lambda-js`2. 
3. Import AWS SDK into app.component.ts `import 'aws-sdk';`
4. Import DigilentLambdaJS where needed with: `import {DigilentLambdaJs} from '@digilent/digilent-lambda-js';`

