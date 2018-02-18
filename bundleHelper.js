import { DigilentLambdaJs } from './dist/digilent-lambda-js';
if (typeof window !== 'undefined') {
    window.DigilentLambdaJs = DigilentLambdaJs;
}
else {
    exports.DigilentLambdaJs = DigilentLambdaJs;
}
