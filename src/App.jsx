import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  ArrowLeft,
  Check,
  CheckCircle,
  Clock,
  FileText,
  Package,
  Scan,
  ChartBar,
  ArrowsLeftRight,
  ShieldCheck,
  UserCircle,
  WarningCircle,
  X,
  List,
  Plus,
  Minus,
  Export,
  ArrowCounterClockwise,
  Quotes,
  MagnifyingGlass,
  CaretDown,
  LockKey,
  Envelope,
  LinkedinLogo,
  Buildings,
} from "@phosphor-icons/react";
import gsap from "gsap";
import VideoIntro from "./VideoIntro";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { modules, records, pages } from "./data";
import {
  CaseLedger,
  HandoffSection,
  ContextStory,
  JourneyScene,
  GarmentLearning,
  RichModuleVisual,
  AtlasWorld,
  ChapterVisual,
} from "./VisualStory";
import "@fontsource/newsreader/400.css";
import "@fontsource/newsreader/400-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
gsap.registerPlugin(ScrollTrigger);
const icons = { FileText, ArrowsLeftRight, Scan, Package, ChartBar };
const Img = ({ name, ...props }) => (
  <img
    src={name === "brand-mark" ? "/brand/symbol-forest.svg" : `/images/${name}.${name === "hero-cutout" ? "webp" : "jpg"}`}
    {...props}
  />
);
const Button = ({ href = "/demo", children, light = false, ...props }) => (
  <a className={`button ${light ? "secondary" : ""}`} href={href} {...props}>
    {children}
    <ArrowUpRight size={17} />
  </a>
);
const Tag = ({ children = "DEMO — SYNTHETIC DATA", className = "" }) => (
  <span className={`tag ${className}`}>{children}</span>
);
const SectionHead = ({ kicker, title, children }) => (
  <div className="section-head reveal">
    <div>
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
    </div>
    {children && <p>{children}</p>}
  </div>
);
function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header">
        <a href="/" className="brand" aria-label="MerchantReturns home">
          <img className="brand-lockup" src="/brand/logo-horizontal-forest.svg" alt="MerchantReturns" />
        </a>
        <nav
          onKeyDown={(e) => {
            if (e.key === "Escape") setMenu(false);
          }}
          className={menu ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          <div className="nav-group">
            <a href="/products">
              Products <CaretDown size={11} />
            </a>
            <div className="mega">
              <span className="eyebrow">FIVE PROPOSED MODULES</span>
              {modules.map((m, i) => (
                <a key={m.slug} href={`/products/${m.slug}`}>
                  <small>0{i + 1}</small>
                  <span>
                    <b>{m.name}</b>
                    <small>{m.short}</small>
                  </span>
                  <ArrowUpRight />
                </a>
              ))}
              <a href="/products">
                Explore the product suite <ArrowRight />
              </a>
            </div>
          </div>
          <a href="/platform">Platform</a>
          <a href="/solutions">Solutions</a>
          <a href="/pricing">Pricing</a>
          <a href="/resources">Journal</a>
          <a href="/about" className="extra-nav">
            Company
          </a>
          <a href="/sign-in" className="mobile-signin">
            Sign in preview
          </a>
        </nav>
        <div className="header-end">
          <Tag>CONCEPT PREVIEW</Tag>
          <a className="header-cta" href="/pilot">
            Discuss a pilot <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-button"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <List />}
          </button>
        </div>
      </header>
    </>
  );
}
function Footer() {
  return (
    <footer className="atelier-footer">
      <div className="footer-invitation">
        <div className="footer-closing-copy">
          <span className="eyebrow">THE NEXT CHAPTER</span>
          <h2>Every return has a story.<br /><em>Make the next step count.</em></h2>
          <a className="footer-case-link" href="/demo">Explore the synthetic case <ArrowUpRight size={23} /></a>
        </div>
        <a className="footer-pilot-label" href="/pilot">
          <span className="footer-label-top">MERCHANTRETURNS <ArrowUpRight size={22} /></span>
          <span className="footer-label-title">Start with one<br />considered pilot.</span>
          <span className="footer-label-data"><span><b>100</b>human-reviewed cases</span><span><b>01</b>apparel exception cohort</span></span>
          <span className="footer-label-bottom">Discuss a controlled pilot <ArrowRight size={18} /></span>
          <small>Proposed test · subject to fit and permission</small>
        </a>
      </div>
      <div className="footer-directory">
        <div>
          <a href="/" className="brand">
            <img className="brand-lockup" src="/brand/logo-horizontal-ivory.svg" alt="MerchantReturns" />
          </a>
          <p className="footer-brand-note">Policy, people and evidence.<br />A more considered approach to apparel return exceptions.</p>
          <span className="footer-concept-note"><span /> RESEARCH-STAGE CONCEPT</span>
          <Tag>CONCEPT 49 · NOT AN OPERATING PRODUCT</Tag>
        </div>
        <div>
          <span className="eyebrow">PRODUCTS</span>
          {modules.map((m) => (
            <a key={m.slug} href={`/products/${m.slug}`}>
              {m.name}
            </a>
          ))}
        </div>
        <div>
          <span className="eyebrow">EXPLORE</span>
          {[
            ["Why exceptions", "/why-exceptions"],
            ["Platform", "/platform"],
            ["Solutions", "/solutions"],
            ["Pricing hypotheses", "/pricing"],
            ["Synthetic demo", "/demo"],
            ["Evaluation method", "/evaluation"],
            ["Integrations", "/integrations"],
          ].map(([n, p]) => (
            <a key={p} href={p}>
              {n}
            </a>
          ))}
        </div>
        <div>
          <span className="eyebrow">COMPANY</span>
          {[
            ["About", "/about"],
            ["Trust & appeals", "/trust"],
            ["Journal", "/resources"],
            ["Policy matrix", "/resources/policy-matrix"],
            ["Contact", "/contact"],
            ["Request a demo", "/request-demo"],
            ["Sign in preview", "/sign-in"],
          ].map(([n, p]) => (
            <a key={p} href={p}>
              {n}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-signature" aria-hidden="true"><img src="/brand/wordmark-ivory.svg" alt="" /></div>
      <div className="footer-edition"><span>APPAREL EXCEPTIONS. HUMAN DECISIONS.</span><a href="#main">Back to top <ArrowUpRight size={16} /></a></div>
      <div className="footer-colophon">
        <span>© 2026 MerchantReturns · Original concept preview</span>
        <div>
          <a
            href={`${location.pathname}?motion=${new URLSearchParams(location.search).get("motion") === "off" ? "on" : "off"}`}
          >
            {new URLSearchParams(location.search).get("motion") === "off"
              ? "Enable motion"
              : "Reduce motion"}
          </a>
          <a href="/legal/privacy">Privacy</a>
          <a href="/legal/terms">Terms</a>
          <a href="/resources/build-notes">
            Preview boundaries <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
function PolicyCard({
  dark = false,
  condition = "Worn status remains uncertain",
}) {
  return (
    <div className={`policy-card ui-card ${dark ? "dark-card" : ""}`}>
      <div className="ui-top">
        <FileText size={19} />
        <span>POLICY SOURCE</span>
        <Tag>DEMO</Tag>
      </div>
      <div className="policy-rule">
        § 4.2 <span>Condition</span>
      </div>
      <p>
        Items must be <mark>unworn, unaltered and with original tags</mark> to
        be eligible under this fictional policy.
      </p>
      <div className="source-line">POL-APP-03 · v3 · 01 OCT 2026</div>
      <div className="status">
        <WarningCircle size={15} />
        <span>{condition}</span>
      </div>
    </div>
  );
}
function CustomerCard({ record = records[0] }) {
  return (
    <div className="customer-card ui-card">
      <div className="ui-top">
        <UserCircle size={22} />
        <span>CUSTOMER VIEW</span>
        <Tag>DEMO</Tag>
      </div>
      <h3>
        Let’s find your
        <br />
        next best step.
      </h3>
      <p>
        {record.id === "ER-122"
          ? "Your request is outside the standard window. A person will review your circumstances."
          : "Your request is within the return window. A person still needs to review the item’s condition."}
      </p>
      <blockquote>
        “I only tried it on. The fit is tighter than expected.”
      </blockquote>
      <div className="customer-item">
        <Img name="hero-sweater" alt="Illustrative cream sweater" />
        <div>
          <strong>{record.item}</strong>
          <small>
            Size {record.size} · {record.id} · Fictional
          </small>
        </div>
      </div>
      <a href="/trust/appeals" className="text-link">
        Ask for another review <ArrowUpRight size={15} />
      </a>
    </div>
  );
}
function Workflow({ compact = false }) {
  return (
    <div className={`workflow ${compact ? "compact" : ""}`}>
      <Tag />
      <div className="workflow-steps">
        {[
          ["01", "Request", "Fit / size issue", UserCircle],
          ["02", "Policy", "Condition uncertain", FileText],
          ["03", "CX review", "Human approval pending", ShieldCheck],
          ["04", "Inspection", "Not received", Package],
        ].map(([n, t, s, Icon], i) => (
          <div className={`workflow-step ${i === 2 ? "active" : ""}`} key={n}>
            <span className="step-number">{n}</span>
            <Icon size={28} weight="light" />
            <strong>{t}</strong>
            <span>{s}</span>
          </div>
        ))}
      </div>
      <div className="source-line">ER-118 · EACH HANDOFF HAS A NAMED OWNER</div>
    </div>
  );
}
function Report({ full = false }) {
  const counts = ["Pending review", "Blocked", "Completed", "Rejected"].map(
    (s) => ({ s, n: records.filter((r) => r.status === s).length }),
  );
  return (
    <div className="report ui-card">
      <div className="ui-top">
        <ChartBar size={20} />
        <span>COHORT OVERVIEW</span>
        <Tag>ILLUSTRATIVE</Tag>
      </div>
      <div className="report-total">
        <strong>10</strong>
        <span>
          fictional cases
          <br />
          No measured outcomes
        </span>
      </div>
      {counts.map(({ s, n }) => (
        <div className="bar-row" key={s}>
          <div>
            <span>{s}</span>
            <strong>{n}</strong>
          </div>
          <div className="bar-track">
            <div className="bar" style={{ width: `${n * 10}%` }} />
          </div>
        </div>
      ))}
      {full && (
        <p className="fine">
          This chart counts the ten seed fixtures. “Completed” means a fictional
          review was completed; no actual refund, exchange or message exists.
        </p>
      )}
      <div className="source-line">DEMO — SYNTHETIC DATA · n = 10</div>
    </div>
  );
}
function ModuleVisual({ index }) {
  return <RichModuleVisual index={index} />;
}
function PilotCTA() {
  return (
    <section className="pilot-banner reveal">
      <div>
        <span className="eyebrow">START SMALL. LEARN SOMETHING REAL.</span>
        <h2>
          One cohort.
          <br />
          <i>A considered next step.</i>
        </h2>
      </div>
      <div>
        <p>
          Explore a controlled, human-reviewed test of 100 apparel fit
          exceptions against your current workflow.
        </p>
        <Button href="/pilot">Discuss the pilot</Button>
        <span className="fine">
          $600 test hypothesis · No payment collected
        </span>
      </div>
    </section>
  );
}
function Home() {
  return (
    <>
      <VideoIntro />
      <section id="atelier-hero" tabIndex={-1} className="hero hero-cinema" aria-label="The story of return ER-118">
        <div className="hero-copy">
          <span className="eyebrow hero-reveal">THE MERCHANT ATELIER</span>
          <h1 className="hero-reveal">
            Every exception <br />
            deserves a<br />
            <em>
              considered <br />
              decision.
            </em>
          </h1>
          <p className="hero-reveal">
            A proposed exception desk for apparel CX teams.
            <br className="desktop" /> Bring policy, evidence and compatible
            alternatives
            <br className="desktop" /> into one human-reviewed decision.
          </p>
          <div className="hero-actions hero-reveal">
            <Button>Explore the demo</Button>
            <Button href="/pilot" light>
              Discuss a pilot
            </Button>
          </div>
          <div className="hero-principles hero-reveal">
            <span>Policy context</span>
            <span>Human approval</span>
            <span>Customer appeal</span>
          </div>
        </div>
        <div className="hero-scene">
          <div className="hero-halo" aria-hidden="true" />
          <Img
            name="hero-cutout"
            className="hero-garment"
            alt="A cream knit sweater suspended above a warm stone plinth — original illustrative imagery"
            fetchPriority="high"
          />
          <div className="floating-case hero-float ui-card">
            <Tag />
            <div className="case-title">
              Case ER-118 <ArrowUpRight size={14} />
            </div>
            <dl>
              <dt>Item</dt>
              <dd>Merino crew sweater</dd>
              <dt>Size</dt>
              <dd>M</dd>
              <dt>Reason</dt>
              <dd>Fit / size issue</dd>
              <dt>Status</dt>
              <dd className="orange">CX approval pending</dd>
            </dl>
          </div>
          <div className="floating-policy hero-float">
            <PolicyCard />
          </div>
          <div className="evidence-stack">
            <div className="evidence-card hero-float">
              <Tag>DEMO · ILLUSTRATIVE</Tag>
              <Img name="fabric" alt="Knit texture illustration" />
              <strong>01 / Customer evidence</strong>
              <small>Condition needs review</small>
            </div>
            <div className="evidence-card hero-float">
              <Tag>DEMO · ILLUSTRATIVE</Tag>
              <Img name="warehouse" alt="Warehouse inspection illustration" />
              <strong>02 / Warehouse event</strong>
              <small>Inspection not received</small>
            </div>
          </div>
          <div className="hero-resolution ui-card">
            <div className="hero-resolution-top"><UserCircle size={26} /><span>THE DECISION STAYS HUMAN</span><Tag>DEMO</Tag></div>
            <strong>Context gathered.<br /><em>Judgment belongs to you.</em></strong>
            <p>Condition uncertain. Inspection not received. Mira Chen, CX reviewer, decides the next step.</p>
            <a href="/demo">Review case ER-118 <ArrowUpRight size={17} /></a>
            <small>Approval pending · Customer appeal available</small>
          </div>
          <div className="hero-story-rail" aria-label="Three chapters: request, context, human review">
            <div className="hero-story-track"><i /></div>
            <div className="hero-chapters"><span>01 <b>The request</b></span><span>02 <b>The context</b></span><span>03 <b>Your decision</b></span></div>
            <a href="#decision-story" className="hero-scroll-cue">Scroll to unfold the case <ArrowDown size={13} /><span>Skip story ↗</span></a>
          </div>
        </div>
      </section>
      <div className="intro-strip">
        <span>
          <span className="status-dot" /> RESEARCH-STAGE CONCEPT
        </span>
        <span>
          Synthetic examples only. No operating product or live integrations.
        </span>
        <a href="/resources/build-notes">
          Read the boundaries <ArrowUpRight size={13} />
        </a>
      </div>
      <section className="decision-section" id="decision-story">
        <Img className="fabric-bg" name="fabric" alt="" loading="lazy" />
        <div className="decision-heading reveal">
          <span className="eyebrow">02 / EVIDENCE ALIGNS</span>
          <h2>
            From uncertainty
            <br />
            to <i>a human decision.</i>
          </h2>
          <p>
            Bring together policy, product context and source evidence —
            <br className="desktop" /> so your team can consider the whole case.
          </p>
        </div>
        <div className="decision-grid">
          <div className="reveal" data-direction="left">
            <PolicyCard dark />
          </div>
          <div className="decision-ladder reveal">
            {[
              ["Relevant clause", "Policy §4.2 found", CheckCircle],
              ["Evidence review", "Condition remains uncertain", WarningCircle],
              [
                "Compatible alternative",
                "Size L · 4 mock units",
                ArrowsLeftRight,
              ],
              ["Human decision", "CX approval pending", UserCircle],
            ].map(([title, sub, Icon], i) => (
              <React.Fragment key={title}>
                <div
                  className={i === 3 ? "decision-node last" : "decision-node"}
                >
                  <Icon size={24} />
                  <div>
                    <strong>{title}</strong>
                    <small>{sub}</small>
                  </div>
                  {i === 3 ? <Clock size={18} /> : null}
                </div>
                {i < 3 && <ArrowDown className="ladder-arrow" size={15} />}
              </React.Fragment>
            ))}
          </div>
          <div className="reveal" data-direction="right">
            <CustomerCard />
          </div>
        </div>
        <div className="dark-bottom">
          <span>No automatic refund. No opaque fraud score.</span>
          <a href="/trust/appeals">
            A visible route to appeal <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
      <section className="baseline section">
        <SectionHead
          kicker="03 / START WITH WHAT EXISTS"
          title={
            <>
              Self-service is the baseline.
              <br />
              <i>Exceptions are the question.</i>
            </>
          }
        >
          Shopify supports returns. Specialist apps recommend exchanges. Our
          proposed test starts where an apparel case still needs judgment.
        </SectionHead>
        <div className="baseline-grid">
          <article className="baseline-card reveal">
            <span className="number">01</span>
            <FileText size={32} weight="light" />
            <h3>Native self-service</h3>
            <p>
              A return request, merchant policy and an established approval
              flow.
            </p>
            <a
              href="https://help.shopify.com/en/manual/orders/refunds-returns/self-serve-returns"
              target="_blank"
              rel="noreferrer"
            >
              Shopify’s existing capability <ArrowUpRight size={14} />
            </a>
          </article>
          <article className="baseline-card reveal">
            <span className="number">02</span>
            <ArrowsLeftRight size={32} weight="light" />
            <h3>Specialist returns tools</h3>
            <p>Exchange recommendations and workflows are already available.</p>
            <a
              href="https://www.loopreturns.com/"
              target="_blank"
              rel="noreferrer"
            >
              Explore Loop <ArrowUpRight size={14} />
            </a>
          </article>
          <article className="baseline-card highlighted reveal">
            <span className="number">03</span>
            <WarningCircle size={32} weight="light" />
            <h3>The unresolved exception</h3>
            <p>
              The window is clear. The condition is not. Who decides what
              happens next?
            </p>
            <a href="/compare/native-and-specialist-returns">
              See the proposed gap <ArrowUpRight size={14} />
            </a>
          </article>
        </div>
      </section>
      <section className="suite-section" id="suite">
        <div className="suite-top section">
          <SectionHead
            kicker="04 / FIVE FOCUSED PRODUCTS"
            title={
              <>
                Five focused products.
                <br />
                <i>One shared case.</i>
              </>
            }
          >
            Five separate value hypotheses. Begin with Returns Desk, then earn
            the right to expand.
          </SectionHead>
          <a className="text-link skip-suite" href="#warehouse">
            Skip product story <ArrowDown size={14} />
          </a>
        </div>
        <div className="suite-viewport">
          <div className="suite-track">
            {modules.map((m, i) => (
              <a
                href={`/products/${m.slug}`}
                className="suite-card"
                key={m.slug}
              >
                <ModuleVisual index={i} />
                <div className="suite-card-copy">
                  <span className="eyebrow">
                    0{i + 1} / {i === 0 ? "FIRST PILOT" : "PROPOSED MODULE"}
                  </span>
                  <h3>
                    {m.name}
                    <ArrowUpRight size={23} />
                  </h3>
                  <p>{m.short}</p>
                  <small>{m.metric}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="suite-progress">
          <span>POLICY</span>
          <div />
          <span>LEARNING</span>
        </div>
      </section>
      <HandoffSection id="warehouse" />
      <JourneyScene />
      <section className="workbench-section section">
        <SectionHead
          kicker="06 / A CLOSER LOOK"
          title={
            <>
              The whole case.
              <br />
              <i>In one clear view.</i>
            </>
          }
        >
          Intake, policy, uncertainty and the person responsible for the next
          decision. Explore a real interface with fictional records.
        </SectionHead>
        <div className="workbench-preview reveal">
          <div className="workbench-top">
            <span>
              <Img name="brand-mark" alt="" /> MerchantReturns / Exception desk
            </span>
            <Tag />
          </div>
          <div className="workbench-body">
            <div className="preview-queue">
              <span className="eyebrow">CASE QUEUE / 10</span>
              {records.slice(0, 5).map((r) => (
                <a
                  key={r.id}
                  href={`/demo?case=${r.id}`}
                  className={r.id === "ER-118" ? "selected" : ""}
                >
                  <span>
                    <b>{r.id}</b>
                    <small>{r.item}</small>
                  </span>
                  <Status value={r.status} />
                </a>
              ))}
            </div>
            <div className="preview-detail">
              <div className="detail-heading">
                <div>
                  <span className="eyebrow">POLICY-GROUNDED CASE</span>
                  <h3>
                    ER-118 <span>Merino crew sweater</span>
                  </h3>
                </div>
                <Tag>CX REVIEW</Tag>
              </div>
              <CaseLedger compact />
              <div className="preview-bottom">
                <span>
                  <WarningCircle />
                  Worn status uncertain. Human approval required.
                </span>
                <Button>Open the case</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GarmentLearning />
      <section className="section evaluation-section">
        <SectionHead
          kicker="08 / PROVE THE INCREMENT"
          title={
            <>
              A better decision deserves
              <br />
              <i>a fair comparison.</i>
            </>
          }
        >
          Measure against your existing native or specialist workflow. No uplift
          is claimed in this preview.
        </SectionHead>
        <div className="metric-grid">
          {[
            [
              "01",
              "Resolution time",
              "Minutes from intake to reviewed decision.",
            ],
            [
              "02",
              "Exchange acceptance",
              "Accepted compatible offers / offers made.",
            ],
            [
              "03",
              "Net margin",
              "After refunds, handling and logistics costs.",
            ],
            [
              "04",
              "Customer experience",
              "Complaints, CSAT and reviewer overrides.",
            ],
          ].map(([n, t, d]) => (
            <article className="metric-card reveal" key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
              <div className="metric-empty">
                <span>Baseline</span>
                <span>To measure</span>
              </div>
            </article>
          ))}
        </div>
        <a className="text-link" href="/evaluation">
          Read the validation method <ArrowUpRight />
        </a>
      </section>
      <PilotCTA />
      <section className="section faq">
        <SectionHead
          kicker="A FEW THINGS, CLEARLY"
          title="Before the first case."
        />
        <div>
          {[
            [
              "Is this a live product?",
              "No. This is an isolated concept preview with synthetic records. There are no connected stores, real refunds or customer messages.",
            ],
            [
              "What makes the proposed pilot different?",
              "It tests policy-grounded exception handling in one apparel fit cohort. Generic exchange recommendations are not unique; the test must demonstrate incremental value over the existing workflow.",
            ],
            [
              "Who decides eligibility and refunds?",
              "The merchant’s authorized reviewer. This preview never automatically determines eligibility or executes refunds.",
            ],
            [
              "Can a customer challenge a decision?",
              "Yes. The demo includes a plain-language appeal route and human re-review, including for suspected abuse.",
            ],
            [
              "What does the pilot cost?",
              "The proposed test hypothesis is $600 for 100 human-reviewed cases. It is not an active offer, accepted price or checkout.",
            ],
          ].map(([q, a]) => (
            <details className="reveal" key={q}>
              <summary>
                {q}
                <Plus size={18} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
function Status({ value }) {
  return (
    <span className={`status-pill ${value.toLowerCase().replaceAll(" ", "-")}`}>
      <span />
      {value}
    </span>
  );
}
function AtlasVisual({ type = "map" }) {
  if (type === "policy")
    return (
      <div className="atlas-detail">
        <PolicyCard />
        <div className="atlas-label">
          <ShieldCheck size={22} />
          Merchant authority stays visible
        </div>
      </div>
    );
  if (type === "customer") return <CustomerCard />;
  if (type === "report") return <Report full />;
  if (type === "comparison")
    return (
      <div className="comparison-visual">
        <Tag>RESEARCH-STAGE HYPOTHESIS</Tag>
        {[
          ["Shopify", "Native returns & merchant review"],
          ["Specialist apps", "Exchange workflows & recommendations"],
          ["MerchantReturns", "Proposed narrow exception test"],
        ].map(([t, d], i) => (
          <div key={t}>
            <span>0{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
            {i === 2 ? <WarningCircle /> : <CheckCircle />}
          </div>
        ))}
      </div>
    );
  if (type === "roles")
    return (
      <div className="roles-visual">
        {[
          ["CX / returns", "Policy & budget", ShieldCheck],
          ["Merchandising", "Approved alternatives", ArrowsLeftRight],
          ["3PL operations", "Inspection evidence", Package],
          ["Shopify admin", "App permissions", LockKey],
        ].map(([t, d, Icon]) => (
          <div className="ui-card" key={t}>
            <Icon size={30} weight="light" />
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    );
  return <AtlasWorld />;
}

function Products() {
  return (
    <>
      <section className="section page-intro">
        <span className="eyebrow">THE PRODUCT SUITE</span>
        <h1>
          Five focused products.
          <br />
          <em>One shared case.</em>
        </h1>
        <p>
          Separate paid-offer concepts, each measured against native
          self-service. Begin with a narrow policy exception pilot.
        </p>
      </section>
      <JourneyScene compact />
      <section className="product-grid section">
        {modules.map((m, i) => (
          <a
            className="product-tile reveal"
            href={`/products/${m.slug}`}
            key={m.slug}
          >
            <ModuleVisual index={i} />
            <div>
              <span className="eyebrow">
                0{i + 1} / {m.state}
              </span>
              <h2>
                {m.name}
                <ArrowUpRight />
              </h2>
              <p>{m.description}</p>
              <small>{m.price} · test hypothesis</small>
            </div>
          </a>
        ))}
      </section>
      <PilotCTA />
    </>
  );
}
function ProductPage({ module: m }) {
  const i = modules.indexOf(m);
  return (
    <>
      <section className="atlas-hero section">
        <div className="reveal">
          <a className="back-link" href="/products">
            <ArrowLeft size={14} /> All products
          </a>
          <span className="eyebrow">
            0{i + 1} / {m.name.toUpperCase()} · PROPOSED MODULE
          </span>
          <h1>
            {m.verb.split(". ").map((t, j) => (
              <React.Fragment key={t}>
                {j > 0 && <br />}
                {j === 1 ? (
                  <em>{t}</em>
                ) : (
                  t + (j === 0 && !t.endsWith(".") ? "." : "")
                )}
              </React.Fragment>
            ))}
          </h1>
          <p>{m.description}</p>
          <div className="hero-actions">
            <Button>Explore the synthetic case</Button>
            <Button href="/pilot" light>
              Discuss a pilot
            </Button>
          </div>
          <span className="fine">{m.price} · Pricing is a test hypothesis</span>
        </div>
        <div className="atlas-product-visual reveal" data-direction="right">
          {i === 3 ? <AtlasWorld inspection /> : <ModuleVisual index={i} />}
        </div>
      </section>
      {i === 3 ? (
        <HandoffSection missing />
      ) : (
        <section className="forest-section section">
          <SectionHead
            kicker="A WORKFLOW WITH BOUNDARIES"
            title="A clear owner at every step."
          >
            {m.boundary}
          </SectionHead>
          <div className="product-steps">
            {m.steps.map((s, k) => (
              <div className="reveal" key={s}>
                <span>0{k + 1}</span>
                <h3>{s}</h3>
                <small>
                  {
                    [
                      "Source intake",
                      "Linked context",
                      "Explicit uncertainty",
                      "Human authority",
                    ][k]
                  }
                </small>
                <ArrowRight />
              </div>
            ))}
          </div>
        </section>
      )}
      <ContextStory module={m} />
      <JourneyScene compact />
      {i === 4 ? (
        <GarmentLearning />
      ) : (
        <section className="section learning-section">
          <div className="reveal">
            <span className="eyebrow">MEASURE THIS MODULE SEPARATELY</span>
            <h2>
              Useful is a hypothesis.
              <br />
              <i>Evidence comes next.</i>
            </h2>
            <p>
              Track {m.metric.toLowerCase()} against a matched cohort using the
              merchant’s existing returns stack. Agree thresholds before the
              test; record counterexamples.
            </p>
            <Button href="/evaluation" light>
              See the measurement plan
            </Button>
          </div>
          <Report full />
        </section>
      )}
      <section className="section">
        <SectionHead
          kicker="CONNECTED, BUT SEPARATE"
          title="The rest of the case."
        />
        <div className="related-grid">
          {modules
            .filter((x) => x.slug !== m.slug)
            .map((x) => (
              <a href={`/products/${x.slug}`} key={x.slug}>
                <FileText size={27} weight="light" />
                <span className="eyebrow">PROPOSED MODULE</span>
                <h3>
                  {x.name}
                  <ArrowUpRight />
                </h3>
                <p>{x.short}</p>
              </a>
            ))}
        </div>
      </section>
      <PilotCTA />
    </>
  );
}
function ContentPage({ data }) {
  return (
    <>
      <section className="atlas-hero section">
        <div className="reveal">
          <span className="eyebrow">{data.eyebrow}</span>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
          <Button>Explore the synthetic case</Button>
        </div>
        <div className="reveal" data-direction="right">
          <AtlasVisual type={data.visual} />
        </div>
      </section>
      <section className="section content-chapters">
        {data.sections.map(([t, d], i) => (
          <article className="content-chapter reveal" key={t}>
            <span className="chapter-index">0{i + 1}</span>
            <div className="chapter-copy">
              <h2>{t}</h2>
              <p>{d}</p>
            </div>
            <ChapterVisual title={t} description={d} index={i} />
          </article>
        ))}
      </section>
      {data.visual === "comparison" && (
        <section className="section source-links">
          <span className="eyebrow">PRIMARY PRODUCT REFERENCES</span>
          <a
            href="https://help.shopify.com/en/manual/orders/refunds-returns/self-serve-returns"
            target="_blank"
            rel="noreferrer"
          >
            Shopify / Self-serve returns <ArrowUpRight />
          </a>
          <a
            href="https://www.loopreturns.com/"
            target="_blank"
            rel="noreferrer"
          >
            Loop / Returns & exchanges <ArrowUpRight />
          </a>
          <p>
            Reference capabilities are context, not a partnership or integration
            claim. Verify current plans and capabilities for a real pilot.
          </p>
        </section>
      )}
      <PilotCTA />
    </>
  );
}
function Pricing() {
  return (
    <>
      <section className="page-intro section">
        <span className="eyebrow">PRICING / TEST HYPOTHESES</span>
        <h1>
          Start with a question.
          <br />
          <em>Fund a controlled test.</em>
        </h1>
        <p>
          No accepted pricing, active checkout or live service is claimed.
          Validate the first cohort before expanding the scope.
        </p>
      </section>
      <section className="pricing-grid section">
        <article className="price-card featured reveal">
          <Tag>FIRST PILOT HYPOTHESIS</Tag>
          <h2>Returns Desk</h2>
          <div className="price">
            $600<span> / controlled pilot</span>
          </div>
          <p>
            100 human-reviewed apparel fit exceptions, compared with your
            existing workflow.
          </p>
          <ul>
            <li>
              <Check />
              One narrow exception cohort
            </li>
            <li>
              <Check />
              Policy & permission mapping
            </li>
            <li>
              <Check />
              Human review and visible appeal
            </li>
            <li>
              <Check />
              Matched-baseline measurement
            </li>
          </ul>
          <Button href="/pilot">Discuss pilot interest</Button>
          <small>No payment is collected in this preview.</small>
        </article>
        <article className="price-card reveal">
          <Tag>FUTURE VALIDATION HYPOTHESIS</Tag>
          <h2>After the pilot</h2>
          <div className="price">
            $250<span> / month</span>
          </div>
          <p>
            Plus a proposed $0.50 per exception above an included threshold.
            That threshold and scope are not yet defined.
          </p>
          <ul>
            <li>
              <Clock />
              Depends on measured value
            </li>
            <li>
              <Clock />
              Scope and volume to validate
            </li>
            <li>
              <Clock />
              Permissions before integration
            </li>
            <li>
              <Clock />
              No current subscription offer
            </li>
          </ul>
          <Button href="/evaluation" light>
            See the build gate
          </Button>
        </article>
      </section>
      <section className="section">
        <SectionHead
          kicker="FIVE SEPARABLE OFFERS"
          title="Pay for a defined question."
        />
        <div className="pricing-table table-scroll">
          <table>
            <thead>
              <tr>
                <th>Proposed module</th>
                <th>Measurement focus</th>
                <th>Test pricing</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((m) => (
                <tr key={m.slug}>
                  <td>
                    <a href={`/products/${m.slug}`}>
                      {m.name}
                      <ArrowUpRight size={14} />
                    </a>
                  </td>
                  <td>{m.metric}</td>
                  <td>{m.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="fine">
          Four module fees are intentionally unspecified. Each is a separate
          proposed test, not a bundled live plan. These are not Shopify or Loop
          prices.
        </p>
      </section>
      <PilotCTA />
    </>
  );
}
function LeadPage({ kind }) {
  const [result, setResult] = useState(false);
  const [error, setError] = useState("");
  const isContact = kind === "contact";
  return (
    <section className="section lead-layout">
      <div className="lead-story">
        <span className="eyebrow">
          {isContact
            ? "CONTACT / CONCEPT PREVIEW"
            : "A SMALL TEST. A MEANINGFUL ANSWER."}
        </span>
        <h1>
          {isContact ? (
            <>
              Let’s make the
              <br />
              <em>question clearer.</em>
            </>
          ) : (
            <>
              Your exceptions.
              <br />
              Your policy.
              <br />
              <em>A fair test.</em>
            </>
          )}
        </h1>
        <p>
          {isContact
            ? "Tell us about your workflow or a question about the preview. This local form lets you inspect the experience; it does not send a message."
            : "Explore a proposed 100-case, human-reviewed pilot for one apparel fit exception cohort."}
        </p>
        <div className="pilot-path">
          <span>
            01 <b>Map your baseline</b>
            <small>Current app stack & policy</small>
          </span>
          <span>
            02 <b>Choose the cohort</b>
            <small>Permissioned, anonymized history</small>
          </span>
          <span>
            03 <b>Agree a controlled test</b>
            <small>Budget owner & 3PL data access</small>
          </span>
          <span>
            04 <b>Review incremental value</b>
            <small>Build, pivot or stop</small>
          </span>
        </div>
        <Tag>PROPOSED $600 / 100 CASES · NO CHECKOUT</Tag>
      </div>
      <div className="form-card">
        <Tag>LOCAL PREVIEW · NOTHING IS SENT</Tag>
        <h2>
          {isContact ? "Start a conversation." : "Discuss pilot interest."}
        </h2>
        <p className="fine">
          Use fictional details to try the form. Do not submit customer records
          or sensitive information.
        </p>
        {result ? (
          <div className="form-result" role="status">
            <CheckCircle size={40} />
            <h3>Your preview is complete.</h3>
            <p>
              The form passed validation. Nothing was sent or stored. A live
              pilot request will require an agreed contact destination and
              privacy terms.
            </p>
            <button className="button" onClick={() => setResult(false)}>
              Try another preview <ArrowCounterClockwise />
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              if (!f.get("consent")) {
                setError("Please acknowledge the preview notice.");
                return;
              }
              setError("");
              setResult(true);
            }}
          >
            <div className="field-row">
              <label>
                Your name
                <input
                  required
                  name="name"
                  placeholder="Alex Taylor"
                  autoComplete="off"
                />
              </label>
              <label>
                Company
                <input
                  required
                  name="company"
                  placeholder="Fictional Apparel Co."
                  autoComplete="off"
                />
              </label>
            </div>
            <label>
              Work email
              <input
                type="email"
                required
                name="email"
                placeholder="alex@example.com"
                autoComplete="off"
              />
            </label>
            <label>
              Platform / returns app stack
              <input
                required
                name="stack"
                placeholder="e.g. Shopify + current returns app"
              />
            </label>
            <div className="field-row">
              <label>
                Monthly exceptions
                <select required name="volume" defaultValue="">
                  <option value="" disabled>
                    Select a bracket
                  </option>
                  <option>Under 100</option>
                  <option>100–499</option>
                  <option>500–1,999</option>
                  <option>2,000+</option>
                  <option>Not yet known</option>
                </select>
              </label>
              <label>
                Your role
                <select required name="role" defaultValue="">
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option>Returns / CX budget owner</option>
                  <option>Merchandising approver</option>
                  <option>3PL operations</option>
                  <option>Shopify admin / agency</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <label>
              Pilot interest
              <select name="interest">
                <option>Returns Desk · first controlled test</option>
                {modules.slice(1).map((m) => (
                  <option key={m.slug}>{m.name} · proposed module</option>
                ))}
                <option>Exploratory conversation</option>
              </select>
            </label>
            <label>
              What would make a test useful?
              <textarea
                name="message"
                rows="3"
                placeholder="Your exception cohort, baseline, or question. No real customer details."
              />
            </label>
            <label className="checkbox">
              <input type="checkbox" required name="consent" />
              <span>
                I understand this is a local concept preview. Nothing will be
                sent or stored. I have read the{" "}
                <a href="/legal/privacy">privacy notice</a>.
              </span>
            </label>
            {error && <p role="alert">{error}</p>}
            <button type="submit" className="button">
              Preview request <ArrowUpRight />
            </button>
            <span className="fine">
              No payment. No store connection. No actual submission.
            </span>
          </form>
        )}
      </div>
    </section>
  );
}
function Resources() {
  return (
    <>
      <section className="section page-intro">
        <span className="eyebrow">THE MERCHANT JOURNAL</span>
        <h1>
          Clarity starts
          <br />
          <em>with better questions.</em>
        </h1>
        <p>
          Field guides for a policy-sensitive returns workflow. Original
          research-stage thinking, with boundaries left visible.
        </p>
      </section>
      <section className="resource-grid section">
        {[
          [
            "fit-exception-map",
            "The fit-return exception map.",
            "A concrete path from request to human review.",
            "warehouse",
          ],
          [
            "pilot-method",
            "Measure the increment.",
            "A matched-baseline method for a controlled pilot.",
            "fabric",
          ],
          [
            "build-notes",
            "Inside Concept 49.",
            "The preview, the hypothesis and the next build gate.",
            "hero-sweater",
          ],
        ].map(([slug, title, desc, img], i) => (
          <a
            className="resource-card reveal"
            key={slug}
            href={`/resources/${slug}`}
          >
            <Img name={img} alt={`Illustrative image for ${title}`} />
            <span className="eyebrow">FIELD GUIDE / 0{i + 1}</span>
            <h2>
              {title}
              <ArrowUpRight />
            </h2>
            <p>{desc}</p>
          </a>
        ))}
      </section>
      <PilotCTA />
    </>
  );
}
function Auth() {
  return (
    <section className="auth-layout">
      <div className="auth-art">
        <Img name="fabric" alt="Dark forest knit fabric" />
        <h2>
          A considered
          <br />
          <i>place to work.</i>
        </h2>
        <p>Policy. Evidence. Human judgment.</p>
      </div>
      <div className="auth-card">
        <Tag>CONCEPT PREVIEW</Tag>
        <h1>Welcome back.</h1>
        <p>
          The merchant workspace is a design preview. No live accounts or
          password authentication exist.
        </p>
        <div className="auth-note">
          <LockKey size={24} />
          <span>
            Explore the synthetic workspace without entering credentials.
          </span>
        </div>
        <Button>Open demo workspace</Button>
        <a href="/pilot" className="text-link">
          Interested in pilot access? <ArrowUpRight />
        </a>
        <a href="/access-help">Access help & preview boundaries</a>
      </div>
    </section>
  );
}
function Legal({ type }) {
  const privacy = type === "privacy";
  return (
    <section className="section legal">
      <span className="eyebrow">CONCEPT PREVIEW / DRAFT NOTICE</span>
      <h1>{privacy ? "Privacy notice." : "Preview terms."}</h1>
      <p className="lead">
        This notice describes the local frontend preview, not an operating
        commercial service. A production legal entity, contact and final terms
        must be established before launch.
      </p>
      {(privacy
        ? [
            [
              "What this preview processes",
              "The demo uses ten fictional records. Case interactions exist in browser memory and reset on reload. Form entries are validated locally; they are not submitted, stored or sent to a CRM.",
            ],
            [
              "Analytics and external links",
              "No analytics SDK or tracking service is connected. Linked third-party sites apply their own privacy terms. Locally bundled fonts and images are served with the preview. The local development server may produce technical request logs.",
            ],
            [
              "Before a real pilot",
              "Agree data-controller roles, lawful permission, retention and deletion, access controls, data-processing terms and a contact for rights requests. Use an anonymized historical cohort with explicit merchant and 3PL rights. Do not enter real order or customer data here.",
            ],
          ]
        : [
            [
              "Use of the preview",
              "Use this interface to evaluate proposed workflows with synthetic information only. It does not operate a store, process returns, make eligibility decisions, collect payments or send messages.",
            ],
            [
              "Illustrative material and pricing",
              "All sample records, warehouse events, counts and imagery are fictional or illustrative. Pricing is a validation hypothesis, not an active offer. There are no guaranteed outcomes, customers, partner endorsements or certifications.",
            ],
            [
              "Future agreement",
              "A real pilot would require agreed scope, budget, policy authority, data permissions, human approval, acceptance and stop criteria, and final legal terms. This preview does not create such an agreement.",
            ],
          ]
      ).map(([t, d]) => (
        <article key={t}>
          <h2>{t}</h2>
          <p>{d}</p>
        </article>
      ))}
      <a className="text-link" href="/contact">
        View the contact preview <ArrowUpRight />
      </a>
    </section>
  );
}
function Demo() {
  const [rows, setRows] = useState(records.map((r) => ({ ...r })));
  const [selected, setSelected] = useState(
    new URLSearchParams(location.search).get("case") || "ER-118",
  );
  const [filter, setFilter] = useState("All cases");
  const [query, setQuery] = useState("");
  const [windowDays, setWindowDays] = useState(30);
  const [tab, setTab] = useState("Case");
  const [note, setNote] = useState("");
  const [feedback, setFeedback] = useState("");
  const [inspections, setInspections] = useState({});
  const [appeals, setAppeals] = useState({});
  const [appealText, setAppealText] = useState("");
  const inspection = !!inspections[selected];
  const appeal = !!appeals[selected];
  const r = rows.find((r) => r.id === selected) || rows[0];
  const filtered = rows.filter(
    (r) =>
      (filter === "All cases" || r.status === filter) &&
      (r.id + " " + r.item + " " + r.reason)
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const act = (action) => {
    if (!note.trim()) {
      setFeedback("Add a reviewer rationale before recording a decision.");
      return;
    }
    setRows(
      rows.map((x) =>
        x.id === r.id
          ? {
              ...x,
              status:
                action === "Approve"
                  ? "Completed"
                  : action === "Reject alternative"
                    ? "Rejected"
                    : "Pending review",
              rationale: note,
              lastAction: action,
            }
          : x,
      ),
    );
    setFeedback(
      `${action} recorded for ${r.id} in this demo only. No refund, exchange or message was sent.`,
    );
  };
  const reset = () => {
    setRows(records.map((r) => ({ ...r })));
    setSelected("ER-118");
    setNote("");
    setFeedback("Demo reset to the ten original fictional records.");
    setInspections({});
    setAppeals({});
    setAppealText("");
    setWindowDays(30);
  };
  const exportDemo = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob(
        [
          JSON.stringify(
            {
              label: "DEMO — SYNTHETIC DATA",
              records: rows,
              policy: "POL-APP-03",
              externalActions: false,
            },
            null,
            2,
          ),
        ],
        { type: "application/json" },
      ),
    );
    a.download = "merchantreturns-synthetic-fixtures.json";
    a.click();
    URL.revokeObjectURL(a.href);
    setFeedback(
      "Ten synthetic records exported. No real customer information is included.",
    );
  };
  return (
    <section className="demo-shell">
      <div className="demo-banner">
        <Tag />
        <span>
          CONCEPT PREVIEW · Fictional merchant: Northline Atelier · Local
          changes only
        </span>
        <a href="/resources/build-notes">
          Preview boundaries <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="demo-title">
        <div>
          <span className="eyebrow">MERCHANT WORKSPACE</span>
          <h1>
            Exception desk<span>10 cases</span>
          </h1>
        </div>
        <div>
          <button onClick={reset}>
            <ArrowCounterClockwise />
            Reset demo
          </button>
          <button onClick={exportDemo}>
            <Export />
            Export fixtures
          </button>
        </div>
      </div>
      <div className="demo-tabs">
        {["Case", "Customer view", "Report"].map((t) => (
          <button
            key={t}
            className={tab === t ? "active" : ""}
            onClick={() => {
              setTab(t);
              setFeedback("");
            }}
          >
            {t}
          </button>
        ))}
        <label className="policy-control">
          Demo window
          <select
            aria-label="Demo policy window"
            value={windowDays}
            onChange={(e) => setWindowDays(Number(e.target.value))}
          >
            <option value={30}>30 days · source v3</option>
            <option value={14}>14 days · local override</option>
            <option value={45}>45 days · local override</option>
          </select>
        </label>
      </div>
      {tab === "Case" ? (
        <div className="demo-layout">
          <aside className="case-queue" data-lenis-prevent>
            <label className="search">
              <MagnifyingGlass />
              <input
                aria-label="Search cases"
                placeholder="Search cases or items"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <select
              aria-label="Filter case status"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {[
                "All cases",
                "Pending review",
                "Blocked",
                "Completed",
                "Rejected",
              ].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <div className="queue-count">
              {filtered.length} of 10 synthetic cases
            </div>
            {filtered.length ? (
              filtered.map((x) => (
                <button
                  key={x.id}
                  onClick={() => {
                    setSelected(x.id);
                    setNote("");
                    setFeedback("");
                    setAppealText("");
                  }}
                  className={`queue-record ${x.id === r.id ? "selected" : ""}`}
                >
                  <div>
                    <strong>{x.id}</strong>
                    <Status value={x.status} />
                  </div>
                  <span>{x.item}</span>
                  <small>
                    {x.reason} · {x.owner}
                  </small>
                </button>
              ))
            ) : (
              <p className="empty-state">
                No cases match. Try a different item or status.
              </p>
            )}
          </aside>
          <div className="case-detail">
            <div className="case-detail-header">
              <div>
                <span className="eyebrow">
                  {r.sku} · FICTIONAL ORDER ORD-{r.id.slice(3)}
                </span>
                <h2>
                  {r.id}
                  <span>{r.item}</span>
                </h2>
              </div>
              <Status value={r.status} />
            </div>
            <div className="case-meta">
              <div>
                <small>REQUEST REASON</small>
                <strong>{r.reason}</strong>
              </div>
              <div>
                <small>REVIEW OWNER</small>
                <strong>{r.owner}</strong>
              </div>
              <div>
                <small>INTAKE / FICTIONAL</small>
                <strong>{r.date}</strong>
              </div>
            </div>
            <div className="window-evidence">
              <Clock size={17} />
              <div>
                <strong>
                  {(r.id === "ER-122" ? 38 : Number(r.date.slice(8, 10)) - 12) >
                  windowDays
                    ? "Outside the simulated window — exception review"
                    : `Within the fictional ${windowDays}-day window`}
                </strong>
                <span>
                  §4.1 ·{" "}
                  {r.id === "ER-122"
                    ? "Delivered 20 Sep · Requested 28 Oct · 38 days"
                    : "Delivered 12 Oct · Requested " +
                      r.date.slice(8, 10) +
                      " Oct · " +
                      (Number(r.date.slice(8, 10)) - 12) +
                      " days"}
                  .{" "}
                  {windowDays !== 30
                    ? ` Local ${windowDays}-day override; source policy remains 30 days.`
                    : null}{" "}
                  This alone does not establish eligibility.
                </span>
              </div>
            </div>
            <div className="case-evidence-grid">
              <div>
                <PolicyCard condition={r.condition} />
                <div className="uncertainty-box">
                  <WarningCircle />
                  <div>
                    <strong>{r.condition}</strong>
                    <p>
                      No automatic eligibility decision. Merchant review
                      required.
                    </p>
                  </div>
                </div>
              </div>
              <div className="evidence-pane ui-card">
                <div className="ui-top">
                  <Scan size={18} />
                  <span>SOURCE EVIDENCE</span>
                  <Tag>DEMO</Tag>
                </div>
                <Img
                  name="hero-sweater"
                  alt="Illustrative cream sweater, not a real customer photo"
                />
                <small>
                  IMG-{r.id} · Illustrative garment, not proof of condition.
                </small>
                <dl>
                  <dt>Source</dt>
                  <dd>Fictional intake form</dd>
                  <dt>Original size</dt>
                  <dd>{r.size}</dd>
                  <dt>Policy reference</dt>
                  <dd>{r.source}</dd>
                </dl>
                <a href="/resources/policy-matrix" className="text-link">
                  Read the full policy matrix <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
            <div className="recommendation ui-card">
              <div className="ui-top">
                <ArrowsLeftRight />
                <span>PROPOSED NEXT STEP</span>
                <Tag>REVIEW REQUIRED</Tag>
              </div>
              <h3>
                {r.stock > 0
                  ? "Compatible alternative for consideration"
                  : "No compatible alternative available"}
              </h3>
              <div className="compatibility-row">
                <span>
                  Original size <b>{r.size}</b>
                </span>
                <ArrowRight />
                <span>
                  Alternative{" "}
                  <b>{r.id === "ER-118" ? "L" : "Reviewer selection"}</b>
                </span>
                <span>
                  Mock stock <b>{r.stock} units</b>
                </span>
              </div>
              <p>
                {r.stock > 0
                  ? "Size, stock and merchandising rules must pass. An exchange remains subject to merchant approval."
                  : "This recommendation fails. Do not suggest an unavailable or unapproved exchange; route for human refund review."}
              </p>
            </div>
            <div className="warehouse-event">
              <Package size={24} />
              <div>
                <strong>
                  Warehouse event:{" "}
                  {inspection
                    ? "Simulated inspection received"
                    : "inspection not received"}
                </strong>
                <small>
                  {inspection
                    ? "DEMO event · 28 Oct 2026, 12:00 · Condition still requires review."
                    : "No item receipt, inspection or disposition is inferred."}
                </small>
              </div>
              <button
                onClick={() =>
                  setInspections({ ...inspections, [selected]: !inspection })
                }
              >
                {inspection ? "Clear mock event" : "Simulate inspection"}
              </button>
            </div>
            <div className="review-panel">
              {r.rationale && (
                <div className="review-history">
                  <Tag>DEMO REVIEW RECORD</Tag>
                  <p>
                    <strong>
                      {r.lastAction} · {r.owner}
                    </strong>
                    <br />
                    {r.rationale}
                  </p>
                </div>
              )}
              <div>
                <span className="eyebrow">
                  HUMAN REVIEW / {r.owner.toUpperCase()}
                </span>
                <h3>The decision stays with you.</h3>
                <p>Next action: {r.next}</p>
              </div>
              <label>
                Reviewer rationale
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Explain the policy, evidence and reason for your decision. Demo only."
                  rows="3"
                />
              </label>
              <div className="review-actions">
                <button
                  className="button"
                  disabled={r.stock === 0}
                  onClick={() => act("Approve")}
                >
                  Approve proposal <Check size={17} />
                </button>
                <button onClick={() => act("Reject alternative")}>
                  Reject alternative
                </button>
                <button onClick={() => act("Escalate")}>
                  Escalate for review
                </button>
              </div>
              <small>
                Records a fictional review only. It never executes a refund,
                exchange or customer message.
              </small>
            </div>
          </div>
        </div>
      ) : tab === "Customer view" ? (
        <div className="customer-demo">
          <div>
            <span className="eyebrow">CUSTOMER-FACING CLARITY / {r.id}</span>
            <h2>
              A person will
              <br />
              <i>review your request.</i>
            </h2>
            <p>
              Your request has been recorded. Eligibility and any refund or
              exchange still need merchant approval. You can explain your
              circumstances or ask for a second review.
            </p>
            <Tag>DEMO · NO CUSTOMER MESSAGE SENT</Tag>
            <div className="appeal-form">
              <h3>Ask for another review.</h3>
              <p>
                This includes decisions involving suspected abuse. There is no
                opaque fraud score.
              </p>
              {appeal ? (
                <div role="status" className="appeal-confirm">
                  <CheckCircle />
                  Demo appeal recorded for human re-review. Nothing was sent.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAppeals({ ...appeals, [selected]: true });
                  }}
                >
                  <label>
                    Your explanation
                    <textarea
                      required
                      rows="4"
                      value={appealText}
                      onChange={(e) => setAppealText(e.target.value)}
                      placeholder="Use a fictional explanation. Do not include sensitive details."
                    />
                  </label>
                  <button className="button">
                    Record demo appeal <ArrowUpRight />
                  </button>
                </form>
              )}
            </div>
          </div>
          <CustomerCard record={r} />
        </div>
      ) : (
        <div className="demo-report">
          <Report full />
          <div>
            <span className="eyebrow">A REPORT, NOT AN ROI CLAIM</span>
            <h2>
              Know what the
              <br />
              <i>sample can tell you.</i>
            </h2>
            <p>
              The chart shows the original ten fixtures. Local review actions do
              not represent measured commercial performance.
            </p>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Evaluation measure</th>
                    <th>Baseline</th>
                    <th>Pilot</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Resolution minutes",
                    "Exchange acceptance",
                    "Refund cost",
                    "Net margin",
                    "Complaint rate",
                    "CSAT",
                    "Reviewer overrides",
                  ].map((m) => (
                    <tr key={m}>
                      <td>{m}</td>
                      <td>Not measured</td>
                      <td>Not measured</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a href="/evaluation" className="text-link">
              Read the metric definitions <ArrowUpRight />
            </a>
          </div>
        </div>
      )}
      {feedback && (
        <div className="demo-feedback" role="status">
          <WarningCircle size={20} />
          {feedback}
          <button aria-label="Dismiss notice" onClick={() => setFeedback("")}>
            <X />
          </button>
        </div>
      )}
    </section>
  );
}
function NotFound() {
  return (
    <section className="section page-intro">
      <span className="eyebrow">404 / NOT IN THE CASE FILE</span>
      <h1>
        Let’s find
        <br />
        <em>your way back.</em>
      </h1>
      <p>This page does not exist in the preview.</p>
      <Button href="/">Return home</Button>
    </section>
  );
}
export function App() {
  const root = useRef();
  const path = location.pathname.replace(/\/$/, "") || "/";
  useEffect(() => {
    document.title = `${path === "/demo" ? "Synthetic exception desk" : path === "/products" ? "Product suite" : modules.find((m) => path === `/products/${m.slug}`)?.name || pages[path]?.title || "Considered return decisions"} · MerchantReturns`;
    const reduced =
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      new URLSearchParams(location.search).get("motion") === "off";
    if (reduced || path === "/demo") return;
    const mm = gsap.matchMedia();
    const lenis = new Lenis({
      duration: 1.05,
      anchors: false,
      smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const enterFromFilm = () => {
      const target = document.querySelector("#atelier-hero");
      if (target) lenis.scrollTo(window.scrollY + target.getBoundingClientRect().top - document.querySelector(".header").offsetHeight, {
        duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    };
    window.addEventListener("merchantreturns:enter", enterFromFilm);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const ctx = gsap.context(() => {
      if (document.querySelector(".hero")) {
        gsap.from(".hero-reveal", {
          y: -32,
          opacity: 0,
          duration: 0.9,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: { trigger: ".hero", start: "top 60%", once: true },
        });
        gsap.from(".hero-scene", {
          y: -40, opacity: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: ".hero", start: "top 60%", once: true },
        });

      }
      gsap.utils.toArray(".reveal").forEach((el) => {
        const dir = el.dataset.direction;
        gsap.from(el, {
          opacity: 0,
          y: dir ? 0 : 30,
          x: dir === "left" ? -36 : dir === "right" ? 36 : 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });
      gsap.utils
        .toArray(
          ".journey-stages, .context-inputs, .context-outputs, .case-ledger tbody, .inspection-timeline",
        )
        .forEach((group) => {
          gsap.from(group.children, {
            y: 18,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 90%", once: true },
          });
        });
      gsap.utils.toArray(".bar").forEach((el) =>
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 95%", once: true },
        }),
      );
      if (document.querySelector(".decision-ladder"))
        gsap.from(".decision-node", {
          y: 18,
          opacity: 0,
          stagger: 0.18,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".decision-ladder",
            start: "top 85%",
            once: true,
          },
        });
      mm.add("(min-width: 901px) and (min-height: 700px)", () => {
        if (document.querySelector(".hero")) {
          // A reversible three-act scene. No autonomous decision is implied.
          const story = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
              trigger: ".hero", start: "top 88px", end: "+=1800",
              pin: true, scrub: 0.65, invalidateOnRefresh: true,
            },
          });
          gsap.set(".hero-garment", { transformOrigin: "50% 42%" });
          gsap.set(".hero-chapters span", { opacity: 0.35 });
          gsap.set(".hero-chapters span:first-child", { opacity: 1 });
          story
            .fromTo(".hero-garment", { scale: 1.06, xPercent: 0, yPercent: 0 }, { scale: 1.34, xPercent: -5, yPercent: 3, duration: 1.4 }, 0)
            .fromTo(".floating-case", { y: 0, autoAlpha: 1 }, { y: -18, autoAlpha: 0, duration: 0.6 }, 0.8)
            .fromTo(".floating-policy", { x: -85, y: 35, rotation: -9, autoAlpha: 0 }, { x: 0, y: 0, rotation: -3, autoAlpha: 1, duration: 0.8 }, 0.65)
            .fromTo(".evidence-card", { x: 85, y: 30, rotation: 6, autoAlpha: 0 }, { x: 0, y: 0, rotation: 0, autoAlpha: 1, stagger: 0.22, duration: 0.75 }, 0.9)
            .to(".hero-chapters span:first-child", { opacity: 0.35, duration: 0.2 }, 1)
            .to(".hero-chapters span:nth-child(2)", { opacity: 1, duration: 0.2 }, 1)
            .to(".hero-halo", { scale: 1.4, xPercent: 15, opacity: 0.8, duration: 1.5 }, 0.4)
            .to(".hero-garment", { scale: 0.9, xPercent: -14, yPercent: -8, duration: 1.3 }, 2)
            .to(".floating-policy", { autoAlpha: 0, x: -35, y: -15, duration: 0.6 }, 2.1)
            .to(".evidence-card", { autoAlpha: 0, x: 35, stagger: 0.12, duration: 0.6 }, 2.15)
            .fromTo(".hero-resolution", { y: 75, scale: 0.94, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 0.9 }, 2.5)
            .to(".hero-chapters span:nth-child(2)", { opacity: 0.35, duration: 0.2 }, 2.65)
            .to(".hero-chapters span:last-child", { opacity: 1, duration: 0.2 }, 2.65)
            .fromTo(".hero-story-track i", { scaleX: 0 }, { scaleX: 1, duration: 3.8, ease: "none" }, 0);
        }
        const track = document.querySelector(".suite-track");
        if (track) {
          const travel = () => Math.max(0, track.scrollWidth - innerWidth + 80);
          gsap.to(track, {
            x: () => -travel(),
            ease: "none",
            scrollTrigger: {
              trigger: ".suite-viewport",
              start: "top 15%",
              end: () => `+=${travel() + 500}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      });
      mm.add("(max-width: 900px), (max-height: 699px)", () => {
        if (!document.querySelector(".hero")) return;
        // Short viewports keep native vertical flow; the cards reveal in reading order.
        gsap.fromTo(".hero-garment", { scale: 1.04 }, {
          scale: 1.16, ease: "none",
          scrollTrigger: { trigger: ".hero-scene", start: "top 85%", end: "bottom 25%", scrub: 0.5 },
        });
        gsap.utils.toArray(".hero-float, .hero-resolution").forEach((card, index) => {
          gsap.from(card, {
            y: 30, x: index % 2 ? -15 : 15, opacity: 0, duration: 0.8,
            scrollTrigger: { trigger: card, start: "top 94%", once: true },
          });
        });
        gsap.fromTo(".hero-story-track i", { scaleX: 0 }, { scaleX: 1, ease: "none",
          scrollTrigger: { trigger: ".hero-scene", start: "top 80%", end: "bottom 75%", scrub: true },
        });
      });
    }, root);
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("merchantreturns:enter", enterFromFilm);
      mm.revert();
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [path]);
  let page;
  const module = modules.find((m) => path === `/products/${m.slug}`);
  if (path === "/") page = <Home />;
  else if (path === "/demo") page = <Demo />;
  else if (path === "/products") page = <Products />;
  else if (module) page = <ProductPage module={module} />;
  else if (pages[path]) page = <ContentPage data={pages[path]} />;
  else if (path === "/pricing") page = <Pricing />;
  else if (["/pilot", "/request-demo", "/contact"].includes(path))
    page = <LeadPage kind={path.slice(1)} />;
  else if (path === "/resources") page = <Resources />;
  else if (path === "/sign-in") page = <Auth />;
  else if (path === "/access-help")
    page = (
      <ContentPage
        data={{
          eyebrow: "WORKSPACE ACCESS",
          title: "A demo you can enter. No credentials required.",
          intro:
            "Live authentication is not connected. Open the synthetic workspace to explore the current product concept.",
          visual: "policy",
          sections: [
            [
              "Explore safely",
              "Use the demo with fictional records. No sign-in, password, store permissions or payment information is required.",
            ],
            [
              "Discuss future access",
              "A controlled pilot would need explicit merchant consent, a budget owner and confirmed 3PL data rights. Use the local pilot form to inspect the planned intake.",
            ],
          ],
        }}
      />
    );
  else if (path === "/legal/privacy" || path === "/legal/terms")
    page = <Legal type={path.split("/").pop()} />;
  else page = <NotFound />;
  return (
    <div
      ref={root}
      className={path === "/" ? "has-video-intro" : undefined}
      data-motion={
        new URLSearchParams(location.search).get("motion") === "off"
          ? "off"
          : "on"
      }
    >
      <Header />
      <main id="main">{page}</main>
      {path != "/demo" && <Footer />}
    </div>
  );
}
