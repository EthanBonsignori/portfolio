const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

// Init Express App
const app = express();

admin.initializeApp();

exports.blog = functions.https.onRequest(app);

const db = admin.firestore();

const blogCol = db.collection('blog');
const increment = admin.firestore.FieldValue.increment(1);
const decrement = admin.firestore.FieldValue.increment(-1);

function createNewDoc(blog) {
  db.collection('blog').doc(blog).set({ likes: 0 });
}

app.get('/:blog', (req, res) => {
  const { blog } = req.params;
  db.collection('blog').doc(blog).get().then(doc => {
    if (doc.exists) {
      return res.status(200).json({ likes: doc.likes });
    }
    createNewDoc(blog);
    return res.status(200).json({ likes: 0 });
  })
    .catch(error => res.status(500).json({ message: 'Error in GET /:blog', error }));
});

app.put('/:blog', (req, res) => {
  const { blog } = req.params;
  db.collection('blog').doc(blog).get().then(doc => {
    if (doc.exists) {
      blogCol.doc(blog).update({ likes: increment });
      return res.status(200).json({ success: true });
    }
    createNewDoc(blog);
    return res.status(200).json({ success: true });
  })
    .catch(error => res.status(500).json({ message: 'Error in PUT /:blog', error }));
});

app.put('/:blog/unlike', (req, res) => {
  const { blog } = req.params;
  db.collection('blog').doc(blog).get().then(doc => {
    if (doc.exists) {
      blogCol.doc(blog).update({ likes: decrement });
      return res.status(200).json({ success: true });
    }
    return res.status(200).json({ success: true });
  })
    .catch(error => res.status(500).json({ message: 'Error in PUT /:blog/unlike', error }));
});
