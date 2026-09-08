"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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

export function DecisionTree() {
  const [faceId, setFaceId] = useState("16x25");
  const [depth, setDepth] = useState<DepthInches>(1);
  const [merv, setMerv] = useState<Merv>(11);

  const result = useMemo(() => recommend(faceId, depth, merv), [faceId, depth, merv]);
  const brands = useMemo(() => brandsForDepth(depth), [depth]);
  const face = faceSizes.find((item) => item.id === faceId);

  return (
    <div className="border border-rule bg-card shadow-[0_18px_40px_-28px_rgba(31,26,20,0.45)]">
      <div className="border-b border-rule bg-paper-deep/60 px-5 py-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper-dark">
          Decision tree
        </p>
        <h2 className="mt-1 font-serif text-2xl text-ink">Size → depth → MERV → brands</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">
          Start with the rack you already have. Raising MERV without checking depth is how 1-inch
          filters choke blowers.
        </p>
      </div>

      <div className="grid gap-8 px-5 py-6 sm:px-6">
        <fieldset>
          <legend className="font-serif text-lg text-ink">1. Nominal face size</legend>
          <p className="mt-1 text-sm text-ink-soft">
            Read the slot or the old filter, not the marketing photo. {face?.label} is selected.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {faceSizes.map((item) => {
              const selected = item.id === faceId;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFaceId(item.id)}
                  className={`min-h-11 border px-3 py-2 text-sm ${
                    selected
                      ? "border-copper bg-copper text-white"
                      : "border-rule bg-paper hover:border-copper"
                  }`}
                >
                  {item.label}
                  {item.common ? "" : <span className="ml-1 text-[0.7rem] opacity-80">less common</span>}
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-serif text-lg text-ink">2. Slot depth</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {depths.map((item) => {
              const selected = item.inches === depth;
              return (
                <button
                  key={item.inches}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setDepth(item.inches)}
                  className={`min-h-20 border px-4 py-3 text-left ${
                    selected ? "border-air bg-air-soft" : "border-rule bg-paper hover:border-air"
                  }`}
                >
                  <span className="block font-serif text-xl text-ink">{item.label}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{item.note}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-serif text-lg text-ink">3. MERV target</legend>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {mervOptions.map((item) => {
              const selected = item.value === merv;
              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setMerv(item.value)}
                  className={`min-h-20 border px-4 py-3 text-left ${
                    selected ? "border-copper-dark bg-warn-soft" : "border-rule bg-paper hover:border-copper"
                  }`}
                >
                  <span className="block font-serif text-xl text-ink">{item.label}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{item.job}</span>
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>

      <div className="border-t border-rule bg-paper px-5 py-6 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-air">4. What to buy</p>
        <h3 className="mt-2 font-serif text-2xl text-ink">{result.headline}</h3>
        <p className="mt-3 max-w-3xl leading-7 text-ink-soft">{result.body}</p>
        {result.caution ? (
          <p className="mt-4 border-l-4 border-copper bg-warn-soft px-4 py-3 text-sm leading-6 text-warn">
            {result.caution}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {result.related.map((href) => {
            const guide = guideByHref(href);
            return (
              <Link key={href} className="text-air underline underline-offset-3 hover:text-copper-dark" href={href}>
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
