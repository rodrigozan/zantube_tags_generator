import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Tooltip } from 'primereact/tooltip';

export default function ImageTooltip(props) {
  const { src, width, height, className, alt, tooltip } = props;
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current && tooltip) {
      imageRef.current.setAttribute('data-pr-tooltip', tooltip);
    }
  }, [tooltip]);

  return (
    <div className="relative flex items-center">
      {tooltip && <Tooltip target=".image-tooltip" content={tooltip} position="top" />}

      <Image
        ref={imageRef}
        src={src}
        width={width}
        height={height}
        className={`image-tooltip ${className || ''}`}
        alt={alt}
      />
    </div>
  );
}
