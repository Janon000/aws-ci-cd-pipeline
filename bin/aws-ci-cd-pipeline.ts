#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCiCdPipelineStack } from '../lib/aws-ci-cd-pipeline-stack';

const app = new cdk.App();
new AwsCiCdPipelineStack(app, 'AwsCiCdPipelineStack', {
 env: {
  account: '246919700226',
  region: 'us-east-1'
 }
});

app.synth();