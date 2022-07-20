import { projectAuth } from "@/firebase/config";
import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

const signup = async (email, password, displayName) => {
  error.value = null;
  const isPending = true;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete the signup");
    }

    await res.user.updateProfile({ displayName });
    error.value = null;
    const isPending = false;

    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    const isPending = false;
  }
};

const useSignup = () => {
  return { error, signup, isPending };
};

export default useSignup;
