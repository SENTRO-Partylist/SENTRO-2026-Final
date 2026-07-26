const bannerMarkup = `
	<header class="site-banner" aria-label="Primary navigation">
		<a class="brand-link" href="index.html">SENTRO</a>
		<div class="banner-right">
			<nav class="banner-nav">
				<a href="party-members.html">Credentials</a>
				<a href="platforms-agenda.html">Platforms</a>
				<a href="gamification.html">Play Hub</a>
			</nav>
			<div class="banner-socials" aria-label="External links">
				<a class="social-link" href="https://www.facebook.com/DLSLSentro" target="_blank" rel="noopener noreferrer" aria-label="Facebook link">
					<img src="img/facebook.png" alt="Facebook">
				</a>
				<a class="social-link" href="https://www.instagram.com/sentrogram/" target="_blank" rel="noopener noreferrer" aria-label="Instagram link">
					<img src="img/instagram.png" alt="Instagram">
				</a>
				<a class="social-link" href="https://www.dlsl.edu.ph/" target="_blank" rel="noopener noreferrer" aria-label="De La Salle Lipa link">
					<img src="img/dlsl.png" alt="De La Salle Lipa">
				</a>
			</div>
		</div>
	</header>
`;

const bannerRoot = document.getElementById("site-banner-root");
if (bannerRoot) {
	bannerRoot.innerHTML = bannerMarkup;
}

const sentroMembers = [
	{
		id: "david",
		fullName: "David Uriel B. Malabanan",
		position: "Grade 11 Vice President",
		imageUrl: "img/members/david.png",
		credentials: {
			leadership: `
        Grade 3 Class Secretary
        Grade 4 Class Secretary
        Grade 6 Vice President
        Grade 7 Class Secretary
        Grade 7 CAPSTONE Leader
        Animo Tour #3 Representative
        Grade 8 CAPSTONE Leader
        Grade 8 SCB Representative
        Grade 9 CAPSTONE Leader
        Grade 9 SCB Representative
        Grade 10 Class President
        Grade 10 CAPSTONE Leader
        edukAKSYON: Para sa Kabataan, Kulayan ang Kinabukasan, Logistics and External Communications Head S.Y. ‘25 - ‘26
        English Research Leader S.Y. ‘25 - ‘26
        Grade School Lead Program Facilitator S.Y. ‘23 - 24
        Junior High School Lead Program Facilitator S.Y. ‘23 - ‘24
        Junior High School Lead Program Facilitator S.Y. ‘24 - ‘25
        Junior High School Debate Society Vice President S.Y. ‘25 - ‘26
        BULIK Publication Opinion Deputy Head S.Y. ‘25 - ‘26
      `,
			academics: `
        Grade 10 With Highest Honors, Rank 1 of 539
        Grade 9 With Highest Honors
        Grade 8 With Highest Honors
        Grade 7 With Highest Honors
        Grade 6 With Honors, Salutatorian
        Grade 5 With Honors, Rank 3
        Grade 4 With Honors
        Grade 3 With Honors
        Grade 2 With Honors
        Grade 1 With Honors
        Kindergarten With Honors
        Nursery 2, With Honors, Rank 3
        Br. Hugh Damian FSC Scholarship Grantee, 1 of the top 10 students, S.Y. ‘26 - ‘27
        World Mathematics Invitational Preliminaries Bronze Medalist, South Korea Qualifier S.Y. 2022-2023
        World Mathematics Invitational Heat Round Qualifier S.Y. 2022-2023
        Outstanding Performance in Filipino S.Y. 2021-2022
        Outstanding Performance in Mathematics S.Y. 2021-2022
        Outstanding Performance in Science S.Y. 2021-2022
        Outstanding Performance in Araling Panlipunan S.Y. 2021-2022
        1 of the top 5 Class Best in Math badges S.Y. ‘22 - ‘23
        Quiz Bee 1st Placer S.Y. ‘21 - ‘22
        Quiz Bee 2nd Placer S.Y. ‘19 - ‘20
        TLE Culminating Activity, Batch Best Speaker/Presenter, Barako Piyesta S.Y. ‘25 - ‘26
        CLCE, English, and Social Studies Culminating Activity, Tableau Class Speaker.
        Philippine Representative, News Anchor, Indonesia’s English Festival S.Y. ‘25 - ‘26
        Poster Making Contest 3rd Place S.Y. 2021-2022
        Poem Recital 1st Placer S.Y. 2021-2022
        Mathinik 2nd Placer S.Y. 2021-2022
        Araling Panlipunan Quiz Bee 2nd Placer S.Y. 2021-2022
        2017 Mathraton 1st placer
        2017 Poem Recital 3rd place
        2018 Mathraton 1st placer
        Metrobank DepEd -MTAP Gold Medal Awardee 2019
        Mission and Vision Recital 2nd Placer
        MAPEH Ballroom Dancing District level 1st Placer awardee
        MAPEH Ballroom Dancing Division level 1st Placer awardee
        MAPEH Ballroom Dancing Area level 1st Placer awardee
        MAPEH Ballroom Dancing Regional Level 5th Placer
        Asian MathSci League, Inc. (AMSLI) Mathematics Enrichment Program Completer 2022-2023
        Asian MathSci League, Inc. (AMSLI) Mathematics Enrichment Program Completer 2023-2024
        Asian MathSci League, Inc. (AMSLI) Mathematics Enrichment Program Achiever 2017-2018
        Asian MathSci League, Inc. (AMSLI) Mathematics Enrichment Program Achiever 2018-2019
        Metrobank DepEd - MTAP District Level Champion 2017
        Metrobank DepEd - MTAP District Level Champion 2018
        Metrobank DepEd - MTAP Division Level Qualifier 2017
        Metrobank DepEd - MTAP Division Level Qualifier 2018
        KUMON Advance Student Honor Roll (ASHR) Math Bronze Awardee of May 2018.
        KUMON Advance Student Honor Roll (ASHR) Math Bronze Awardee of August 2018
        KUMON Advance Student Honor Roll (ASHR) Math Bronze Awardee of November 2018.
        KUMON Advance Student Honor Roll (ASHR) Math Bronze Awardee of February 2019
        KUMON Advance Student Honor Roll (ASHR) Math Bronze Awardee of August 2019
        KUMON Advance Student Honor Roll (ASHR) Math Silver Awardee
        16th School Press Advisers’ Movement Inc. (SPAM, Inc.) 4th Best Feature Writer
        PED XING XVII Asian Parliamentary Debate Top 3 Preliminary Rounds
        PED XING XVII Asian Parliamentary Debate Quarterfinalists
        Delegate, Singapore Schools Model United Nations (SSMUN)
        Participant, De La Salle Lipa Representative, Dagliang Talumpati Karibok ang Tuktok 2025
      `,
			affiliations: `
        Math Club S.Y. ‘16 - ‘17
        Math Club S.Y. ‘17 - ‘18
        Math Club S.Y. ‘18 - ‘19
        School Choir S.Y. ‘17 - ‘18
        School Choir S.Y. ‘18 - ‘19
        SiKat Volunteer S.Y. ‘22 - ‘23
        Student Coordinating Board S.Y. ‘24 - ‘25
        Student Coordinating Board S.Y. ‘23 - ‘24
        BULIK Publication S.Y. ‘25 - ‘26
        JHS Debate Society S.Y. ‘25 - ‘26
        Social Studies Varsity Club S.Y. ‘25 - ‘26
        Adlaw Club S.Y. ‘25 - ‘26
        School Campus Ministry S.Y. ‘25 - ‘26
        Lasallian Music Production Club (2022 - 2023)
        Math Varsity Club (2022 - 2023)
        Math Varsity Club (2023 - 2024)
        Anak Member S.Y. ‘21 - ‘22
        Anak Member S.Y. ‘22 - ‘23
        Anak Member S.Y. ‘23 - ‘24
        Anak Member S.Y. ‘24 - ‘25
      `
		}
	},
	{
		id: "aianna",
		fullName: "Aianna Celestine S. Alvarez",
		position: "Grade 11 HA Representative",
		imageUrl: "img/members/aianna.png",
		credentials: {
			leadership: `
        Grade 1 Class Officer
        Grade 3 Class Officer
        Grade 4 Class Vice President
        Grade 5 Class Officer
        Grade 6 Class Officer
        Grade 7 Class Officer
        Grade 8 Class Treasurer
        Grade 9 Class President
        Grade 10 Vice President
        Grade 4 CAPSTONE Leader
        Grade 5 CAPSTONE Leader
        Grade 6 CAPSTONE Leader
        Grade 7 CAPSTONE Leader
        Grade 8 CAPSTONE Leader
        Grade 9 CAPSTONE Leader
        Grade 10 CAPSTONE Leader
        Ecological Logistics and External Communications Head S.Y. 2025 - 2026 
        BULIK Sci-Tech Head (S.Y. 2025 - 2026)
        Participant LEAD (S.Y. 2024 - 2025)
      `,
			academics: `
        Grade 1 - With High Honors, Class Rank 1
        Grade 2 George B. Swift Speciality School Completer
        Grade 3 - With High Honors
        Grade 4 - With High Honors
        Grade 5 - With Highest Honors
        Grade 6 - With Highest Honors
        Grade 7 - With Highest Honors
        Grade 8 - With Highest Honors, Batch Rank 1
        Grade 9 - With Highest Honors
        Grade 10 - With Highest Honors, Salutatorian
        AMEP Qualifying Exam Qualifier (S.Y. 2023 - 2024)
        BayLayn2026: Mula sa Masa, Para sa Masa: Pananagutan sa Bayan ng Citizen Journalism Participant (S.Y. 2025 - 2026)
        Delegate, International High School Marine Education Convention at National Taiwan Ocean University
      `,
			affiliations: `
        Glee Club (S.Y. 2017 - 2018)
        Dance Club (S.Y. 2018 - 2019)
        BULIK Publication (S.Y. 2025 - 2026)
      `
		}
	},
	{
		id: "anneyo",
		fullName: "Anneyo Martin L. Tapia",
		position: "Grade 11 SE Representative",
		imageUrl: "img/members/anneyo.png",
		credentials: {
			leadership: `
        Boy Scouts of the Philippines - Patrol Leader (S.Y. 2017-2018)
        Grade 7 CAPSTONE Co-Leader (S.Y. 2022-2023)
        Grade 8 Vice President (S.Y. 2023-2024)
        Grade 8 CAPSTONE Co-Leader (S.Y. 2023-2024)
        Grade 9 CAPSTONE Leader (S.Y. 2024-2025)
        Grade 9 Marshal (S.Y. 2024-2025)
        Grade 10 CAPSTONE Leader (S.Y. 2025-2026)
        Grade 10 Safety Marshal (S.Y. 2025-2026)
        Grade 10 Science Varsity President (S.Y. 2025-2026)
      `,
			academics: `
        Daycare - with Honors (S.Y. 2013-2014)
        Kindergarten 1 - with Honors, Batch Rank 3 (S.Y. 2014 - 2015)
        Kindergarten 2 - with Honors, Batch Rank 3 (S.Y. 2015 - 2016)
        Grade 1 - with Honors, Batch Rank 3 (S.Y. 2016-2017)
        Grade 2 - with Honors, Batch Rank 5 (S.Y. 2017-2018)
        Grade 3 - with Honors, Batch Rank 3 (S.Y. 2018-2019)
        Grade 4 - with Honors, Batch Rank 3 (S.Y. 2019-2020)
        Grade 5 - with Honors, Batch Rank 9 (S.Y. 2020-2021)
        Grade 6 - with Honors, Batch Rank 8 (S.Y. 2021-2022)
        Grade 7 - with High Honors (S.Y. 2022-2023)
        Grade 8 - with High Honors (S.Y. 2023-2024)
        Grade 9 - with High Honors (S.Y. 2024-2025)
        Grade 10 - with High Honors (S.Y. 2025-2026)
        Metrobank - MTAP - DepEd Math Challenge Qualifier, District Level (S.Y. 2016-2017)
        Metrobank - MTAP - DepEd Math Challenge Qualifier, Division Level (S.Y. 2016-2017)
        Metrobank - MTAP - DepEd Math Challenge Qualifier, District Level (S.Y. 2017-2018)
        Metrobank - MTAP - DepEd Math Challenge Qualifier, District Level (S.Y. 2018-2019)
        Metrobank - MTAP - DepEd Math Challenge Qualifier, Division Level (S.Y. 2018-2019)
        Batch Spelling Bee Champion (S.Y. 2017-2018)
        Best in Mathematics (S.Y. 2016-2017)
        Best in Filipino (S.Y. 2016-2017)
        Best in Mathematics (S.Y. 2018-2019)
        Best in Science (S.Y. 2018-2019)
        Best in Mathematics (S.Y. 2019-2020)
        Mr. LCCT 2018 1st Runner-Up (S.Y. 2018-2019)
        Mr. LCCT 2nd Top Grosser (S.Y. 2018-2019)
        LCCT Family Council Award (S.Y. 2016-2017)
        LCCT Family Council Award (S.Y. 2018-2019)
        LCCT Family Council Award (S.Y. 2019-2020)
        Committee On Sacred Music Archdiocesan Ministry On Liturgy Archdiocese Of Lipa - Harana sa Panginoon 2019 Finalists (S.Y. 2019-2020)
        Harana sa Panginoon 2019 - 2nd Placer (S.Y. 2019-2020)
        AMEP - Qualifying Exam Qualifier (S.Y. 2024-2025)
        CLCE, English, and Social Studies Culminating Activity, Tableau 2nd Placer (S.Y. 2024-2025)
        Ignite The Future - Fueled By Stem Year 2025 Awardee 
        ASEP - Qualifying Exam Qualifier (S.Y. 2025-2026)
      `,
			affiliations: `
        Boy Scouts of the Philippines S.Y. 2016-2017
        Boy Scouts of the Philippines S.Y. 2017-2018
        Boy Scouts of the Philippines S.Y. 2018-2019
        Boy Scouts of the Philippines S.Y. 2019-2020
        LCCT Science Club S.Y. 2016-2017
        LCCT Science Club S.Y. 2017-2018
        LCCT Science Club S.Y. 2018-2019
        LCCT Science Club S.Y. 2019-2020
        LCCT Math Club S.Y. 2016-2017
        LCCT Math Club S.Y. 2017-2018
        LCCT Math Club S.Y. 2018-2019
        LCCT Math Club S.Y. 2019-2020
        LCCT Arts Club S.Y. 2016-2017
        LCCT Arts Club S.Y. 2017-2018
        LCCT Arts Club S.Y. 2018-2019
        Young Agustinig S.Y. 2017-2018
        Young Agustinig S.Y. 2018-2019
        Young Agustinig S.Y. 2019-2020
        ANAK Member S.Y. 2024-2025
        ANAK Member S.Y. 2025-2026
        Campus Ministry Choir S.Y. 2024-2025
        Campus Ministry Choir S.Y. 2025-2026
        Student Campus Ministry S.Y. 2024-2025
        Student Campus Ministry S.Y. 2025-2026
        Science Varsity S.Y. 2025-2026
      `
		}
	},
	{
		id: "athena",
		fullName: "Athena B. Tarcelo",
		position: "Grade 11 BM/AHSS Representative",
		imageUrl: "img/members/athena.png",
		credentials: {
			leadership: `
        Pillar of Leadership Award (S.Y. 2025-2026)
        Most Outstanding Officer - Supreme Secondary Learner Government (SSLG) (S.Y. 2025-2026)
        Supreme Secondary Learner Government (SSLG) President (S.Y. 2025-2026)
        Supreme Secondary Learner Government (SSLG) Acting President (S.Y. 2024-2025)
        Supreme Secondary Learner Government (SSLG) Vice President (S.Y. 2024-2025)
        Supreme Secondary Learner Government (SSLG) Public Information Officer (S.Y. 2023-2024)
        Supreme Secondary Learner Government (SSLG) Peace Officer (S.Y. 2022-2023)
        Pupils’ Council Auditor (S.Y 2020-2021)
        Science Club President (S.Y. 2021-2022)
        English Club Vice President (S.Y. 2021-2022)
        English Club Officer (S.Y. 2020-2021)
        Yes-O Club Auditor (S.Y. 2021-2022)
        Honor Society G10-SciHs Representative (S.Y. 2025-2026)
        Arts and Camera Club (ACC) Photo Layout Coordinator (S.Y. 2023-2024)
        Arts and Camera Club (ACC) Public Relations Officer (S.Y. 2024-2025)
        Arts and Camera Club (ACC) Digital Arts Coordinator (S.Y. 2025-2026)
        Rank 8: Top Performing Girl Scout - UBBC JHS Girl Scouts of the Philippines (GSP) (S.Y. 2024-2025)
        UBBC JHS Girl Scouts of the Philippines (GSP) Quarter Master (S.Y. 2023-2024)
        UBBC JHS Girl Scouts of the Philippines (GSP) Public Relations Officer (S.Y. 2024-2025)
        UBBC JHS Girl Scouts of the Philippines (GSP) Sgt. at Arms (S.Y. 2025-2026)
        Brahman Writers’ Club / The Westernian Herald Science Editor (S.Y. 2021-2022)
        The Westernian Pioneer (TWP) Radio Broadcaster (S.Y. 2025-2026)
        Arts Club Sgt. at Arms (S.Y. 2018-2019)
        English Club Peace Officer (S.Y. 2017-2018)
        G10-Archimedes Secretary (S.Y. 2025-2026)
        G10-Archimedes Class Monitor (S.Y. 2025-2026)
        G9-Avogadro Secretary (S.Y. 2024-2025)
        G9-Avogadro Class Monitor (S.Y. 2024-2025)
        G8-Darwin Vice President (S.Y. 2023-2024)
        G7-Euclid Vice President (S.Y. 2022-2023)
        G6-Caraga Secretary (S.Y. 2021-2022)
        G5-Service Public Information Officer (S.Y. 2020-2021)
        G4-Vega President (S.Y. 2019-2020)
        G3-Polaris President (S.Y. 2018-2019)
        G2-Mira President (S.Y. 2017-2018)
        G1-Altair President (S.Y. 2016-2017)
        Research Leader : Filipino (S.Y. 2024-2025)
        Research Leader : Chemistry & Science (S.Y. 2024-2025)
        Research Leader : Filipino (S.Y. 2025-2026)
        Final Research in Grade 10 Leader (S.Y. 2025-2026)
        Student Principal (S.Y. 2025-2026)
        Featured Guest as SSLG President, Club Presidents Interview with Sir A (S.Y. 2025-2026)
        Featured Guest as SSLG President, UB Official Christmas Music Video (S.Y. 2025-2026)
        Completer, Bulilit/Teen Health Workers (S.Y. 2022-2023)
        Completer/Delegate, “Unleashing Leadership Potentials” : Rising Leaders: Leadership Camp by JCI Anilao Batangas Leadership Training 
        Completer, The Westernian Pioneer Live-In Training
        Impromptu Speaker/Delegate, SDG Voices Batangas 2024 Seminar - Stonyhurst Southville International School (S.Y. 2024-2025)
        Delegate, 10th National Student Leadership Assembly and Talent Fair organized by the Association of Philippines Private School Administrators and Mentors (APPSAM) - Teachers’ Camp, Baguio (S.Y. 2022-2023)
        Delegate, UBian Student Leaders’ Seminar - Conserving and Preserving Natural Resources (S.Y. 2024-2025)
        Delegate, Senior Cadet Planning Board Event/Seminar (S.Y. 2025-2026)
        Delegate, UBBC JHS GSP Leadership Camp (S.Y. 2024-2025)
        Delegate, UBBC JHS GSP Leadership Camp First-Aid Training Seminar (SY. 2024-2025)
        Delegate, Gender and Development Webinar (S.Y. 2022-2023)
        Delegate, Save Verde Island Seminar (S.Y. 2023-2024)
        Delegate, 55th Medicine Week Celebration : Anak Ko, Anak ng Inang Kalikasan (S.Y. 2022-2023)
        Delegate, National Women’s Month Seminar (S.Y. 2024-2025)
      `,
			academics: `
        Rank 2 / Salutatorian, Batch 2026, University of Batangas Junior High School 
        Governor Vilma Santos Recto Medal for Academic Excellence Awardee (S.Y. 2015-2016)
        Consistent Principal’s Lister (General Average: 97)
        Grade 10, With High Honors (S.Y. 2025-2026)
        Grade 9, With High Honors (S.Y. 2024-2025)
        Grade 8, With High Honors (S.Y. 2023-2024)
        Grade 7, With High Honors (S.Y. 2022-2023)
        Grade 6, With High Honors (S.Y. 2021-2022)
        Grade 5, With High Honors (S.Y. 2020-2021)
        Grade 4, With High Honors, Rank 1 (S.Y. 2019-2020)
        Grade 3, With High Honors, Rank 1 (S.Y. 2017-2018)
        Grade 2, With High Honors, Rank 1 (S.Y. 2016-2017)
        Grade 1, With High Honors, Rank 1 (S.Y. 2018-2019)
        Kindergarten 2, Rank 1 (S.Y. 2015-2016)
        Kindergarten 1, Rank 1 (S.Y. 2014-2015)
        Grade 10, Special Recognition in Academics (S.Y. 2025-2026)
        Grade 10, Special Recognition in School Publication (S.Y. 2025-2026)
        Grade 10, Division Winner (S.Y. 2025-2026)
        Grade 10, Regional Winner (S.Y. 2025-2026)
        Grade 9, Special Recognition in Academics (S.Y. 2024-2025)
        Grade 6, Best in English (S.Y. 2021-2022)
        Grade 6, Division Winner (S.Y. 2021-2022)
        Grade 6, Regional Qualifier (S.Y. 2021-2022)
        Grade 4, Most Responsible (S.Y. 2019-2020)
        Grade 4, Active Participation in Academic Affairs (S.Y. 2019-2020)
        Grade 3, Most Responsible (S.Y. 2018-2019)
        Grade 3, Active Participation in Academic Affairs (S.Y. 2018-2019)
        Grade 2, Most Responsible (S.Y. 2017-2018)
        Grade 2, Active Participation in Academic Affairs (S.Y. 2017-2018)
        Grade 1, Most Responsible (S.Y. 2016-2017)
        Grade 1, Active Participation in Academic Affairs (S.Y. 2016-2017)
        Grade 1, (CAL) Computer Assisted Learning Medalist (S.Y. 2016-2017)
        Reconfigured Regional Schools Press Conference (RRSPC) 2026 : CALABARZON - Best Anchor (S.Y. 2025-2026)
        Reconfigured Regional Schools Press Conference (RRSPC) 2026 : CALABARZON - Best Script (Team Award) (S.Y. 2025-2026)
        Reconfigured Regional Schools Press Conference (RRSPC) 2026 : CALABARZON - Best Infomercial (Team Award) (S.Y. 2025-2026)
        Reconfigured Regional Schools Press Conference (RRSPC) 2026 : CALABARZON - 2nd Best Radio Production (S.Y. 2025-2026)
        JournCamp Rizal : CALABARZON - Top 13 (S.Y. 2025-2026)
        Division Schools Press Conference 2025 : SDO Batangas City - Best Radio Production (S.Y. 2025-2026)
        Division Schools Press Conference 2025 : SDO Batangas City - Best Script (Team Award) (S.Y. 2025-2026)
        Division Schools Press Conference 2025 : SDO Batangas City - Best Infomercial (Team Award) (S.Y. 2025-2026)
        Division Schools Press Conference 2025 : SDO Batangas City - 4th Best News Presenter (S.Y. 2025-2026)
        Division Schools Press Conference (DSPC) 2021 : SDO Batangas City : Sports Writing (English) - 3rd Place (S.Y. 2021-2022)
        Regional Schools Press Conference (RSPC) 2022 : CALABARZON : Sports Writing (English) - Qualifier (S.Y. 2021-2022)
        Division Schools Press Conference (DSPC) 2022 : SDO Batangas City : Sports Writing (English) - Participant (S.Y. 2022-2023)
        Best News Reporter in Radio Broadcasting & Script Writing (S.Y. 2024-2025)
        Best Speaker in Debate (S.Y. 2022-2023)
        Ambulong, Batangas City : Mathematics Community Program - Most Outstanding Pupil (S.Y. 2016-2017)
        Metrobank-DepEd Math Challenge : Mathematics Teachers Association of the Philippines (MTAP) - Rank 1 (S.Y. 2016-2017)
        Metrobank-DepEd Math Challenge : Mathematics Teachers Association of the Philippines (MTAP), representing Carmel School of Batangas - Rank 1 (S.Y. 2017-2018)
        Metrobank-DepEd Math Challenge Finals : Mathematics Teachers Association of the Philippines (MTAP), representing Carmel School of Batangas - Rank 2 (S.Y. 2017-2018)
        Mathematics Teachers Association of the Philippines (MTAP), representing Carmel School of Batangas - Rank 3 out of 83 (S.Y. 2018-2019)
        Batangas City Private Schools Association (BCPRSA) Inter-school Competition : English Comprehension Competition, representing Carmel School of Batangas - 2nd Place (S.Y. 2018-2019)
        Batangas City Private Schools Association (BCPRSA) Inter-school Competition : Science Quiz Bee, representing Carmel School of Batangas - 3rd Place (S.Y. 2017-2018)
        Batangas City Private Schools Association (BCPRSA) Inter-school Competition :  English Storytelling, representing Carmel School of Batangas - 4th Place (S.Y. 2017-2018)
        Batangas City Private Schools Association (BCPRSA) Inter-school Competition : Science Quiz Bee, representing Carmel School of Batangas - Rank 7 (S.Y. 2019-2020)
        Batangas City Private Schools Association (BCPRSA) Inter-school Competition : Story Telling, representing Carmel School of Batangas - Participant (S.Y. 2019-2020)
        Science Month : Digital Poster Making Contest - 1st Place (S.Y. 2025-2026)
        Science Month : Digital Poster Making Contest - 1st Place (S.Y. 2024-2025)
        Buwan ng Wikang Pambansa - DigiWika : Digital Poster Making Contest - 1st Place (S.Y. 2025-2026)
        Buwan ng Wikang Pambansa : Short Film - 1st Place (S.Y. 2025-2026)
        Buwan ng Wikang Pambansa : Best Actress Award in Short Film (S.Y. 2025-2026)
        Buwan ng Wikang Pambansa : Masining na Pagbasa - 2nd Place (S.Y. 2024-2025)
        Buwan ng Wika : Spoken Poetry - 2nd Place (S.Y. 2021-2022)
        UBBC Grade School : Read Aloud - 1st Place (S.Y. 2021-2022)
        UBBC Grade School : TV News Casting - 1st Place S.Y. 2021-2022)
        UBBC Grade School : Science Brain Tugs - 1st Place (S.Y. 2020-2021)
        UBBC Grade School : Sci-Vlog - 1st Place (S.Y. 2021-2022)
        UBBC Grade School : Coding & Scratch - 1st Place (S.Y. 2021-2022)
        UBBC Grade School : Oratorical - 2nd Place (S.Y. 2020-2021)
        UBBC Grade School : Coding Through Scratch - 2nd Place (S.Y. 2021-2022)
        UBBC Grade School : Math Olympiad - 3rd Place (S.Y. 2021-2022)
        UBBC Grade School : Logo Making Contest - 3rd Place (S.Y. 2020-2021)
        UBBC Grade School : Traditional Poster Making Contest - Participant (S.Y. 2021-2022)
        Carmel School of Batangas : Sci/Tech Quiz Bee - 1st Place (S.Y. 2016-2017)
        Carmel School of Batangas : Tagisan ng Talino - 1st Place (S.Y. 2016-2017)
        Carmel School of Batangas : English Quiz Bee - 1st Place (S.Y. 2018-2019)
        Carmel School of Batangas : Spelling Bee - 2nd Place (S.Y. 2016-2017)
        Carmel School of Batangas : Tagisan ng Talino sa Araling Panlipunan - 2nd Place (S.Y. 2016-2017)
        Carmel School of Batangas : Math Quiz Bee - 3rd Place (S.Y. 2018-2019)
        Carmel School of Batangas : Tagisan ng Talino sa Filipino (S.Y. 2016-2017)
        Carmel School of Batangas : Sustainable Recycling Paper Cups - Participant S.Y. (2017-2018)
        Principal’s Cup : Battle of the Bands - 1st Place (S.Y. 2025-2026)
        Principal’s Cup : Battle of the Bands - 2nd Place (S.Y. 2024-2025)
        Principal’s Cup : Battle of the Bands - Participant (S.Y. 2023-2024)
        Principal’s Cup : Digital Poster Making Contest - 3rd Place (S.Y. 2023-2024)
        Principal’s Cup : Read Aloud - 3rd Place (S.Y. 2025-2026)
        Principal’s Cup : Digital Poster Making Contest - Participant (S.Y. 2024-2025)
        Principal’s Cup : Spelling Bee - Participant (S.Y. 2024-2025)
        Principal’s Cup : Pagtugtog ng Instrumento (Piano) - Participant (S.Y. 2024-2025)
        Himigsikan : Best in Costume/Accent Design (S.Y. 2024-2025)
        ThinkTalk 2022 :  Sports Writing (English) - 4th Place (S.Y. 2021-2022)
        ThinkTalk 2022 : News Writing (English) - 4th Place (S.Y. 2021-2022)
        ThinkTalk 2022 : Feature, Editorial, Sci-Tech, Column, Copyreading (English) - Participant (S.Y. 2021-2022)
        Scholastics : Lexile Growth Awardee (S.Y. 2024-2025)
        Scholastics : Highest Lexile Growth Awardee (S.Y. 2024-2025)
        UB Communicates : Finalist (S.Y. 2022-2023)
        UB Communicates : Finalist (S.Y. 2023-2024)
        UB Communicates : Finalist (S.Y. 2024-2025)
        10th APPSAM : Essay Writing Contest - Participant (S.Y. 2022-2023)
        Best in Araling Panlipunan ‘SY 2019 - ‘SY 2018
        Best in MAPEH ‘SY 2021- ‘SY 2022
        Best in Science ‘SY 2021 - ‘SY 2022
        St. Benildus Romancon FSC Scholarship Grant 100% ‘SY 2022 - ‘SY 2023
        St. Benildus Romancon FSC Scholarship Grant 100% ‘SY 2023 - ‘SY 2024
        St. Benildus Romancon FSC Scholarship Grant 100% ‘SY 2024 - ‘SY 2025
        St. Benildus Romancon FSC Scholarship Grant 100% ‘SY 2025 - ‘SY 2026
        Br. Hugh Damian FSC Scholarship Grantee, 1 of the top 10 students, S.Y. ‘26 - ‘2027
        CLCE, Socstud, English Culminating Activity Tableau 2nd place ‘SY 2024 - ‘SY 2025
      `,
			affiliations: `
        UB Ambassadress (S.Y. 2024-2025)
        Supreme Secondary Learner Government (S.Y. 2022-2023)
        Supreme Secondary Learner Government (S.Y. 2023-2024)
        Supreme Secondary Learner Government (S.Y. 2024-2025)
        Supreme Secondary Learner Government (S.Y. 2025-2026)
        Pupils’ Council (S.Y. 2020-2021)
        Girl Scouts of the Philippines (S.Y. 2018-2019)
        Girl Scouts of the Philippines (S.Y. 2022-2023)
        Girl Scouts of the Philippines (S.Y. 2023-2024)
        Girl Scouts of the Philippines (S.Y. 2024-2025)
        Girl Scouts of the Philippines (S.Y. 2025-2026)
        Honor Society (S.Y. 2025-2026)
        Arts and Camera Club (S.Y. 2023-2024)
        Arts and Camera Club (S.Y. 2024-2025)
        Arts and Camera Club (S.Y. 2025-2026)
        Science Club (S.Y. 2020-2021)
        Science Club (S.Y. 2021-2022)
        English Club (S.Y. 2020-2021)
        English Club (S.Y. 2021-2022)
        Yes-O Club (S.Y. 2020-2021)
        Yes-O Club (S.Y. 2021-2022)
        Teatro Anino (S.Y. 2023-2024)
        Teatro Anino (S.Y. 2024-2025)
        Speakers’ Sphere (S.Y. 2024-2025)
        UB High School Band (S.Y. 2024-2025)
        UB High School Band (S.Y. 2025-2026)
        The Westernian Pioneer (S.Y. 2022-2023)
        The Westernian Pioneer (S.Y. 2023-2024)
        The Westernian Pioneer (S.Y. 2025-2026)
        Brahman Writers’ Club / The Westernian Herald (S.Y. 2020-2021)
        Brahman Writers’ Club / The Westernian Herald (S.Y. 2021-2022)
        UB Communicates (S.Y. 2022-2023)
        UB Communicates (S.Y. 2023-2024)
        UB Communicates (S.Y. 2024-2025)
        UB High School Band (S.Y. 2024-2025)
        UB High School Band (S.Y. 2025-2026)
        UBian Buzz (S.Y. 2024-2025)
        UBian Spotlight (S.Y. 2025-2026)
        Bisita at Basa Eskwela (S.Y. 2024-2025)
        Red Cross Youth (S.Y. 2025-2026)
        Bulilit/Teen Healthcare Workers (S.Y. 2022-2023)
        Arts Club (S.Y. 2018-2019)
        Association of Philippines Private School Administrators and Mentors (APPSAM) (S.Y. 2022-2023)
        Junior Chamber International (JCI) Anilao Batangas (S.Y. 2024-2025)
        SDG Voices Batangas (S.Y. 2024-2025)
        Save Verde Island Program (S.Y. 2023-2024)
        Road Safety Program initiated by the Pupil’s Council (S.Y. 2021-2022)
        Go Green Program initiated Pupils’ Council (S.Y. 2020-2021)
        Tree Planting Program initiated by the Science/YES-O Club (S.Y. 2021-2022)
        5R’s Waste Management initiated by Science/YES-O Club (S.Y. 2021-2022)
        Ambulong, Batangas City : Community Mathematics Program (S.Y. 2016-2017)
        Ambulong, Batangas City : Community Journalism Program (S.Y. 2017-2018)
        Serenata (2025-2026)
      `
		}
	},
	{
		id: "cass",
		fullName: "Cassandra Alyana P. Pana",
		position: "Grade 11 BM/AHSS Representative",
		imageUrl: "img/members/cass.png",
		credentials: {
			leadership: `
        Grade 3 Vice President
        Grade 4 Class President
        Grade 7 Class President
        Grade 8 Class President
        Grade 9 Class Vice President
        Grade 10 Class President
        Araling Panlipunan Club Vice President ‘SY 2019 - ‘SY 2020
        Grade 7 CAPSTONE Leader 
        Grade 8 CAPSTONE Leader 
        Grade 9 CAPSTONE Leader 
        Grade 10 CAPSTONE Leader
      `,
			academics: `
        Grade 1 With High Honors Rank 2
        Grade 2 With High Honors Rank 2
        Grade 3 With High Honors Rank 2
        Grade 4 With High Honors Rank 2
        Grade 5 With High Honors Rank 2
        Grade 6 With High Honors Salutatorian
        Grade 7 With Highest Honors
        Grade 8 With Highest Honors
        Grade 9 With Highest Honors
        Grade 10 With Highest Honors
        MTAP School Representative ‘SY 2016 - ‘SY 2017
        MTAP School Representative ‘SY 2017 - ‘SY 2018
        MTAP School Representative ‘SY 2018 - ‘SY 2019
        MTAP School Representative ‘SY 2019 - ‘SY 2020
        Division Schools Press Conference 2019-2020 - Infomercial-2nd Place, Creative Award
        Regional Schools Press Conference 2022- Column Writing
        1 vs 100 Math Quiz Bee - 1st Placer
        Best in Computer ‘SY 2017-2018
        Best in English ‘SY 2017 - 2018
        Best in Math ‘SY 2019 - 2020
        Best in Araling Panlipunan ‘SY 2019 - ‘SY 2018
        Best in MAPEH ‘SY 2021- ‘SY 2022
        Best in Science ‘SY 2021 - ‘SY 2022
        St. Benildus Romancon FSC Scholarship Grant 100% ‘SY 2022 - ‘SY 2023
        St. Benildus Romancon FSC Scholarship Grant 100% ‘SY 2023 - ‘SY 2024
        St. Benildus Romancon FSC Scholarship Grant 100% ‘SY 2024 - ‘SY 2025
        St. Benildus Romancon FSC Scholarship Grant 100% ‘SY 2025 - ‘SY 2026
        Br. Hugh Damian FSC Scholarship Grantee, 1 of the top 10 students, S.Y. ‘26 - ‘2027
        CLCE, Socstud, English Culminating Activity Tableau 2nd place ‘SY 2024 - ‘SY 2025
      `,
			affiliations: `
        School Campus Ministry Member ‘SY 2025 - ‘SY 2026
        Social Studies Varsity ‘SY 2025 - ‘SY 2026
      `
		}
	},
	{
		id: "faith",
		fullName: "Faith Loraine J. Robdelas",
		position: "Grade 11 SE Representative",
		imageUrl: "img/members/faith.png",
		credentials: {
			leadership: `
        Grade 1 Class Officer
        Grade 2 Class Officer
        Grade 3 Class Officer
        Grade 4 Class Officer
        Grade 7 Class Marshall
        Grade 7 CAPSTONE Co-Leader
        Grade 8 CAPSTONE Co-Leader
        Grade 9 Class Marshall
        Grade 9 CAPSTONE Co-Leader
        Grade 10 Class President
        EcoKnows Content Creation Head (S.Y. 2024 - 2025)
        Filipino Subject Coordinator (S.Y. 2025 - 2026)
        Participant, University of Batangas Lipa City Leadership Training Seminar (S.Y. 2019 - 2020)
        Participant, SCB LEAD Program (S.Y. 2022 - 2023)
        BULIK Head Layout Artist (S.Y. 2025 - 2026)
      `,
			academics: `
        Grade 1 - First Honors, Batch Rank 2
        Grade 2 - First Honors, Batch Rank 2
        Grade 3 - With High Honors, Batch Rank 2
        Grade 4 - With High Honors, Batch Rank 1
        Grade 5 - With High Honors, Batch Rank 1
        Grade 6 - With High Honors, Batch Valedictorian
        Grade 7 - With Highest Honors
        Grade 8 - With Highest Honors
        Grade 9 - With Highest Honors
        Grade 10 - With Highest Honors
        DLSL Academic Scholar (S.Y. 2022 - 2023)
        DLSL Academic Scholar (S.Y. 2023 - 2024)
        DLSL Academic Scholar (S.Y. 2024 - 2025) 
        DLSL Academic Scholar (S.Y. 2025 - 2026)
        DLSL Academic Scholar (S.Y. 2026 - 2027)
        TSCLC Most Disciplined (S.Y. 2016 - 2017)
        TSCLC Most Inquisitive Learner (S.Y. 2017 - 2018)
        TSCLC Most Thorough Thinker (S.Y. 2018 - 2019)
        TSCLC Awesome Achiever (S.Y. 2019 - 2020)
        TSCLC Most Attentive (S.Y. 2019 - 2020)
        Metrobank - MTAP - DepEd Math Challenge 2nd Place, District Level (S.Y. 2016 - 2017)
        Metrobank - MTAP - DepEd Math Challenge Finalist, Division Level (S.Y. 2016 - 2017)
        MTAP Awardee (S.Y. 2017 - 2018)
        Metrobank - MTAP - DepEd Math Challenge 2nd Place, District Level (S.Y. 2017 - 2018)
        Metrobank - MTAP - DepEd Math Challenge Finalist, Division Level (S.Y. 2017 - 2018)
        Math Camp 2017 - Math Quiz Oral - 11th Place
        Metrobank - MTAP - DepEd Math Challenge 6th Place, District Level (S.Y. 2018 - 2019)
        AMEP Qualifying Exam Qualifier (S.Y. 2018 - 2019)
        Regional Science and Math Quest - Math Quiz Bee, Individual 2nd Place (S.Y. 2018 - 2019)
        National Science and Math Quest - Math Quiz Bee, Group Category 3rd Place (S.Y. 2018 - 2019)
        Regional Science and Math Quest - Sci-Spelling Bee, Group Category 4th Place (S.Y. 2019 - 2020)
        Regional Science and Math Quest - Environmental Quiz Bee, Group Category 5th Place (S.Y. 2019 - 2020)
        Nutrition Month - Poster Making Contest 1st Place (S.Y. 2017 - 2018)
        Nutrition Month - Poster Making Contest 1st Place (S.Y. 2018 - 2019)
        TSCLC Spelling Bee Champion (S.Y. 2016 - 2017)
        Battle of the Brains Champion - Araling Panlipunan (S.Y. 2016 - 2017)
        Battle of the Brains Champion - Mathematics (S.Y. 2016 - 2017)
        Battle of the Brains Champion - Filipino (S.Y. 2016 - 2017)
        Battle of the Brains Champion - Spelling (S.Y. 2017 - 2018)
        Battle of the Brains Champion - Science (S.Y. 2017 - 2018)
        Battle of the Brains Champion - Filipino (S.Y. 2018 - 2019)
        Battle of the Brains Champion - Mathematics (S.Y. 2018 - 2019)
        Battle of the Brains Champion - Spelling (S.Y. 2018 - 2019)
        Battle of the Brains Champion - English (S.Y. 2019 - 2020)
        Battle of the Brains Champion - Filipino (S.Y. 2019 - 2020)
        Battle of the Brains Champion - Spelling (S.Y. 2019 - 2020)
        TSCLC Girl Scouts of the Philippines Camp - Most Industrious (S.Y. 2019 - 2020)
        TSCLC Girl Scouts of the Philippines Camp - Patrol of the Year (S.Y. 2019 - 2020)
        One of the Top 5 Class Best in Math Badges (S.Y. 2022 - 2023)
        AMEP Qualifying Exam Qualifier (S.Y. 2023 - 2024)
        SPAM 15th National Campus Media Conference - Radio Broadcasting Filipino 3rd Place (S.Y. 2024 - 2025)
        Division Schools Press Conference - Radio Broadcasting Filipino Finalist (S.Y. 2024 - 2025)
        TLE Culminating Activity - Barako Piyesta Presenter
        SPAM 16th National Campus Media Conference - Digital Magazine Publishing 4th Place Best Layout Artist
        SPAM 16th National Campus Media Conference - Digital Magazine Publishing Overall 4th Place (S.Y. 2025-2026)
        Ped Xing XVII - Collaborative Publishing 1st Place (S.Y. 2025 - 2026)
      `,
			affiliations: `
        Girl Scouts of the Philippines (S.Y. 2019 - 2020)
        BULIK S.Y. 2023 - 2024
        BULIK S.Y. 2024 - 2025
        BULIK S.Y. 2025 - 2026
        SiKAT S.Y. 2024 - 2025
        SiKAT S.Y. 2025 - 2026
        Student Campus Ministry S.Y. 2025 - 2026
        Outstanding LYMO Volunteer (S.Y. 2025 - 2026)
      `
		}
	},
	{
		id: "kam",
		fullName: "Kamilah Janelle M. Laya",
		position: "Grade 11 HA Representative",
		imageUrl: "img/members/kam.png",
		credentials: {
			leadership: `
        Grade 1 Class Secretary 
        Grade 2 Leadership Awardee
        Grade 3 Class Treasurer 
        English/Language Club PIO (S.Y. 2022-2023)
        SPFL/Language Club Grade 8 - Representative(S.Y. 2023-2024)
        Master of the Ceremony, Reading Month (S.Y. 2023-2024)
        ANG DAHON Asst. Editor-in-Chief (S.Y. 2024-2025)
        SPFL/Language Club Vice President (S.Y. 2024-2025)
        Master of the Ceremony, Spanish Month (S.Y. 2024-2025)
        ANG DAHON Editor-in-Chief (S.Y. 2025-2026)
        SPFL/Language Club President (S.Y. 2025-2026)
        Summer Pre-Kindergarten Program Volunteer (2023-2026)

      `,
			academics: `
        Preschool - With Honors (Top 9)
        Kinder - With Honors (Top 9)
        Grade 1 - With Honors
        Grade 2 - With Honors
        Grade 3 - With Honors
        Grade 4 - With Honors
        Grade 5 - With Honors 
        Grade 6 - With Honors
        Grade 7 - With Honors (Rank 3)
        Grade 8 - With Honors (Rank 3)
        Grade 9 - With Honors (Rank 3)
        Grade 10 - With High Honors (Rank 2)
        St. Benildus Romancon FSC Scholarship Grantee S.Y. 2026-2027
        BMISE Eager Beaver Award (S.Y. 2016-2017)
        BMISE Prim and Proper Award (S.Y. 2016-2017)
        BMISE Awesome Artist Award (S.Y. 2016-2017)
        BMISE Best In English Computerized Learning Program (S.Y. 2016-2017)
        Spelling Bee Competition, 3rd Place (S.Y. 2017-2018)
        Nutrition Month Poster Making Contest, 3rd Place (S.Y. 2018-2019)
        Science Quiz Bee Competition, PARTICIPANT (S.Y. 2018-2019)
        Poetry Recital Contest, 3rd Place (S.Y. 2018-2019)
        Earth Day Poster Contest (S.Y. 2019-2020)
        Reading Month Celebration - Story Telling, VOLUNTEER (S.Y. 2022-2023)
        Sub-Office Festival of Talents - PopDev Oratorical Speech, 3rd Place (S.Y. 2022-2023)
        Sub-Office Schools Press Conference - News Writing, 3rd Place (S.Y. 2022-2023)
        Sub-Office Schools Press Conference - Radio Broadcasting and Scriptwriting, 3rd Place (S.Y. 2023-2024)
        Sub-Office Schools Press Conference - Radio Broadcasting and Scriptwriting, BEST IN INFOMERCIAL (S.Y. 2023-2024)
        Jazz Chant Competition Champion (2023-2024)
        DepEd Reading Month - Choral Competition, 2nd Place (S.Y. 2024-2025)
        Women’s Month - Singing for a Cause, 2nd Place (S.Y. 2024-2025)
        Project CORAZON: School Spanish Learning Program, VOLUNTEER (S.Y. 2024-2025)
        Division Schools Press Conference - School Paper Category News Section, 15th Place
        Sub-Office Schools Press Conference - Radio Broadcasting and Scriptwriting, 1st Place (S.Y. 2024-2025)
        Sub-Office Schools Press Conference - Radio Broadcasting and Scriptwriting, BEST IN SCRIPT (S.Y. 2024-2025)
        Division Schools Press Conference - Radio Broadcasting and Scriptwriting, BEST IN INFOMERCIAL (S.Y. 2024-2025)
        Division Schools Press Conference - School Paper Category Layout and Page Design, 9th Place (S.Y. 2025-2026)
        Nutrition Month: Voices for Nutrition - Jingle Composition, 2nd Place (S.Y. 2025-2026)
        Project CORAZON: School Spanish Learning Program, VOLUNTEER (S.Y. 2025-2026)
        Science Month Celebration: Scientist Impersonators, PARTICIPANT (S.Y. 2025-2026)
        Science Month Celebration: Scientist Impersonators, Master of Impersonation Award (S.Y. 2025-2026)
        Buwan ng Wika - Poem Writing Contest, 3rd Place (S.Y. 2025-2026)
        Guest Speaker at Summer Pre-Kindergarten Program Graduation 
        School-Based Training in Campus Journalism, PARTICIPANT
        Reading Month Culminating Activity - Characters Parade, PARTICIPANT
        Sub-Office Festival of Talents - Advocacy Pitch, CHAMPION (S.Y. 2025-2026)
        Congressional District Festival of Talents - Advocacy Pitch, CHAMPION (S.Y. 2025-2026)
        District Festival of Talents Advocacy Pitch - CHAMPION (S.Y. 2025-2026)
        Regional Festival of Talents Advocacy Pitch - 3rd Place (S.Y. 2025-2026)
      `,
			affiliations: `
        ANG DAHON S.Y. 2022-2023
        ANG DAHON S.Y. 2023-2024
        ANG DAHON S.Y. 2024-2025
        ANG DAHON S.Y. 2025-2026
        English/Language Club S.Y. 2022-2023
        SPFL/Language Club S.Y. 2023-2024
        SPFL/Language Club S.Y. 2024-2025
        SPFL/Language Club S.Y. 2025-2026
        Girl Scouts of the Philippines (GSP) S.Y. 2022-2023
        Girl Scouts of the Philippines (GSP) S.Y. 2023-2024
        Girl Scouts of the Philippines (GSP) S.Y. 2024-2025
        Girl Scouts of the Philippines (GSP) S.Y. 2025-2026
      `
		}
	},
	{
		id: "mahd",
		fullName: "Mahdelene Mae S. Dela Pena",
		position: "Grade 11 HA Representative",
		imageUrl: "img/members/mahd.png",
		credentials: {
			leadership: `
        Grade 2 Class President
        Grade 3 Class Vice President
        Grade 7 Class Vice President 
        Grade 10 Class Vice President
        Grade 8 Class Treasurer
        Grade 9 Class Treasurer
        Grade 6 Class Auditor
        Debate Team Grade 4 Representative (S.Y. 2019-2020)
        Debate Team Grade 5 Representative (S.Y. 2020-2021)
        Debate Team Grade 6 Representative (S.Y. 2021-2022)
        ArtLook Art Club Grade 3 Representative (S.Y. 2018-2019)
        ArtLook Art Club Grade 4 Representative (S.Y. 2019-2020)
        Math Club Grade 5 Representative (S.Y. 2020-2021)
        Math Club Grade 6 Representative (S.Y. 2021-2022)
        Math Club President (S.Y. 2025-2026)
        TLE Club Grade 8 Representative (S.Y. 2023-2024)
        Journalism & Broadcasting Club P.I.O (S.Y. 2023-2024)
        SAHAFAH News Writer (S.Y. 2020-2021)
        SAHAFAH Head News Writer (S.Y. 2021-2022)
        THE MIRAGE Editorial Writer (S.Y. 2024-2025)
        THE MIRAGE News Writer (S.Y. 2025-2026)
        Red Cross Youth School Council President (S.Y. 2024-2025)
        Red Cross Youth School Council President (S.Y. 2025-2026)
        Girls Scout Patrol Leader (S.Y. 2017-2018)
        Girls Scout Patrol Leader (S.Y. 2018-2019)
        Girls Scout Patrol Leader (S.Y. 2023-2024)
        Supreme Secondary Learners Government Grade 9 Representative (S.Y. 2024-2025)
        Supreme Secondary Learners Government Public Informations Officer (S.Y. 2025-2026)
        Local Youth Development Council: Little MSWDO (Municipal Social Welfare and Development Officer) (S.Y. 2025-2026)
        Advance Science Research Head (S.Y. 2019-2020)
        Qatar University 8th GASNA Semi-finals Group Leader (S.Y. 2021-2022)
      `,
			academics: `
        Grade 1- With Highest Honors
        Grade 2- With Honors
        Grade 3- With Honors
        Grade 4- With High Honors
        Grade 5- With Highest Honors
        Grade 6- With High Honors
        Grade 7- With Honors, Rank 2
        Grade 8- With Honors, Rank 3
        Grade 9- With Honors, Rank 3
        Grade 10- With Honors, Salutatorian 
        Qatar University 8th GASNA Finalists Competition- 3rd Runner Up, (2021)
        Qatar University 8th GASNA Finalists Competition- Best Speaker (2021)
        Qatar University 8th GASNA NATIONALS Competition: 2nd Category- 1st Placer (2022)
        Shantiniketan Indian School Interhouse Debate Competition- Best House (2019)
        Shantiniketan Indian School Interhouse Debate Competition- Best Rebuttal (2019)
        Shantiniketan Indian School Interhouse Debate Competition- Best House (2021)
        Shantiniketan Indian School Interhouse Debate Competition- Best Debater (2021)
        Junior Interschool Debate Competition- Best Rebuttal (2021)
        Junior Interschool Debate Competition- Best House (2021)
        Junior Interhouse Debate Competition- Best Debater (2021)
        Qatar Bravo Hip Hop Interschool Dance Competition- 2nd Runner Up (2019)
        Cultural Dance Competition- Champion (2023)
        Main Dance Competition- Overall 2nd Runner Up (2024)
        Street Dance Competition- 3rd Place (2024)
        Street Dance Competition- Champion (2025)
        Main Dance Competition- Overall Champion (2025)
        Best Junior Editorial Writer (2019)
        Best NU-Q Editorial Writer (2019)
        Best NU-Q Editorial Writer (2020)
        Best News Writer (2021)
        Best NU-Q News Writer (2021)
        Best Editorial Writer: 2nd Category (2021)
        Weill Cornell Medicine-Qatar Healing Hands Essay Competition 1st Category- 3rd Runner Up (2022)
        The Council of British International Schools (COBIS) Virtual Debate Competition- 5th Placer 
        The Council of British International Schools (COBIS) Pobble Poetry Competition School Representative (2021)
        Annual Interschool Public Speaking Competition- Champion, On the topic, “Should Voting Be Made Compulsory?” (2021)
        Annual Interschool Public Speaking Competition- 2nd Runner Up, On the topic, “Political Values” (2022)
        Poem Recital: 3rd Category- 1st Runner Up (2018)
        Poem Recital- 1st Runner Up (2019)
        Red Cross Youth Poster Making Competition- School Representative (2023)
        English Poster Making- Champion (2022)
        TLE Digital Poster Making- Champion (2023)
        Filipino Digital Poster Making- 2nd Placer (2023)
        English Editorial Cartooning- 1st Placer (2023)
        AP Poster Making- 1st Placer (2023)
        Science “aNEWton” Slogan Making- Champion (2019)
        Advance Mathematics Learning Session- 1st Placer (2023)
        Sci-Matech Competition- 1st Place (2024)
        Math Quiz Bee- Champion (2016)
        Math Quiz Bee- Champion (2017)
        Math Quiz Bee- 1st Runner Up (2019)
        Math Quiz Bee- 2nd Runner Up (2018, 2020)
        Math Quiz Bee- 2nd Runner Up (2020)
        QU Interschool Math Quiz Bee- 2nd Runner Up (2021)
        Science Quiz Bee- Champion (2017)
        Science Quiz Bee- 2nd Runner Up (2019)
        Science Quiz Bee- 2nd Runner Up (2024)
        Best In Reading (2015)
        Best In Reading (2017)
        Best In Speaking (2017)
        Best In Speaking (2015)
        Best In Mathematics (S.Y. 2016-2017)
        Best In Mathematics (S.Y. 2017-2018)
        Best In Mathematics (S.Y. 2019-2020)
        Best In English (S.Y. 2016-2017)
        Best In English (S.Y. 2020-2021)
        Best In English (S.Y. 2021-2022)
        Best In Science (S.Y.2016-2017)
        Most Active Learner In Advance Science (S.Y. 2018-2019)
        Annual Interschool Poster Making Competition- Champion (2018)
        Annual Interschool Poster Making Competition- Champion (2019)
        Annual Interschool Poster Making Competition- Champion (2021)
        Field Demonstration- 2nd Runner Up (2018)
        Field Demonstration- 3rd Runner Up (2017)
        Field Demonstration- Champion (2018)
        Field Demonstration- Champion (2019)
        Excellent Brainpower Award (2024)
        Innovative Writing Award (2024)
        Outstanding Leadership Award (2025)
        Student Government Service Award (2026)
        Conduct Award (2026)
        Promotional Video Champion (2026)
        Sub-Office School Press Conference- Category: Editorial Cartooning- English (Secondary) Participant (2024)
        Sub-Office School Press Conference- Category: News Writing- English (Secondary) 2nd Place (2025)
        Interschool Campus Journalism Workshop- Category News Online Writing- English (Secondary) 1st Place (2025)
        Private Schools Association of Batangas (PRISAB): English Category- 6th Placer (2026)
        National ACP Commandants Association of the Philippines (NACAP) Military Drills and Technical Skills Competition 2025- Color Drill Champion: Colors Commander
        Local Youth Development Council: Little MSWDO (Municipal Social Welfare and Development Officer) Youth Official (2025-2026)
        Sub-Office Festival of Talents - Advocacy Pitch, 1st Place (S.Y. 2025-2026)

      `,
			affiliations: `
        PSD Debate Team Member (S.Y. 2017-2018)
        PSD Debate Team Member (S.Y. 2018-2019)
        PSD Debate Team Member (S.Y. 2019-2020)
        PSD Debate Team Member (S.Y. 2020-2021)
        Dance Club Member (S.Y. 2017-2018)
        Dance Club Member (S.Y. 2017-2018)
        ArtLook Club Member (S.Y. 2019-2020)
        ArtLook Club Member (S.Y. 2020-2021)
        Science Club Member (S.Y. 2022-2023)
        TLE Club Member (S.Y. 2023-2024)
        SAHAFAH Member (S.Y. 2020-2021)
        SAHAFAH Member (S.Y. 2021-2022)
        THE MIRAGE Member(S.Y. 2024-2025)
        THE MIRAGE Member (S.Y. 2025-2026)
        DivSub Math Club Member (S.Y. 2018-2019)
        DivSub Math Club Member (S.Y. 2019-2020)
        DivSub Math Club Member (S.Y. 2020-2021)
        ONE Math Club Member (S.Y. 2025-2026)
        Red Cross Youth Member (S.Y. 2023-2024)
        Red Cross Youth Member (S.Y. 2024-2025)
        Red Cross Youth Member (S.Y. 2025-2026)
        Girls Scout of the Philippines (S.Y. 2016-2017)
        Girls Scout of the Philippines (S.Y. 2017-2018)
        Girls Scout of the Philippines (S.Y. 2018-2019)
        Girls Scout of the Philippines (S.Y. 2023-2024)
        Supreme Secondary Learners Government (S.Y. 2024-2025)
        Supreme Secondary Learners Government (S.Y. 2025-2026)
      `
		}
	},
	{
		id: "vien",
		fullName: "Vien Laurizz O. Pagsusiran",
		position: "Grade 11 HA Representative",
		imageUrl: "img/members/vien.png",
		credentials: {
			leadership: `
        Grade 1 Class President
        Grade 2 Class President
        Grade 3 Class President
        Grade 4 Class President
        Grade 5 Class President
        Grade 6 Class President
        SJIS Supreme Pupil Government President, S.Y. 2021–2022
        Supreme Pupil Government of East District, Lipa City Treasurer, S.Y. 2021–2022
        Supreme Pupil Government of East District, Division of Lipa City Treasurer, S.Y. 2021–2022
        Grade 7 CAPSTONE Leader
        Grade 8 CAPSTONE Leader
        Grade 9 CAPSTONE Leader
        Grade 10 CAPSTONE Leader
        Grade 10 Class Secretary
        Alon ng Ginhawa: Ride the Waves of Wellness Logistics and External Communications Head S.Y. ‘25 - ‘26 
        English Research Leader S.Y. ‘25 - ‘26
        BULIK Feature Head (S.Y. 2025 - 2026)
      `,
			academics: `
        Daycare - First Honors (S.Y. 2014-2015)
        Mayor Meynard  A. Sabili, Award of Excellence 2014
        Kindergarten  - With Honors, Batch Rank 1 (S.Y. 2015 - 2016)
        Grade 1 - With Honors, Batch Rank 1
        Grade 2 - With Honors, Batch Rank 1
        Grade 3 - With High Honors, Batch Rank 2
        Grade 4 - With High Honors, Batch Rank 1
        Grade 5 - With Highest Honors, Batch Rank 1
        Grade 6 - With Highest Honors, Class Valedictorian
        Grade 7 - With Highest Honors
        Grade 8 - With Highest Honors
        Grade 9 - With Highest Honors
        Grade 10 - With Highest Honors
        DLSL Academic Scholar FSC (S.Y. 2022 - 2023)
        DLSL Academic Scholar FSC (S.Y. 2023 - 2024)
        DLSL Academic Scholar FSC S.Y. 2024 - 2025) 
        DLSL Academic Scholar FSC (S.Y. 2025 - 2026)
        Br. Hugh Damian, FSC Scholarship Grantee, 1 of the top 10 students, S.Y. ‘26 - ‘27
        Festival of Talents - Storytelling Contest, 2nd Placer - S.Y. 2015 
        Best in MathSciEng – S.Y. 2015
        Best in MathSciEng – S.Y. 2016
        Best in MathSciEng – S.Y. 2017
        Best in MathSciEng – S.Y. 2018
        Best in MathSciEng – S.Y. 2019
        Best in MathSciEng – S.Y. 2020
        Best in MathSciEng – S.Y. 2021
        Best in MathSciEng – S.Y. 2022
        MTAP Schoolwide 1st Placer 2016
        MTAP Most Promising 2016
        MTAP Schoolwide 1st Placer 2017
        MTAP Most Promising 2017
        MTAP Schoolwide 1st Placer 2018
        MTAP Most Promising 2018
        MTAP Schoolwide 1st Placer 2019
        MTAP Most Promising 2019
        Metrobank - MTAP - DepEd Math Challenge 1st Place, Lipa District Level (S.Y. 2016 - 2017)
        Metrobank - MTAP - DepEd Math Challenge Finalist, Lipa Division Level (S.Y. 2016 - 2017)
        MTAP Awardee (S.Y. 2017 - 2018)
        Metrobank - MTAP - DepEd Math Challenge 1st Place, Lipa District Level (S.Y. 2017 - 2018)
        Metrobank - MTAP - DepEd Math Challenge Finalist, Lipa Division Level (S.Y. 2017 - 2018)
        Metrobank - MTAP - DepEd Math Challenge 1st Place, Lipa District Level (S.Y. 2018 - 2019)
        Metrobank - MTAP - DepEd Math Challenge Finalist, Lipa Division Level (S.Y. 2018 - 2019)
        MTAP Quizzer, 1st Placer (S.Y. 2018 - 2019)
        Asian MathSci League, Inc. (AMSLI) Mathematics Enrichment Program Achiever 2017-2018
        Asian MathSci League, Inc. (AMSLI) Mathematics Enrichment Program Achiever 2018-2019
        AMSLI Silver Medalist (S.Y. 2018 - 2019)
        AMEP Qualifying Exam Qualifier (S.Y. 2018 - 2019)
        Regional Science and Math Quest - Math Quiz Bee, Individual 2nd Place (S.Y. 2018 - 2019)
        DSPC Feature Writer, 2nd Place, 2020, 
        RSPC Feature Writer, 5th Place, 2020
        Bebras Achiever, 2022
        Leadership Awardee, 2022
        Division Schools Press Conference - Feature Filipino Participant (S.Y. 2024 - 2025)
        SPAM 16th National Campus Media Conference - I-Dokumento 4th Place (S.Y. 2025 - 2026)
      `,
			affiliations: `
        Girl Scouts of the Philippines (GSP) S.Y. 2017-2018
        Girl Scouts of the Philippines (GSP) S.Y. 2018-2019
        The Forerunner S.Y. 2020-2021
        The Forerunner S.Y. 2021-2022
        BULIK S.Y. 2024 - 2025
        BULIK S.Y. 2025 - 2027
        Student Campus Ministry S.Y. 2024-2025
        Student Campus Ministry S.Y. 2025-2026
      `
		}
	}
];

const membersById = Object.fromEntries(sentroMembers.map((member) => [member.id, member]));

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatCredentialsHtml = (rawText) => {
  const escaped = escapeHtml(rawText);
  return escaped
    .replace(/^(Leadership Credentials:?)/gim, '<span class="credentials-heading">$1</span>')
    .replace(/^(Academic Credentials:?)/gim, '<span class="credentials-heading">$1</span>')
    .replace(/^(Affiliations:?)/gim, '<span class="credentials-heading">$1</span>');
};

const normalizeCredentialEntries = (value) => {
  if (Array.isArray(value)) {
    return value.map((entry) => String(entry).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split("\n")
      .map((entry) => entry.trim())
      .filter(Boolean);
  }

  return [];
};

const membersGroupsRoot = document.querySelector(".members-groups");
if (membersGroupsRoot) {
	const groupedMembers = [
		{
			title: "Grade 11 Vice President",
			members: sentroMembers.filter((member) => member.position === "Grade 11 Vice President")
		},
		{
			title: "Grade 11 Health Allied Representatives",
			members: sentroMembers.filter((member) => member.position.includes("HA Representative"))
		},
		{
			title: "Grade 11 Science and Engineering Representatives",
			members: sentroMembers.filter((member) => member.position.includes("SE Representative"))
		},
		{
			title: "Grade 11 Business Management and Arts, Humanities, and Social Sciences Representatives",
			members: sentroMembers.filter((member) => member.position.includes("BM/AHSS Representative"))
		}
	];

	membersGroupsRoot.innerHTML = groupedMembers
		.map(
			(group) => `
			<section class="member-group" aria-label="${group.title}">
				<h2 class="member-group-title">${group.title}</h2>
				<div class="member-list">
					${group.members
						.map(
							(member) => `
							<button
								type="button"
								class="member-card"
								data-member-id="${member.id}"
								data-name="${member.fullName}"
								data-role="${member.position}"
								data-group="${group.title}"
								data-image="${member.imageUrl}"
								aria-label="View credentials for ${member.fullName}"
							>
								<img src="${member.imageUrl}" alt="${member.fullName}">
								<figcaption>
									<p class="member-name">${member.fullName}</p>
								</figcaption>
							</button>
						`
						)
						.join("")}
				</div>
			</section>
		`
		)
		.join("");

	const memberModal = document.getElementById("member-modal");
	const memberModalClose = document.getElementById("member-modal-close");
	const memberModalTitle = document.getElementById("member-modal-title");
	const memberModalPhoto = document.getElementById("member-modal-photo");
	const memberModalName = document.getElementById("member-modal-name");
	const memberModalRole = document.getElementById("member-modal-role");
	const memberModalGroup = document.getElementById("member-modal-group");
	const memberModalCredentials = document.getElementById("member-modal-credentials");

	if (
		memberModal &&
		memberModalClose &&
		memberModalTitle &&
		memberModalPhoto &&
		memberModalName &&
		memberModalRole &&
		memberModalCredentials
	) {
		let lastTrigger = null;

		const closeMemberModal = () => {
			memberModal.classList.remove("is-open");
			memberModal.setAttribute("aria-hidden", "true");
			document.body.style.overflow = "";
			if (lastTrigger) {
				lastTrigger.focus();
			}
		};

		const openMemberModal = (trigger) => {
			lastTrigger = trigger;
			const selectedMember = membersById[trigger.dataset.memberId || ""];
			memberModalName.textContent = trigger.dataset.name || "";
			memberModalRole.textContent = trigger.dataset.role || "";
			if (memberModalGroup) {
				memberModalGroup.textContent = trigger.dataset.group || "";
			}
			memberModalPhoto.src = trigger.dataset.image || "";
			memberModalPhoto.alt = trigger.dataset.name ? `${trigger.dataset.name} photo` : "Member photo";
			memberModalTitle.textContent = `${trigger.dataset.name || "Member"} Credentials`;

			if (selectedMember && selectedMember.credentialsRaw && selectedMember.credentialsRaw.trim()) {
				memberModalCredentials.innerHTML = `<pre>${formatCredentialsHtml(selectedMember.credentialsRaw)}</pre>`;
			} else if (selectedMember && selectedMember.credentials) {
				const leadership = normalizeCredentialEntries(selectedMember.credentials.leadership);
				const academics = normalizeCredentialEntries(selectedMember.credentials.academics);
				const affiliations = normalizeCredentialEntries(selectedMember.credentials.affiliations);
				memberModalCredentials.innerHTML = `
					<div>
						<h3>Leadership Highlights</h3>
						<ul>${leadership.map((item) => `<li>${item}</li>`).join("")}</ul>
					</div>
					<div>
						<h3>Academic Highlights</h3>
						<ul>${academics.map((item) => `<li>${item}</li>`).join("")}</ul>
					</div>
					<div>
						<h3>Affiliations</h3>
						<ul>${affiliations.map((item) => `<li>${item}</li>`).join("")}</ul>
					</div>
				`;
			} else {
				memberModalCredentials.innerHTML = "";
			}

			memberModal.classList.add("is-open");
			memberModal.setAttribute("aria-hidden", "false");
			document.body.style.overflow = "hidden";
			memberModalClose.focus();
		};

		membersGroupsRoot.querySelectorAll(".member-card").forEach((card) => {
			card.addEventListener("click", () => openMemberModal(card));
		});

		memberModalClose.addEventListener("click", closeMemberModal);

		memberModal.addEventListener("click", (event) => {
			if (event.target === memberModal) {
				closeMemberModal();
			}
		});

		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape" && memberModal.classList.contains("is-open")) {
				closeMemberModal();
			}
		});
	}
}

const platformAccordions = Array.from(document.querySelectorAll(".platform-accordion"));
if (platformAccordions.length) {
	const closeAccordion = (accordion) => {
		const trigger = accordion.querySelector(".platform-toggle");
		const panel = accordion.querySelector(".platform-panel");
		const indicator = accordion.querySelector(".platform-indicator");
		accordion.classList.remove("is-open");
		if (trigger) {
			trigger.setAttribute("aria-expanded", "false");
		}
		if (indicator) {
			indicator.textContent = "+";
		}
		if (panel) {
			panel.style.maxHeight = "0px";
		}
	};

	const openAccordion = (accordion) => {
		const trigger = accordion.querySelector(".platform-toggle");
		const panel = accordion.querySelector(".platform-panel");
		const indicator = accordion.querySelector(".platform-indicator");
		accordion.classList.add("is-open");
		if (trigger) {
			trigger.setAttribute("aria-expanded", "true");
		}
		if (indicator) {
			indicator.textContent = "-";
		}
		if (panel) {
			panel.style.maxHeight = `${panel.scrollHeight}px`;
		}
	};

	platformAccordions.forEach((accordion) => {
		const trigger = accordion.querySelector(".platform-toggle");
		if (!trigger) {
			return;
		}

		trigger.addEventListener("click", () => {
			const isOpen = accordion.classList.contains("is-open");
			platformAccordions.forEach(closeAccordion);
			if (!isOpen) {
				openAccordion(accordion);
			}
		});
	});

	platformAccordions.forEach(closeAccordion);
}