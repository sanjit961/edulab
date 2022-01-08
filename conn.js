const mongoose=require('mongoose');
const DB=process.env.DATABASE;
mongoose.connect(DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected with database successfully");
  })
  .catch((error) => {
    console.log(error);
  });