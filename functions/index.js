const { onRequest } = require('firebase-functions/v2/https');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

initializeApp();
const db = getFirestore();

async function createNewDoc(blog) {
  db.collection('blog').doc(blog).set({ likes: 0 });
}

exports.getBlog = onRequest(async (req, res) => {
  const blog = req.params[0];
  db.collection('blog')
    .doc(blog)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        createNewDoc(blog);
        return res.status(200).json({ success: true, likes: doc.data().likes });
      }
      return res.status(200).json({ success: true, likes: doc.data().likes });
    })
    .catch((error) => {
      return res.status(500).json({
        message: 'Error in getBlog function',
        error: error.message,
      });
    });
});

exports.likeBlog = onRequest(async (req, res) => {
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
