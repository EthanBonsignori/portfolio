const { onRequest } = require('firebase-functions/v2/https');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp();
const db = getFirestore();

async function createNewDoc(blog) {
  db.collection('blog').doc(blog).set({ likes: 0, comments: [] });
}

const cors = [
  'https://ethanbon.com',
  'https://www.ethanbon.com',
  'http://ethanbon.com',
  'http://www.ethanbon.com',
  'https://ethanbo.co',
  'https://www.ethanbo.co',
  'http://ethanbo.co',
  'http://www.ethanbo.co',
];

const filterComments = (comments) => {
  return comments.filter((comment) => {
    if (comment?.email) {
      // eslint-disable-next-line no-param-reassign
      delete comment.email;
    }
    return !comment.deleted && comment.approved;
  });
};

exports.getBlogs = onRequest({ cors }, async (req, res) => {
  db.collection('blog')
    .get()
    .then((snapshot) => {
      const blogs = [];
      snapshot.forEach((doc) => {
        blogs.push({
          id: doc.id,
          likes: doc.data().likes,
          comments: filterComments(doc.data().comments),
        });
      });
      return res.status(200).json({ success: true, blogs });
    })
    .catch((error) => {
      return res.status(500).json({
        message: 'Error in getBlogs function',
        error: error.message,
      });
    });
});

exports.getBlog = onRequest({ cors }, async (req, res) => {
  const blog = req.params[0];
  db.collection('blog')
    .doc(blog)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        createNewDoc(blog);
        return res.status(200).json({
          success: true,
          likes: doc.data().likes,
          comments: filterComments(doc.data().comments),
        });
      }
      return res.status(200).json({
        success: true,
        likes: doc.data().likes,
        comments: filterComments(doc.data().comments),
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: 'Error in getBlog function',
        error: error.message,
      });
    });
});

exports.likeBlog = onRequest({ cors }, async (req, res) => {
  const blog = req.params[0];
  db.collection('blog')
    .doc(blog)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        createNewDoc(blog);
        return res
          .status(200)
          .json({ success: true, likes: doc.data().likes + 1 });
      }
      doc.ref.update({ likes: doc.data().likes + 1 });
      return res.status(200).json({ success: true, likes: doc.data().likes });
    })
    .catch((error) => {
      return res.status(500).json({
        message: 'Error in likeBlog function',
        error: error.message,
      });
    });
});

exports.commentBlog = onRequest({ cors }, async (req, res) => {
  const blog = req.params[0];
  const { comment } = req.body;
  db.collection('blog')
    .doc(blog)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        createNewDoc(blog);
        return res.status(200).json({ success: true, blog: doc.data() });
      }
      doc.ref.update({
        comments: [
          ...doc.data()?.comments,
          {
            ...comment,
            approved: false,
            deleted: false,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
          },
        ],
      });
      return res.status(200).json({ success: true, likes: doc.data().likes });
    })
    .catch((error) => {
      return res.status(500).json({
        message: 'Error in commentBlog function',
        error: error.message,
      });
    });
});
