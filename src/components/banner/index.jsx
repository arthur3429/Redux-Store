import React, { useState } from 'react';
import * as Styles from "./styles";


const Banner = () => {
    const [isActive, setIsActive] = useState(false);

    React.useEffect(() => {
      setIsActive(true);
    }, []);
  

  return (
    <Styles.Banner>
        <div className={isActive ? 'image-container loaded' : 'image-container'}>
            <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL +"/imagens.png"} alt="Moça na pose" />
            </div>
        </div>
        <div className="banner-wrapper">
            <div className="space-holder"></div>
            <div className="text-container">
                <h1 className={isActive ? 'loaded' : ''}>Descubra <br /> o seu estilo</h1>
                <h2 className={isActive ? 'loaded' : ''}>Conheça a coleção <strong>REDUX</strong> 2023</h2>
            </div>
            <div className="redux-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><g clipPath="url(#svgIDa)"><path fill="currentColor" d="M16.63 16.563c.885-.092 1.557-.863 1.527-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062c-.947.03-1.68.832-1.65 1.788c.032.463.215.863.49 1.14c-1.039 2.067-2.627 3.577-5.01 4.841c-1.618.864-3.298 1.172-4.977.956c-1.375-.185-2.444-.802-3.116-1.819c-.977-1.51-1.068-3.145-.244-4.779c.58-1.171 1.497-2.035 2.077-2.466a16.987 16.987 0 0 1-.397-1.573C-.871 14.436-.412 18.814.93 20.88c1.008 1.542 3.054 2.498 5.315 2.498a7.45 7.45 0 0 0 1.832-.216c3.91-.77 6.872-3.114 8.552-6.598Zm5.375-3.823c-2.321-2.744-5.742-4.255-9.651-4.255h-.489a1.677 1.677 0 0 0-1.496-.925h-.062c-.946.031-1.68.833-1.649 1.789c.03.925.794 1.664 1.71 1.664h.062a1.721 1.721 0 0 0 1.496-1.048h.55c2.321 0 4.52.678 6.505 2.004c1.527 1.018 2.627 2.343 3.237 3.947c.52 1.294.49 2.558-.06 3.638c-.856 1.634-2.291 2.528-4.185 2.528c-1.221 0-2.382-.37-2.993-.648a18.07 18.07 0 0 1-1.374 1.11c1.313.617 2.657.956 3.94.956c2.932 0 5.1-1.634 5.925-3.268c.885-1.788.824-4.871-1.466-7.492ZM6.49 17.087c.03.925.794 1.665 1.71 1.665h.061c.947-.03 1.68-.832 1.65-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062a.53.53 0 0 0-.214.03c-1.252-2.096-1.771-4.377-1.588-6.844c.122-1.85.733-3.453 1.802-4.779c.886-1.14 2.596-1.695 3.757-1.726c3.237-.062 4.611 4.008 4.703 5.642c.397.092 1.069.308 1.527.462C17.759 3.09 14.706.5 11.773.5C9.025.5 6.49 2.504 5.482 5.464c-1.405 3.946-.489 7.738 1.222 10.729c-.153.216-.245.555-.214.894Z"/></g><defs><clipPath id="svgIDa"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
            </div>
        </div>

    </Styles.Banner>
  );
};

export default Banner;
