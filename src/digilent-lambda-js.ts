declare var AWS: any;

export class DigilentLambdaJs {

    public lambda: any;

    constructor() {        
    }

    /********************************************************************************
     * Initialize the Lambda object configuration options.
     * @param region The AWS region.
     ********************************************************************************/
    public initialize(region: string = 'us-west-2') {
        //Create internal Lambda Object
        this.lambda = new AWS.Lambda({
            region: region,
            apiVersion: '2015-03-31'
        });
    }

    /********************************************************************************
     * Invoke the specified Lambda function.
     * @param functionName The name of the Lambda function to invoke
     * @param payload A string data payload to be delivered to the Lambda function.  This string will be Base-64 encoded before being sent
     * @return The de-serialized data returnd from the Lambda function.
     ********************************************************************************/
    public invoke(functionName: string, payload: string = ''): Promise<any> {
        return new Promise((resolve, reject) => {

            let params = {
                //ClientContext: "MyApp",
                FunctionName: functionName,
                //InvocationType: "Event",
                //LogType: "Tail",
                Payload: payload,
                //Qualifier: "1"
            };
            this.lambda.invoke(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
