import { useRef } from "react";

export default function useRefWithInitializer(initializer) {
  const ref = useRef(null);
  if (ref.current == null) {
    ref.current = initializer();
  }
  return ref;
}
