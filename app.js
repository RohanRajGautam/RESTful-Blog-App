const bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  express = require('express'),
  app = express();
const port = 3000;

// APP CONFIG
mongoose.connect('mongodb://localhost/blog_app', { useNewUrlParser: true, useUnifiedTopology: true });
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//  MONGOOSE/MODEL CONFIG
const blogSchema = mongoose.Schema({
  title: String,
  image: { type: String, default: 'defaultimg.jpg' },
  body: String,
  created: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

// ROUTES

app.get('/', (req, res) => {
  res.redirect('/blogs');
})

app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.log("SOMETHING WENT WRONG!!!");
    } else {
      res.render('index', { blogs: blogs });
    }
  })
})

app.listen(port, () => console.log(`server listening at https://localhost:${port}`));
