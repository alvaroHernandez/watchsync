const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.GCLOUD_CREDENTIALS))
});

const db = admin.firestore();
export default db
