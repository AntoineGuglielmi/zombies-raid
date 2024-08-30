type IntersectionXProps = {
  className?: string
}

export default function IntersectionX({ className }: IntersectionXProps) {
  return (
    <svg
      width="255"
      height="255"
      viewBox="0 0 255 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_34)">
        <rect
          width="255"
          height="255"
          fill="white"
        />
        <rect
          width="85"
          height="85"
          fill="#CBCBCB"
        />
        <rect
          x="170"
          width="85"
          height="85"
          fill="#CBCBCB"
        />
        <rect
          y="170"
          width="85"
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
        <line
          x1="0.353553"
          y1="-0.353553"
          x2="85.3536"
          y2="84.6464"
          stroke="#B9B9B9"
        />
        <line
          x1="170.354"
          y1="169.646"
          x2="255.354"
          y2="254.646"
          stroke="#B9B9B9"
        />
        <line
          x1="85.3536"
          y1="170.354"
          x2="0.353555"
          y2="255.354"
          stroke="#B9B9B9"
        />
        <line
          x1="169.646"
          y1="84.6464"
          x2="254.646"
          y2="-0.353552"
          stroke="#B9B9B9"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_34">
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
