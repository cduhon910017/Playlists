import { projectAuth } from "@/firebase/config";
import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

const logout = async () => {
  error.value = null;
  const isPending = true;

  try {
    await projectAuth.signOut();
    const isPending = false;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
    const isPending = false;
  }
};

const useLogout = () => {
  return { logout, error, isPending };
};

export default useLogout;
