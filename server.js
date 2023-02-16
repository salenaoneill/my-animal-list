const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const cloudinary = require("cloudinary").v2;
const cloudRoutes = require("./cloudinary/cloudRoutes");

// Configuration
cloudinary.config({
  cloud_name: "dxjmp1tuv",
  api_key: "825679494516999",
  api_secret: "kiR9vvpM4nSsqgCS96KSY9N2SLo",
});

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
// set up routes

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// multer
const multer = require("multer");

//using the storage option
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });


//upload.fields is middleware that will add an array named 'file' to req
//to the request such that req.files['file'][0] would reference 1 file


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);  

app.post("/upload", upload.fields([{ name: "file" }]), cloudRoutes.upload);

app.get("/", cloudRoutes.index); 
app.get("/", cloudRoutes.photoReview);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
