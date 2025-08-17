import React from "react";

const events = [
  "📚 Study Help",
  "🩸 Blood Donation",
  "🎭 Cultural Event",
  "🎉 Festival",
  "📖 Mentorship",
  "🏫 School Visit",
  "👕 Clothes Donation",
  "🏥 Old Age Home"
];

const Wheel = () => {
  const numSegments = events.length;
  const radius = 200; // wheel size
  const angle = 360 / numSegments;

  return (
    <svg width={500} height={500} viewBox="0 0 500 500">
      <g transform="translate(250,250)">
        {events.map((event, i) => {
          const startAngle = i * angle;
          const endAngle = (i + 1) * angle;
          const largeArc = angle > 180 ? 1 : 0;

          const x1 = radius * Math.cos((Math.PI * startAngle) / 180);
          const y1 = radius * Math.sin((Math.PI * startAngle) / 180);
          const x2 = radius * Math.cos((Math.PI * endAngle) / 180);
          const y2 = radius * Math.sin((Math.PI * endAngle) / 180);

          return (
            <g key={i}>
              {/* Slice */}
              <path
                d={`M0,0 L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`}
                fill={`hsl(${i * (360 / numSegments)},80%,60%)`}
                stroke="white"
                strokeWidth="2"
              />
              {/* Text */}
              <text
                x={(radius / 2) * Math.cos(((startAngle + endAngle) / 2) * (Math.PI / 180))}
                y={(radius / 2) * Math.sin(((startAngle + endAngle) / 2) * (Math.PI / 180))}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="20"
                fontWeight="bold"
                fill="white"
                transform={`rotate(${(startAngle + endAngle) / 2},
                  ${(radius / 2) * Math.cos(((startAngle + endAngle) / 2) * (Math.PI / 180))},
                  ${(radius / 2) * Math.sin(((startAngle + endAngle) / 2) * (Math.PI / 180))})`}
              >
                {event}
              </text>
            </g>
          );
        })}
        {/* Center logo */}
        <circle r="60" fill="white" stroke="black" />
        <text textAnchor="middle" dominantBaseline="middle" fontSize="24" fontWeight="bold">
          AVANA
        </text>
      </g>
    </svg>
  );
};

export default Wheel;
