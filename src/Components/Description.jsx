import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Description = () => {
    const [ isExapand, setIsExpand] = useState(false)
  return (
    <>
      <p className={`desc-text ${(isExapand)?'':'hideText'}`}>
        Maitreya, the future Buddha to be, resides in the Tushita heaven as a
        bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the
        eighth Buddha, a successor of the seven historical Buddhas
        (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha will
        be born in Ketumati. in present-day Varanasi, Uttar Pradesh. As a
        bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets,
        necklaces, and an amulet. The
      </p>

      <button className="read-btn" onClick={() => setIsExpand(prev => !prev)}>
        <FaArrowRightLong />
        {isExapand?'READ LESS': 'READ MORE'}
      </button>
    </>
  );
};

export default Description;
