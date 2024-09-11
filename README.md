## Kafka and Node app - IN PROGRESS NOT FINISHED

Overview - Show two channels via Kafka and Web Sockets for updating two consumers

### TODO - Replace web sockets with Pusher

## HOW TO USE

Step one - clone repo
```bash
git clone https://github.com/JackDust24/kafka-node.git

```

Step two - Remove "example." from docker compose file and add your IP address where specified.

Step three - Get Kafka instance up and running

```bash
cd backend
npm i
npm run dev
```

Step four - In another terminal, run the producer

```bash
cd backend
node src/producer.js
// See step 6 to see what we do here
```

Step five - Run the frontend 
```bash
cd frontend
npm i
npm run dev
```

Step six - In the producer terminal (step 4) enter values for the consumers
```bash
Enter Prompt --> a 52 0
a 66 1
b 23 0
b 35 1
...
```
The first entry is the point, the second is the value and the third is for consumer 1 or 2.

## Screenshots
![Home Page](/assets/home.png)