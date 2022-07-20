import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collection) => {
  const error = ref(null);
  const isPending = ref(false);

  const addDoc = async (doc) => {
    error.value = null;
    const isPending = true;

    try {
      const res = await projectFirestore.collection(collection).add(doc);
      const isPending = false;
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
      const isPending = false;
    }
  };

  return { error, addDoc, isPending };
};

export default useCollection;
