import { Kafka, logLevel } from 'kafkajs';
import ip from 'ip';

const HOST = process.env.HOST_IP || ip.address();

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [`${HOST}:9092`],
  logLevel: logLevel.ERROR,
});

export default kafka;
