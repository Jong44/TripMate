import React from "react";

const ArrowLeftIcon:React.FC<IconProps> = ({
    color = "currentColor",
    size = "24",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 12 24"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M1.843 11.289L7.5 5.632l1.414 1.414l-4.95 4.95l4.95 4.95l-1.414 1.414l-5.657-5.657a1 1 0 0 1 0-1.414"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
