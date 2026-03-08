# Angel Bail Bonds SEO Optimization Log

## 2026-03-08 – Run 4: Kay County Page Full GEO Optimization

**Action:** Completely rebuilt the Kay County bail bonds page with full GEO/LLM optimization — it was identified as the weakest page in Run 3.

**Problem Identified:**
Kay County page had major gaps vs. newer optimized pages:
- 0 bold GEO answer capsules (newer pages have 3-36)
- Only 4 FAQ questions (standard is 5-7)
- No facility details table (missing jail address, phone, hours)
- No visiting hours section
- No "Last Updated" date
- No inmate search section
- Only 1 neighboring county cross-link (should have 5-6)
- Vague "competitive rates" instead of specific 10% figure
- No question-based H2/H3 headings

**Files Changed:**
1. `src/pages/kay-county-bail-bonds.astro` – REBUILT with full GEO optimization

**What Was Improved:**
- Added GEO answer capsule (bold, 60-word extractable block with business name, address, rating, contact, payments)
- Added facility details table: Kay County Detention Center (1101 W Dry Road, Newkirk, OK 74647, (580) 362-3393), Sheriff's Office ((580) 362-3250), Courthouse (201 S Main St, (580) 362-3350)
- Added visiting hours section: Mon-Fri 7:30 AM-9:00 PM, Sat-Sun 7:30 AM-2:30 PM, 2 visits/week, max 5 guests
- Expanded to 7 FAQ questions with county-specific details in both schema and accordion
- Added question-based H2/H3 headings matching AI prompt patterns
- Added inmate search section with jail phone + CTA
- Added 6 neighboring county cross-links (Noble, Osage, Grant, Garfield, Payne, Pawnee)
- Added specific bail cost examples ($5,000 bail = $500, $10,000 = $1,000)
- Added "Last Updated: March 8, 2026"
- Added "Se habla español" to CTAs
- Added capacity info (108 inmates)
- Enhanced schema: LocalBusiness + Service + BreadcrumbList + FAQPage (7 questions)
- Communities served badges: Newkirk, Ponca City, Blackwell, Tonkawa, Braman, Kaw City, Nardin
- Page grew from ~1,614 words to ~2,000+ words with proper 120-180 word spacing between headings

**GEO Optimization Checklist:**
- [x] Self-contained answer capsules (bold, extractable by AI)
- [x] Question-based H2/H3 headings
- [x] Specific factual data (addresses, phones, hours, capacity, bail amounts)
- [x] LocalBusiness + FAQPage + BreadcrumbList + Service schema
- [x] 2,000+ words with proper spacing
- [x] "Last Updated" date
- [x] 7 county-specific FAQ questions
- [x] 6 neighboring county cross-links
- [x] Click-to-call CTA: (405) 614-3000
- [x] Inmate search section

**What To Do Next Run:**
1. Optimize Payne County page (original page, likely missing GEO capsules and updated schema)
2. Optimize Pawnee County page (same issues as Kay had)
3. Optimize Lincoln County page (same issues)
4. Optimize Noble County page (same issues)
5. Add "Last Updated" dates to all pages still missing them
6. Consider adding blog posts targeting long-tail queries like "how to bail someone out of [county] jail"

---

## 2026-03-08 — Run 3: Infrastructure Update — All 15 Counties in llms.txt + Homepage

**Action:** Updated llms.txt, llms-full.txt, and homepage to include ALL 15 target counties (7 were missing from LLM-facing files despite having pages built)

**Problem Identified:**
Pages existed for Pottawatomie, Oklahoma, Tulsa, Osage, Washington, Grant, and Kingfisher counties, but:
- llms.txt only listed 8 counties (missing 7 county facility data sections + page URLs)
- llms-full.txt only listed 5 counties in both service area sections
- Homepage only showed 9 facility cards (missing 7) and said "8 Counties Served"
- Homepage meta description and areaServed schema only listed original counties

**Files Changed:**
1. `public/llms.txt` — Added 7 county facility sections with jail addresses, phone numbers, courthouse info, population, distance from Stillwater, visitation hours, and community lists. Added 7 page URLs. Updated service area count to 15. Updated FAQ answer.
2. `public/llms-full.txt` — Added 7 counties to both service area lists (top + contact section)
3. `src/pages/index.astro` — Added 7 new facility cards to "Where We Serve" grid. Updated county count 8→15 in stats badge. Updated hero subhead 5→15. Updated meta description. Updated areaServed schema to include all 15 counties.

**Impact:**
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot) can now discover and cite all 15 county pages via llms.txt
- Homepage now surfaces all facility cards for internal link equity
- Schema markup now declares all 15 service areas for structured data

### Counties Status — ALL COMPLETE
| County | Status | Page |
|--------|--------|------|
| Payne | ✅ Done | payne-county-jail-bail-bonds.astro + 2 sub-pages |
| Pawnee | ✅ Done | pawnee-county-bail-bonds.astro + jail page |
| Lincoln | ✅ Done | lincoln-county-bail-bonds.astro + jail page |
| Kay | ✅ Done | kay-county-bail-bonds.astro + detention center page |
| Noble | ✅ Done | noble-county-bail-bonds.astro + jail page |
| Logan | ✅ Done | logan-county-bail-bonds.astro |
| Creek | ✅ Done | creek-county-bail-bonds.astro |
| Garfield | ✅ Done | garfield-county-bail-bonds.astro |
| Pottawatomie | ✅ Done | pottawatomie-county-bail-bonds.astro |
| Oklahoma | ✅ Done | oklahoma-county-bail-bonds.astro |
| Tulsa | ✅ Done | tulsa-county-bail-bonds.astro |
| Osage | ✅ Done | osage-county-bail-bonds.astro |
| Washington | ✅ Done | washington-county-bail-bonds.astro |
| Grant | ✅ Done | grant-county-bail-bonds.astro |
| Kingfisher | ✅ Done | kingfisher-county-bail-bonds.astro |

**What To Do Next Run:**
1. Optimize weakest pages — Kay County (1614 words, 0 bold capsules, no last updated date) is the weakest main county page
2. Add GEO answer capsules to original 5 county pages (Payne, Pawnee, Lincoln, Kay, Noble) — they have 0 bold capsules vs newer pages which have 3-36
3. Add "Last Updated" dates to all pages missing them
4. Consider adding cross-links from newer pages back to older ones
5. Add inmate search links for newer county pages to homepage

---

## 2026-03-08 — Run 1

### Action Taken
**Built new Creek County bail bonds page** (`creek-county-bail-bonds.astro`)

### Research Completed
- Creek County Justice Center: 9175 Ridgeview St, Sapulpa, OK 74066 — (918) 227-6371
- Facility opened July 2005, processes ~4,500 inmates annually
- Visitation: Mon-Fri 7:30 AM-9:00 PM, Sat-Sun 7:30 AM-2:30 PM
- Two 25-min visits/week, video visitation weekends 8 AM-3 PM by appointment
- Creek County Courthouse: 222 E Dewey St, Suite 201, Sapulpa, OK 74066 — (918) 227-2525
- Arraignments at 9:00 AM, 24th Judicial District
- DA Office: (918) 224-3921, Suite 302
- Sapulpa Municipal Jail separate facility: (918) 224-3862
- Sheriff: Bret Bowling
- County population: ~72,930 (2020 Census), 956 sq mi
- Communities: Sapulpa, Bristow, Drumright, Kellyville, Kiefer, Glenpool, Depew, Mannford, Oilton, Mounds, Slick

### Files Changed
1. `src/pages/creek-county-bail-bonds.astro` — NEW (full GEO-optimized page)
2. `public/llms.txt` — UPDATED (added Logan County + Creek County to service areas and page listings)

### GEO Optimization Checklist
- [x] Self-contained answer capsules (40-60 words, bolded) for AI extraction
- [x] Question-based H2/H3 headings matching natural language prompts
- [x] Specific factual data: addresses, phone numbers, processing times, bail ranges
- [x] LocalBusiness + FAQPage + BreadcrumbList schema markup
- [x] ~1,500 words with 120-180 words between headings
- [x] "Last Updated" date (March 8, 2026)
- [x] FAQ section with 7 county-specific questions
- [x] Neighboring counties cross-links (Payne, Lincoln, Pawnee, Logan)
- [x] Click-to-call CTA: (405) 614-3000

---

## 2026-03-08 — Run 2: Garfield County Page + Infrastructure Updates

**Action:** Built new Garfield County (Enid) bail bonds page + updated homepage, llms.txt, llms-full.txt

**Files Changed:**
- `src/pages/garfield-county-bail-bonds.astro` (NEW — Garfield County bail bonds page)
- `src/pages/index.astro` (UPDATED — added Logan, Creek, Garfield to Areas We Serve section, updated county count to 8, updated FAQ, updated areaServed schema)
- `public/llms.txt` (UPDATED — added Garfield County section with detention center details, updated service area list, added page URL)
- `public/llms-full.txt` (UPDATED — added Logan, Creek, Garfield to service area list)

**What Was Improved:**
- Created comprehensive Garfield County bail bonds page targeting Enid, Covington, Drummond, Lahoma, Waukomis, Hunter, Garber, and all Garfield County communities
- GEO-optimized answer capsules (40-60 words, bolded) for AI citability
- Specific factual data: Garfield County Detention Center (1020 S 10th St, Enid), phone (580) 548-2429, Sheriff (580) 237-0244, capacity (204 inmates), visitation hours
- Courthouse details: 114 W Broadway Ave, Enid — Court Clerk (580) 237-0232, hours Mon-Fri 8AM-4:30PM
- Full schema markup: LocalBusiness + FAQPage (7 questions) + BreadcrumbList + Service
- Cross-links to 5 neighboring county pages (Noble, Kay, Logan, Payne, Pawnee)
- Population data: 62,846 (2020 Census), Enid 51,000+
- Distance from Stillwater: ~65 miles, ~1 hour 8 minutes
- Updated homepage: added Logan, Creek, Garfield cards to Areas We Serve; updated county count 5→8; updated FAQ
- Updated llms.txt and llms-full.txt with Garfield County data

### Counties Status
| County | Status | Page |
|--------|--------|------|
| Payne | ✅ Done | payne-county-jail-bail-bonds.astro + 2 sub-pages |
| Pawnee | ✅ Done | pawnee-county-bail-bonds.astro + jail page |
| Lincoln | ✅ Done | lincoln-county-bail-bonds.astro + jail page |
| Kay | ✅ Done | kay-county-bail-bonds.astro + detention center page |
| Noble | ✅ Done | noble-county-bail-bonds.astro + jail page |
| Logan | ✅ Done | logan-county-bail-bonds.astro |
| Creek | ✅ Done | creek-county-bail-bonds.astro |
| Garfield | ✅ Done | garfield-county-bail-bonds.astro |
| Pottawatomie | ❌ Next | — |
| Oklahoma | ❌ Pending | — |
| Tulsa | ❌ Pending | — |
| Osage | ❌ Pending | — |
| Washington | ❌ Pending | — |
| Grant | ❌ Pending | — |
| Kingfisher | ❌ Pending | — |

**What To Do Next Run:**
1. Build Pottawatomie County page (priority #4 — Shawnee, college town)
2. Add Garfield County to inmate search section on homepage
3. Add cross-links from existing county pages back to Garfield County (especially Noble and Kay)
4. Consider blog post targeting "bail bonds near Enid Oklahoma"