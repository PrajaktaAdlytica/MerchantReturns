export const modules = [
  {
    slug: "returns-desk",
    name: "Returns Desk",
    verb: "Find the clause. Keep the context.",
    short: "Policy-grounded resolution & escalation",
    description:
      "Bring the request, the policy and the unresolved question into one considered review. Start with fit-related exceptions that need a person, not another self-service form.",
    metric: "Resolution minutes · reviewer overrides",
    input: "Customer return intent + versioned merchant policy",
    output: "An evidence-linked recommendation for a named CX reviewer",
    boundary:
      "Policy matches do not establish eligibility. The merchant decides.",
    steps: [
      "Read the request",
      "Locate the policy clause",
      "Surface what is uncertain",
      "Assign the human decision",
    ],
    price: "$600 / 100 reviewed cases",
    state: "First pilot hypothesis",
    icon: "FileText",
  },
  {
    slug: "returns-review",
    name: "Returns Review",
    verb: "A better fit. With your approval.",
    short: "Merchant-approved exchange compatibility",
    description:
      "Evaluate an alternative against size, stock and merchandising rules. A compatible recommendation is useful only when your team is prepared to stand behind it.",
    metric: "Exchange acceptance · net margin · complaints",
    input: "Original SKU + mock inventory + approved merchandising rules",
    output: "A constrained shortlist for a merchandising approver",
    boundary:
      "Generic exchange suggestions already exist. Incremental compatibility value must be tested.",
    steps: [
      "Identify the fit issue",
      "Check size and inventory",
      "Apply merchandising rules",
      "Accept or reject the alternative",
    ],
    price: "Scope and fee to validate",
    state: "Proposed module",
    icon: "ArrowsLeftRight",
  },
  {
    slug: "returns-proof",
    name: "Returns Proof",
    verb: "See the evidence. Leave room for doubt.",
    short: "Photo, serial & exception evidence intake",
    description:
      "Keep photos, item details and customer context beside the question they help answer. Missing evidence stays visible; it never becomes an automatic rejection.",
    metric: "Evidence completion · review minutes · appeal rate",
    input: "Permissioned photos + item identifiers + customer explanation",
    output: "A source-indexed evidence packet for exception review",
    boundary:
      "Evidence collection is not abuse scoring. Customers can explain or appeal.",
    steps: [
      "Request relevant evidence",
      "Associate it with the item",
      "Mark gaps and ambiguity",
      "Send to the reviewer",
    ],
    price: "Scope and fee to validate",
    state: "Proposed module",
    icon: "Scan",
  },
  {
    slug: "returns-signal",
    name: "Returns Signal",
    verb: "Every handoff. A clearer owner.",
    short: "Warehouse inspection & disposition coordination",
    description:
      "Connect the customer conversation to what the warehouse actually sees. Distinguish requested, received and inspected states before proposing a disposition.",
    metric: "Inspection lag · disposition accuracy · handoff time",
    input: "Consented 3PL event + inspection notes + case reference",
    output: "A dated inspection signal and proposed disposition",
    boundary:
      "No receipt is inferred from a request. No carrier labels or physical actions are generated.",
    steps: [
      "Assign the handoff",
      "Wait for a warehouse event",
      "Review inspection evidence",
      "Approve the disposition",
    ],
    price: "Scope and fee to validate",
    state: "Proposed module",
    icon: "Package",
  },
  {
    slug: "returns-report",
    name: "Returns Report",
    verb: "Let every exception teach you something.",
    short: "Return reasons → catalog & quality feedback",
    description:
      "Turn carefully reviewed cases into questions your catalog and quality teams can act on. A fit pattern can inform a size guide; a repeated quality concern can prompt inspection.",
    metric: "Actioned feedback · repeat reasons · verified quality findings",
    input: "Reviewed reason taxonomy + SKU context + inspection evidence",
    output: "An illustrative catalog or quality review brief",
    boundary:
      "Sample records are not measured performance. Correlation is not a confirmed defect.",
    steps: [
      "Normalize reviewed reasons",
      "Group by product context",
      "Inspect the underlying cases",
      "Assign a catalog action",
    ],
    price: "Scope and fee to validate",
    state: "Proposed module",
    icon: "ChartBar",
  },
];
export const records = [
  {
    id: "ER-118",
    sku: "KN-204-M",
    item: "Merino crew sweater",
    size: "M",
    reason: "Fit / size issue",
    status: "Pending review",
    owner: "Mira Chen",
    date: "2026-10-28 09:20",
    source: "POL-APP-03 §4.2",
    condition: "Worn status uncertain",
    stock: 4,
    next: "Review customer evidence · 28 Oct, 14:00",
  },
  {
    id: "ER-119",
    sku: "KN-207-S",
    item: "Ribbed cardigan",
    size: "S",
    reason: "Sleeves too short",
    status: "Blocked",
    owner: "Arun Vale",
    date: "2026-10-28 09:35",
    source: "POL-APP-03 §4.2",
    condition: "Customer photo missing",
    stock: 0,
    next: "Request evidence in a real pilot · 28 Oct, 15:00",
  },
  {
    id: "ER-120",
    sku: "TR-110-M",
    item: "Tapered trousers",
    size: "M",
    reason: "Waist too narrow",
    status: "Completed",
    owner: "Nora Ellis",
    date: "2026-10-27 16:10",
    source: "POL-APP-03 §4.3",
    condition: "Tags present in fictional inspection",
    stock: 2,
    next: "Catalog fit note review · 29 Oct, 10:00",
  },
  {
    id: "ER-121",
    sku: "KN-204-L",
    item: "Merino crew sweater",
    size: "L",
    reason: "Fit / size issue",
    status: "Rejected",
    owner: "Mira Chen",
    date: "2026-10-27 15:15",
    source: "POL-APP-03 §4.3",
    condition: "Alternative fails approved size rule",
    stock: 0,
    next: "Alternative rejected; CX review open · 28 Oct, 14:30",
  },
  {
    id: "ER-122",
    sku: "SH-305-M",
    item: "Cotton poplin shirt",
    size: "M",
    reason: "Fit / size issue",
    status: "Pending review",
    owner: "Arun Vale",
    date: "2026-10-28 10:00",
    source: "POL-APP-03 §4.1",
    condition: "Return window requires exception",
    stock: 3,
    next: "Policy owner review · 28 Oct, 16:00",
  },
  {
    id: "ER-123",
    sku: "DR-402-S",
    item: "Column dress",
    size: "S",
    reason: "Length too long",
    status: "Blocked",
    owner: "Nora Ellis",
    date: "2026-10-28 10:10",
    source: "POL-APP-03 §4.2",
    condition: "Inspection not received",
    stock: 1,
    next: "Check warehouse event · 29 Oct, 09:00",
  },
  {
    id: "ER-124",
    sku: "KN-208-M",
    item: "Cotton knit vest",
    size: "M",
    reason: "Fit / size issue",
    status: "Completed",
    owner: "Mira Chen",
    date: "2026-10-26 14:00",
    source: "POL-APP-03 §4.3",
    condition: "Fictional compatible exchange reviewed",
    stock: 5,
    next: "Review sample customer clarity · 29 Oct, 11:00",
  },
  {
    id: "ER-125",
    sku: "TR-111-L",
    item: "Wide-leg trousers",
    size: "L",
    reason: "Length too long",
    status: "Pending review",
    owner: "Arun Vale",
    date: "2026-10-28 10:30",
    source: "POL-APP-03 §4.2",
    condition: "Alteration status uncertain",
    stock: 2,
    next: "Read evidence packet · 28 Oct, 15:30",
  },
  {
    id: "ER-126",
    sku: "SH-306-S",
    item: "Linen overshirt",
    size: "S",
    reason: "Shoulders too tight",
    status: "Rejected",
    owner: "Nora Ellis",
    date: "2026-10-27 11:45",
    source: "POL-APP-03 §4.3",
    condition: "No merchant-approved substitute",
    stock: 0,
    next: "Human refund review open · 29 Oct, 09:30",
  },
  {
    id: "ER-127",
    sku: "KN-209-L",
    item: "Fine knit polo",
    size: "L",
    reason: "Fit / size issue",
    status: "Pending review",
    owner: "Mira Chen",
    date: "2026-10-28 10:50",
    source: "POL-APP-03 §4.2",
    condition: "Tags not visible in mock photo",
    stock: 2,
    next: "Review uncertainty · 28 Oct, 16:30",
  },
];
export const pages = {
  "/platform": {
    eyebrow: "THE EXCEPTION WORKBENCH",
    title: "One case. All the context.",
    intro:
      "Policy, evidence, people and inspection signals belong in one legible decision trail.",
    visual: "map",
    sections: [
      [
        "A record, not another generic CRM",
        "The workbench exposes the request source, policy version, unresolved exception, named reviewer and dated next action. ER-118 carries one question through every handoff.",
      ],
      [
        "Authority stays with the merchant",
        "The CX lead owns policy and budget. Merchandising approves alternatives. The 3PL contributes inspection evidence. The Shopify admin authorizes any future app access.",
      ],
      [
        "Built to learn before it connects",
        "This preview uses synthetic fixtures, a configurable policy matrix, uncertainty states, a compatible shortlist and simulated warehouse events. There are no live Shopify APIs, refunds, labels or customer messages.",
      ],
    ],
  },
  "/solutions": {
    eyebrow: "FOR APPAREL TEAMS",
    title: "Different responsibilities. One considered decision.",
    intro:
      "Start with one fit-related exception segment, and give each person the context their decision needs.",
    visual: "roles",
    sections: [
      [
        "Returns & CX managers",
        "Own the policy workflow, budget, human review and customer explanation. Evaluate whether a controlled exception pilot beats the current workflow.",
      ],
      [
        "Merchandising approvers",
        "Define compatible size, inventory and product rules. Reject an alternative that fails those rules, even when a generic recommendation would suggest it.",
      ],
      [
        "3PL operations & Shopify admins",
        "Operations provides authorized inspection signals. The admin verifies API plans and app permissions before integration work begins.",
      ],
    ],
  },
  "/why-exceptions": {
    eyebrow: "THE STARTING POINT",
    title: "Self-service works. Until a case needs judgment.",
    intro:
      "A sweater can be inside the return window and still leave the condition clause unresolved. That is the narrow problem we are exploring.",
    visual: "policy",
    sections: [
      [
        "The existing baseline is real",
        "Shopify supports customer return requests and merchant review. Specialist platforms such as Loop offer exchange recommendations. We begin with what merchants already have.",
      ],
      [
        "The remaining question is specific",
        "Does a policy-grounded exception desk make an ambiguous apparel case clearer and faster without increasing complaints or false rejections?",
      ],
      [
        "Value has to be incremental",
        "We will compare matched exception cohorts against the existing native or specialist workflow. Broad automation claims cannot answer a narrow operational question.",
      ],
    ],
  },
  "/integrations": {
    eyebrow: "CONNECTIONS, WITH PERMISSION",
    title: "A connected workflow starts with access you can justify.",
    intro:
      "Integration directions are proposed. This concept preview has no live Shopify, Loop, carrier or 3PL connection.",
    visual: "map",
    sections: [
      [
        "Shopify readiness",
        "Verify merchant plan, available API capabilities, app scopes, protected customer-data access and the store owner’s consent. Do not assume that preview behavior is supported by an API.",
      ],
      [
        "Warehouse & carrier readiness",
        "Confirm the 3PL’s data rights, event semantics, inspection timestamps and source reliability. Carrier label support and chargeback context remain unverified dependencies.",
      ],
      [
        "Before any connection",
        "Agree on policy versions, retention, least-necessary data, reviewer authority and brand tolerance for automation. Build only after permissioned evidence and paid incremental value.",
      ],
    ],
  },
  "/trust": {
    eyebrow: "TRUST IS A WORKFLOW",
    title: "Clear evidence. Human authority. Room to appeal.",
    intro: "Customer trust is a design constraint, not a performance claim.",
    visual: "policy",
    sections: [
      [
        "No opaque abuse score",
        "This preview does not score fraud or decide eligibility automatically. An uncertainty is shown as an uncertainty, with its source and the person responsible for review.",
      ],
      [
        "A visible appeal path",
        "A customer can challenge a proposed outcome, add relevant context and ask for another human review. Suspected abuse also has an appeal route.",
      ],
      [
        "Evidence before assurances",
        "There are no claimed certifications, security audits, live customers or measured savings. A future pilot must verify data permissions, fairness, false positives, chargeback handling and brand risk.",
      ],
    ],
  },
  "/trust/appeals": {
    eyebrow: "CUSTOMER CLARITY",
    title: "A decision should be explainable. And challengeable.",
    intro:
      "Show the customer the relevant rule, what remains unclear and how to ask a person to reconsider.",
    visual: "customer",
    sections: [
      [
        "Explain the uncertainty",
        "“Your request is within the 30-day window. We still need to review the item’s condition. A team member will consider your explanation before deciding.”",
      ],
      [
        "Give the customer a route back",
        "Offer a plain-language appeal with optional evidence. Never require unnecessary sensitive information. Suspected abuse follows the same visible human review route.",
      ],
      [
        "Keep the review accountable",
        "Record the assigned reviewer, the policy clause, rationale and next action. In this demo, an appeal only updates local synthetic state; nothing is sent.",
      ],
    ],
  },
  "/evaluation": {
    eyebrow: "EVIDENCE BEFORE EXPANSION",
    title: "Measure the difference. Not the size of the market.",
    intro:
      "The test is whether a narrow, human-reviewed exception cohort improves net margin and customer experience beyond the current stack.",
    visual: "report",
    sections: [
      [
        "Establish a matched baseline",
        "Use a consenting merchant’s anonymized historical returns. Match reason, category, policy version and case complexity. Compare resolution minutes, exchange acceptance, refund cost, net margin, complaint rate, CSAT and reviewer overrides.",
      ],
      [
        "Seek a real commitment",
        "Interview 10 merchants and 3 3PL or CX operators. Seek one paid controlled pilot, an explicit budget owner and permitted 3PL data access. An app install alone is not proof of value.",
      ],
      [
        "Build, pivot or stop",
        "Build integrations after paid incremental value and permissions. Pivot to warehouse disposition if native handling is sufficient. Stop or redesign if complaints or false rejections rise. GMV and total return value are not SaaS revenue.",
      ],
    ],
  },
  "/compare/native-and-specialist-returns": {
    eyebrow: "AN HONEST COMPARISON",
    title: "Respect the baseline. Test the gap.",
    intro:
      "MerchantReturns is a research-stage exception concept. It must earn a place beside established returns tools.",
    visual: "comparison",
    sections: [
      [
        "Shopify native returns",
        "Customer accounts can support return requests, and the merchant reviews requests under its own return policy. Native self-service is an existing capability, not our invention.",
      ],
      [
        "Loop and specialist apps",
        "Loop offers exchange recommendations and returns workflows. Generic AI exchange suggestions are not a unique MerchantReturns advantage. Support desks and warehouse RMA processes are also substitutes.",
      ],
      [
        "The proposed narrow test",
        "A policy-linked apparel exception case, explicit uncertainty, merchant-approved compatibility and inspection context. Evidence is high for existing alternatives; low for our unique incremental value.",
      ],
    ],
  },
  "/about": {
    eyebrow: "OUR POINT OF VIEW",
    title: "Consider the customer. Respect the merchant.",
    intro:
      "MerchantReturns explores a more transparent way to handle apparel return exceptions.",
    visual: "warehouse",
    sections: [
      [
        "Our vision",
        "Return exceptions become transparent decisions that protect customer trust and net margin, rather than opaque automation.",
      ],
      [
        "Our mission",
        "Apply merchant policy and product compatibility to human-reviewed exception handling, while measuring incremental value above Shopify and specialist tools.",
      ],
      [
        "Where we are today",
        "Concept 49 is research and proposed product previews only. Demand, live integrations, real customers, revenue and pricing acceptance have not been demonstrated. MerchantReturns is the chosen presentation brand; domain and trademark clearance remain to be verified.",
      ],
    ],
  },
  "/resources/fit-exception-map": {
    eyebrow: "FIELD GUIDE / 01",
    title: "The fit-return exception map.",
    intro:
      "Follow one item from a customer’s request to a sourced, reviewable decision.",
    visual: "map",
    sections: [
      [
        "01 · A request is not a decision",
        "Capture the SKU, original size, reason and policy version. Separate “does not fit” from condition uncertainty or a request outside the policy window.",
      ],
      [
        "02 · Find the unanswered question",
        "Check the time window, condition clause and available evidence. Missing worn-status evidence should open a review path, not trigger a silent rejection.",
      ],
      [
        "03 · Consider a compatible alternative",
        "Check size, mock inventory and approved merchandising rules. Let a reviewer reject the alternative or route the case for refund review, while preserving customer appeal.",
      ],
    ],
  },
  "/resources/pilot-method": {
    eyebrow: "FIELD GUIDE / 02",
    title: "A controlled test, with an honest counterfactual.",
    intro:
      "Choose one cohort and decide in advance what would justify continuing.",
    visual: "report",
    sections: [
      [
        "Agree the cohort",
        "Select apparel fit exceptions under one policy version. Obtain consent for an anonymized historical slice and live human review. Document the existing app stack and warehouse data rights.",
      ],
      [
        "Compare like with like",
        "Report cohort size and missing data. Define resolution minutes from intake to reviewed decision; acceptance from offered compatible exchanges; net margin after refund, handling and logistics costs. Track complaints, CSAT and overrides separately.",
      ],
      [
        "Make the decision explicit",
        "Agree improvement and stop thresholds with the merchant before testing. Keep a record of outcomes and counterexamples. A qualified paid commitment matters more than clicks.",
      ],
    ],
  },
  "/resources/build-notes": {
    eyebrow: "CONCEPT 49 / BUILD NOTES",
    title: "What this preview proves. What it doesn’t.",
    intro:
      "A transparent record of the product boundary and the next validation steps.",
    visual: "report",
    sections: [
      [
        "Preview boundary",
        "Original frontend UI, generated illustrative imagery, ten fictional records, local reviewer actions and a simulated warehouse event. There are no real orders, refunds, messages, payments or integration credentials.",
      ],
      [
        "Acquisition experiment",
        "Reach CX leads through Shopify agencies, app ecosystem, 3PL partnerships, CX/operations communities and apparel referrals. Test two capped LinkedIn creatives: “policy exception queue” and “fit exchange compatibility.” Compare qualified pilot requests and baseline availability, not exchange clicks.",
      ],
      [
        "Tracking schema",
        "Merchant/category; Shopify app stack; policy version; exception count; 3PL data right; baseline minutes; exchange acceptance; net margin; complaints; override rate; pilot fee; decision. Opportunity stages: Baseline mapping → Historical cohort → Paid exception test → Incremental ROI review.",
      ],
      [
        "Future instrumentation",
        "Proposed consent-aware events: policy-demo path, appeal detail view, source/campaign and qualified booking. This local preview does not send analytics. A submission or click is not a successful buyer commitment.",
      ],
    ],
  },
};

pages["/resources/policy-matrix"] = {
  eyebrow: "FICTIONAL POLICY / POL-APP-03 · v3",
  title: "A clause is context. A person makes the decision.",
  intro:
    "The complete source matrix for the synthetic apparel examples. Effective 01 Oct 2026. This is an invented merchant policy, not legal guidance or a recommended default.",
  visual: "policy",
  sections: [
    [
      "§4.1 · Return window",
      "A request within 30 days of fictional delivery is inside the standard review window. ER-118: delivered 12 Oct, requested 28 Oct, 16 elapsed days. ER-122: delivered 20 Sep, requested 28 Oct, 38 days; requires an authorized policy exception. Being inside the window does not establish eligibility.",
    ],
    [
      "§4.2 · Condition",
      "Items must be unworn, unaltered and with original tags under this fictional policy. ER-118 worn status is uncertain. The reviewer must consider source evidence and customer explanation. Missing evidence is not an automatic rejection.",
    ],
    [
      "§4.3 · Compatible alternatives",
      "Alternatives must satisfy the merchant-approved size rule, available mock inventory and merchandising list. ER-118 has size L, four mock units, and an approved same-style alternative pending CX approval. ER-121 and ER-126 have no compatible recommendation; refund review remains a human decision.",
    ],
    [
      "§4.4 · Appeal & disposition",
      "Customers may ask for another human review, including in suspected-abuse cases. Warehouse disposition requires an authorized inspection signal and human approval. No request alone establishes receipt, condition or a completed refund.",
    ],
  ],
};
pages["/resources/build-notes"].sections.push([
  "Brand history & open decisions",
  "The earlier research working title was Return Decision, with returndecision.com considered but not purchased. An RDAP 404 at research time was not domain or trademark clearance. MerchantReturns is the current selected brand. Verify its domain, trademark, legal identity and final prices before any launch. The earlier concept screenshot is design inspiration, not evidence of a deployed product.",
]);
pages["/about"].sections.push([
  "Expansion is conditional",
  "If a controlled paid pilot improves net margin and CSAT beyond existing apps, test deeper integrations, additional apparel categories, 3PL workflows and more merchants. A substantial SaaS business would depend on retained merchant contracts and incremental per-case value. GMV and total return value are not revenue.",
]);
