import React, { useState } from "react";
import { records } from "./data";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle,
  Clock,
  FileText,
  Package,
  Camera,
  UserCircle,
  ChatCircleText,
  ShieldCheck,
  WarningCircle,
  ArrowsLeftRight,
  ChartBar,
  LockKey,
  CalendarBlank,
} from "@phosphor-icons/react";

const pictureSizes = {
  "workflow-world": [1881, 836],
  "garment-study": [1113, 1414],
  "return-parcel": [1196, 1315],
  "hero-cutout": [1197, 1315],
  "hero-sweater": [1196, 1315],
  warehouse: [1564, 1006],
  fabric: [1672, 941],
  silk: [1536, 1024],
  chiffon: [1536, 1024],
};
const Picture = ({ name, ...props }) => (
  <img
    loading="lazy"
    width={pictureSizes[name]?.[0]}
    height={pictureSizes[name]?.[1]}
    src={`/images/${name}.${["return-parcel", "garment-study", "hero-cutout"].includes(name) ? "webp" : "jpg"}`}
    {...props}
  />
);
const Demo = ({ children = "DEMO — SYNTHETIC DATA" }) => (
  <span className="tag">{children}</span>
);
const CardTop = ({ children, Icon = FileText }) => (
  <div className="v-card-top">
    <Icon size={17} />
    <strong>{children}</strong>
    <Demo>DEMO</Demo>
  </div>
);
const events = [
  [
    "28 OCT · 09:20",
    "Return requested",
    "Customer",
    "Fit / size issue",
    "Recorded",
  ],
  [
    "28 OCT · 09:21",
    "Policy linked",
    "POL-APP-03",
    "30-day window · §4.2",
    "Recorded",
  ],
  [
    "28 OCT · 09:35",
    "Review assigned",
    "Mira Chen",
    "Worn status uncertain",
    "Pending",
  ],
  [
    "AWAITING EVENT",
    "Warehouse inspection",
    "3PL operations",
    "Item receipt unconfirmed",
    "Not received",
  ],
];

export function EvidenceMosaic({ compact = false }) {
  return (
    <div className={`evidence-mosaic ${compact ? "is-compact" : ""}`}>
      {[
        ["hero-sweater", "01 / Full garment"],
        ["fabric", "02 / Knit detail"],
        ["return-parcel", "03 / Parcel context"],
        ["garment-study", "04 / Catalog reference"],
      ].map(([name, label]) => (
        <figure key={name}>
          <Picture
            name={name}
            alt={`${label} — original illustrative imagery, not inspection evidence`}
          />
          <figcaption>{label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function InspectionTimeline({ compact = false }) {
  return (
    <div className={`inspection-timeline ${compact ? "is-compact" : ""}`}>
      {events.map(([date, title, owner, detail, status], i) => (
        <div
          className={`timeline-event ${i > 1 ? "awaiting" : ""}`}
          key={title}
        >
          <span className="event-symbol">
            {i < 2 ? <Check size={12} /> : <Clock size={12} />}
          </span>
          <div>
            <small>{date}</small>
            <strong>{title}</strong>
            <p>{compact ? status : detail}</p>
            {!compact && <span className="event-owner">{owner}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CaseLedger({ compact = false }) {
  const [active, setActive] = useState("Overview");
  return (
    <div className={`case-ledger v-card ${compact ? "is-compact" : ""}`}>
      <div className="ledger-heading">
        <div>
          <span className="eyebrow">CASE HISTORY / ER-118</span>
          <h3>From request to resolution.</h3>
        </div>
        <Demo />
      </div>
      <div className="ledger-tabs" role="tablist" aria-label="Case information">
        {["Overview", "Evidence", "Policy"].map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={active === t}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="ledger-panel" role="tabpanel" aria-label={active}>
        {active === "Overview" ? (
          <div
            className="ledger-scroll"
            tabIndex="0"
            aria-label="Scrollable fictional event table"
          >
            <table>
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Date / time</th>
                  <th>Source / owner</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {events.map(([date, title, owner, detail, status]) => (
                  <tr key={title} className="stagger-item">
                    <td>
                      <strong>{title}</strong>
                      <small>{detail}</small>
                    </td>
                    <td>{date}</td>
                    <td>{owner}</td>
                    <td>
                      <span
                        className={`ledger-status ${status === "Recorded" ? "recorded" : ""}`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : active === "Evidence" ? (
          <div className="ledger-evidence">
            <EvidenceMosaic compact />
            <div>
              <WarningCircle size={22} />
              <strong>Inspection not received</strong>
              <p>
                These pictures illustrate the concept. No warehouse photo or
                item-condition finding has been received.
              </p>
              <a href="/demo">
                Review source context <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ) : (
          <div className="ledger-policy">
            <FileText size={30} />
            <div>
              <strong>POL-APP-03 · §4.2 · Condition</strong>
              <p>
                Items must be{" "}
                <mark>unworn, unaltered and with original tags.</mark> The
                fictional request falls inside the 30-day window; worn status
                remains uncertain.
              </p>
              <a href="/resources/policy-matrix">
                Read the policy matrix <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="ledger-footer">
        <UserCircle size={18} />
        <span>Mira Chen · CX reviewer</span>
        <span>Next: request condition clarification</span>
      </div>
    </div>
  );
}

export function HandoffSection({ missing = false, id }) {
  return (
    <section id={id} className="section handoff-story textile-dark">
      <div className="handoff-intro reveal" data-direction="left">
        <span className="eyebrow">INTAKE → REVIEW → COORDINATE → LEARN</span>
        <h2>
          {missing ? (
            <>
              Missing evidence
              <br />
              <i>stays visible.</i>
            </>
          ) : (
            <>
              A clear owner.
              <br />
              <i>At every handoff.</i>
            </>
          )}
        </h2>
        <p>
          Keep policy, customer context and warehouse facts together. Every
          unresolved step has an owner and an honest next action.
        </p>
        <div className="parcel-display">
          <Picture
            name="return-parcel"
            alt="Illustrative return parcel with a forest knit sweater and blank garment tag"
          />
          <div className="parcel-caption">
            <strong>ER-118</strong>
            <span>Fictional case · inspection pending</span>
          </div>
        </div>
      </div>
      <div className="handoff-timeline v-card reveal">
        <CardTop Icon={Clock}>CASE ER-118</CardTop>
        <InspectionTimeline />
        <div className="v-note">
          <WarningCircle size={16} />
          <span>
            Review stays pending until the missing evidence is addressed.
          </span>
        </div>
      </div>
      <div className="handoff-evidence">
        <div className="v-card reveal">
          <CardTop Icon={Camera}>SOURCE CONTEXT</CardTop>
          <EvidenceMosaic compact />
          <p className="v-caption">
            Illustrative images · not warehouse findings
          </p>
        </div>
        <div className="v-card inspection-empty reveal">
          <Camera size={27} weight="light" />
          <div>
            <strong>Inspection not received</strong>
            <p>No item receipt or condition report yet.</p>
          </div>
          <details className="inspection-template">
            <summary>Preview inspection fields</summary>
            <p>
              Draft checklist only. These entries do not create a warehouse
              finding.
            </p>
            {[
              "Item matches description",
              "Tags photographed",
              "Wear or damage documented",
            ].map((field) => (
              <label key={field}>
                <input type="checkbox" />
                {field}
              </label>
            ))}
          </details>
        </div>
        <div className="v-card appeal-preview reveal">
          <CardTop Icon={ChatCircleText}>CUSTOMER APPEAL</CardTop>
          <blockquote>
            “I only tried it on. The shoulders feel tighter than expected.”
          </blockquote>
          <a href="/trust/appeals">
            A person can reconsider <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="handoff-footer">
        <Demo />
        <a href="/demo">
          Open the fictional case <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}

function MapNode({ Icon, title, children, href }) {
  return (
    <a className="map-node v-card stagger-item" href={href}>
      <span className="map-node-icon">
        <Icon size={23} weight="light" />
      </span>
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
        <span className="map-node-link">
          View context <ArrowUpRight size={12} />
        </span>
      </div>
    </a>
  );
}
export function ContextStory({ module }) {
  return (
    <section className="section context-story textile-print">
      <div className="context-copy reveal">
        <span className="eyebrow">THE CONTEXT BEHIND THE CASE</span>
        <h2>
          The right context.
          <br />
          <i>The right owner.</i>
        </h2>
        <p>
          {module
            ? module.boundary
            : "Policy, a customer’s explanation and warehouse evidence meet in one reviewable case. Uncertainty stays visible all the way through."}
        </p>
        {module && (
          <div className="context-io">
            <span>INPUT</span>
            <p>{module.input}</p>
            <span>PROPOSED OUTPUT</span>
            <p>{module.output}</p>
          </div>
        )}
        <a href="/demo" className="text-link">
          Follow the case <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="context-network reveal">
        <div className="context-inputs">
          <MapNode
            Icon={FileText}
            title="Policy source"
            href="/resources/policy-matrix"
          >
            30-day window, condition rules and clause §4.2.
          </MapNode>
          <MapNode Icon={UserCircle} title="Customer context" href="/demo">
            Fit reason, request and item details.
          </MapNode>
          <MapNode
            Icon={ChatCircleText}
            title="Customer appeal"
            href="/trust/appeals"
          >
            A visible route to another human review.
          </MapNode>
        </div>
        <div className="context-connector">
          <ArrowRight size={24} />
        </div>
        <a className="map-case v-card" href="/demo">
          <Demo />
          <Picture
            name="hero-cutout"
            alt="Illustrative cream sweater for fictional case ER-118"
          />
          <strong>ER-118</strong>
          <p>
            Merino crew sweater
            <br />
            Size M · KN-204-M
          </p>
          <span className="ledger-status">Condition uncertain</span>
        </a>
        <div className="context-connector">
          <ArrowRight size={24} />
        </div>
        <div className="context-outputs">
          <MapNode
            Icon={Package}
            title="Warehouse evidence"
            href="/products/returns-signal"
          >
            Inspection not received. Do not infer condition.
          </MapNode>
          <MapNode Icon={ShieldCheck} title="Human reviewer" href="/trust">
            CX decides the next step. Approval pending.
          </MapNode>
        </div>
      </div>
    </section>
  );
}

const journeySteps = [
  [
    "Customer",
    "A fit-related request",
    "Customer intent and item context enter the case.",
  ],
  [
    "Policy",
    "The relevant clause",
    "The policy is linked; condition still needs review.",
  ],
  [
    "CX review",
    "A considered next step",
    "An authorized person can accept, refuse or escalate.",
  ],
  [
    "Inspection",
    "Evidence, when received",
    "Warehouse facts inform a later disposition review.",
  ],
];
export function JourneyScene({ compact = false }) {
  return (
    <section className={`section journey-story ${compact ? "is-compact" : ""}`}>
      <div className="journey-heading reveal">
        <div>
          <span className="eyebrow">
            ONE CASE / FOUR CONNECTED PERSPECTIVES
          </span>
          <h2>
            Coordinate the handoff.
            <br />
            <i>Preserve the decision.</i>
          </h2>
        </div>
        <div className="owner-card v-card">
          <UserCircle size={26} />
          <div>
            <small>ASSIGNED OWNER</small>
            <strong>Mira Chen</strong>
            <span>CX operations · fictional</span>
          </div>
          <CalendarBlank size={24} />
          <div>
            <small>NEXT ACTION</small>
            <strong>28 Oct 2026</strong>
            <span>14:00 · review customer evidence</span>
          </div>
        </div>
      </div>
      <div
        className="journey-visual reveal"
        tabIndex="0"
        aria-label="Scrollable illustration of four connected return stations"
      >
        <Picture
          name="workflow-world"
          alt="Original isometric illustration linking a return parcel, policy dossier, CX reviewer and warehouse inspection bench"
        />
        <Demo>ILLUSTRATIVE WORKFLOW · NOT LIVE</Demo>
      </div>
      <p className="journey-mobile-hint">
        Swipe the illustration to follow all four stations{" "}
        <ArrowsLeftRight size={14} />
      </p>
      <div className="journey-stages">
        {journeySteps.map(([title, label, detail], i) => (
          <div className="journey-stage stagger-item" key={title}>
            <span>{i + 1}</span>
            <div>
              <h3>{title}</h3>
              <strong>{label}</strong>
              <p>{detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="journey-bottom">
        <span>Source → evidence → proposal → reviewer</span>
        <a href="/platform">
          Explore the proposed platform <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}

const reasonRows = [
  ["Size / fit", "“Tighter across the shoulders.”", "Size guide"],
  ["Material feel", "“Thinner than I expected.”", "Product content"],
  ["Color difference", "“Looks different in person.”", "Photography"],
  ["Changed mind", "“I prefer another style.”", "Assortment"],
];
export function GarmentLearning() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="section garment-learning textile-chiffon">
      <div className="garment-copy reveal">
        <span className="eyebrow">LEARN / THE PRODUCT BEHIND THE PATTERN</span>
        <h2>
          The case becomes
          <br />
          <i>a learning loop.</i>
        </h2>
        <p>
          Connect reviewed reasons to the garment, the product page and the next
          question for merchandising. A pattern is a prompt to investigate.
        </p>
        <a href="/products/returns-report" className="button">
          Explore Returns Report <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="garment-specimen reveal">
        <Demo>CATALOG STUDY · ILLUSTRATIVE</Demo>
        <Picture
          name="garment-study"
          alt="Forest green merino crew sweater with visible ribbed neckline, shoulders and hem — illustrative catalog specimen"
        />
        <span
          className={`specimen-label neckline ${selected === 0 ? "is-highlighted" : ""}`}
        >
          01 / Crew neckline
        </span>
        <span
          className={`specimen-label shoulder ${selected === 0 ? "is-highlighted" : ""}`}
        >
          02 / Shoulder fit
        </span>
        <span
          className={`specimen-label knit ${selected === 1 ? "is-highlighted" : ""}`}
        >
          03 / Knit & handfeel
        </span>
        <div className="fabric-swatches">
          <Picture name="fabric" alt="Dark wool knit swatch" />
          <Picture name="chiffon" alt="Sage chiffon swatch" />
          <Picture name="silk" alt="Ivory silk swatch" />
        </div>
      </div>
      <div className="reason-matrix v-card reveal">
        <CardTop Icon={ChartBar}>RETURN REASONS</CardTop>
        <p className="v-caption">
          Illustrative comments · select a reason to explore
        </p>
        <div className="reason-table">
          {reasonRows.map(([reason, quote, area], i) => (
            <button
              className={selected === i ? "selected" : ""}
              aria-pressed={selected === i}
              key={reason}
              onClick={() => setSelected(i)}
            >
              <span>{reason}</span>
              <q>{quote.replaceAll("“", "").replaceAll("”", "")}</q>
              <small>
                {area}
                <ArrowUpRight size={12} />
              </small>
            </button>
          ))}
        </div>
        <div className="learning-question">
          <span className="eyebrow">A QUESTION, NOT A FINDING</span>
          <strong>
            {
              [
                "Does the size guide explain shoulder fit?",
                "Could product copy explain the fabric weight?",
                "Do images represent the color consistently?",
                "Is the assortment clear before purchase?",
              ][selected]
            }
          </strong>
          <p>
            No trend or quality issue is established by this synthetic sample.
          </p>
        </div>
      </div>
    </section>
  );
}

export function RichModuleVisual({ index }) {
  return (
    <div className={`module-visual rich-module module-${index}`}>
      <Demo>DEMO · PROPOSED MODULE</Demo>
      {index === 0 ? (
        <div className="policy-dossier">
          <div className="dossier-sheet">
            <FileText size={22} />
            <span>POL-APP-03 / v3</span>
            <h3>Return policy</h3>
            <p>01 / Return window</p>
            <strong>30 days from delivery</strong>
            <p>02 / Condition</p>
            <mark>
              Unworn, unaltered,
              <br />
              original tags attached.
            </mark>
            <p>03 / Exception route</p>
            <strong>Escalate for human review</strong>
          </div>
          <div className="dossier-clause v-card">
            <ShieldCheck size={24} />
            <span>
              <strong>Section 4.2</strong>
              <small>Worn status uncertain</small>
            </span>
          </div>
        </div>
      ) : index === 1 ? (
        <div className="compatibility-visual">
          <div className="garment-pair">
            {["M", "L"].map((size, i) => (
              <div key={size}>
                <span>{i ? "COMPATIBLE CANDIDATE" : "REQUESTED RETURN"}</span>
                <Picture
                  name="hero-cutout"
                  alt={`Illustrative cream sweater, mock size ${size}`}
                />
                <strong>Size {size}</strong>
                <small>
                  {i ? "4 mock units · same style" : "KN-204-M · fit issue"}
                </small>
              </div>
            ))}
          </div>
          <div className="compatibility-gates">
            <span>
              <CheckCircle size={14} /> Size rule
            </span>
            <span>
              <CheckCircle size={14} /> Merchant list
            </span>
            <span>
              <Clock size={14} /> CX approval
            </span>
          </div>
        </div>
      ) : index === 2 ? (
        <div className="proof-board">
          <EvidenceMosaic />
          <div className="proof-status">
            <Camera size={18} />
            <span>
              <strong>Evidence is context.</strong>
              <small>Condition remains unresolved.</small>
            </span>
          </div>
        </div>
      ) : index === 3 ? (
        <div className="signal-mini">
          <Picture name="warehouse" alt="Illustrative inspection bench" />
          <InspectionTimeline compact />
        </div>
      ) : (
        <div className="reason-bars">
          <CardTop Icon={ChartBar}>REASON BREAKDOWN</CardTop>
          <strong className="reason-total">
            10 <small>fictional cases</small>
          </strong>
          {Object.entries(
            records.reduce((counts, record) => {
              counts[record.reason] = (counts[record.reason] || 0) + 1;
              return counts;
            }, {}),
          )
            .sort((a, b) => b[1] - a[1])
            .map(([r, n]) => (
              <div key={r}>
                <span>{r}</span>
                <div className="reason-track">
                  <span className="bar" style={{ width: `${n * 20}%` }} />
                </div>
                <b>{n}</b>
              </div>
            ))}
          <span className="v-caption">
            Seed fixture counts · not measured outcomes
          </span>
        </div>
      )}
    </div>
  );
}

export function AtlasWorld({ inspection = false }) {
  return (
    <div className={`atlas-world ${inspection ? "inspection-world" : ""}`}>
      <div className="atlas-world-image">
        <Picture
          name={inspection ? "inspection-world" : "workflow-world"}
          alt={
            inspection
              ? "Illustrative warehouse with a cream sweater return parcel, camera inspection bench and stocked shelves — no inspection received"
              : "Illustrative returns workflow from customer parcel through policy and CX review to inspection"
          }
        />
      </div>
      <div className="world-case v-card">
        <Demo />
        <div className="world-case-title">
          <strong>ER-118</strong>
          <span className="ledger-status">Pending review</span>
        </div>
        <dl>
          <dt>Item</dt>
          <dd>Merino crew · size M</dd>
          <dt>Condition</dt>
          <dd>Uncertain</dd>
          <dt>Inspection</dt>
          <dd>Not received</dd>
        </dl>
      </div>
      <div className="world-policy v-card">
        <FileText size={20} />
        <span>
          <strong>{inspection ? "Inspection checklist" : "Policy §4.2"}</strong>
          <small>
            {inspection
              ? "Condition · tags · photos · notes"
              : "Source linked · decision pending"}
          </small>
        </span>
      </div>
      <div className="world-stages">
        {journeySteps.map(([t], i) => (
          <span key={t}>
            <b>{i + 1}</b>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ChapterVisual({ title, description, index }) {
  const text = `${title} ${description}`.toLowerCase();
  if (
    /metric|minute|margin|baseline|measure|complaint|csat|value|revenue/.test(
      text,
    )
  )
    return (
      <div className="chapter-art mini-measure">
        <CardTop Icon={ChartBar}>MEASUREMENT PLAN</CardTop>
        {[
          "Matched baseline",
          "Resolution minutes",
          "Net margin + complaints",
        ].map((t, i) => (
          <div key={t}>
            <span>0{i + 1}</span>
            <strong>{t}</strong>
            <small>To measure</small>
          </div>
        ))}
        <Demo>NO OUTCOMES CLAIMED</Demo>
      </div>
    );
  if (/permission|consent|access|privacy|data right|security|admin/.test(text))
    return (
      <div className="chapter-art mini-permissions">
        <CardTop Icon={LockKey}>PERMISSION GATES</CardTop>
        {["Merchant consent", "Authorized app scopes", "3PL data rights"].map(
          (t) => (
            <div key={t}>
              <LockKey size={15} />
              <strong>{t}</strong>
              <span>Required</span>
            </div>
          ),
        )}
        <small>No store is connected to this preview.</small>
      </div>
    );
  if (/warehouse|inspection|3pl|disposition/.test(text))
    return (
      <div className="chapter-art mini-inspection">
        <Picture
          name="warehouse"
          alt="Illustrative warehouse inspection station"
        />
        <div>
          <Package size={18} />
          <strong>Inspection not received</strong>
          <small>Missing evidence stays explicit.</small>
        </div>
      </div>
    );
  if (/appeal|customer|abuse|human|review|trust/.test(text))
    return (
      <div className="chapter-art mini-review">
        <CardTop Icon={UserCircle}>HUMAN REVIEW</CardTop>
        <blockquote>“Could someone review my return again?”</blockquote>
        <div>
          <ChatCircleText size={20} />
          <strong>Appeal → named reviewer</strong>
        </div>
        <span className="ledger-status">Decision pending</span>
      </div>
    );
  if (/exchange|stock|size|fit|compatib/.test(text))
    return (
      <div className="chapter-art mini-fit">
        <Picture
          name="hero-cutout"
          alt="Illustrative sweater for a compatible size review"
        />
        <div>
          <ArrowsLeftRight size={20} />
          <strong>Size M → Size L</strong>
          <p>Style + stock + merchant rules</p>
          <Demo>APPROVAL REQUIRED</Demo>
        </div>
      </div>
    );
  return (
    <div className="chapter-art mini-policy">
      <CardTop>LINKED SOURCE</CardTop>
      <strong>Policy §4.2</strong>
      <p>
        <mark>Unworn, unaltered and with original tags.</mark>
      </p>
      <span className="ledger-status">Condition uncertain</span>
      <small>Fictional policy · human review required</small>
    </div>
  );
}
