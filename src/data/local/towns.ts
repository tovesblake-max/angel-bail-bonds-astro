import type { Photo, Town } from './types';

/** Credit helpers for the Commons licenses used below. */
const L = {
  pd: { license: 'Public domain' },
  cc0: { license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/' },
  by3: { license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/' },
  by4: { license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' },
  bysa25: { license: 'CC BY-SA 2.5', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5/' },
  bysa3: { license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/' },
  bysa4: { license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
};
const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`;
const photo = (
  file: string,
  src: string,
  width: number,
  height: number,
  alt: string,
  caption: string,
  author: string,
  lic: { license: string; licenseUrl?: string },
): Photo => ({
  src,
  width,
  height,
  alt,
  caption,
  author,
  license: lic.license,
  licenseUrl: lic.licenseUrl ?? commons(file),
  sourceUrl: commons(file),
});

const OHS = (entry: string) => `https://www.okhistory.org/publications/enc/entry?entry=${entry}`;
const WIKI = (page: string) => `https://en.wikipedia.org/wiki/${page}`;

export const towns: Town[] = [
  // ───────────────────────── Payne County ─────────────────────────
  {
    slug: 'cushing',
    name: 'Cushing',
    county: 'payne',
    population: 8327,
    lat: 35.97972,
    lng: -96.76083,
    highways: 'SH-33 and SH-18',
    milesToJail: 25,
    milesToStillwater: 25,
    police: { name: 'Cushing Police Department', street: '211 W Main St', zip: '74023', phone: '(918) 225-1212', source: 'https://cityofcushingok.gov/1271/Police-Department' },
    municipalCourt: { street: 'City Hall, 100 Judy Adams Blvd', phone: '(918) 306-4152', source: 'https://cityofcushingok.gov/1264/Municipal-Court' },
    metaDescription:
      'Bail bonds for Cushing, OK arrests. How Cushing cases move to the Payne County Jail and courthouse in Stillwater, local police and court contacts, and 24/7 help.',
    tagline: 'Arrested in the Pipeline Crossroads of the World? We post bonds at the Payne County Jail, 25 miles up SH-33, day or night.',
    answer:
      'Cushing has its own police department and a city detention and dispatch operation, but someone held on state charges, such as DUI, drug possession or assault, is normally transported about 25 miles northwest on SH-33 to the Payne County Jail at 606 S Husband St in Stillwater. That is where the bond is set and posted. Call Angel Bail Bonds at (405) 614-3000 with the person\'s full name and we confirm the booking, the charges and the bond amount with the jail. Paperwork can be signed by phone and e-signature from Cushing, so you do not have to drive to Stillwater until it is time to pick them up. The state case is then heard at the Payne County Courthouse next to the jail. City tickets written by Cushing police are different: they go to Cushing Municipal Court at City Hall on Judy Adams Boulevard.',
    local: [
      'Cushing grew out of the 1891 land run into the Sac and Fox Reservation and took its name from Marshall Cushing. The town changed for good on March 17, 1912, when Thomas B. Slick\'s gusher on the Wheeler farm opened the Cushing-Drumright oil field.',
      'Today Cushing calls itself the Pipeline Crossroads of the World. Its tank farms are the delivery point that NYMEX picked in 1983 for its light sweet crude oil contract, and the Oklahoma Historical Society notes that the Shell terminal alone can move up to 1.5 million barrels a day. That means a steady flow of truck drivers, contractors and plant workers, and arrests on SH-33 and SH-18 involve plenty of people who live out of town or out of state.',
      'If your family member is from elsewhere, we can handle the bond entirely by phone and text, and we explain what the Payne County court date means for someone who has to travel back for it.',
    ],
    faqs: [
      {
        q: 'Does Cushing have its own jail?',
        a: 'Cushing police run a detention and dispatch operation, but people held on state charges are normally booked into the Payne County Jail in Stillwater, where bond is posted.',
      },
      {
        q: 'How far is the Payne County Jail from Cushing?',
        a: 'About 25 miles by road, northwest on SH-33 to Stillwater.',
      },
      {
        q: 'Where do I pay a Cushing city ticket?',
        a: 'At Cushing Municipal Court in City Hall, 100 Judy Adams Blvd. The court\'s phone is (918) 306-4152.',
      },
      {
        q: 'My coworker was arrested in Cushing and lives out of state. Can you still bond them out?',
        a: 'Yes. We can do the paperwork with a co-signer by phone and e-signature and explain the travel needed for each Payne County court date.',
      },
    ],
    nearby: ['perkins', 'yale', 'stroud'],
    photo: photo(
      'Cushing_pipeline_crossroads_sign.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Cushing_pipeline_crossroads_sign.jpg/1280px-Cushing_pipeline_crossroads_sign.jpg',
      1280, 815,
      'The Cushing, Oklahoma "Pipeline Crossroads of the World" welcome sign',
      'Cushing\'s "Pipeline Crossroads of the World" sign.',
      'Bencochran at English Wikipedia',
      L.bysa25,
    ),
    sources: [
      { label: 'Cushing Police Department', url: 'https://cityofcushingok.gov/1271/Police-Department' },
      { label: 'Cushing Police: About Us', url: 'https://cityofcushingok.gov/1272/About-Us' },
      { label: 'Cushing Municipal Court', url: 'https://cityofcushingok.gov/1264/Municipal-Court' },
      { label: 'Cushing (Oklahoma Historical Society)', url: OHS('CU007') },
      { label: 'Cushing, Oklahoma (Wikipedia)', url: WIKI('Cushing,_Oklahoma') },
    ],
  },
  {
    slug: 'perkins',
    name: 'Perkins',
    county: 'payne',
    population: 3205,
    lat: 35.97861,
    lng: -97.03,
    highways: 'US-177, with SH-33 just north of town',
    milesToJail: 11,
    milesToStillwater: 11,
    police: { name: 'Perkins Police Department', street: '120 N Main St', zip: '74059', phone: '(405) 547-2855', source: 'https://www.cityofperkins.net/187/Police-Department' },
    municipalCourt: { street: 'City Hall Annex, Main St and Thomas Ave (enter through the library door on the south side)', phone: '(405) 547-2445', source: 'https://www.cityofperkins.net/563/Municipal-Court' },
    metaDescription:
      'Perkins, OK bail bonds: Perkins arrests go 11 miles up US-177 to the Payne County Jail in Stillwater. Police, city court and courthouse details, plus 24/7 bonds.',
    tagline: 'Just 11 miles down US-177 from our Stillwater office, Perkins is one of the fastest towns for us to help.',
    answer:
      'Perkins sits 11 miles south of Stillwater on US-177, so when someone is arrested here on state charges they are normally booked into the Payne County Jail at 606 S Husband St in Stillwater. The bond is set and posted there, not in Perkins. Call Angel Bail Bonds at (405) 614-3000 and we check the booking, the charge and the bond amount with the jail, then send the paperwork to your phone. Because our office is only about 15 minutes from Perkins, we can meet you in person if you prefer. After release, the state case goes to the Payne County Courthouse in Stillwater. Tickets written by Perkins police for city ordinance violations are handled by Perkins Municipal Court, which meets in the City Hall annex at the Thomas-Wilhite Memorial Library. If a warrant is out after hours, the city directs people to the police department at (405) 547-2855.',
    local: [
      'Perkins was founded right after the 1889 land run by William A. Knipe and went through the names Cimarron and Italy before settling on Perkins, after the Kansas senator who helped it get a post office. In 1891 it got the first wagon bridge across the Cimarron River in Oklahoma Territory.',
      'Frank "Pistol Pete" Eaton, the frontiersman who became the model for Oklahoma State University\'s mascot, is buried in Perkins, and the Iowa Tribe of Oklahoma has its headquarters here. Many Perkins families have a student, an employee or a commuter tied to Stillwater, which is one reason we see so many calls from here.',
      'Perkins Municipal Court is held in the City Hall annex at Main Street and Thomas. Enter through the library door on the south side.',
    ],
    faqs: [
      {
        q: 'Where does someone arrested in Perkins go?',
        a: 'People held on state charges are normally booked into the Payne County Jail in Stillwater, about 11 miles north on US-177.',
      },
      {
        q: 'Where is Perkins Municipal Court?',
        a: 'In the City Hall annex of the Thomas-Wilhite Memorial Library at Main Street and Thomas. The court\'s phone is (405) 547-2445.',
      },
      {
        q: 'Can you meet me in Perkins to sign bond paperwork?',
        a: 'Most families sign by phone and e-signature, but our Stillwater office is about 15 minutes away, so we can meet in person when that is easier.',
      },
      {
        q: 'Who do I call about a Perkins warrant after hours?',
        a: 'The city lists the Perkins Police Department, (405) 547-2855, as the after-hours contact.',
      },
    ],
    nearby: ['cushing', 'yale', 'chandler', 'guthrie'],
    photo: photo(
      'Perkins_Downtown_Historic_District,_Perkins,_OK.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Perkins_Downtown_Historic_District%2C_Perkins%2C_OK.jpg/1280px-Perkins_Downtown_Historic_District%2C_Perkins%2C_OK.jpg',
      1280, 812,
      'Historic brick storefronts in downtown Perkins, Oklahoma',
      'The Perkins Downtown Historic District, listed on the National Register of Historic Places.',
      'OKJaguar',
      L.bysa4,
    ),
    sources: [
      { label: 'Perkins Police Department', url: 'https://www.cityofperkins.net/187/Police-Department' },
      { label: 'Perkins Municipal Court', url: 'https://www.cityofperkins.net/563/Municipal-Court' },
      { label: 'Perkins subpoenas and warrants', url: 'https://www.cityofperkins.net/579/Subpoenas-Warrants' },
      { label: 'Perkins (Oklahoma Historical Society)', url: OHS('PE015') },
      { label: 'Perkins, Oklahoma (Wikipedia)', url: WIKI('Perkins,_Oklahoma') },
    ],
  },
  {
    slug: 'yale',
    name: 'Yale',
    county: 'payne',
    population: 1059,
    lat: 36.11528,
    lng: -96.70111,
    highways: 'SH-51, about 20 miles east of Stillwater',
    milesToJail: 20,
    milesToStillwater: 20,
    police: { name: 'Yale Police Department' },
    municipalCourt: null,
    metaDescription:
      'Yale, OK bail bonds. Yale arrests are booked 20 miles west on SH-51 at the Payne County Jail in Stillwater. How bond and court work, with 24/7 help.',
    tagline: 'Twenty miles east of Stillwater on SH-51, Yale is a small town where an arrest still means a trip to the county seat.',
    answer:
      'Yale is a small town with a small police department, so anyone held on state charges is normally taken about 20 miles west on SH-51 to the Payne County Jail at 606 S Husband St in Stillwater. Bond is set and posted at the jail, and the case is heard at the Payne County Courthouse next door. That drive is often the hardest part for Yale families, especially late at night. You do not need to make it until release. Call Angel Bail Bonds at (405) 614-3000; we look up the booking and bond with the jail, send the agreement to your phone, and post the bond ourselves. When the jail finishes the release, we tell you when to head over. If the arrest came from the Oklahoma Highway Patrol or the Payne County Sheriff rather than Yale police, the process is the same, because the jail and the court are the same.',
    local: [
      'Yale began in 1895 on former Pawnee Reservation land and moved to its current site when the Eastern Oklahoma Railway arrived in 1902. Oil strikes beginning in 1913, including a big gusher on the Sarah Rector farm, pushed the population past 2,600 by 1920.',
      'Olympic champion Jim Thorpe lived in Yale from 1917 to 1923, and his house is on the National Register of Historic Places. Jazz trumpeter Chet Baker was born here in 1929. Downtown, the Masonic Temple and the domed First Baptist Church still anchor Main Street.',
      'We could not find an official web page with the Yale Police Department\'s address or phone. In an emergency call 911; for everything about a bond, call us and we work directly with the Payne County Jail.',
    ],
    faqs: [
      {
        q: 'Does Yale have a jail?',
        a: 'People held on state charges are normally booked into the Payne County Jail in Stillwater, about 20 miles west on SH-51.',
      },
      {
        q: 'Do I have to drive to Stillwater to start the bond?',
        a: 'No. We can do the paperwork by phone and e-signature while you stay in Yale, and tell you when the release is ready.',
      },
      {
        q: 'Which court will a Yale case go to?',
        a: 'State charges are filed in Payne County District Court at 606 S Husband St in Stillwater.',
      },
      {
        q: 'Was Jim Thorpe from Yale?',
        a: 'He was born near Prague, but he lived in Yale from 1917 to 1923. The Jim Thorpe House there is on the National Register of Historic Places.',
      },
    ],
    nearby: ['cushing', 'perkins', 'cleveland', 'pawnee'],
    photo: photo(
      'Yale_Downtown_Masonic_7-2026.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e1/Yale_Downtown_Masonic_7-2026.jpg',
      640, 480,
      'Downtown Yale, Oklahoma, with the Masonic Temple and the domed First Baptist Church',
      'Downtown Yale, with the Masonic Temple and the domed First Baptist Church (July 2026).',
      'TulGuy',
      L.by4,
    ),
    sources: [
      { label: 'Yale (Oklahoma Historical Society)', url: OHS('YA001') },
      { label: 'Yale, Oklahoma (Wikipedia)', url: WIKI('Yale,_Oklahoma') },
    ],
  },

  // ───────────────────────── Pawnee County ─────────────────────────
  {
    slug: 'pawnee',
    name: 'Pawnee',
    county: 'pawnee',
    population: 1936,
    lat: 36.33139,
    lng: -96.80889,
    highways: 'US-64 and SH-18',
    milesToJail: null,
    milesToStillwater: 25,
    police: { name: 'Pawnee Police Department', street: '639 Seventh St', zip: '74058', phone: '(918) 762-3166', source: 'https://cityofpawnee.org/police' },
    municipalCourt: { street: 'City Hall, 510 Illinois St', phone: '(918) 762-2658', source: 'https://cityofpawnee.org/court' },
    metaDescription:
      'Pawnee, OK bail bonds. The Pawnee County Jail and courthouse are both on Harrison St in town. Local police, city court and 24/7 bond help from Angel Bail Bonds.',
    tagline: 'In the county seat, the jail, the courthouse and the city court are all a few blocks apart.',
    answer:
      'Pawnee is the county seat, so an arrest here stays close to home. People held on state charges are booked into the Pawnee County Jail at 500 Harrison St, and their cases are heard at the Pawnee County Courthouse on the same street. Bond is posted at the jail. Call Angel Bail Bonds at (405) 614-3000 and we confirm the charge and bond with the jail, then send the agreement to your phone so you can sign from home. Our office is about 25 miles away in Stillwater, and we post the bond without you having to wait at the jail. Once the release paperwork is done, the papers list the first date at the courthouse, where the Court Clerk is in Room 300. Tickets from Pawnee police for city ordinance violations go to Pawnee Municipal Court at City Hall, 510 Illinois St, which holds court once a month.',
    local: [
      'The town is named for the Pawnee Nation, which was moved here from Nebraska between 1873 and 1875. It opened to non-Indian settlers in the Cherokee Outlet Opening of September 16, 1893, and incorporated the next spring.',
      'Visitors know Pawnee for the Pawnee Bill Ranch, the home of Wild West showman Gordon "Pawnee Bill" Lillie, now a state historic site on Blue Hawk Peak. Dick Tracy creator Chester Gould grew up here, and the county historical museum doubles as "Dick Tracy Headquarters."',
      'The 1932 Art Deco courthouse is a short walk from the jail. If you are coming for a hearing, plan to park around the square and allow time for security.',
    ],
    faqs: [
      {
        q: 'Where is the Pawnee County Jail?',
        a: 'At 500 Harrison St in Pawnee. Call (918) 762-2565 to confirm someone is there and to get the booking details.',
      },
      {
        q: 'Where is Pawnee Municipal Court?',
        a: 'At Pawnee City Hall, 510 Illinois St. The court\'s phone is (918) 762-2658, and the monthly court date is posted on the city meeting calendar.',
      },
      {
        q: 'Can you bond someone out of Pawnee from Stillwater?',
        a: 'Yes. We are about 25 miles away and can post the bond while you sign everything by phone.',
      },
      {
        q: 'Is the Pawnee County Courthouse near the jail?',
        a: 'Yes, both are on Harrison St in downtown Pawnee.',
      },
    ],
    nearby: ['cleveland', 'yale', 'perry'],
    photo: photo(
      'Pawneebillranch.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/0/07/Pawneebillranch.jpg',
      640, 480,
      'The Pawnee Bill Ranch mansion near Pawnee, Oklahoma',
      'Pawnee Bill Ranch, the home of Wild West showman Gordon "Pawnee Bill" Lillie, now a state historic site.',
      'Jzwei at English Wikipedia',
      L.by3,
    ),
    sources: [
      { label: 'Pawnee Police Department', url: 'https://cityofpawnee.org/police' },
      { label: 'Pawnee Municipal Court', url: 'https://cityofpawnee.org/court' },
      { label: 'Pawnee (Oklahoma Historical Society)', url: OHS('PA023') },
      { label: 'Pawnee, Oklahoma (Wikipedia)', url: WIKI('Pawnee,_Oklahoma') },
    ],
  },
  {
    slug: 'cleveland',
    name: 'Cleveland',
    county: 'pawnee',
    population: 3205,
    lat: 36.31222,
    lng: -96.47167,
    highways: 'US-64 and SH-99, beside Keystone Lake',
    milesToJail: 21,
    milesToStillwater: 45,
    police: { name: 'Cleveland Police Department', phone: '(918) 358-3112', source: 'https://oklahoma.gov/cleet/peace-officers-training/peace-officer-jobs/central-region-peace-officer-jobs/cleveland---cleveland-pd---patrolman---posted-april-27--2026.html' },
    municipalCourt: null,
    metaDescription:
      'Cleveland, OK bail bonds. Cleveland arrests are booked about 21 miles west at the Pawnee County Jail in Pawnee. Police contact, court info and 24/7 bond help.',
    tagline: 'Oklahoma\'s Pioneer Oil City sits on Keystone Lake, but its arrests are handled 21 miles west in Pawnee.',
    answer:
      'Cleveland is in eastern Pawnee County, south of the Arkansas River, so its arrests on state charges go to the Pawnee County Jail at 500 Harrison St in Pawnee, roughly 21 miles west on US-64. A November 2023 News On 6 report on a Cleveland police arrest, for example, says the man was booked into the Pawnee County jail. Bond is set and posted there, and the case is heard at the Pawnee County Courthouse in the same town. Call Angel Bail Bonds at (405) 614-3000 and we confirm the booking and bond with the jail, then handle the paperwork by phone so you do not have to drive to Pawnee until release. Cleveland police can be reached at (918) 358-3112. Because Tulsa is close, families sometimes call the Tulsa County jail first; for an arrest inside Cleveland, Pawnee County is the right place to start.',
    local: [
      'Cleveland grew up after the 1893 Cherokee Outlet opening. Its post office, first called Herbert, was renamed for President Grover Cleveland in 1894. The first oil well near town was spudded on May 27, 1904, the same year the Katy railroad arrived, and the town still calls itself Oklahoma\'s Pioneer Oil City.',
      'The Arlington Hotel began life as the Inside Inn at the 1904 St. Louis World\'s Fair before it was shipped here by rail, and the 1910 Mullendore Mansion is on the National Register of Historic Places. Keystone Lake brings summer visitors, and lake-season arrests are part of what we see from here.',
      'Two sources list different street addresses for the Cleveland Police Department, so call (918) 358-3112 before you go in person.',
    ],
    faqs: [
      {
        q: 'Is Cleveland, Oklahoma in Pawnee County or Osage County?',
        a: 'Cleveland is in eastern Pawnee County, on the south side of the Arkansas River. Osage County lies across the river to the north.',
      },
      {
        q: 'Where are people arrested in Cleveland taken?',
        a: 'People held on state charges are normally booked into the Pawnee County Jail in Pawnee, about 21 miles west on US-64.',
      },
      {
        q: 'What is the Cleveland police phone number?',
        a: 'The department is listed at (918) 358-3112. In an emergency, call 911.',
      },
      {
        q: 'Do Cleveland cases go to court in Tulsa?',
        a: 'No. State charges from Cleveland are filed in Pawnee County District Court in Pawnee, although Pawnee County shares a judicial district with Tulsa County.',
      },
    ],
    nearby: ['pawnee', 'yale', 'cushing'],
    photo: photo(
      'Cleveland_oklahoma.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Cleveland_oklahoma.jpg/1280px-Cleveland_oklahoma.jpg',
      1280, 463,
      'A 1905 panorama of oil derricks around Cleveland, Oklahoma',
      'Oil derricks around Cleveland in 1905, a year after the first well near town.',
      'Dick Man',
      L.pd,
    ),
    sources: [
      { label: 'Cleveland PD (Oklahoma CLEET job posting)', url: 'https://oklahoma.gov/cleet/peace-officers-training/peace-officer-jobs/central-region-peace-officer-jobs/cleveland---cleveland-pd---patrolman---posted-april-27--2026.html' },
      { label: 'News On 6: Cleveland arrest booked into Pawnee County jail (Nov 2023)', url: 'https://newson6.com/story/654a6b1ef54aa9026f4e3c9f/man-accused-of-pulling-weapon-on-cleveland-police-arrested-identified' },
      { label: 'Cleveland (Oklahoma Historical Society)', url: OHS('CL012') },
      { label: 'Cleveland, Oklahoma (Wikipedia)', url: WIKI('Cleveland,_Oklahoma') },
    ],
  },

  // ───────────────────────── Lincoln County ─────────────────────────
  {
    slug: 'chandler',
    name: 'Chandler',
    county: 'lincoln',
    population: 2858,
    lat: 35.71472,
    lng: -96.88972,
    highways: 'Route 66 (SH-66), SH-18 and the I-44 Turner Turnpike',
    milesToJail: null,
    milesToStillwater: 40,
    police: { name: 'Chandler Police Department', street: '414 Manvel Ave', zip: '74834', phone: '(405) 258-1460', source: 'https://www.chandlerok.gov/police' },
    municipalCourt: { street: 'City Hall, 414 Manvel Ave (first Thursday of the month, 3:00 p.m.)', phone: '(405) 258-3200', source: 'https://www.chandlerok.gov/court' },
    metaDescription:
      'Chandler, OK bail bonds. The Lincoln County Jail and courthouse share 811 Manvel Ave. Chandler police, city court days and 24/7 bond help for Lincoln County.',
    tagline: 'Lincoln County\'s seat on Route 66 keeps its jail and courthouse in one complex on Manvel Avenue.',
    answer:
      'Chandler is the Lincoln County seat, and the jail and the district court share one address: 811 Manvel Ave. People held on state charges, including turnpike and Route 66 arrests from across the county, are booked into the Lincoln County Jail in Suite 14, and their cases go to the Court Clerk in Suite 9. Bond is posted at the jail. Call Angel Bail Bonds at (405) 614-3000; we confirm the booking and the bond amount, send the agreement to your phone, and post the bond so you are not waiting in the lobby. Chandler police are a few blocks away at 414 Manvel Ave, and their non-emergency line is (405) 258-1460. Their city tickets are heard by Chandler Municipal Court at City Hall on the first Thursday of each month at 3:00 p.m., with trials starting at 3:30.',
    local: [
      'Chandler opened in a land run on September 28, 1891, and was named for George Chandler, an Assistant Secretary of the Interior. A tornado on March 30, 1897, killed fourteen people and nearly leveled the town, which rebuilt in brick and stone.',
      'The legislature named Chandler the Pecan Capital of the World in 1949. Route 66 runs through downtown, past the Route 66 Interpretive Center and the Oklahoma Law Enforcement Museum and Hall of Fame. Frontier lawman Bill Tilghman lived here.',
      'Because I-44 crosses Lincoln County, many people booked in Chandler were just passing through. We regularly work with out-of-state families on turnpike arrests.',
    ],
    faqs: [
      {
        q: 'Where is the Lincoln County Jail in Chandler?',
        a: 'At 811 Manvel Ave, Suite 14. The jail\'s number is (405) 258-1191.',
      },
      {
        q: 'When does Chandler Municipal Court meet?',
        a: 'The first Thursday of the month at 3:00 p.m. at City Hall, 414 Manvel Ave. Trials begin at 3:30 p.m.',
      },
      {
        q: 'I was pulled over on the Turner Turnpike near Chandler. Where is my case?',
        a: 'If the stop was in Lincoln County, the state case is filed with the Lincoln County District Court at 811 Manvel Ave in Chandler.',
      },
      {
        q: 'How far is Chandler from your office?',
        a: 'About 40 miles from our Stillwater office, but we post Lincoln County bonds without you needing to come to us.',
      },
    ],
    nearby: ['stroud', 'prague', 'meeker', 'perkins'],
    photo: photo(
      'Vintage_Phillips_66_Gas_Station_and_historic_cars,_Route_66,_Chandler,_Oklahoma_LCCN2010630079.tif',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Vintage_Phillips_66_Gas_Station_and_historic_cars%2C_Route_66%2C_Chandler%2C_Oklahoma_LCCN2010630079.tif/lossy-page1-1280px-Vintage_Phillips_66_Gas_Station_and_historic_cars%2C_Route_66%2C_Chandler%2C_Oklahoma_LCCN2010630079.tif.jpg',
      1280, 812,
      'A restored Phillips 66 gas station with vintage cars on Route 66 in Chandler, Oklahoma',
      'A restored Phillips 66 station on Route 66 in Chandler.',
      'Carol M. Highsmith (Library of Congress)',
      L.pd,
    ),
    sources: [
      { label: 'Chandler Police Department', url: 'https://www.chandlerok.gov/police' },
      { label: 'Chandler Police FAQ', url: 'https://www.chandlerok.gov/police/page/frequently-asked-questions' },
      { label: 'Chandler Municipal Court', url: 'https://www.chandlerok.gov/court' },
      { label: 'Chandler (Oklahoma Historical Society)', url: OHS('CH002') },
      { label: 'Chandler, Oklahoma (Wikipedia)', url: WIKI('Chandler,_Oklahoma') },
    ],
  },
  {
    slug: 'stroud',
    name: 'Stroud',
    county: 'lincoln',
    population: 2719,
    lat: 35.76833,
    lng: -96.64639,
    highways: 'Route 66 (SH-66, the main street), SH-99 and the I-44 Turner Turnpike about a mile north',
    milesToJail: 16,
    milesToStillwater: 53,
    police: { name: 'Stroud Police Department', street: '210 W 2nd St', zip: '74079', phone: '(918) 968-2733', source: 'https://cityofstroud.com/police-department/' },
    municipalCourt: { street: 'Administration Building, 220 W 2nd St (first Tuesday of the month, 1:30 p.m.)', phone: '(918) 968-2571', source: 'https://cityofstroud.com/municipal-court/' },
    metaDescription:
      'Stroud, OK bail bonds. Stroud police run a 24-hour lockup; state charges go to the Lincoln County Jail in Chandler. Court days, contacts and 24/7 help.',
    tagline: 'Stroud police keep a 24-hour lockup on 2nd Street, but state cases move 16 miles west to Chandler.',
    answer:
      'Stroud is one of the few small towns in our area whose police department says it runs its own 24-hour dispatch center and lockup, at 210 W 2nd St. A short hold there is common, but for state charges the bond and the case belong to Lincoln County: the jail at 811 Manvel Ave in Chandler, about 16 miles west on Route 66, and the district court in the same complex. Call Angel Bail Bonds at (405) 614-3000 as soon as you know about the arrest; we find out where the person is being held, what the charge is and what the bond is, and handle the paperwork by phone. Tickets for city ordinance violations are heard by Stroud Municipal Court at 220 W 2nd St on the first Tuesday of each month at 1:30 p.m. One detail: a small eastern part of Stroud lies in Creek County, where cases go to Sapulpa instead.',
    local: [
      'James W. Stroud opened a store and post office here in 1892, and before statehood the town was one of the territory\'s "whiskey towns" on the edge of dry Indian Territory. On March 27, 1915, the Henry Starr gang robbed both of Stroud\'s banks on the same morning; Starr was shot and captured.',
      'The Rock Cafe on Route 66 was built during the Great Depression from sandstone dug up while the highway was being built, and Pixar\'s Sally Carrera in "Cars" is based heavily on its owner, Dawn Welch. The Sac and Fox Nation headquarters, about five miles south, is one of the area\'s largest employers.',
      'With the Turner Turnpike just north of town, many Stroud arrests involve travelers. We can work with family members anywhere in the country.',
    ],
    faqs: [
      {
        q: 'Does Stroud have a jail?',
        a: 'The Stroud Police Department runs a 24-hour lockup at 210 W 2nd St. People held on state charges are handled through the Lincoln County Jail in Chandler.',
      },
      {
        q: 'When is Stroud Municipal Court?',
        a: 'The first Tuesday of each month at 1:30 p.m., except holidays, at the Administration Building, 220 W 2nd St. The court\'s phone is (918) 968-2571.',
      },
      {
        q: 'Is Stroud in Lincoln County or Creek County?',
        a: 'Mostly Lincoln County. A small eastern part of the city is in Creek County, where state cases go to the Creek County courthouse.',
      },
      {
        q: 'What is the Stroud police phone number?',
        a: 'The department lists (918) 968-2733 and (918) 968-3595. In an emergency, call 911.',
      },
    ],
    nearby: ['chandler', 'cushing', 'prague'],
    photo: photo(
      'Stroud_Route_66_Mural_11-2026.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Stroud_Route_66_Mural_11-2026.jpg/1280px-Stroud_Route_66_Mural_11-2026.jpg',
      1280, 960,
      'A Route 66 centennial mural in downtown Stroud, Oklahoma',
      'Stroud\'s Route 66 centennial mural (November 2026).',
      'TulGuy',
      L.by4,
    ),
    sources: [
      { label: 'Stroud Police Department', url: 'https://cityofstroud.com/police-department/' },
      { label: 'Stroud Municipal Court', url: 'https://cityofstroud.com/municipal-court/' },
      { label: 'Stroud (Oklahoma Historical Society)', url: OHS('ST053') },
      { label: 'Stroud, Oklahoma (Wikipedia)', url: WIKI('Stroud,_Oklahoma') },
    ],
  },
  {
    slug: 'prague',
    name: 'Prague',
    county: 'lincoln',
    population: 2356,
    lat: 35.49889,
    lng: -96.7,
    highways: 'US-62 and SH-99 (US-377), seven miles north of I-40',
    milesToJail: 26,
    milesToStillwater: 65,
    police: { name: 'Prague Police Department', street: '1116 N Jim Thorpe Blvd', zip: '74864', phone: '(405) 567-2239', source: 'https://oklahoma.gov/cleet/peace-officers-training/peace-officer-jobs/central-region-peace-officer-jobs/prague---prague-pd---police-officer---posted-july-22--2026.html' },
    municipalCourt: null,
    metaDescription:
      'Prague, OK bail bonds. Prague arrests are booked at the Lincoln County Jail in Chandler, about 26 miles north. Police contact, court info and 24/7 bond help.',
    tagline: 'From the Kolache Festival town in southern Lincoln County, state cases head north to Chandler.',
    answer:
      'Prague is in the southern corner of Lincoln County, close to I-40, so families are often surprised that the county jail is about 26 miles north in Chandler. People held on state charges after a Prague arrest are normally booked into the Lincoln County Jail at 811 Manvel Ave, and the case goes to the district court at the same address. Call Angel Bail Bonds at (405) 614-3000 and we confirm the booking and the bond, send the agreement to your phone, and post the bond without you having to make the drive until it is time for release. The Prague Police Department is at 1116 N Jim Thorpe Blvd, (405) 567-2239. Prague also has a municipal court for city violations; the city did not post its location online when we checked, so call City Hall at (405) 567-2270 to confirm where and when it meets.',
    local: [
      'Prague was settled mainly by Czech immigrants. Landowner Eva Barta named it after the Czech capital, and the town incorporated in 1902. The Kolache Festival still draws thousands of visitors every spring.',
      'Olympic legend Jim Thorpe was born near Prague, and a monument to him stands at the Prague Historical Museum on the boulevard named for him. St. Wenceslaus Catholic Church houses the National Shrine of the Infant Jesus of Prague, and the old Prague City Hall and Jail is on the National Register of Historic Places.',
      'Because Prague is close to I-40, arrests here sometimes involve travelers or people from Pottawatomie or Okfuskee counties. We can work with family wherever they are.',
    ],
    faqs: [
      {
        q: 'Where is someone arrested in Prague taken?',
        a: 'People held on state charges are normally booked into the Lincoln County Jail at 811 Manvel Ave in Chandler, about 26 miles north.',
      },
      {
        q: 'What is the Prague police number?',
        a: 'The Prague Police Department is listed at (405) 567-2239, 1116 N Jim Thorpe Blvd. In an emergency, call 911.',
      },
      {
        q: 'Where is Prague Municipal Court?',
        a: 'The city code sets up a municipal court, but we could not find its location online. Call Prague City Hall at (405) 567-2270.',
      },
      {
        q: 'Do I have to drive to Chandler to bail someone out?',
        a: 'Not to start. We handle the paperwork by phone and e-signature and tell you when to pick them up.',
      },
    ],
    nearby: ['meeker', 'chandler', 'stroud'],
    photo: photo(
      'Prague_OK_Downtown_7-2025.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/ab/Prague_OK_Downtown_7-2025.jpg',
      640, 480,
      'Storefronts on Jim Thorpe Boulevard in downtown Prague, Oklahoma',
      'Downtown Prague (July 2025).',
      'TulGuy',
      L.cc0,
    ),
    sources: [
      { label: 'Prague PD (Oklahoma CLEET job posting)', url: 'https://oklahoma.gov/cleet/peace-officers-training/peace-officer-jobs/central-region-peace-officer-jobs/prague---prague-pd---police-officer---posted-july-22--2026.html' },
      { label: 'City of Prague information', url: 'https://cityofpragueok.org/information/' },
      { label: 'Prague (Oklahoma Historical Society)', url: OHS('PR001') },
      { label: 'Prague, Oklahoma (Wikipedia)', url: WIKI('Prague,_Oklahoma') },
    ],
  },
  {
    slug: 'meeker',
    name: 'Meeker',
    county: 'lincoln',
    population: 1004,
    lat: 35.50361,
    lng: -96.89778,
    highways: 'US-62 and SH-18',
    milesToJail: 14,
    milesToStillwater: 55,
    police: { name: 'Meeker Police Department', street: '510 W Carl Hubbell Blvd (Town Hall)', zip: '74855', phone: '(405) 279-3931', source: 'https://townofmeekerok.com/police-department' },
    municipalCourt: null,
    metaDescription:
      'Meeker, OK bail bonds. Meeker arrests go 14 miles north on SH-18 to the Lincoln County Jail in Chandler. Police contact, court info and 24/7 bond help.',
    tagline: 'Fourteen miles south of Chandler on SH-18, Meeker sends its state cases to the county seat.',
    answer:
      'Meeker sits about 14 miles south of Chandler on SH-18, according to the Oklahoma Historical Society, which makes it one of the closer Lincoln County towns to the county jail. People held on state charges after a Meeker arrest are normally booked into the Lincoln County Jail at 811 Manvel Ave in Chandler, and their cases are filed with the district court in the same building. Call Angel Bail Bonds at (405) 614-3000 and we confirm the booking and bond with the jail, then send the paperwork to your phone. The Meeker Police Department works out of Town Hall at 510 W Carl Hubbell Blvd; the town lists its non-emergency number as (405) 279-3931. Meeker has a court clerk for town violations, but the town does not post court dates online, so call Town Hall at (405) 279-3320, open Monday to Thursday, 7 a.m. to 5 p.m.',
    local: [
      'Meeker was platted on land from the Fowler and Meeker families. It took the Meeker name in 1903 because a Fowler already existed on the rail line.',
      'Baseball Hall of Famer Carl Hubbell grew up here, and the main street carries his name. The town hall, on the National Register, once housed the Carl Hubbell Museum. Meeker also appeared prominently in the 2024 documentary "Will & Harper."',
      'Meeker is about 55 miles from our Stillwater office, but distance does not slow down a bond: we work with the Lincoln County Jail by phone and post bonds there at any hour.',
    ],
    faqs: [
      {
        q: 'How far is Meeker from the Lincoln County Jail?',
        a: 'About 14 miles north on SH-18 to Chandler.',
      },
      {
        q: 'What is the Meeker police phone number?',
        a: 'The town lists (405) 279-3931 as the non-emergency number. Another directory lists (405) 279-3321. In an emergency, call 911.',
      },
      {
        q: 'Where is Meeker\'s town court held?',
        a: 'The town has a court clerk but does not post court dates online. Call Town Hall at (405) 279-3320.',
      },
      {
        q: 'Can you post a Lincoln County bond for a Meeker arrest tonight?',
        a: 'Yes. We answer 24/7 and can post the bond at the jail in Chandler once the person is booked and the bond is set.',
      },
    ],
    nearby: ['prague', 'chandler'],
    photo: photo(
      'US_62_Meeker.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/US_62_Meeker.jpg/1280px-US_62_Meeker.jpg',
      1280, 960,
      'US Highway 62 running through Meeker, Oklahoma',
      'US-62 through Meeker.',
      'Scott5114',
      L.bysa3,
    ),
    sources: [
      { label: 'Meeker Police Department', url: 'https://townofmeekerok.com/police-department' },
      { label: 'Meeker Town Hall', url: 'https://townofmeekerok.com/city-hall' },
      { label: 'Meeker (Oklahoma Historical Society)', url: OHS('ME009') },
      { label: 'Meeker, Oklahoma (Wikipedia)', url: WIKI('Meeker,_Oklahoma') },
    ],
  },

  // ───────────────────────── Kay County ─────────────────────────
  {
    slug: 'ponca-city',
    name: 'Ponca City',
    county: 'kay',
    population: 24424,
    lat: 36.72361,
    lng: -97.07222,
    highways: 'US-77, US-177, US-60 and SH-11, with I-35 to the west',
    milesToJail: 13,
    milesToStillwater: 47,
    police: { name: 'Ponca City Police Department', street: '300 E Oklahoma Ave', zip: '74601', phone: '(580) 767-0370', source: 'https://www.poncacityok.gov/798/Police-Department' },
    municipalCourt: { street: 'City Central, 400 E Central Ave, Suite 302', phone: '(580) 767-0382', source: 'https://www.poncacityok.gov/226/Municipal-Court' },
    metaDescription:
      'Ponca City, OK bail bonds. City jail for city charges, Kay County Detention Center in Newkirk for state charges. Court contacts and 24/7 bond help.',
    tagline: 'Kay County\'s biggest city has its own jail for city charges, but state cases go north to Newkirk.',
    answer:
      'Ponca City is the only town in our area that confirms on its own website that it runs a city jail: the municipal court page says people who miss court on a city warrant "will be put in the city jail." That jail is for city matters. When someone is held on state charges, such as a felony, a DUI filed by the state or a protective order violation, the bond and the case belong to Kay County. The Kay County Detention Center is at 1101 W Dry Rd in Newkirk, about 13 miles north on US-77, and the case is heard at the Kay County Courthouse in Newkirk. Call Angel Bail Bonds at (405) 614-3000 and we find out which jail the person is in and what kind of bond is needed. Ponca City Municipal Court, at 400 E Central, Suite 302, handles city tickets and warrants.',
    local: [
      'Ponca City opened on September 16, 1893, as "New Ponca" in the Cherokee Outlet Opening and took its current name in 1913. Oilman E. W. Marland struck oil on a Ponca allotment in 1911; his 1928 Marland Mansion, the "Palace on the Prairie," is on the National Register of Historic Places.',
      'The Phillips 66 refinery here is the largest in Oklahoma, with about 200,000 barrels a day of capacity. The 27-foot Pioneer Woman statue, unveiled in 1930, is the city\'s best-known landmark.',
      'With about 24,000 people, Ponca City produces most of Kay County\'s arrests. A single night can involve both a city charge and a state charge, which means two different courts. We help families keep the two straight.',
    ],
    faqs: [
      {
        q: 'Does Ponca City have its own jail?',
        a: 'Yes, for city matters. The municipal court page says people arrested on city failure-to-appear warrants are put in the city jail. State charges go to the Kay County Detention Center in Newkirk.',
      },
      {
        q: 'Where is Ponca City Municipal Court?',
        a: 'At City Central, 400 E Central Ave, Suite 302. Phone (580) 767-0382. The clerk is open Monday to Thursday, 8:30 a.m. to 5:30 p.m., and Friday, 8:30 to 11:30 a.m.',
      },
      {
        q: 'Is the Kay County courthouse in Ponca City?',
        a: 'No. The Kay County Courthouse is at 201 S Main St in Newkirk, about 13 miles north.',
      },
      {
        q: 'Can you handle a Ponca City bond from Stillwater?',
        a: 'Yes. We post Kay County bonds by phone and e-signature, 24 hours a day.',
      },
    ],
    nearby: ['newkirk', 'blackwell', 'tonkawa'],
    photo: photo(
      "Veteran's_Day_parade,_Ponca_City,_Oklahoma.jpg",
      'https://upload.wikimedia.org/wikipedia/commons/b/b4/Veteran%27s_Day_parade%2C_Ponca_City%2C_Oklahoma.jpg',
      800, 544,
      'A Veterans Day parade on Grand Avenue in Ponca City, Oklahoma, with the Civic Center behind',
      'A Veterans Day parade on Grand Avenue, with the Ponca City Civic Center behind.',
      'Reservoirhill at English Wikipedia',
      L.pd,
    ),
    sources: [
      { label: 'Ponca City Police Department', url: 'https://www.poncacityok.gov/798/Police-Department' },
      { label: 'Ponca City Municipal Court', url: 'https://www.poncacityok.gov/226/Municipal-Court' },
      { label: 'U.S. Census QuickFacts: Ponca City', url: 'https://www.census.gov/quickfacts/poncacitycityoklahoma' },
      { label: 'Ponca City (Oklahoma Historical Society)', url: OHS('PO008') },
      { label: 'Ponca City, Oklahoma (Wikipedia)', url: WIKI('Ponca_City,_Oklahoma') },
    ],
  },
  {
    slug: 'blackwell',
    name: 'Blackwell',
    county: 'kay',
    population: 6085,
    lat: 36.80139,
    lng: -97.30083,
    highways: 'I-35, US-177 and SH-11',
    milesToJail: 18,
    milesToStillwater: 58,
    police: { name: 'Blackwell Police Department', phone: '(580) 363-5490', source: 'https://www.cityofblackwell.com/?p=9619' },
    municipalCourt: { street: 'City Hall court room, 221 W Blackwell Ave (1st and 3rd Mondays, 4:30 p.m.)', phone: '(580) 363-6420', source: 'https://www.cityofblackwell.com/?p=9654' },
    metaDescription:
      'Blackwell, OK bail bonds. Blackwell arrests are booked about 18 miles northeast at the Kay County Detention Center in Newkirk. City court, police and 24/7 help.',
    tagline: 'Right on I-35 in western Kay County, Blackwell sends its state cases 18 miles to Newkirk.',
    answer:
      'Blackwell lies about eighteen miles southwest of Newkirk, the Oklahoma Historical Society notes, and Newkirk is where state cases from Blackwell end up. People held on state charges are normally booked into the Kay County Detention Center at 1101 W Dry Rd in Newkirk, and the case is heard at the Kay County Courthouse on Main Street there. Because I-35 runs along the edge of town, many Blackwell arrests are interstate traffic stops involving drivers from Kansas, Texas or farther away. Call Angel Bail Bonds at (405) 614-3000 and we confirm the booking and the bond with the detention center, then handle the paperwork by phone with a family member anywhere. City tickets and ordinance cases are heard by Blackwell Municipal Court in the City Hall court room on the first and third Mondays at 4:30 p.m. The non-emergency number for Blackwell police is (580) 363-5490.',
    local: [
      'Blackwell was founded in the land run of September 16, 1893, and named for Andrew J. Blackwell, who led the founding. Plentiful natural gas brought the Blackwell Zinc Company smelter in 1917; it was one of the three largest plants of its kind in the country before it closed in 1974.',
      'On May 25, 1955, an F5 tornado killed 20 residents, injured more than 250 and destroyed about 400 homes. The Top of Oklahoma Historical Museum, in the Electric Park Pavilion, keeps the town\'s history.',
      'For an I-35 arrest, it helps to know the exact exit or mile marker when you call, because that tells us which county\'s jail to check first.',
    ],
    faqs: [
      {
        q: 'Where does Blackwell send people it arrests?',
        a: 'People held on state charges are normally booked into the Kay County Detention Center in Newkirk, about 18 miles away.',
      },
      {
        q: 'When is Blackwell Municipal Court?',
        a: 'The first and third Mondays at 4:30 p.m. in the City Hall court room, with juvenile dockets at 5:00 p.m. The court clerk is at (580) 363-6420.',
      },
      {
        q: 'What is the Blackwell police non-emergency number?',
        a: '(580) 363-5490. In an emergency, call 911.',
      },
      {
        q: 'Can you help with an I-35 arrest near Blackwell for someone from out of state?',
        a: 'Yes. A co-signer anywhere can sign by phone and e-signature, and we explain what the Kay County court dates will require.',
      },
    ],
    nearby: ['tonkawa', 'ponca-city', 'newkirk'],
    photo: photo(
      'Blackwell,_Oklahoma.JPG',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Blackwell%2C_Oklahoma.JPG/1280px-Blackwell%2C_Oklahoma.JPG',
      1280, 922,
      'Brick storefronts along West Doolin Avenue in downtown Blackwell, Oklahoma',
      'West Doolin Avenue in downtown Blackwell.',
      'Jeffrey Beall',
      L.by3,
    ),
    sources: [
      { label: 'City of Blackwell community directory', url: 'https://www.cityofblackwell.com/?p=9619' },
      { label: 'Blackwell Municipal Court', url: 'https://www.cityofblackwell.com/?p=9654' },
      { label: 'U.S. Census QuickFacts: Blackwell', url: 'https://www.census.gov/quickfacts/blackwellcityoklahoma' },
      { label: 'Blackwell (Oklahoma Historical Society)', url: 'https://www.okhistory.org/publications/enc/entry.php?entry=BL007' },
      { label: 'Blackwell, Oklahoma (Wikipedia)', url: WIKI('Blackwell,_Oklahoma') },
    ],
  },
  {
    slug: 'tonkawa',
    name: 'Tonkawa',
    county: 'kay',
    population: 3015,
    lat: 36.68306,
    lng: -97.30917,
    highways: 'US-60 and US-77/177, about a mile from I-35',
    milesToJail: 26,
    milesToStillwater: 50,
    police: { name: 'Tonkawa Police Department', street: '110 E NOC Dr', zip: '74653', phone: '(580) 628-2516', source: 'https://tonkawaok.gov/police-department/' },
    municipalCourt: { street: '115 S 7th St (courtroom); clerk at 117 S 7th St', phone: '(580) 308-6125', source: 'https://tonkawaok.gov/municipal-court/' },
    metaDescription:
      'Tonkawa, OK bail bonds. Home of Northern Oklahoma College. Tonkawa city bonds after hours go through police; state cases go to Newkirk. 24/7 help.',
    tagline: 'A college town on I-35, where after-hours city bonds go through the police and state cases go to Newkirk.',
    answer:
      'Tonkawa\'s own municipal court page explains something most towns leave out: after regular business hours, the Tonkawa Police Department handles bonding a person out of jail on city charges, by money order, cashier\'s check, credit card or exact cash. State charges are different. People held on those are normally booked into the Kay County Detention Center at 1101 W Dry Rd in Newkirk, about 26 miles away, and the case is heard at the Kay County Courthouse there. Call Angel Bail Bonds at (405) 614-3000 and we sort out which kind of charge it is, where the person is held and what the bond is. Tonkawa Municipal Court meets on the second Monday of each month at 5:30 p.m. at 115 S 7th St; the clerk next door at 117 S 7th St is open Monday to Thursday, 7 a.m. to 5 p.m., and Friday mornings.',
    local: [
      'Tonkawa was founded in the 1893 Cherokee Outlet Opening when Eli V. Blake and Wiley William Gregory donated land for the townsite. In 1901 the territorial legislature put the University Preparatory School here; today it is Northern Oklahoma College, which keeps the town busy during the school year.',
      'During World War II, Camp Tonkawa held about 3,000 German prisoners of war. A 1920s oil boom briefly brought around 15,000 people to town. The A. D. Buck Museum and the Tonkawa Tribal Museum tell both stories.',
      'If the person arrested is a Northern Oklahoma College student, we can talk to parents out of town and explain the difference between a city case in Tonkawa and a state case in Newkirk.',
    ],
    faqs: [
      {
        q: 'How do I bond someone out on a Tonkawa city charge after hours?',
        a: 'The city says the Tonkawa Police Department handles city bonds after business hours and takes money order, cashier\'s check, credit card or exact cash.',
      },
      {
        q: 'When is Tonkawa Municipal Court?',
        a: 'The second Monday of each month at 5:30 p.m. at 115 S 7th St. The court clerk is at (580) 308-6125.',
      },
      {
        q: 'Where do state charges from Tonkawa go?',
        a: 'To the Kay County Detention Center and the Kay County Courthouse, both in Newkirk.',
      },
      {
        q: 'My child is a student at Northern Oklahoma College. Can you help from out of state?',
        a: 'Yes. We work with parents by phone and e-signature and explain each court date.',
      },
    ],
    nearby: ['blackwell', 'ponca-city', 'perry'],
    photo: photo(
      'Tonkawa,_Oklahoma.JPG',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Tonkawa%2C_Oklahoma.JPG/1280px-Tonkawa%2C_Oklahoma.JPG',
      1280, 606,
      'Looking west along East North Avenue in Tonkawa, Oklahoma',
      'East North Avenue in Tonkawa, looking west.',
      'Jeffrey Beall',
      L.by3,
    ),
    sources: [
      { label: 'Tonkawa Police Department', url: 'https://tonkawaok.gov/police-department/' },
      { label: 'Tonkawa Municipal Court', url: 'https://tonkawaok.gov/municipal-court/' },
      { label: 'Tonkawa (Oklahoma Historical Society)', url: OHS('TO004') },
      { label: 'Tonkawa, Oklahoma (Wikipedia)', url: WIKI('Tonkawa,_Oklahoma') },
    ],
  },
  {
    slug: 'newkirk',
    name: 'Newkirk',
    county: 'kay',
    population: 2172,
    lat: 36.88167,
    lng: -97.05556,
    highways: 'US-77, eight miles south of the Kansas line',
    milesToJail: null,
    milesToStillwater: 60,
    police: { name: 'Newkirk Police Department', street: '115 S Maple Ave', zip: '74647', phone: '(580) 362-2414', source: 'https://oklahoma.gov/cleet/peace-officers-training/peace-officer-jobs/northeast-region-peace-officer-jobs/newkirk---newkirk-pd---posted-june-23--2026.html' },
    municipalCourt: null,
    metaDescription:
      'Newkirk, OK bail bonds. The Kay County Detention Center and Kay County Courthouse are both in Newkirk. Addresses, police contact and 24/7 bond help.',
    tagline: 'The Kay County seat holds both the detention center and the 1926 courthouse.',
    answer:
      'Newkirk is the Kay County seat, so whether the arrest happened in Newkirk, Ponca City, Blackwell or on I-35, a person held on state charges ends up here. The Kay County Detention Center is at 1101 W Dry Rd on the west side of town, and the case is heard at the Kay County Courthouse at 201 S Main St downtown. They are separate buildings, so make sure you are going to the right one. Bond is posted at the detention center. Call Angel Bail Bonds at (405) 614-3000 and we confirm the booking and the bond amount, then send the agreement to your phone. The Newkirk Police Department is listed at 115 S Maple Ave, (580) 362-2414. For court business, the Court Clerk is at (580) 362-3350 and closes from noon to 12:45 p.m. for lunch.',
    local: [
      'Federal planners laid out the townsite in 1893 as a county seat called Lamoureux. Land-run settlers renamed it Newkirk, after the nearby cattle-shipping depot of Kirk, and within two months the town had 247 businesses.',
      'Much of downtown is built from locally quarried limestone, and the Newkirk Central Business District joined the National Register of Historic Places in 1984. In 1992 Newkirk became the first small town in Oklahoma to win the Oklahoma Main Street award.',
      'Since a 2020 annex moved other county offices out, the old courthouse is used only for court business.',
    ],
    faqs: [
      {
        q: 'Where is the Kay County Detention Center?',
        a: 'At 1101 W Dry Rd in Newkirk. Its phone is (580) 362-3393.',
      },
      {
        q: 'Is the Kay County Courthouse next to the jail?',
        a: 'No. The courthouse is downtown at 201 S Main St. The detention center is on W Dry Rd on the edge of town.',
      },
      {
        q: 'How do I reach Newkirk police?',
        a: 'The department is listed at 115 S Maple Ave, (580) 362-2414. In an emergency, call 911.',
      },
      {
        q: 'How long does it take you to post a Kay County bond?',
        a: 'We can start the paperwork as soon as you call. Release time depends on how fast the detention center finishes booking and release.',
      },
    ],
    nearby: ['ponca-city', 'blackwell'],
    photo: photo(
      'Newkirk_Oklahoma_main_street_1907.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Newkirk_Oklahoma_main_street_1907.jpg/1280px-Newkirk_Oklahoma_main_street_1907.jpg',
      1280, 821,
      'Main Street in Newkirk, Oklahoma, in 1907',
      'Main Street in Newkirk in 1907, the year Oklahoma became a state.',
      'Unknown photographer',
      L.pd,
    ),
    sources: [
      { label: 'Newkirk PD (Oklahoma CLEET job posting)', url: 'https://oklahoma.gov/cleet/peace-officers-training/peace-officer-jobs/northeast-region-peace-officer-jobs/newkirk---newkirk-pd---posted-june-23--2026.html' },
      { label: 'City of Newkirk', url: 'https://cityofnewkirkok.gov' },
      { label: 'Newkirk (Oklahoma Historical Society)', url: OHS('NE012') },
      { label: 'Newkirk, Oklahoma (Wikipedia)', url: WIKI('Newkirk,_Oklahoma') },
    ],
  },

  // ───────────────────────── Noble County ─────────────────────────
  {
    slug: 'perry',
    name: 'Perry',
    county: 'noble',
    population: 4484,
    lat: 36.28361,
    lng: -97.30944,
    highways: 'US-64 and US-77, about two miles east of I-35',
    milesToJail: null,
    milesToStillwater: 25,
    police: { name: 'Perry Police Department', phone: '(580) 336-4422', source: 'https://oklahoma.gov/911/911-psap-contacts.html' },
    municipalCourt: null,
    metaDescription:
      'Perry, OK bail bonds. The Noble County Jail on Cedar St and the courthouse on the square are both in Perry. Police contact, court info and 24/7 bond help.',
    tagline: 'Noble County\'s seat keeps its jail on Cedar Street, a few blocks from the 1915 courthouse on the square.',
    answer:
      'Perry is the Noble County seat, so an arrest here, or anywhere along I-35 in Noble County, is handled close by. People held on state charges are booked into the Noble County Jail at 721 Cedar St, next to Perry City Hall, and their cases are heard at the Noble County Courthouse in the middle of the town square. Bond is posted at the jail. Call Angel Bail Bonds at (405) 614-3000 and we confirm the booking and the bond amount with the jail at (580) 336-3517, then send the agreement to your phone. Perry is only about 25 miles west of our Stillwater office, so we can be there quickly when needed. The state 911 directory lists the City of Perry\'s police line as (580) 336-4422. We could not confirm a separate municipal court location online, so ask the city at City Hall, 622 Cedar St.',
    local: [
      'At noon on September 16, 1893, the Cherokee Strip land run opened, and by nightfall about 40,000 people had pitched tents where Perry now stands. The town incorporated four days later. The Cherokee Strip Museum keeps that story.',
      'Ed Malzahn built the first compact Ditch Witch trencher here by 1948, and Charles Machine Works, now part of Toro, is still Perry\'s largest employer. Comedian Buster Keaton claimed Perry as his hometown and first performed at its Grand Opera House.',
      'The stone Noble County Courthouse, completed in 1915, anchors the Perry Courthouse Square Historic District, which is on the National Register of Historic Places.',
    ],
    faqs: [
      {
        q: 'Where is the Noble County Jail?',
        a: 'At 721 Cedar St in Perry, next to City Hall. The jail\'s phone is (580) 336-3517.',
      },
      {
        q: 'Where are I-35 arrests near Perry booked?',
        a: 'If the arrest was inside Noble County, the person is normally booked into the Noble County Jail in Perry.',
      },
      {
        q: 'How do I reach Perry police?',
        a: 'The state 911 directory lists the City of Perry at (580) 336-4422. In an emergency, call 911.',
      },
      {
        q: 'How far is Perry from Angel Bail Bonds?',
        a: 'About 25 miles west of our office at 800 E 6th Ave in Stillwater.',
      },
    ],
    nearby: ['tonkawa', 'guthrie', 'perkins', 'pawnee'],
    photo: photo(
      'Downtown_Perry,_Oklahoma.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Downtown_Perry%2C_Oklahoma.jpg/1280px-Downtown_Perry%2C_Oklahoma.jpg',
      1280, 1707,
      'Historic storefronts on the courthouse square in downtown Perry, Oklahoma',
      'Downtown Perry around the courthouse square.',
      'Aaronw1109',
      L.cc0,
    ),
    sources: [
      { label: 'Oklahoma 911 PSAP contacts (City of Perry)', url: 'https://oklahoma.gov/911/911-psap-contacts.html' },
      { label: 'City of Perry administration', url: 'https://cityofperryok.com/page/city-administration' },
      { label: 'Perry (Oklahoma Historical Society)', url: OHS('PE017') },
      { label: 'Perry, Oklahoma (Wikipedia)', url: WIKI('Perry,_Oklahoma') },
    ],
  },

  // ───────────────────────── Logan County ─────────────────────────
  {
    slug: 'guthrie',
    name: 'Guthrie',
    county: 'logan',
    population: 10749,
    lat: 35.85639,
    lng: -97.43583,
    highways: 'US-77, 32 miles north of Oklahoma City',
    milesToJail: null,
    milesToStillwater: 33,
    police: { name: 'Guthrie Police Department', phone: '(405) 282-3535', source: 'https://www.cityofguthrie.com/police' },
    municipalCourt: { street: 'City Hall, 101 N 2nd St, 2nd floor (Wednesdays, 2:30 p.m.)', phone: '(405) 282-2489', source: 'https://www.cityofguthrie.com/court' },
    metaDescription:
      'Guthrie, OK bail bonds. Logan County Jail at 216 S Broad St, courthouse arraignments Tue and Thu, city court Wednesdays. Contacts and 24/7 bond help.',
    tagline: 'Oklahoma\'s first capital keeps the Logan County Jail, the courthouse and city court within a few blocks.',
    answer:
      'Guthrie is the Logan County seat, and everything an arrest involves is downtown. People held on state charges are booked into the Logan County Jail at 216 S Broad St, (405) 282-4100, and their cases go to the Logan County Courthouse at 301 E Harrison Ave. Logan County posts its court calendar: arraignments are on Tuesdays and Thursdays at 1:30 p.m., felony dockets on the first and third Fridays, and misdemeanor dockets on the second Thursday. Call Angel Bail Bonds at (405) 614-3000 and we confirm the booking and the bond, send the agreement to your phone and post the bond at the jail. City tickets written by Guthrie police are heard by Guthrie Municipal Court every Wednesday at 2:30 p.m. in the second-floor Council Chamber at City Hall, 101 N 2nd St. The police non-emergency line, after 5 p.m. and on weekends, is (405) 282-3535.',
    local: [
      'About 10,000 people settled Guthrie within six hours of the Land Run of April 22, 1889. It served as the territorial capital and as Oklahoma\'s first state capital from 1907 until Oklahoma City won a 1910 vote. The state constitution was drafted at Guthrie\'s City Hall in 1906.',
      'The Guthrie Historic District, with more than 2,000 buildings, became a National Historic Landmark in 1999. The Scottish Rite Masonic Temple is one of the largest Masonic centers in the world, and 89er Day, the Guthrie Jazz Banjo Festival and Territorial Christmas fill downtown every year.',
      'I-35 brings a steady stream of traffic between Oklahoma City and Kansas past Guthrie, and Logan County arrests often involve drivers from the metro.',
    ],
    faqs: [
      {
        q: 'Where is the Logan County Jail?',
        a: 'At 216 S Broad St in Guthrie. The sheriff\'s office number is (405) 282-4100.',
      },
      {
        q: 'When are arraignments in Logan County?',
        a: 'Tuesdays and Thursdays at 1:30 p.m. at the courthouse, 301 E Harrison Ave. Call the Court Clerk at (405) 282-0123 between 8:00 and 10:30 a.m. that day to be added.',
      },
      {
        q: 'When does Guthrie Municipal Court meet?',
        a: 'Every Wednesday at 2:30 p.m., except holidays, in the Council Chamber on the second floor of City Hall, 101 N 2nd St.',
      },
      {
        q: 'What is the Guthrie police non-emergency number?',
        a: '(405) 282-3535 after 5 p.m. and on weekends. During business hours the city\'s main line is (405) 282-2489.',
      },
    ],
    nearby: ['perry', 'perkins', 'chandler'],
    photo: photo(
      'Blockfront,_Oklahoma_Avenue,_Guthrie,_Oklahoma_LCCN2017703081.tif',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Blockfront%2C_Oklahoma_Avenue%2C_Guthrie%2C_Oklahoma_LCCN2017703081.tif/lossy-page1-1280px-Blockfront%2C_Oklahoma_Avenue%2C_Guthrie%2C_Oklahoma_LCCN2017703081.tif.jpg',
      1280, 881,
      'A block of historic Victorian storefronts on Oklahoma Avenue in Guthrie, Oklahoma',
      'Historic storefronts on Oklahoma Avenue in Guthrie, photographed in 1996.',
      'John Margolies (Library of Congress)',
      L.pd,
    ),
    sources: [
      { label: 'Guthrie Police Department', url: 'https://www.cityofguthrie.com/police' },
      { label: 'City of Guthrie: report a concern', url: 'https://www.cityofguthrie.com/concerns' },
      { label: 'Guthrie Municipal Court', url: 'https://www.cityofguthrie.com/court' },
      { label: 'Logan County docket calendar', url: 'https://www.logancountyok.com/230/Docket-Calendar' },
      { label: 'Oklahoma Sheriffs\' Association: Logan County', url: 'https://oklahomasheriffs.org/logan-county' },
      { label: 'Guthrie (Oklahoma Historical Society)', url: OHS('GU003') },
    ],
  },
];
