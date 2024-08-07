import Child from '@/components/Child';
import Child2 from '@/components/Child2';
import { useState } from 'react';

export default function StateLifting() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <Child show={show} handleClick={handleClick} />
      <Child2 show={show} />
    </>
  );
}
