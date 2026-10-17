import Mascot from "./Mascot";

/*
  ข้อมูลติดต่อ — แก้ตรงนี้ที่เดียว แล้วปุ่มทุกปุ่มในหน้าจะเปลี่ยนตาม
  ⚠️ LINE_ID และ HOURS ยังเป็นข้อความตัวอย่าง กรุณาเปลี่ยนเป็นของจริง
*/
const LINE_ID = "@bioscar";
const HOURS = "ทุกวัน 09:00 – 20:00 น.";
const TIKTOK_URL = "https://www.tiktok.com/@bioscar_shop";
const PRICE = 190;

const LINE_URL = `https://line.me/R/ti/p/${LINE_ID}`;

const features = [
  {
    title: "เทคโนโลยีไบโอนาโนเจล",
    text: "เนื้อเจลอนุภาคเล็กระดับนาโน ซึมลึกสู่ผิวได้ไว ไม่เหนอะหนะ ช่วยให้สารบำรุงทำงานตรงจุด",
    icon: "nano",
  },
  {
    title: "สมุนไพร 7 ชนิด จากจังหวัดน่าน",
    text: "คัดสรรสารสกัดจากธรรมชาติของเมืองน่าน แล้วนำมาพัฒนาด้วยกระบวนการแบบสมัยใหม่",
    icon: "leaf",
  },
  {
    title: "ทาได้ทั้งผิวหน้าและผิวกาย",
    text: "ขวดเดียวใช้ได้ทั้งรอยบนใบหน้า แขน ขา และลำตัว พกง่าย ใช้สะดวกทุกวัน",
    icon: "body",
  },
] as const;

const concerns = ["รอยแผลเป็น", "รอยดำ", "รอยแดง"];

const howTo = [
  "ล้างและเช็ดผิวบริเวณที่ต้องการให้แห้ง",
  "หยดเซรั่มเล็กน้อย ทาบาง ๆ ให้ทั่วรอย",
  "นวดวนเบา ๆ จนซึมหมด ใช้เช้า–เย็นอย่างสม่ำเสมอ",
];

const faqs = [
  {
    q: "ใช้กับแผลสดได้ไหม?",
    a: "แนะนำให้ใช้เมื่อแผลปิดสนิทและแห้งดีแล้ว ไม่ควรทาบนแผลเปิดหรือแผลที่ยังมีเลือดหรือน้ำเหลือง",
  },
  {
    q: "ต้องใช้นานแค่ไหนถึงจะเห็นความเปลี่ยนแปลง?",
    a: "ขึ้นอยู่กับลักษณะรอยและสภาพผิวของแต่ละคน แนะนำให้ทาสม่ำเสมอทุกเช้า–เย็น และทักไลน์มาปรึกษาเรื่องรอยของคุณได้เลย",
  },
  {
    q: "ผิวแพ้ง่ายใช้ได้ไหม?",
    a: "แนะนำให้ทดสอบบริเวณท้องแขนก่อน 24 ชั่วโมง หากมีอาการระคายเคืองให้หยุดใช้และปรึกษาแพทย์",
  },
  {
    q: "สั่งซื้ออย่างไร?",
    a: "กดปุ่ม \"ทักไลน์เลย\" แจ้งจำนวนที่ต้องการ แอดมินจะช่วยสรุปยอดและจัดส่งให้ถึงบ้าน",
  },
];

function LineIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2.5C6.2 2.5 1.5 6.3 1.5 11c0 4.2 3.7 7.7 8.8 8.4.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6 1.5-1.7 2.3-3.4 2.3-5.4 0-4.7-4.7-8.5-10.5-8.5Zm-4.6 11.3H5.3c-.3 0-.6-.3-.6-.6V9c0-.3.3-.6.6-.6s.6.3.6.6v3.6h1.5c.3 0 .6.3.6.6s-.3.6-.6.6Zm2.2-.6c0 .3-.3.6-.6.6s-.6-.3-.6-.6V9c0-.3.3-.6.6-.6s.6.3.6.6v4.2Zm5 0c0 .3-.2.5-.4.6h-.2c-.2 0-.4-.1-.5-.2l-2.1-2.9v2.6c0 .3-.3.6-.6.6s-.6-.3-.6-.6V9c0-.3.2-.5.4-.6h.2c.2 0 .4.1.5.3l2.1 2.9V9c0-.3.3-.6.6-.6s.6.3.6.6v4.2Zm3.4-2.7c.3 0 .6.3.6.6s-.3.6-.6.6h-1.5v.9H18c.3 0 .6.3.6.6s-.3.6-.6.6h-2.1c-.3 0-.6-.3-.6-.6V9c0-.3.3-.6.6-.6H18c.3 0 .6.3.6.6s-.3.6-.6.6h-1.5v.9H18Z" />
    </svg>
  );
}

function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.1a6.3 6.3 0 1 0 5.4 6.3V8.6a8 8 0 0 0 4.4 1.4V6.6a4.5 4.5 0 0 1-4.4-4.6Z" />
    </svg>
  );
}

function FeatureIcon({ name }: { name: (typeof features)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 48 48",
    className: "h-8 w-8",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "nano") {
    return (
      <svg {...common}>
        <circle cx="24" cy="24" r="5" />
        <circle cx="11" cy="14" r="3" />
        <circle cx="37" cy="13" r="3" />
        <circle cx="12" cy="36" r="3" />
        <circle cx="36" cy="35" r="3" />
        <path d="M14 15.5l6 5M34 15l-6 5.5M15 34.5l5.5-6.5M33.5 33.5L28 28" />
      </svg>
    );
  }
  if (name === "leaf") {
    return (
      <svg {...common}>
        <path d="M10 38C10 20 22 9 39 9c0 18-11 29-29 29Z" />
        <path d="M10 38L28 20" />
        <path d="M19 29h7M23 25v-6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="24" cy="9.5" r="4.5" />
      <path d="M24 15v13M15 20l9 3 9-3M18 42l6-14 6 14" />
    </svg>
  );
}

function SerumArt() {
  return (
    <svg viewBox="0 0 360 400" role="img" aria-label="ภาพประกอบขวดเซรั่ม Bioscar" className="h-auto w-full">
      <defs>
        <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dff1ee" />
        </linearGradient>
        <linearGradient id="gel" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#7cc9c0" />
          <stop offset="1" stopColor="#0f7c7f" />
        </linearGradient>
        <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fdf0e6" />
          <stop offset="1" stopColor="#fdf0e6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="180" cy="215" r="170" fill="url(#halo)" />
      <circle cx="180" cy="215" r="128" fill="none" stroke="#bfe2dc" strokeDasharray="2 10" strokeWidth="3" strokeLinecap="round" />

      {/* ใบไม้ */}
      <path d="M62 300c0-58 40-96 98-96 0 58-40 96-98 96Z" fill="#4f8a4b" opacity="0.9" />
      <path d="M62 300l70-70" stroke="#e8f2e3" strokeWidth="3" strokeLinecap="round" />
      <path d="M300 286c0-48-33-80-82-80 0 48 33 80 82 80Z" fill="#7fae6f" opacity="0.85" />
      <path d="M300 286l-58-58" stroke="#e8f2e3" strokeWidth="3" strokeLinecap="round" />

      {/* หลอดหยด */}
      <rect x="160" y="40" width="40" height="44" rx="14" fill="#0a5a5d" />
      <rect x="150" y="80" width="60" height="26" rx="6" fill="#0e3b40" />

      {/* ขวด */}
      <rect x="120" y="104" width="120" height="220" rx="34" fill="url(#glass)" stroke="#9fd0c9" strokeWidth="3" />
      <rect x="132" y="190" width="96" height="122" rx="24" fill="url(#gel)" opacity="0.92" />
      <rect x="136" y="128" width="88" height="64" rx="12" fill="#ffffff" stroke="#d9e6e3" strokeWidth="2" />
      <text x="180" y="158" textAnchor="middle" fontSize="20" fontWeight="700" fill="#0e3b40" fontFamily="inherit">
        Bioscar
      </text>
      <text x="180" y="178" textAnchor="middle" fontSize="10" letterSpacing="2" fill="#0f7c7f" fontFamily="inherit">
        BIO NANO GEL
      </text>
      <path d="M142 214c10-6 20-6 30 0" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* อนุภาคนาโน */}
      {[
        [96, 138, 7],
        [270, 120, 9],
        [286, 186, 5],
        [78, 214, 5],
        [262, 340, 6],
        [104, 354, 8],
      ].map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#0f7c7f" opacity="0.18" stroke="#0f7c7f" strokeOpacity="0.5" />
      ))}
    </svg>
  );
}

function LineButton({ label = "ทักไลน์เลย", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-line px-7 py-3 text-lead font-semibold text-white shadow-lg shadow-line/25 transition hover:bg-line-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-line ${className}`}
    >
      <LineIcon className="h-6 w-6" />
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* แถบบน */}
      <header className="sticky top-0 z-30 border-b border-border/70 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-bold text-ink">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M12 3v18M3 12h18" />
              </svg>
            </span>
            <span className="text-h3 leading-none">
              Bioscar <span className="font-normal text-muted">Thailand</span>
            </span>
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-line px-4 py-2 text-small font-semibold text-white transition hover:bg-line-dark"
          >
            <LineIcon className="h-4 w-4" />
            ทักไลน์
          </a>
        </div>
      </header>

      <main id="top">
        {/* ส่วนหัว */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-soft blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-herb-soft blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-2 md:pb-24 md:pt-16">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-small font-medium text-brand">
                <span className="h-2 w-2 rounded-full bg-herb" />
                สมุนไพรไทย × นวัตกรรมไบโอนาโนเจล
              </p>
              <h1 className="text-display font-bold tracking-tight text-ink">
                ดูแลรอยแผลเป็น
                <br />
                <span className="text-brand">ให้ผิวกลับมามั่นใจ</span>
              </h1>
              <p className="mt-5 max-w-xl text-lead text-muted">
                Bioscar เซรั่มดูแลรอยแผลเป็น รอยดำ รอยแดง ผสานสารสกัดสมุนไพร 7 ชนิดจากจังหวัดน่าน
                กับเทคโนโลยีไบโอนาโนเจลที่ซึมลึก ใช้ง่ายทุกวัน ทั้งผิวหน้าและผิวกาย
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {concerns.map((c) => (
                  <li key={c} className="rounded-full bg-warm-soft px-3 py-1 text-small font-medium text-ink">
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <LineButton />
                <a href="#product" className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand/30 bg-white px-6 py-3 font-semibold text-brand transition hover:bg-brand-soft">
                  ดูราคา
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[22rem] md:max-w-[26rem]">
                <SerumArt />
                <div className="absolute -bottom-2 -left-1 w-28 sm:w-32 md:-left-6 md:w-40">
                  <span className="mascot-bubble absolute -top-12 left-16 whitespace-nowrap rounded-2xl rounded-bl-sm bg-white px-3 py-1.5 text-small font-semibold text-brand shadow-md sm:left-20 md:-top-12 md:left-28">
                    สวัสดีค่า~ ทักมาคุยได้นะ
                  </span>
                  <Mascot className="h-auto w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* จุดเด่น 3 ข้อ */}
        <section id="features" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-small font-semibold tracking-wide text-herb">ทำไมต้อง Bioscar</p>
            <h2 className="mt-2 max-w-2xl text-h2 font-bold text-ink">ธรรมชาติที่ผ่านการคิดแบบวิทยาศาสตร์</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {features.map((f, i) => (
                <article key={f.title} className="rounded-card border border-border bg-cream p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand">
                      <FeatureIcon name={f.icon} />
                    </span>
                    <span className="text-h2 font-bold text-brand/15">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-h3 font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-muted">{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* สินค้าและราคา */}
        <section id="product" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 sm:px-6 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="text-small font-semibold tracking-wide text-herb">สินค้าของเรา</p>
              <h2 className="mt-2 text-h2 font-bold text-ink">Bioscar เซรั่มดูแลรอยแผลเป็น</h2>
              <p className="mt-4 max-w-xl text-lead text-muted">
                เนื้อเจลบางเบา ซึมไว ไม่เหนอะหนะ เหมาะกับคนที่อยากดูแลรอยจากสิว รอยแผลเป็น รอยดำ และรอยแดง
              </p>
              <h3 className="mt-8 text-h3 font-semibold text-ink">วิธีใช้ง่าย ๆ</h3>
              <ol className="mt-4 space-y-3">
                {howTo.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-small font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-ink">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="md:col-span-2">
              <div className="rounded-card bg-brand p-7 text-white shadow-xl shadow-brand/20 md:p-8">
                <p className="text-small font-medium text-white/80">ราคาต่อขวด</p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="text-display font-bold">{PRICE}</span>
                  <span className="text-lead font-medium">บาท</span>
                </p>
                <ul className="mt-5 space-y-2.5">
                  {["ไบโอนาโนเจล ซึมลึก", "สมุนไพร 7 ชนิดจากน่าน", "ใช้ได้ทั้งหน้าและตัว"].map((t) => (
                    <li key={t} className="flex items-center gap-2.5">
                      <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-warm" fill="currentColor" aria-hidden="true">
                        <path d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm4 6.3-4.6 5.1a.9.9 0 0 1-1.3 0L5.9 10.6a.9.9 0 1 1 1.3-1.3l1.6 1.6 4-4.4a.9.9 0 1 1 1.2 1.3Z" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
                <LineButton label="ทักไลน์สั่งซื้อ" className="mt-7 w-full" />
                <p className="mt-3 text-center text-small text-white/75">สอบถามได้ก่อนตัดสินใจ ไม่มีค่าใช้จ่าย</p>
              </div>
            </div>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-center text-small font-semibold tracking-wide text-herb">มีคำถาม?</p>
            <h2 className="mt-2 text-center text-h2 font-bold text-ink">คำถามที่พบบ่อย</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-border bg-cream px-5 py-4 open:bg-brand-soft/50">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink">
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-brand transition group-open:rotate-45" aria-hidden="true">
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                        <path d="M10 4v12M4 10h12" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-white md:px-14 md:py-16">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/50 blur-3xl" />
              <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
                <div>
                  <Mascot className="mb-2 h-auto w-20 md:w-24" />
                  <h2 className="text-h2 font-bold">ปรึกษาเรื่องรอยได้เลย</h2>
                  <p className="mt-3 text-lead text-white/80">
                    ส่งรูปรอยที่อยากดูแลมาทางไลน์ แอดมินพร้อมให้คำแนะนำแบบเป็นกันเอง
                  </p>
                  <LineButton className="mt-7" />
                </div>
                <ul className="space-y-4">
                  <li>
                    <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-line">
                        <LineIcon className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block text-small text-white/70">LINE</span>
                        <span className="font-semibold">{LINE_ID}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-black">
                        <TikTokIcon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-small text-white/70">TikTok</span>
                        <span className="font-semibold">@bioscar_shop</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-small text-white/70">เวลาตอบแชท</span>
                      <span className="font-semibold">{HOURS}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ส่วนท้าย */}
      <footer className="border-t border-border pb-28 pt-8 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-small text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-semibold text-ink">Bioscar Thailand</span> · เซรั่มดูแลรอยแผลเป็น ไบโอนาโนเจล
          </p>
          <p>ผลลัพธ์อาจแตกต่างกันในแต่ละบุคคล · © {new Date().getFullYear()} Bioscar Thailand</p>
        </div>
      </footer>

      {/* ปุ่มลอยบนมือถือ */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden">
        <LineButton className="w-full" />
      </div>
    </>
  );
}
