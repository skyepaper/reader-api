const express = require("express");
const mongoose=require('mongoose');

const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app=express();
app.use(express.json());
app.use(cors());

server = require('http').createServer(app);

mongoose.connect('mongodb+srv://borismirevbm:2YacEBc3qgz4OiLJ@aquarium.6ud9dig.mongodb.net/edireader?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Connected to DB'))
  .catch(console.error);

  const User=require('./models/Record');

const io = new Server(server, {
    cors: {
      origin: "*",
      //"http://localhost:3000",
      methods: ["GET", "POST"],
    },
    'force new connection': true 
  });
  server.listen(3002);

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on('disconnect', function () {
      console.log(`User DisConnected: ${socket.id}`);
  });
    
    const RecordEventEmitter = Record.watch();
    RecordEventEmitter.on('change', change => {
      let text='record';
        socket.emit('message',{text});
    });

    
  });


app.get('/records', cors(), async(req,res)=>{  

    const records = await Record.find();
    res.json(records);
});

app.post('/record/new', async (req,res)=>{

    const record = new Record({
      id: req.body.id,
      type: req.body.type,
      sub_type: req.body.sub_type,
      segment: req.body.segment,
      fragment: req.body.fragment,
      description: req.body.description,
      code: req.body.code,
    });
    record.save();
    res.json(record);
});
