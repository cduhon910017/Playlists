import { projectFirestore } from "@/firebase/config";
import { ref, watchEffect } from "vue";

const getCollection = (collection, query) => {
  const documents = ref(null);
  const error = ref(null);

  // register the firestore collection reference
  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  if (query) {
    collectionRef = collectionRef.where(...query);
  }

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // must wait for the server to create the timestamp and send it back
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      // update values
      documents.value = null;
      error.value = "could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    // unsub from prev collection when watch is stopped (component unmounted)
    onInvalidate(() => {
      unsub();
    });
  });

  return { documents, error };
};

export default getCollection;
