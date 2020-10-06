const router = require('express').Router();
const dateFormat = require('dateformat');
const db = require('./firestore');

const DATE_FORMAT = 'mmm d, yyyy h:MM TT Z';

// GET all Blogs
router.get('/blog', async (req, res) => {
  try {
    const blogs = [];
    const blogsRef = db.collection('blogs');
    const snapshot = await blogsRef.get();
    snapshot.forEach(doc => {
      blogs.push({
        id: doc.id,
        title: doc.data().title,
        blog: doc.data().blog,
        created: doc.data().created,
        updated: doc.data().updated,
      });
    });
    return res.status(200).json({
      message: 'Success! Retrieved all blogs.',
      data: blogs,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error occured while attempting to GET all blogs.',
      error: err,
    });
  }
});

// POST Blog
router.post('/blog', async (req, res) => {
  const { title, blog } = req.body;
  try {
    await db.collection('blogs').doc()
      .create({
        title,
        blog,
        created: dateFormat(Date.now(), DATE_FORMAT),
        updated: dateFormat(Date.now(), DATE_FORMAT),
      });
    return res.status(200).json({
      message: 'Success! New blog added to collection.',
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error occured while attempting to POST blog.',
      error: err,
    });
  }
});

// PUT Blog by ID
router.put('/blog', async (req, res) => {
  const { id, title, blog } = req.body;
  try {
    const doc = db.collection('blogs').doc(id);
    await doc.update({
      ...doc,
      title,
      blog,
      updated: dateFormat(Date.now(), DATE_FORMAT),
    });
    return res.status(200).json({
      message: `Success! Updated blog with ID: ${id}`,
    });
  } catch (err) {
    return res.status(500).json({
      message: `Error occured while attempting to PUT blog with ID: ${id}`,
      error: err,
    });
  }
});

// DELETE Blog
router.delete('/blog', async (req, res) => {
  const { id } = req.body;
  try {
    const doc = db.collection('blogs').doc(id);
    await doc.delete();
    return res.status(200).json({
      message: `Success! Deleted blog with ID: ${id}`,
    });
  } catch (err) {
    return res.status(500).json({
      message: `Error occured while attempting to DELETE blog with ID: ${id}`,
      error: err,
    });
  }
});

module.exports = router;
