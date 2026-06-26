"use client";
import React from "react";

const ORANGE = "#F28C28";
const STEEL_FRONT = "#2F343A";
const STEEL_SIDE = "#474e56";
const STEEL_TOP = "#3a4148";
const RIDGE_COLOR = "#565e66";
const BORDER = "#1e2227";

/**
 * ContainerSVG – isometric box with dimension arrows.
 * boxW / boxD / boxH are visual proportions (not mm).
 * The SVG viewBox dynamically fits the content.
 */
export function ContainerSVG({ boxW = 100, boxD = 30, boxH = 55, lengthLabel, widthLabel, heightLabel, uid = "c" }) {
  // Isometric projection: origin at left-front-bottom
  // x-axis (length) → right+down, y-axis (depth) → left+down, z-axis (height) → up
  const ISO_X = { x: 1, y: 0.5 };
  const ISO_Y = { x: -0.7, y: 0.35 };
  const ISO_Z = { x: 0, y: -1 };

  // Padding around the box for arrows + labels
  const PAD_LEFT = 52;  // room for height arrow + label
  const PAD_RIGHT = 10;
  const PAD_TOP = 14;
  const PAD_BOTTOM = 36; // room for length arrow + label

  function pt(w, d, h) {
    return {
      x: PAD_LEFT + w * ISO_X.x + d * ISO_Y.x,
      y: PAD_TOP + boxH + w * ISO_X.y + d * ISO_Y.y + h * ISO_Z.y,
    };
  }
  function pp(w, d, h) {
    const { x, y } = pt(w, d, h);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }

  // 8 corners
  const c = {
    fbl: pt(0, 0, 0), fbr: pt(boxW, 0, 0),
    bbl: pt(0, boxD, 0), bbr: pt(boxW, boxD, 0),
    ftl: pt(0, 0, boxH), ftr: pt(boxW, 0, boxH),
    btl: pt(0, boxD, boxH), btr: pt(boxW, boxD, boxH),
  };

  // Corrugation ridges on front face
  const ridgeCount = Math.max(2, Math.round(boxW / 18));
  const ridges = Array.from({ length: ridgeCount }, (_, i) => {
    const x = (boxW / (ridgeCount + 1)) * (i + 1);
    return { b: pt(x, 0, 0), t: pt(x, 0, boxH) };
  });

  // Door on front face
  const dLeft   = pt(boxW * 0.55, 0, 1);
  const dRight  = pt(boxW - 1, 0, 1);
  const dLeftT  = pt(boxW * 0.55, 0, boxH - 1);
  const dRightT = pt(boxW - 1, 0, boxH - 1);
  const dMid    = pt(boxW * 0.775, 0, 1);
  const dMidT   = pt(boxW * 0.775, 0, boxH - 1);

  // ---- Dimension arrows ----
  const GAP = 8;

  // Length arrow: below front bottom edge
  const La = { x: c.fbl.x, y: c.fbl.y + GAP + 10 };
  const Lb = { x: c.fbr.x, y: c.fbr.y + GAP + 10 };
  const Lmy = Math.max(La.y, Lb.y) + 12;

  // Width arrow: along right bottom edge, offset outward
  const wdx = c.bbr.x - c.fbr.x;
  const wdy = c.bbr.y - c.fbr.y;
  const wLen = Math.sqrt(wdx * wdx + wdy * wdy) || 1;
  const wnx = (-wdy / wLen) * (GAP + 4);
  const wny = (wdx / wLen) * (GAP + 4);
  const Wa = { x: c.fbr.x + wnx, y: c.fbr.y + wny };
  const Wb = { x: c.bbr.x + wnx, y: c.bbr.y + wny };
  const Wmx = (Wa.x + Wb.x) / 2 + 6;
  const Wmy = (Wa.y + Wb.y) / 2 + 10;

  // Height arrow: left of front left edge
  const Ha = { x: c.fbl.x - GAP - 8, y: c.fbl.y };
  const Hb = { x: c.ftl.x - GAP - 8, y: c.ftl.y };
  const Hmx = Ha.x - 3;
  const Hmy = (Ha.y + Hb.y) / 2;

  // Compute bounding box
  const allX = [c.ftl.x, c.ftr.x, c.btl.x, c.btr.x, c.fbl.x, c.fbr.x, Ha.x - 48, Wmx + 50, La.x, Lb.x];
  const allY = [c.ftl.y, c.btr.y, Hb.y - PAD_TOP, Lmy + 4, Wmy + 4];
  const minX = Math.min(...allX);
  const minY = Math.min(...allY);
  const maxX = Math.max(...allX) + PAD_RIGHT;
  const maxY = Math.max(...allY) + 6;
  const vbW = maxX - minX;
  const vbH = maxY - minY;

  const mid = `arr-${uid}`;
  const mrid = `arr-rev-${uid}`;

  return (
    <svg
      viewBox={`${minX.toFixed(0)} ${minY.toFixed(0)} ${vbW.toFixed(0)} ${vbH.toFixed(0)}`}
      width="100%"
      style={{ display: "block", overflow: "visible" }}
      aria-label={`Container ${lengthLabel} × ${widthLabel} × ${heightLabel}`}
    >
      <defs>
        <marker id={mid} markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={ORANGE} />
        </marker>
        <marker id={mrid} markerWidth="5" markerHeight="5" refX="1" refY="2.5" orient="auto-start-reverse">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={ORANGE} />
        </marker>
      </defs>

      {/* TOP */}
      <polygon points={`${pp(0,0,boxH)} ${pp(boxW,0,boxH)} ${pp(boxW,boxD,boxH)} ${pp(0,boxD,boxH)}`}
        fill={STEEL_TOP} stroke={BORDER} strokeWidth="0.8" />
      {/* RIGHT side */}
      <polygon points={`${pp(boxW,0,0)} ${pp(boxW,boxD,0)} ${pp(boxW,boxD,boxH)} ${pp(boxW,0,boxH)}`}
        fill={STEEL_SIDE} stroke={BORDER} strokeWidth="0.8" />
      {/* FRONT */}
      <polygon points={`${pp(0,0,0)} ${pp(boxW,0,0)} ${pp(boxW,0,boxH)} ${pp(0,0,boxH)}`}
        fill={STEEL_FRONT} stroke={BORDER} strokeWidth="0.8" />

      {/* Ridges – front */}
      {ridges.map((r, i) => (
        <line key={i} x1={r.b.x} y1={r.b.y} x2={r.t.x} y2={r.t.y}
          stroke={RIDGE_COLOR} strokeWidth="1" opacity="0.9" />
      ))}

      {/* Door */}
      <polygon points={`${dLeft.x},${dLeft.y} ${dRight.x},${dRight.y} ${dRightT.x},${dRightT.y} ${dLeftT.x},${dLeftT.y}`}
        fill="none" stroke={ORANGE} strokeWidth="0.8" opacity="0.55" />
      <line x1={dMid.x} y1={dMid.y} x2={dMidT.x} y2={dMidT.y}
        stroke={ORANGE} strokeWidth="0.6" opacity="0.45" />

      {/* Corner castings */}
      {Object.values(c).map((v, i) => (
        <rect key={i} x={v.x - 3} y={v.y - 2.5} width={6} height={5} rx="0.8"
          fill={ORANGE} opacity="0.85" />
      ))}

      {/* ---- ARROWS ---- */}

      {/* Length */}
      <line x1={c.fbl.x} y1={c.fbl.y} x2={La.x} y2={La.y - 4} stroke={ORANGE} strokeWidth="0.6" strokeDasharray="2,2" />
      <line x1={c.fbr.x} y1={c.fbr.y} x2={Lb.x} y2={Lb.y - 4} stroke={ORANGE} strokeWidth="0.6" strokeDasharray="2,2" />
      <line x1={La.x} y1={La.y} x2={Lb.x} y2={Lb.y} stroke={ORANGE} strokeWidth="1.2"
        markerStart={`url(#${mrid})`} markerEnd={`url(#${mid})`} />
      <text x={(La.x + Lb.x) / 2} y={Lmy} textAnchor="middle"
        fill={ORANGE} fontSize="8" fontFamily="Montserrat,sans-serif" fontWeight="700">
        L: {lengthLabel}
      </text>

      {/* Width */}
      <line x1={c.fbr.x} y1={c.fbr.y} x2={Wa.x} y2={Wa.y} stroke={ORANGE} strokeWidth="0.6" strokeDasharray="2,2" />
      <line x1={c.bbr.x} y1={c.bbr.y} x2={Wb.x} y2={Wb.y} stroke={ORANGE} strokeWidth="0.6" strokeDasharray="2,2" />
      <line x1={Wa.x} y1={Wa.y} x2={Wb.x} y2={Wb.y} stroke={ORANGE} strokeWidth="1.2"
        markerStart={`url(#${mrid})`} markerEnd={`url(#${mid})`} />
      <text x={Wmx} y={Wmy} textAnchor="start"
        fill={ORANGE} fontSize="8" fontFamily="Montserrat,sans-serif" fontWeight="700">
        B: {widthLabel}
      </text>

      {/* Height */}
      <line x1={c.fbl.x} y1={c.fbl.y} x2={Ha.x + 4} y2={Ha.y} stroke={ORANGE} strokeWidth="0.6" strokeDasharray="2,2" />
      <line x1={c.ftl.x} y1={c.ftl.y} x2={Hb.x + 4} y2={Hb.y} stroke={ORANGE} strokeWidth="0.6" strokeDasharray="2,2" />
      <line x1={Ha.x} y1={Ha.y} x2={Hb.x} y2={Hb.y} stroke={ORANGE} strokeWidth="1.2"
        markerStart={`url(#${mrid})`} markerEnd={`url(#${mid})`} />
      <text x={Hmx} y={Hmy} textAnchor="end"
        fill={ORANGE} fontSize="8" fontFamily="Montserrat,sans-serif" fontWeight="700">
        H: {heightLabel}
      </text>
    </svg>
  );
}

export function ContainerDiagramRow({ rowTitle, containers }) {
  return (
    <div className="my-6 rounded-2xl border border-border bg-muted/30 p-4">
      {rowTitle && (
        <p className="font-heading font-semibold text-sm text-foreground mb-4 text-center">{rowTitle}</p>
      )}
      <div className="grid grid-cols-3 gap-3">
        {containers.map((c, i) => (
          <div key={i} className="flex flex-col items-center">
            <ContainerSVG
              boxW={c.W} boxD={c.D} boxH={c.H}
              lengthLabel={c.lengthLabel}
              widthLabel={c.widthLabel}
              heightLabel={c.heightLabel}
              uid={`${(rowTitle || "r").replace(/\s/g, "")}-${i}`}
            />
            <p className="font-heading font-semibold text-xs text-foreground text-center mt-1">{c.title}</p>
            <p className="text-xs text-muted-foreground text-center leading-snug">{c.lengthLabel} × {c.heightLabel}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-3">
        Außenmaße (schematisch, nicht maßstabsgetreu) · L = Länge · B = Breite · H = Höhe
      </p>
    </div>
  );
}

export default function ContainerDiagram({ length, width, height, label }) {
  return (
    <div className="my-6 rounded-2xl border border-border bg-muted/30 p-4 flex flex-col items-center">
      {label && <p className="font-heading font-semibold text-sm text-foreground mb-2">{label}</p>}
      <div style={{ maxWidth: 380, width: "100%" }}>
        <ContainerSVG
          boxW={100} boxD={30} boxH={55}
          lengthLabel={length} widthLabel={width} heightLabel={height}
          uid="single"
        />
      </div>
      <p className="text-xs text-muted-foreground text-center mt-2">Außenmaße (schematisch)</p>
    </div>
  );
}