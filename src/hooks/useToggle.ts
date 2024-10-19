import { useState } from 'react';

const useToggle = (): [boolean, (boolean: boolean) => void] => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = (boolean: boolean) => setToggle(boolean);

  return [toggle, handleToggle];
};

export default useToggle;
