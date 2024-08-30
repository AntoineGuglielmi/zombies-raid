type TurnDoorLeftProps = {
  className?: string
}

export default function TurnDoorLeft({ className }: TurnDoorLeftProps) {
  return (
    <svg
      width="255"
      height="255"
      viewBox="0 0 255 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_20)">
        <rect
          width="255"
          height="255"
          fill="white"
        />
        <rect
          width="85"
          height="255"
          fill="#CBCBCB"
        />
        <rect
          x="85"
          width="170"
          height="85"
          fill="#CBCBCB"
        />
        <rect
          x="170"
          y="170"
          width="85"
          height="85"
          fill="#CBCBCB"
        />
        <rect
          x="22"
          y="148"
          width="42"
          height="63"
          transform="rotate(-90 22 148)"
          fill="#717171"
        />
        <line
          x1="0.353553"
          y1="-0.353553"
          x2="85.3536"
          y2="84.6464"
          stroke="#B9B9B9"
        />
        <line
          x1="171.354"
          y1="169.646"
          x2="256.354"
          y2="254.646"
          stroke="#B9B9B9"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_20">
          <rect
            width="255"
            height="255"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
