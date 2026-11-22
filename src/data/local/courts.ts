import type { Court } from './types';

const PD = 'Public domain';

/**
 * District courthouses for the six counties we serve, plus Stillwater Municipal Court.
 * Addresses, phones and hours were checked against official county and city sites in November 2026.
 * Photos are Wikimedia Commons files whose license was checked through the Commons API; each is credited on the page.
 */
export const courts: Court[] = [
  {
    slug: 'payne-county-courthouse',
    name: 'Payne County Courthouse',
    shortName: 'Payne County Courthouse',
    county: 'payne',
    kind: 'district',
    street: '606 S Husband St (Court Clerk, Rooms 206 & 207)',
    city: 'Stillwater',
    zip: '74074',
    phone: '(405) 372-4774',
    phoneLabel: 'Court Clerk',
    hours: 'Court Clerk: Monday to Friday, 8:00 a.m. to 5:00 p.m., open over lunch. Closed weekends and holidays.',
    district: '9th Judicial District (Payne and Logan counties)',
    lat: 36.11528,
    lng: -97.06028,
    metaDescription:
      'Payne County Courthouse at 606 S Husband St, Stillwater: Court Clerk phone, hours, docket days and what happens after a bond is posted at the Payne County Jail.',
    tagline: 'Every state criminal case from Stillwater, Cushing, Perkins and Yale is filed here, a short walk from the Payne County Jail.',
    answer:
      'After an arrest anywhere in Payne County, the case is filed with the Payne County District Court at 606 S Husband St in Stillwater. The courthouse and the Payne County Jail share the same block, so a person who is still in custody can be brought to a judge quickly. If the bond is posted first, the release paperwork from the jail lists the first court date, and that appearance is where the judge reads the charge and reviews the bond conditions. The Court Clerk, in Rooms 206 and 207, keeps the file and takes payments; the office is open 8 to 5 on weekdays and does not close for lunch. According to the clerk\'s own site, felony dockets are held on Fridays, while misdemeanor and civil dockets run every other week. Angel Bail Bonds sits about a mile away on 6th Avenue, so we can post a bond at the jail and send you the court date the same night.',
    body: [
      'The Payne County District Court hears felonies, misdemeanors, protective orders, civil suits and family cases for the whole county. Oklahoma State University students arrested on campus or in town are no exception: if the charge is a state offense, it lands here, not in a campus or city court.',
      'Because the jail at 606 S Husband St and the courthouse are next to each other, families often go to the wrong door. Bond is posted at the jail. Court dates, case files and fine payments are handled upstairs at the Court Clerk.',
      'Tickets and city-ordinance charges written by Stillwater police go to the separate Stillwater Municipal Court on Lewis Street, not to this building.',
    ],
    history:
      'The red brick and stone courthouse was built in 1917 to a design by Hair, Tonini & Bramblet. It was added to the National Register of Historic Places on August 23, 1984, as one of Oklahoma\'s historic county courthouses.',
    faqs: [
      {
        q: 'Is the Payne County Courthouse the same building as the jail?',
        a: 'They share the 606 S Husband St address in Stillwater but are separate offices. Post bond at the Payne County Jail; go to the Court Clerk in Rooms 206 and 207 for case files and payments.',
      },
      {
        q: 'What day are felony cases heard in Payne County?',
        a: 'The Court Clerk\'s site lists felony dockets on Fridays, with misdemeanor and civil dockets every other week. The clerk\'s page is older, so call (405) 372-4774 to confirm your date.',
      },
      {
        q: 'How do I look up a Payne County case?',
        a: 'Search the defendant\'s name on OSCN, the Oklahoma State Courts Network. Payne County cases show the charges, the bond and every upcoming date.',
      },
      {
        q: 'My son was arrested at OSU. Which court handles it?',
        a: 'If the charge is a state offense, such as DUI, possession or assault, the case is filed here in Payne County District Court. A Stillwater city ticket goes to Stillwater Municipal Court instead.',
      },
      {
        q: 'Can Angel Bail Bonds remind us of the court date?',
        a: 'Yes. We text and call before every hearing, because a missed date can forfeit the bond and lead to a bench warrant.',
      },
    ],
    photo: {
      src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Payne_County_Courthouse.jpg/1280px-Payne_County_Courthouse.jpg',
      width: 1280,
      height: 960,
      alt: 'The red brick Payne County Courthouse in Stillwater, Oklahoma',
      caption: 'The 1917 Payne County Courthouse in downtown Stillwater.',
      author: 'Nyttend',
      license: PD,
      licenseUrl: 'https://commons.wikimedia.org/wiki/File:Payne_County_Courthouse.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Payne_County_Courthouse.jpg',
    },
    sources: [
      { label: 'Payne County Court Clerk', url: 'https://courtclerk.paynecounty.org/' },
      { label: 'Payne County general information', url: 'https://www.paynecounty.org/general-information' },
      { label: 'Payne County Courthouse (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Payne_County_Courthouse' },
    ],
  },
  {
    slug: 'pawnee-county-courthouse',
    name: 'Pawnee County Courthouse',
    shortName: 'Pawnee County Courthouse',
    county: 'pawnee',
    kind: 'district',
    street: '500 Harrison St (Court Clerk, Room 300)',
    city: 'Pawnee',
    zip: '74058',
    phone: '(918) 762-2547',
    phoneLabel: 'Court Clerk',
    hours: 'Court Clerk: Monday to Friday, 8:00 a.m. to 4:30 p.m.',
    district: '14th Judicial District (Pawnee and Tulsa counties)',
    lat: 36.33861,
    lng: -96.8025,
    metaDescription:
      'Pawnee County Courthouse, 500 Harrison St, Pawnee OK: Court Clerk in Room 300, phone, hours, and how court works after bond from the Pawnee County Jail.',
    tagline: 'The 1932 Art Deco courthouse on the square in Pawnee handles cases from Pawnee, Cleveland and the rest of the county.',
    answer:
      'Arrests in Pawnee County, whether by the sheriff, the Oklahoma Highway Patrol or the Pawnee and Cleveland police, lead to cases in the Pawnee County District Court at 500 Harrison St in Pawnee. The jail uses the same street address, so people held there are close to the courtroom. Once Angel Bail Bonds posts the bond, the release papers give the first court date; at that hearing the judge confirms the charge and the conditions of release. The Court Clerk is on the third floor in Room 300 and answers at (918) 762-2547 from 8:00 to 4:30 on weekdays. Pawnee County is part of the 14th Judicial District, which it shares with Tulsa County, so a judge assigned to Pawnee may also sit in Tulsa. If you live in Cleveland or along US-64, the drive to court is about 20 miles, so plan ahead for morning dockets.',
    body: [
      'The district court in Pawnee hears felony and misdemeanor cases, traffic cases filed by the state, protective orders and civil matters for all of Pawnee County.',
      'The county did not publish a docket calendar online when we checked, so the release paperwork and OSCN are the best places to find the next date. If anything is unclear, call the Court Clerk before the hearing rather than after it.',
    ],
    history:
      'The three-story brick courthouse was built in 1932 in the Art Deco style, designed by Smith & Senter and built by Manhattan Construction Co. Bas-relief panels show Native Americans and pioneers. It joined the National Register of Historic Places on August 23, 1984.',
    faqs: [
      {
        q: 'Where is the Court Clerk in the Pawnee County Courthouse?',
        a: 'On the third floor, Room 300, at 500 Harrison St in Pawnee. The office is open 8:00 a.m. to 4:30 p.m. on weekdays and answers at (918) 762-2547.',
      },
      {
        q: 'Are Cleveland arrests heard in Pawnee?',
        a: 'State charges from Cleveland are filed in Pawnee County District Court here in Pawnee. City tickets may be handled by Cleveland\'s own municipal court instead.',
      },
      {
        q: 'Which judicial district is Pawnee County in?',
        a: 'Pawnee County is in the 14th Judicial District together with Tulsa County, according to the 2024 State Election Board roster.',
      },
      {
        q: 'How do I find a Pawnee County court date online?',
        a: 'Search the person\'s name on OSCN. Pawnee County cases list the charges, the bond and upcoming hearings.',
      },
    ],
    photo: {
      src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/PawneeCourthouse.jpg/1280px-PawneeCourthouse.jpg',
      width: 1280,
      height: 853,
      alt: 'The Art Deco Pawnee County Courthouse in Pawnee, Oklahoma',
      caption: 'The 1932 Art Deco Pawnee County Courthouse in Pawnee.',
      author: 'Steven C. Price',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:PawneeCourthouse.jpg',
    },
    sources: [
      { label: 'Pawnee County Court Clerk', url: 'https://pawneecountyok.org/court-clerk' },
      { label: 'Oklahoma State Election Board officer roster (2024)', url: 'https://www.oklahoma.gov/content/dam/ok/en/elections/rosters/officer-roster-2024.pdf' },
      { label: 'Pawnee County Courthouse (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Pawnee_County_Courthouse_(Oklahoma)' },
    ],
  },
  {
    slug: 'lincoln-county-courthouse',
    name: 'Lincoln County Courthouse',
    shortName: 'Lincoln County Courthouse',
    county: 'lincoln',
    kind: 'district',
    street: '811 Manvel Ave, Suite 9',
    city: 'Chandler',
    zip: '74834',
    phone: '(405) 258-1309',
    phoneLabel: 'Court Clerk',
    hours: 'Court Clerk: Monday to Friday, 8:00 a.m. to 4:30 p.m.',
    district: '23rd Judicial District (Lincoln and Pottawatomie counties)',
    lat: null,
    lng: null,
    metaDescription:
      'Lincoln County Courthouse, 811 Manvel Ave, Chandler OK: Court Clerk phone and hours, and what to expect in court after bonding out of the Lincoln County Jail.',
    tagline: 'Cases from Chandler, Stroud, Prague and Meeker are filed at 811 Manvel Ave in Chandler, the same complex as the county jail.',
    answer:
      'Every state charge from Lincoln County, including arrests on the I-44 Turner Turnpike and Route 66, is filed with the Lincoln County District Court at 811 Manvel Ave in Chandler. The Court Clerk works out of Suite 9 and answers at (405) 258-1309 from 8:00 to 4:30 on weekdays. The Lincoln County Jail is at the same Manvel Avenue address, in Suite 14, which means a person who stays in custody can be taken to court without a long transport. When Angel Bail Bonds posts the bond, the jail hands over release papers with the first court date. At that appearance the judge goes over the charge and any conditions, such as no contact with an alleged victim. Lincoln County shares the 23rd Judicial District with Pottawatomie County. For families coming from Prague or Meeker, Chandler is a 15 to 25 minute drive north, so leave time for parking and security.',
    body: [
      'The district court in Chandler handles felonies, misdemeanors, state traffic cases, protective orders and civil matters for Lincoln County. Turnpike stops end up here too, because I-44 crosses the county between Stroud and Chandler.',
      'The county website links to an OSCN fee and bond schedule, but bonds on most criminal cases are still set or reviewed by a judge. Call us and we will confirm the amount on file before you drive anywhere.',
    ],
    history:
      'According to the Oklahoma Historical Society, a frame building served as the courthouse from 1897 to 1907, followed by a three-story brick and stone courthouse built in 1907. The present building was completed in 1969.',
    faqs: [
      {
        q: 'Is the Lincoln County Courthouse in the same place as the jail?',
        a: 'Yes, both use 811 Manvel Ave in Chandler. The Court Clerk is in Suite 9 and the jail is in Suite 14.',
      },
      {
        q: 'Where do turnpike arrests near Stroud go to court?',
        a: 'If the arrest was in Lincoln County, the state case is filed here in Chandler. A small eastern part of Stroud lies in Creek County, where cases go to the Creek County court instead.',
      },
      {
        q: 'What are the Lincoln County Court Clerk\'s hours?',
        a: 'Monday to Friday, 8:00 a.m. to 4:30 p.m., at (405) 258-1309.',
      },
      {
        q: 'Which judicial district covers Lincoln County?',
        a: 'The 23rd Judicial District, which Lincoln County shares with Pottawatomie County.',
      },
    ],
    photo: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Lincoln_County_Court_House_%28NBY_427645%29.jpg',
      width: 750,
      height: 511,
      alt: 'A vintage postcard of the earlier Lincoln County courthouse in Chandler, Oklahoma',
      caption: 'A vintage postcard of the earlier Lincoln County courthouse in Chandler. The current building replaced it in 1969.',
      author: 'Unknown (vintage postcard)',
      license: PD,
      licenseUrl: 'https://commons.wikimedia.org/wiki/File:Lincoln_County_Court_House_(NBY_427645).jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lincoln_County_Court_House_(NBY_427645).jpg',
    },
    sources: [
      { label: 'Lincoln County Court Clerk', url: 'https://www.lincolncountyok.gov/courtclerk' },
      { label: 'About Lincoln County', url: 'https://www.lincolncountyok.gov/about-2' },
      { label: 'Chandler (Oklahoma Historical Society)', url: 'https://www.okhistory.org/publications/enc/entry?entry=CH002' },
    ],
  },
  {
    slug: 'kay-county-courthouse',
    name: 'Kay County Courthouse',
    shortName: 'Kay County Courthouse',
    county: 'kay',
    kind: 'district',
    street: '201 S Main St',
    city: 'Newkirk',
    zip: '74647',
    phone: '(580) 362-3350',
    phoneLabel: 'Court Clerk',
    hours: 'Court Clerk: Monday to Friday, 8:00 a.m. to 12:00 p.m. and 12:45 p.m. to 4:30 p.m. (closed for lunch).',
    district: '8th Judicial District (Kay and Noble counties)',
    lat: 36.8808,
    lng: -97.0539,
    metaDescription:
      'Kay County Courthouse, 201 S Main St, Newkirk OK: Court Clerk phone, lunch-hour closing, and how cases from Ponca City, Blackwell and Tonkawa reach court after bond.',
    tagline: 'State cases from Ponca City, Blackwell, Tonkawa and Newkirk are all heard in the 1926 stone courthouse on Main Street in Newkirk.',
    answer:
      'Kay County\'s largest town is Ponca City, but the county\'s district court sits in Newkirk, at 201 S Main St. That surprises many families: a Ponca City or Blackwell arrest on state charges is booked into the Kay County Detention Center on West Dry Road outside Newkirk, and the case is heard downtown at this courthouse, not in Ponca City. After Angel Bail Bonds posts the bond, the release papers list the first court date, where the judge covers the charge and bond conditions. The Court Clerk answers at (580) 362-3350 but closes from noon to 12:45 for lunch, so call in the morning or after 12:45. Since a 2020 annex moved other county offices out, the old courthouse is used only for court business. Kay County shares the 8th Judicial District with Noble County, so the same judges may also hear cases in Perry.',
    body: [
      'Felonies, misdemeanors, state traffic cases, protective orders and civil cases for Kay County are filed here. Ponca City and Tonkawa also run their own municipal courts for city tickets, so check which court is printed on the paperwork.',
      'Newkirk is about 13 miles north of Ponca City on US-77 and about 18 miles from Blackwell. Allow extra time for the drive and for security at the door.',
    ],
    history:
      'The stone courthouse was dedicated on October 28, 1926, replacing an 1897 building; an earlier frame courthouse burned in March 1897. It was added to the National Register of Historic Places on August 23, 1984.',
    faqs: [
      {
        q: 'Is there a Kay County courthouse in Ponca City?',
        a: 'No. The district court for all of Kay County is in Newkirk at 201 S Main St. Ponca City\'s own municipal court, at 400 E Central, handles city tickets only.',
      },
      {
        q: 'Does the Kay County Court Clerk close for lunch?',
        a: 'Yes. The office is open 8:00 a.m. to noon and 12:45 to 4:30 p.m. on weekdays.',
      },
      {
        q: 'Is the courthouse next to the Kay County Detention Center?',
        a: 'No. The detention center is at 1101 W Dry Rd on the edge of Newkirk; the courthouse is downtown on Main Street.',
      },
      {
        q: 'Which judicial district is Kay County in?',
        a: 'The 8th Judicial District, shared with Noble County.',
      },
    ],
    photo: {
      src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Kay_County_Oklahoma_Courthouse_by_Smallchief.jpg/1280px-Kay_County_Oklahoma_Courthouse_by_Smallchief.jpg',
      width: 1280,
      height: 960,
      alt: 'The stone Kay County Courthouse in Newkirk, Oklahoma',
      caption: 'The Kay County Courthouse on Main Street in Newkirk, dedicated in 1926.',
      author: 'Smallchief',
      license: 'CC BY 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kay_County_Oklahoma_Courthouse_by_Smallchief.jpg',
    },
    sources: [
      { label: 'Kay County Court Clerk directory', url: 'https://www.courthouse.kay.ok.us/directory.aspx?did=10' },
      { label: 'Newkirk (Oklahoma Historical Society)', url: 'https://www.okhistory.org/publications/enc/entry?entry=NE012' },
      { label: 'Oklahoma State Election Board officer roster (2024)', url: 'https://www.oklahoma.gov/content/dam/ok/en/elections/rosters/officer-roster-2024.pdf' },
    ],
  },
  {
    slug: 'noble-county-courthouse',
    name: 'Noble County Courthouse',
    shortName: 'Noble County Courthouse',
    county: 'noble',
    kind: 'district',
    street: '300 Courthouse Dr',
    city: 'Perry',
    zip: '73077',
    phone: '(580) 336-2141',
    phoneLabel: 'County main line',
    hours: null,
    district: '8th Judicial District (Kay and Noble counties)',
    lat: 36.28667,
    lng: -97.28639,
    metaDescription:
      'Noble County Courthouse on the square in Perry, OK: address, county phone, and what happens in court after bonding out of the Noble County Jail on Cedar St.',
    tagline: 'The 1915 stone courthouse in the middle of Perry\'s courthouse square hears every state case filed in Noble County.',
    answer:
      'Noble County is small, and its justice system is close together. The Noble County Jail is at 721 Cedar St in Perry, a few blocks from the courthouse at 300 Courthouse Dr in the center of the town square. Arrests on I-35, US-64 or US-77 inside the county, and arrests by Perry police on state charges, are filed in the Noble County District Court here. After Angel Bail Bonds posts the bond at the jail, the release papers give the first court date; at that hearing the judge reads the charge and reviews bond conditions. The county does not publish a separate Court Clerk phone number online, so start with the county\'s main line, (580) 336-2141, and ask for the Court Clerk. Noble County shares the 8th Judicial District with Kay County. Perry is about 25 miles west of Stillwater, so our office can reach the jail quickly at any hour.',
    body: [
      'The Noble County District Court handles felonies, misdemeanors, state traffic cases, protective orders and civil matters for the county, including arrests made along the I-35 corridor west of Perry.',
      'Because the county site does not list Court Clerk hours, call ahead before you drive. OSCN shows each case\'s charges, bond and next date.',
    ],
    history:
      'The three-story stone and brick courthouse was completed in 1915 to a design by J. W. Hawk, with Corinthian pilasters and broken pediments over each entrance. It is the center of the Perry Courthouse Square Historic District and was listed on the National Register of Historic Places on August 23, 1984.',
    faqs: [
      {
        q: 'What is the phone number for the Noble County Court Clerk?',
        a: 'The county website does not list a direct Court Clerk number. Call the county main line, (580) 336-2141, and ask for the Court Clerk.',
      },
      {
        q: 'How far is the Noble County Jail from the courthouse?',
        a: 'Both are in downtown Perry. The jail is at 721 Cedar St and the courthouse sits in the middle of the square at 300 Courthouse Dr.',
      },
      {
        q: 'Where are I-35 arrests near Perry heard?',
        a: 'If the stop happened inside Noble County, the state case is filed at the Noble County District Court in Perry.',
      },
      {
        q: 'Which judicial district is Noble County in?',
        a: 'The 8th Judicial District, which it shares with Kay County.',
      },
    ],
    photo: {
      src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/NobleCountyCourthousPerry.jpg/1280px-NobleCountyCourthousPerry.jpg',
      width: 1280,
      height: 820,
      alt: 'The stone Noble County Courthouse in Perry, Oklahoma',
      caption: 'The 1915 Noble County Courthouse at the center of Perry\'s courthouse square.',
      author: 'Angelika Lindner',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:NobleCountyCourthousPerry.jpg',
    },
    sources: [
      { label: 'Noble County County Clerk (main line)', url: 'https://www.noblecountyok.com/county-clerk/' },
      { label: 'Noble County Courthouse (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Noble_County_Courthouse_(Oklahoma)' },
      { label: 'Oklahoma State Election Board officer roster (2024)', url: 'https://www.oklahoma.gov/content/dam/ok/en/elections/rosters/officer-roster-2024.pdf' },
    ],
  },
  {
    slug: 'logan-county-courthouse',
    name: 'Logan County Courthouse',
    shortName: 'Logan County Courthouse',
    county: 'logan',
    kind: 'district',
    street: '301 E Harrison Ave (Court Clerk, Room 201)',
    city: 'Guthrie',
    zip: '73044',
    phone: '(405) 282-0123',
    phoneLabel: 'Court Clerk',
    hours: null,
    district: '9th Judicial District (Payne and Logan counties)',
    lat: 35.87667,
    lng: -97.42194,
    metaDescription:
      'Logan County Courthouse, 301 E Harrison Ave, Guthrie OK: Court Clerk phone, Tuesday and Thursday arraignments, felony and misdemeanor docket days after bond.',
    tagline: 'Guthrie\'s 1907 courthouse holds arraignments every Tuesday and Thursday afternoon for cases from across Logan County.',
    answer:
      'Logan County publishes more of its court calendar than most rural counties, which helps families plan. Cases are heard at the Logan County Courthouse, 301 E Harrison Ave in Guthrie, with the Court Clerk in Room 201 at (405) 282-0123. The county\'s docket calendar lists arraignments on Tuesdays and Thursdays at 1:30 p.m.; to be added to one, call the Court Clerk between 8:00 and 10:30 a.m. that same day. Felony dockets run on the first and third Fridays at 9:00 a.m., and misdemeanor dockets on the second Thursday at 9:00 a.m. The Logan County jail is a few blocks away at 216 S Broad St. After Angel Bail Bonds posts the bond, the release paperwork shows the first date. Logan County is in the 9th Judicial District with Payne County, so the same judges serve both Guthrie and Stillwater.',
    body: [
      'The Logan County District Court hears felony, misdemeanor, traffic, protective order and civil cases for Guthrie, Crescent, Mulhall, Cimarron City and the rest of the county, including the busy I-35 corridor north of Edmond.',
      'The county notes that all dockets are subject to change. Check OSCN or call the Court Clerk the week before any hearing.',
    ],
    history:
      'The four-story buff brick courthouse was built in 1907, the year of statehood, in the Classical Revival style. It was designed by P. H. Weathers and built by Manhattan Construction Co., and it is a contributing building in the Guthrie Historic District. It was listed on the National Register of Historic Places on October 26, 1984.',
    faqs: [
      {
        q: 'When are arraignments at the Logan County Courthouse?',
        a: 'The county docket calendar lists arraignments on Tuesdays and Thursdays at 1:30 p.m. To be added, call the Court Clerk at (405) 282-0123 between 8:00 and 10:30 a.m. that day.',
      },
      {
        q: 'What day is the felony docket in Logan County?',
        a: 'The first and third Fridays of the month at 9:00 a.m. Misdemeanor dockets are on the second Thursday at 9:00 a.m.',
      },
      {
        q: 'Where is the Logan County Jail compared to the courthouse?',
        a: 'Both are in downtown Guthrie. The jail is at 216 S Broad St and the courthouse is at 301 E Harrison Ave.',
      },
      {
        q: 'Is Logan County in the same judicial district as Payne County?',
        a: 'Yes. Logan and Payne counties make up the 9th Judicial District.',
      },
    ],
    photo: {
      src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/The_Courthouse_of_Logan_County%2C_Oklahoma.jpg/1280px-The_Courthouse_of_Logan_County%2C_Oklahoma.jpg',
      width: 1280,
      height: 1920,
      alt: 'The buff brick Logan County Courthouse in Guthrie, Oklahoma',
      caption: 'The 1907 Logan County Courthouse in Guthrie.',
      author: 'Kat17pho',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_Courthouse_of_Logan_County,_Oklahoma.jpg',
    },
    sources: [
      { label: 'Logan County Court Clerk', url: 'https://www.logancountyok.com/157/Court-Clerk' },
      { label: 'Logan County docket calendar', url: 'https://www.logancountyok.com/230/Docket-Calendar' },
      { label: 'Logan County Courthouse (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Logan_County_Courthouse_(Oklahoma)' },
    ],
  },
  {
    slug: 'stillwater-municipal-court',
    name: 'Stillwater Municipal Court',
    shortName: 'Stillwater Municipal Court',
    county: 'payne',
    kind: 'municipal',
    street: '723 S Lewis St',
    city: 'Stillwater',
    zip: '74074',
    phone: '(405) 742-8253',
    phoneLabel: 'Municipal Court',
    otherPhones: [{ label: 'City line also listed for the clerk', phone: '(405) 372-0025' }],
    hours: 'Court Clerk\'s office (in-person payments): Monday to Thursday, 7:30 a.m. to 5:30 p.m.; Friday, 7:30 to 11:30 a.m.',
    district: null,
    lat: null,
    lng: null,
    metaDescription:
      'Stillwater Municipal Court, 723 S Lewis St: phone, clerk hours, Wednesday 1 p.m. arraignments, and how city charges work now that the Stillwater City Jail has closed.',
    tagline: 'City tickets and ordinance charges written by Stillwater police are heard on Lewis Street, not at the county courthouse.',
    answer:
      'Stillwater Municipal Court handles traffic tickets, parking tickets and violations of city ordinances written by Stillwater police. It does not hear state charges; those go to the Payne County District Court at 606 S Husband St. The court is at 723 S Lewis St and answers at (405) 742-8253. Court sits twice a month: arraignments are on Wednesdays at 1:00 p.m., trials on Tuesdays at 1:00 p.m., and a juvenile docket on Tuesdays at 3:00 p.m. If you were given a citation, the date printed on it is your arraignment date. Since July 1, 2026, the city no longer runs its own jail; Payne County took over jail services, so someone arrested by Stillwater police is held at the Payne County Jail. If that person has both a city charge and a state charge, there may be two bonds and two courts, and we can sort out both with one call.',
    body: [
      'Municipal court cases are usually smaller than district court cases, but missing a city court date still leads to a warrant and added fines.',
      'The clerk takes in-person payments at 723 S Lewis St Monday through Thursday from 7:30 a.m. to 5:30 p.m. and Friday mornings until 11:30. The court also posts a bond fee schedule on its city web page.',
    ],
    history: null,
    faqs: [
      {
        q: 'When are arraignments at Stillwater Municipal Court?',
        a: 'On court weeks, arraignments are Wednesdays at 1:00 p.m. The date on your citation is your arraignment date.',
      },
      {
        q: 'Where do Stillwater police take people they arrest now?',
        a: 'The Stillwater City Jail closed when Payne County took over the city\'s jail services on July 1, 2026, so arrests are held at the Payne County Jail, 606 S Husband St.',
      },
      {
        q: 'Does Stillwater Municipal Court hear DUI or felony cases?',
        a: 'Felonies and other state charges are filed in Payne County District Court. Municipal court handles city ordinance and traffic violations.',
      },
      {
        q: 'Which phone number should I call?',
        a: 'The court\'s own page lists (405) 742-8253. The city also lists (405) 372-0025 for the clerk\'s office. Either should reach the court staff.',
      },
    ],
    photo: null,
    sources: [
      { label: 'Stillwater Municipal Court', url: 'https://stillwaterok.gov/265/Municipal-Court' },
      { label: 'Stillwater Municipal Court staff directory', url: 'https://stillwaterok.gov/Directory.aspx?DID=21' },
      { label: 'Stillwater criminal and traffic citations', url: 'https://stillwaterok.gov/268/Criminal-Traffic-Citations' },
    ],
  },
];
