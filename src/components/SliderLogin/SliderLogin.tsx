import React, { useState } from 'react';
interface Props {
    handleSliderProp: (e: boolean) => void
    classNameValue?: string
 }
const SliderLogin = (props:Props | any) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
    const { handleSliderProp,classNameValue } = props;
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(+event.target.value);
  };

  const handleSliderRelease = () => {
    if (sliderValue >= 80) {
        setIsVerified(true);
        handleSliderProp(true);
    } else {
      setIsVerified(false);
    }
  };

  return (
    <div>
      {!isVerified ? (
        <div>
          <input
            className={ classNameValue}
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={handleSliderChange}
            onMouseUp={handleSliderRelease}
            onTouchEnd={handleSliderRelease}
          />
          <p className='text-indigo-600'>请滑动滑块进行验证</p>
        </div>
      ) : (
        <p className='text-green-600 mt-4'>滑动验证成功！</p>
      )}
    </div>
  );
};

export default SliderLogin;
