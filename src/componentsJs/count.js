import { ref } from "vue";

export function count(val) {
  const idx = ref(val);

  const addState = () => {
    idx.value++;
  };
  const miState = () => {
    idx.value= idx.value > 0 ? idx.value -1 : 0;
  };

  return {
    idx,
    addState,
    miState
  };
}