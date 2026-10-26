"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { amazonLinkAttrs, amazonSearchUrl } from "@/lib/amazon";
import {
  brandClasses,
  brandsForDepth,
  depths,
  faceSizes,
  mervOptions,
  recommend,
  type DepthInches,
  type Merv,
} from "@/lib/filters";
import { guideByHref } from "@/lib/guides";

function faceMark(width: number, height: number) {
  const max = Math.max(width, height);
  const w = (width / max) * 22;
  const h = (height / max) * 22;
  return { x: (32 - w) / 2, y: (32 - h) / 2, w, h };
}

export function DecisionTree() {
  const [faceId, setFaceId] = useState("16x25");
  const [depth, setDepth] = useState<DepthInches>(1);
  const [merv, setMerv] = useState<Merv>(11);

  const result = useMemo(() => recommend(faceId, depth, merv), [faceId, depth, merv]);
  const brands = useMemo(() => brandsForDepth(depth), [depth]);
  const face = faceSizes.find((item) => item.id === faceId);

  return (
    <div className="ff-panel">
      <div className="ff-panel-head">
        <p className="ff-kicker">Decision tree</p>
        <h2 className="ff-panel-title">Size → depth → MERV → brands</h2>
        <p className="ff-panel-copy mt-2 max-w-2xl">
          Start with the rack you already have. Raising MERV without checking depth is how 1-inch
          filters choke blowers.
        </p>
      </div>

      <div className="ff-panel-body ff-fields">
        <fieldset>
          <legend className="ff-legend">1. Nominal face size</legend>
          <p className="ff-field-note mt-1">
            Read the slot or the old filter, not the marketing photo. {face?.label} is selected.
          </p>
          <div className="ff-face-grid">
            {faceSizes.map((item) => {
              const selected = item.id === faceId;
              const mark = faceMark(item.width, item.height);
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFaceId(item.id)}
                  className={selected ? "ff-choice is-on" : "ff-choice"}
                >
                  <span className="ff-face-mark" aria-hidden>
                    <svg viewBox="0 0 32 32" width="28" height="28">
                      <rect x={mark.x} y={mark.y} width={mark.w} height={mark.h} fill="currentColor" />
                    </svg>
                  </span>
                  <span>
                    {item.label}
                    {item.common ? "" : <span className="ff-uncommon">less common</span>}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="ff-legend">2. Slot depth</legend>
          <div className="ff-depth-grid">
            {depths.map((item) => {
              const selected = item.inches === depth;
              return (
                <button
                  key={item.inches}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setDepth(item.inches)}
                  className={selected ? "ff-depth is-on" : "ff-depth"}
                >
                  <span className="ff-depth-track" aria-hidden>
                    <span className="ff-depth-bar" data-depth={item.inches} />
                  </span>
                  <span>
                    <span className="ff-choice-title">{item.label}</span>
                    <span className="ff-choice-note mt-1 block">{item.note}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="ff-legend">3. MERV target</legend>
          <div className="ff-merv-grid">
            {mervOptions.map((item) => {
              const selected = item.value === merv;
              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setMerv(item.value)}
                  className={selected ? "ff-merv is-on" : "ff-merv"}
                >
                  <span>
                    <span className="ff-choice-title">{item.label}</span>
                    <span className="ff-choice-note mt-1 block">{item.job}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="ff-result">
        <p className="ff-result-kicker">4. What to buy</p>
        <h3 className="ff-result-title">{result.headline}</h3>
        <p className="ff-result-body">{result.body}</p>
        {result.caution ? <p className="ff-caution">{result.caution}</p> : null}

        <a
          className="ff-buy"
          href={amazonSearchUrl(
            `${faceId}x${depth} merv ${merv} furnace filter`,
            `ff-picker-${faceId}x${depth}-merv${merv}`,
          )}
          {...amazonLinkAttrs}
        >
          Shop MERV {merv} {face?.label ?? faceId}×{depth} filters on Amazon
        </a>
        <p className="ff-associate mt-2 max-w-3xl text-sm leading-6 text-ink-soft">
          Affiliate link. As an Amazon Associate I earn from qualifying purchases, at no extra
          cost to you. This opens an Amazon search for that nominal size, depth, and MERV. It is
          not a test and not a ranking.
        </p>

        <div className="ff-related-links">
          {result.related.map((href) => {
            const guide = guideByHref(href);
            return (
              <Link key={href} className="ff-text-link" href={href}>
                {guide?.title ?? href}
              </Link>
            );
          })}
        </div>

        <div className="table-scroll mt-6">
          <table>
            <caption className="sr-only">
              Brand classes commonly sold for a {depth}-inch filter
            </caption>
            <thead>
              <tr>
                <th scope="col">Brand class</th>
                <th scope="col">How it is labeled</th>
                <th scope="col">Construction</th>
                <th scope="col">Change notes</th>
              </tr>
            </thead>
            <tbody>
              {(brands.length ? brands : brandClasses).map((brand) => (
                <tr key={brand.id}>
                  <td>
                    <div className="font-semibold text-ink">{brand.name}</div>
                    <div className="text-sm text-ink-soft">{brand.styleOf}</div>
                  </td>
                  <td>{brand.labeling}</td>
                  <td>{brand.construction}</td>
                  <td>{brand.changeNotes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink-soft">
          These are shopping classes, not ranked scores. We do not invent star ratings or “best overall”
          numbers. Check the SKU’s published initial resistance and your equipment manual.
        </p>
      </div>
    </div>
  );
}
