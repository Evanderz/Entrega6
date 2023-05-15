import mongoose from 'mongoose';

const URI = 'mongodb+srv://Evanderz:Yanilu_22@cluster0.zbrgysq.mongodb.net/ecommerce?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(() => console.log('DB is connected'))
    .catch(error => console.error(error));