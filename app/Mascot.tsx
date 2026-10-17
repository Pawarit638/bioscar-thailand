/*
  มาสคอต "น้องหยดเจล" — หยดเซรั่มไบโอนาโนเจล มีใบสมุนไพรงอกบนหัว
  การเคลื่อนไหวทั้งหมดอยู่ใน globals.css (หัวข้อ "มาสคอต")
*/
export default function Mascot({ className = "", wave = true }: { className?: string; wave?: boolean }) {
  return (
    <svg viewBox="0 0 200 230" role="img" aria-label="น้องหยดเจล มาสคอตของ Bioscar" className={className}>
      <defs>
        <linearGradient id="mascot-body" x1="0.2" x2="0.8" y1="0" y2="1">
          <stop offset="0" stopColor="#8fd8cf" />
          <stop offset="1" stopColor="#0f7c7f" />
        </linearGradient>
      </defs>

      {/* เงาบนพื้น */}
      <ellipse className="mascot-shadow" cx="100" cy="218" rx="46" ry="7" fill="#0e3b40" opacity="0.14" />

      <g className="mascot-bob">
        {/* ใบสมุนไพรบนหัว */}
        <g className="mascot-sprout">
          <path d="M100 34 C100 26 101 18 103 12" stroke="#4f8a4b" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M103 14 C110 2 126 0 134 6 C126 18 112 20 103 14Z" fill="#7fae6f" />
          <path d="M101 18 C92 8 78 8 72 14 C80 24 94 24 101 18Z" fill="#4f8a4b" />
        </g>

        {/* แขนซ้าย */}
        <path d="M44 150 C32 152 26 160 26 168" stroke="#0f7c7f" strokeWidth="9" strokeLinecap="round" fill="none" />
        {/* แขนขวา (โบกมือ) */}
        <g className={wave ? "mascot-wave" : undefined}>
          <path d="M156 146 C170 140 176 128 176 116" stroke="#0f7c7f" strokeWidth="9" strokeLinecap="round" fill="none" />
        </g>

        {/* ตัวหยดเจล */}
        <path
          d="M100 30 C100 30 40 104 40 150 C40 184 67 208 100 208 C133 208 160 184 160 150 C160 104 100 30 100 30Z"
          fill="url(#mascot-body)"
        />
        {/* ประกายเงา */}
        <path d="M66 128 C66 108 78 88 90 72" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="7" strokeLinecap="round" fill="none" />
        <circle cx="64" cy="146" r="4" fill="#ffffff" opacity="0.5" />

        {/* ตา */}
        <g className="mascot-blink">
          <ellipse cx="82" cy="146" rx="7" ry="9" fill="#0e3b40" />
          <ellipse cx="118" cy="146" rx="7" ry="9" fill="#0e3b40" />
          <circle cx="84.5" cy="142.5" r="2.4" fill="#ffffff" />
          <circle cx="120.5" cy="142.5" r="2.4" fill="#ffffff" />
        </g>

        {/* แก้มแดง */}
        <ellipse cx="68" cy="164" rx="9" ry="5.5" fill="#f3b48a" opacity="0.85" />
        <ellipse cx="132" cy="164" rx="9" ry="5.5" fill="#f3b48a" opacity="0.85" />

        {/* ยิ้ม */}
        <path d="M90 166 C94 174 106 174 110 166" stroke="#0e3b40" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </g>

      {/* ประกายวิบวับ */}
      <g className="mascot-sparkle" fill="#f3b48a">
        <path d="M170 60 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3Z" />
      </g>
      <g className="mascot-sparkle mascot-sparkle-2" fill="#8fd8cf">
        <path d="M28 92 l2.2 6 6 2.2 -6 2.2 -2.2 6 -2.2 -6 -6 -2.2 6 -2.2Z" />
      </g>
    </svg>
  );
}
