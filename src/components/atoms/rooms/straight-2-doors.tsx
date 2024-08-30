type Straight2DoorsProps = {
  className?: string
}

export default function Straight2Doors({ className }: Straight2DoorsProps) {
  return (
    <svg
      width="255"
      height="255"
      viewBox="0 0 255 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1_71)">
        <rect
          width="255"
          height="255"
          fill="white"
        />
        <rect
          width="255"
          height="85"
          fill="#CBCBCB"
        />
        <rect
          y="170"
          width="255"
          height="85"
          fill="#CBCBCB"
        />
        <rect
          x="106"
          y="22"
          width="42"
          height="63"
          fill="#717171"
        />
        <rect
          x="106"
          y="170"
          width="42"
          height="63"
          fill="#717171"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_71">
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
