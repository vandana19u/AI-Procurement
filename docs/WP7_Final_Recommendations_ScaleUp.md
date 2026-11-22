# Work Package 7 (WP7): Final Consolidation, Policy Brief & National Scale-Up Roadmap
## AI for Health Procurement Project: Strategic Pathways for India
**Centre:** Koita Centre for Digital Health (KCDH), Ashoka University  
**Policy Alignment:** Ayushman Bharat Digital Mission (ABDM), NITI Aayog (SAHI), Department of Expenditure (GFR 2017).

---

### 1. Strategic Context & Project Synthesis
Over the 6-month initiative, the AI for Health Procurement Project at KCDH-Ashoka systematically analyzed the operational, technical, legal, and public-health realities of procuring machine learning solutions for India’s public healthcare delivery system.

The primary finding is clear: **Procurement is health governance.** 
If public tenders rely solely on conventional commodity procurement (lowest cost L1 selection, self-certified vendor claims, and generic software SLAs), state health departments will inadvertently deploy algorithmic systems that:
1. Exacerbate geographic and socio-economic health disparities.
2. Incur severe hidden recurring compute costs (cloud compute and vendor lock-in).
3. Risk violating the Digital Personal Data Protection (DPDP) Act 2023.
4. Create clinical liability vacuums when assistive systems malfunction.

---

### 2. Five National Policy Recommendations

#### Recommendation 1: Institutionalize Quality & Cost-Based Selection (QCBS) on GeM for Clinical AI
- *Action*: The Ministry of Finance and Government e-Marketplace (GeM) should issue a dedicated Special Bidding Document (SBD) for Clinical AI Solutions under GFR Rule 192 (QCBS with minimum 70:30 or 80:20 technical weighting), prohibiting unmitigated L1 commodity bidding for software with direct diagnostic or triage impact.

#### Recommendation 2: Establish a National AI Health Validation Sandbox under ABDM
- *Action*: The National Health Authority (NHA) and ICMR should institute an accredited "Pre-Procurement Digital Health Sandbox". Vendors must run their models on standard, diverse, anonymized national benchmark datasets (representing all geographic zones of India) to receive an official ABDM Validation Certificate before bidding on state tenders.

#### Recommendation 3: Enforce CDSCO SaMD Certification as a Mandatory Pre-Qualification
- *Action*: State procurement authorities must mandate valid Central Drugs Standard Control Organisation (CDSCO) manufacturing or import registration under the Medical Device Rules (MDR 2017). Tenders must reject vendors claiming "research use only (RUO)" when software is procured for patient care.

#### Recommendation 4: Mandate Model Factsheets & Clinical Explainability in Tender Submissions
- *Action*: Technical bid evaluations should award specific scoring marks for model explainability (e.g., anatomical heatmaps for radiological tools) and submission of standardized Model Cards documenting dataset demographics, known failure points, and hardware dependencies.

#### Recommendation 5: Budget for Algorithmic Drift Auditing in State NHM PIPs
- *Action*: State Project Implementation Plans (PIPs) under the National Health Mission must include a dedicated line item for annual independent technical audits and algorithm recalibration, treating AI models as evolving clinical assets rather than static capital purchases.

---

### 3. Phased Roadmap for National Scale-Up

```
Phase 1: Inception & Prototyping (Months 1–6) [CURRENT PROJECT AT KCDH-ASHOKA]
   ├── Evidence Synthesis across 8 Domains (Completed)
   ├── Computational Decision-Support Resource Prototype (Completed)
   └── Initial State Government Testing in 4 Clinical Scenarios (Completed)

Phase 2: State Pilot & GeM Integration (Months 7–18)
   ├── Formal deployment with 2 partner State Health Missions (e.g., Haryana / Karnataka)
   ├── Direct API integration of Decision-Support checklists into the GeM portal backend
   └── Publication of the "National Manual for Responsible AI Procurement in Public Health"

Phase 3: National Institutionalization (Months 19–36)
   ├── Integration with ABDM HFR/HPR registries and ICMR Validation Centres
   ├── Capacity-building workshops for 500+ state procurement officers across all 28 states
   └── Continuous refinement of algorithmic safety metrics and legal templates
```

---

### 4. Technical Handover & Compliance Undertaking
In accordance with KCDH-Ashoka project guidelines:
- All source code, data dictionaries, checklist models, decision trees, and documentation developed under this initiative are open, traceable, and fully documented for academic and public-sector deployment.
- The system functions strictly without storing or requiring personal health data (PHI), ensuring compliance with Indian data privacy statutes.
