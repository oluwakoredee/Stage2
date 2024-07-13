import { useState } from "react";

function useDataControl(data) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  const handleIncrement = () => {
    if (endIndex < data.length) {
      setStartIndex(startIndex + 10);
      setEndIndex(endIndex + 10);
    }
  };

  const handleDecrement = () => {
    if (startIndex >= 10) {
      setStartIndex(startIndex - 10);
      setEndIndex(endIndex - 10);
    }
  };

  const slicedData = data.slice(startIndex, endIndex);

  return [slicedData, handleIncrement, handleDecrement];
}
export default useDataControl;
