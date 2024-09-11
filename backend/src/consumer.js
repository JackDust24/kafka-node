import kafkaClient from './service/kafkaClient.js';

const consumerRun = async (groupId, topics, wss) => {
  console.log('---------Consumer Run----------', topics);
  const consumer = kafkaClient.consumer({ groupId: groupId });

  await consumer.connect();
  console.log('---------Consumer Run----------1');

  await consumer.subscribe({ topic: topics });
  console.log('---------Consumer Run----------2', topics);

  const handleMessage = async ({ topic, partition, message }) => {
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(message.value.toString());
      }
    });

    console.log(
      `Topic - ${topic}, Partition - ${partition}, Message - ${message.value.toString()}`
    );
  };

  try {
    await consumer.run({
      eachMessage: handleMessage,
    });
  } catch (error) {
    console.error(error);
  }

  // await consumer.run({
  //   eachMessage: async ({ topic, partition, message }) => {
  //     console.log(
  //       ` Topic - ${topic}, Partition - ${partition}, , Key - ${message.key.toString()}, Message - ${message.value.toString()}
  //       }`
  //     );
  //   },
  // });
};

export default consumerRun;
