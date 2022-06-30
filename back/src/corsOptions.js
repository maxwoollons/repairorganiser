const allowedOrigins = ['http://localhost:3000', 'http://localhost:8000'];
const corsOptions = {

    origin: (origin, callback) => {

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);

        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

export default corsOptions;