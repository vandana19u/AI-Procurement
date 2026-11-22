# Work Package 2 (WP2): Evidence Synthesis Report
## AI for Health Procurement: Mapping International Guidance to Indian Health Realities
**Centre:** Koita Centre for Digital Health (KCDH), Ashoka University  
**Policy Anchors:** Ayushman Bharat Digital Mission (ABDM), Strategy for AI in Healthcare for India (SAHI), General Financial Rules (GFR 2017), GeM, CDSCO SaMD Regulations.

---

### Executive Summary
Health systems globally are accelerating procurement of artificial intelligence (AI) to address severe workforce deficits, enhance diagnostic speed, and optimize triage. In India, public procurement represents the primary vehicle through which state health departments and national health programs (such as the National Health Mission and NTEP) deploy technology. However, conventional public procurement processes—designed for physical commodities and static software—fail when applied to AI. AI models suffer from algorithmic drift, demographic bias, lack of explainability, data privacy vulnerabilities under the Digital Personal Data Protection (DPDP) Act 2023, and integration bottlenecks with the Ayushman Bharat Digital Mission (ABDM).

This Evidence Synthesis synthesizes findings from 140+ regulatory statutes, peer-reviewed validations, grey-literature manuals, and multilateral guidelines across eight core procurement domains. It translates theoretical principles into actionable due-diligence criteria for state and central procurement officers.

---

### Domain 1: Existing Procurement Principles, Frameworks & Practical Tools
#### Key Findings & Gaps:
- **General Financial Rules (GFR 2017)**: Public procurement in India must adhere to Rule 144 (Fundamental Principles), Rule 149 (Government e-Marketplace - GeM mandatory procurement thresholds), Rule 173 (Transparency & Fairness), and Rule 192 (Quality and Cost Based Selection - QCBS).
- **The Challenge**: Standard GeM parameters prioritize lowest cost (L1) bidding. When applied to AI algorithms, L1 procurement frequently leads to the selection of poorly generalizable models trained on foreign datasets (e.g., US or European cohorts) that catastrophically underperform on rural Indian populations (e.g., atypical presentation of pulmonary TB, dense cataracts, or varied skin pigmentations).
- **Practical Tool Adaptation**: Procurement authorities must use QCBS (e.g., 80% Technical / 20% Financial or 70/30) with mandatory pre-tender sandboxed bench testing on anonymized local state clinical cohorts before financial bid opening.

---

### Domain 2: Clinical and Technical Performance & Validation
#### Key Findings & Gaps:
- **Sensitivity & Specificity Thresholds**: In public screening (e.g., TB triage or Diabetic Retinopathy), false negatives carry unacceptable mortality and morbidity risks. Minimum clinical thresholds must be mandated: e.g., Sensitivity $\ge 90\%$ and Specificity $\ge 85\%$ for triage algorithms against an expert consensus reference standard (double-blind reading by two board-certified radiologists/retinologists with arbitration).
- **Area Under the Receiver Operating Characteristic (AUROC) & F1 Score**: Standalone AUROC figures reported by vendors in whitepapers often reflect synthetic or pristine lab data. Bids must mandate prospective or external validation on real-world Indian public health datasets (e.g., portable battery-operated X-ray machines in mobile vans or handheld non-mydriatic fundus cameras operated by Community Health Officers).
- **Demographic & Subgroup Parity**: Validation must report disaggregated performance across gender, age groups, pediatric vs. adult cohorts, and common Indian comorbidities (e.g., TB-HIV co-infection, severe malnutrition, diabetic status).

---

### Domain 3: Safety, Fairness, Equity & Human Oversight
#### Key Findings & Gaps:
- **Human-in-the-Loop Safeguards**: AI systems procured for public health facilities must never operate as fully autonomous replacement diagnostic authorities. All outputs must function as Decision-Support (CDSS) or Worklist Prioritization / Triaging. Final clinical, prescription, or referral decisions remain the statutory responsibility of the registered medical practitioner (Medical Officer / Specialist).
- **Bias Audits & Marginalized Populations**: Training datasets must explicitly represent rural, tribal, and socio-economically marginalized demographics to prevent systematic under-diagnosis in vulnerable populations.
- **Fail-Safe Mechanism**: The procurement contract must mandate deterministic fallback modes: if network connectivity drops or the AI confidence score falls below a pre-calibrated threshold, the system must cleanly route images/data to manual tele-consultation queues without dropping patient records.

---

### Domain 4: Data Governance, Privacy (DPDP 2023) & Cybersecurity
#### Key Findings & Gaps:
- **Statutory Mandate**: Full compliance with the **Digital Personal Data Protection (DPDP) Act 2023** and CERT-In directions. Health data constitutes sensitive personal data requiring strict consent management.
- **Zero Confidential Data routinely required**: The Computational Procurement Resource and procured AI runtimes must operate on de-identified or anonymized parameters for routine scoring, and must not transmit raw patient identifiable health data to unvetted external vendor servers.
- **Data Localization**: Government health datasets, training logs, inference records, and telemetry must be strictly hosted on Ministry of Electronics and Information Technology (MeitY) empanelled Cloud Service Providers (CSPs) within the sovereign geographic boundaries of India.
- **Encryption & Access Control**: Mandatory AES-256 encryption at rest, TLS 1.3 in transit, and role-based access control (RBAC) integrated with government single sign-on (SSO / e-Pramaan).

---

### Domain 5: Interoperability and National Standards (ABDM)
#### Key Findings & Gaps:
- **Ayushman Bharat Digital Mission (ABDM) Architecture**: AI health software must achieve ABDM Milestones:
  - **M1 (ABHA Creation & Verification)**: Capable of authenticating patient ABHA IDs.
  - **M2 (Health Facility & Professional Registry - HFR / HPR)**: Validation of registered clinics and credentialed practitioners.
  - **M3 (Health Information Exchange & Consent Manager - HIE-CM)**: Compliant with FHIR R4 (Fast Healthcare Interoperability Resources) data schemas for seamless electronic health record exchange.
- **Medical Imaging Interoperability**: Complete adherence to DICOM 3.0 standards, ensuring compatibility with Picture Archiving and Communication Systems (PACS) and diverse hardware manufacturers without requiring proprietary wrappers.
- **Standard Terminologies**: Use of standard coding dictionaries including SNOMED-CT for clinical terms, LOINC for laboratory findings, and ICD-11 for diagnostic classifications.

---

### Domain 6: Transparency, Explainability and Accountability
#### Key Findings & Gaps:
- **Model Factsheets / Model Cards**: Bidders must submit structured Model Cards detailing model architecture, parameter count, training cohort geographic origin, inclusion/exclusion criteria, known failure modes, and hardware dependencies.
- **Clinical Explainability**: For high-stakes clinical triage (e.g., suspicious TB consolidation or diabetic retinopathy lesions), the AI must generate localized visual explanations (e.g., Grad-CAM heatmaps, bounding boxes, or SHAP value contribution charts) so human doctors can quickly verify the anatomical basis of the algorithm's recommendation.
- **Audit Trails**: Immutable logging of every inference call, timestamp, software version, input hash, confidence score, and subsequent clinician action (accepted, rejected, modified) to ensure full accountability in the event of medical-legal disputes.

---

### Domain 7: Regulatory and Institutional Considerations
#### Key Findings & Gaps:
- **CDSCO Medical Device Rules (MDR 2017)**: Software as a Medical Device (SaMD) is regulated under Class B (low-moderate risk), Class C (moderate-high risk), or Class D (high risk). Bidders must provide valid Form MD-14 / MD-15 import licenses or Form MD-5 / MD-9 manufacturing licenses issued by the Central Licensing Authority (DCGI / CDSCO).
- **Institutional Ethics Review**: Any pre-procurement clinical evaluation or validation pilot must obtain clearance from an ICMR-registered Institutional Ethics Committee (IEC).
- **Vendor Conflict of Interest**: Strict disclosure requirements ensuring bidders have no undisclosed commercial exclusivity pacts with particular hardware manufacturers that restrict open competitive procurement.

---

### Domain 8: Implementation Readiness, Contracting, SLAs & Post-Market Surveillance
#### Key Findings & Gaps:
- **Algorithmic Drift & Continual Monitoring**: AI model accuracy degrades over time due to shifts in disease prevalence, seasonal variations, hardware sensor degradation, and demographic transitions. Procurement contracts must include mandatory quarterly drift audits and semi-annual recalibration clauses without additional licensing fees.
- **Total Cost of Ownership (TCO)**: Procurement tenders frequently underestimate maintenance expenses. Contracts must clearly budget for:
  - Per-scan inference licensing vs. perpetual enterprise site licensing.
  - Compute infrastructure upgrades (GPU servers vs. lightweight CPU edge devices).
  - Healthcare staff continuous training and change management.
- **Exit Strategy & Vendor Lock-In**: Mandatory handover of data models, fine-tuned weights (if funded by state resources), annotated datasets, and transition support to prevent state health programs from being held hostage to proprietary platforms.

---

### Synthesis Matrix: Evidence-to-Procurement Translation

| Domain | Key International Standard | Indian Statutory / Policy Anchor | Procurement Translation Tool / Output |
| :--- | :--- | :--- | :--- |
| **1. Principles** | WHO Ethics Guidance (2021); NHS AI Buyer's Guide | GFR 2017 Rule 149, 192 (QCBS); GeM SBDs | QCBS 80:20 Evaluation Scoring Rubric |
| **2. Performance** | FDA AI/ML SaMD Action Plan; TRIPOD-AI / CONSORT-AI | ICMR Guidelines for AI in Healthcare | Multi-centre Validation Benchmark Specification |
| **3. Safety & Oversight**| EU AI Act (High-Risk Classification); ISO 14971 | SAHI (NITI Aayog); Clinical Establishments Act | Human-in-the-Loop Fallback SLA & Bias Audit Checklist |
| **4. Data & Privacy** | GDPR Health Data Rules; ISO/IEC 27001 | DPDP Act 2023; CERT-In Mandates; ABDM HDMP | Data Localization & Zero-PII Processing Undertaking |
| **5. Interoperability** | HL7 FHIR Release 4; DICOM PS 3.1-3.20 | ABDM Milestone M1-M3; NDHB; SNOMED-CT | ABDM Sandbox Certification & FHIR R4 API Compliance Clause |
| **6. Transparency** | OECD AI Transparency; ISO/IEC 42001 | Responsible AI for All (NITI Aayog) | Mandatory Model Factsheet & Heatmap Validation Criteria |
| **7. Regulation** | IMDRF SaMD Framework; CE Mark MDR | CDSCO Medical Device Rules 2017 (MD-5 / MD-14) | Statutory Regulatory Compliance Matrix |
| **8. Contracting & SLA**| ISO/IEC 23894 (AI Risk Management) | GeM SLA Guidelines; Dept of Expenditure Manual | Post-Market Drift Monitoring & TCO Exit Clauses |
