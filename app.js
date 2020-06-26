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

// ------- ROUTES ------------

// INDEX ROUTE
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

// NEW ROUTE
app.get('/blogs/new', (req, res) => {
  res.render('new');
})

// CREATE ROUTE
app.post('/blogs', (req, res) => {
  //create a post
  Blog.create(req.body.blog, (err, newBlog) => {
    if (err) {
      res.render('new');
    } else {
      // then redirect to index
      res.redirect('/blogs');
    }
  })
})

// SHOW ROUTE
app.get('/blogs/:id', (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      res.redirect('/blogs')
    } else {
      res.render('show', { blog: foundBlog })
    }
  })
})

// LISTENING TO PORT
app.listen(port, () => console.log(`server listening at https://localhost:${port}`));
