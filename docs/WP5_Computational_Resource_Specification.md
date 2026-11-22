# Work Package 5 (WP5): Computational Procurement Resource Specification
## Decision-Support Engine, Knowledge Retrieval, and Due-Diligence Validator
**Project:** AI for Health Procurement Project (KCDH-Ashoka)

---

### 1. Architectural Overview & Design Philosophy
The Computational Procurement Resource is designed as a hybrid Decision-Support System combining:
1. **Rule-Based Decision Tree Engine**: Deterministic validation of regulatory prerequisites (CDSCO licensing, GFR 2017 thresholds, ABDM integration milestones, DPDP 2023 compliance).
2. **Contextual Risk & Readiness Assessment Algorithm**: Quantitative multi-factor scoring (0–100 scale) across the 8 evidence domains, stratifying procurement scenarios into Low, Medium, High, and Critical Risk categories.
3. **Structured Knowledge Retrieval & Citation Linker**: Instant cross-referencing between user procurement criteria and verified policy statutes (e.g. GeM rules, WHO ethics, ISO standards, ICMR ethical guidelines).
4. **Automated RFP Clause & Due-Diligence Matrix Generator**: Synthesizes customized, tender-ready specifications, SLAs, acceptance testing checklists, and contractual safeguards.

#### Core Safety Principles:
- **Decision-Support, Not Replacement**: The tool provides advisory guidance to empower authorized government procurement committees; it never substitutes statutory tender board approvals.
- **Privacy by Design**: Routine execution requires zero Protected Health Information (PHI) or proprietary vendor pricing secrets. All evaluations are performed on metadata and functional specifications.

---

### 2. Input Parameter Ontology
The resource accepts structured inputs across four dimensions:

```
[1. Procurement Context]
   ├── Tendering Authority (State NHM, State Med Corp, Dist Health Society, Tertiary Hospital)
   ├── Procurement Stage (Pre-tender Feasibility, RFP Drafting, Tech Evaluation, Pilot / PoC, Post-Market)
   ├── Purchasing Mechanism (GeM Custom Bid, Open E-Tender QCBS, Swiss Challenge, Pilot Grant)
   └── Estimated Value & Deployment Timeline

[2. Clinical AI Application Profile]
   ├── Clinical Modality (Chest X-Ray, Retinal Fundus, Histopath, EHR Risk Score, Maternal Vitals)
   ├── Operational Setting (Ayushman Arogya Mandir / PHC, Sub-District, District Hospital, Medical College)
   ├── Target End-User (ASHA / ANM, CHO, Medical Officer MBBS, Specialist Radiologist / Doctor)
   └── Autonomy Level (Screening / Triage Worklist vs. Assistive CDSS vs. Autonomous Flagging)

[3. Technical & Operational Readiness]
   ├── Edge vs. Cloud (Offline Edge Device vs. State Data Centre / MeitY Cloud vs. Public Cloud)
   ├── Hardware Compatibility (Existing PACS / Camera vs. Bundled Proprietary Hardware)
   └── Connectivity Resilience (Intermittent 2G/4G vs. High-speed Optical LAN)

[4. Regulatory & Standards Baseline]
   ├── CDSCO SaMD Registration (Class A, B, C, D / In-process / None)
   ├── ABDM Certification Status (Milestone 1, 2, 3 Certified vs. In-development)
   └── DPDP Act 2023 & Data Localization Protocol
```

---

### 3. Quantitative Risk Scoring Algorithm

The system computes an overall **Procurement Readiness Index (PRI)** and a **Procurement Risk Score (PRS)**:

$$\text{PRI} = \sum_{i=1}^{8} w_i \times S_i$$

Where:
- $w_i$ is the normalized weight of domain $i$ ($\sum w_i = 1.0$), with Clinical Validation ($w=0.18$), Regulatory ($w=0.16$), and Data Privacy ($w=0.15$) having the highest weights.
- $S_i \in [0, 100]$ is the evaluated compliance score for Domain $i$.
- $\text{PRS} = 100 - \text{PRI}$.

#### Risk Tiering:
- **Low Risk (PRS < 25)**: Standard GeM / QCBS procurement recommended. Routine SLA and ABDM milestone verification required.
- **Medium Risk (25 $\le$ PRS < 45)**: Requires mandatory technical sandbox evaluation on state clinical test datasets before contract award; requires CDSCO Class B verification.
- **High Risk (45 $\le$ PRS < 70)**: High clinical autonomy or lack of local validation. Mandatory phased deployment (Pilot in 2 districts for 90 days), ICMR ethics clearance, and third-party audit before state-wide rollout.
- **Critical Risk (PRS $\ge$ 70)**: Disqualifying regulatory or privacy deficiencies (e.g., lack of CDSCO license for diagnostic AI, foreign cloud data export violating DPDP Act). Halt procurement until prerequisites are satisfied.

---

### 4. Traceable Output Deliverables
Upon evaluation, the engine generates:
1. **Executive Procurement Scorecard**: Visual radar chart of 8 domains and overall Risk Level.
2. **Interactive Due-Diligence Checklist**: 24+ specific verification items with Pass/Fail/Conditional toggles.
3. **Automated RFP Technical Specifications**: Copy-pasteable tender clauses specifically formatted for GeM Custom Bids or State E-Procurement Portals (e.g., NIC CPP Portal).
4. **Acceptance Testing & Verification Protocol**: Standard operating procedures for bench testing and field validation.
5. **Traceability Citation Index**: Exact clause-by-clause statutory citations linking every requirement to ABDM, GFR, CDSCO, and international standards.
