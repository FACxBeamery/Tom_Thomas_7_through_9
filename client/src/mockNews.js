const rawNews = {
    status: "ok",
    totalResults: 82,
    articles: [
        {
            source: {
                id: "cbc-news",
                name: "CBC News"
            },
            author: "CBC News",
            title:
                "U.S. Department of Justice review of Russia probe reportedly shifts to criminal inquiry | CBC News",
            description:
                "The U.S. Justice Department has reportedly shifted its review of the Russia probe to a criminal investigation, a person familiar with the matter said Thursday, a move that is likely to raise concerns that President Donald Trump and his allies may be using the…",
            url:
                "http://www.cbc.ca/news/world/department-of-justice-russia-probe-shifts-criminal-inquiry-1.5334834",
            urlToImage:
                "https://i.cbc.ca/1.5334858.1571987784!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1137864967.jpg",
            publishedAt: "2019-10-25T10:08:20.6507761Z",
            content:
                "The U.S. Justice Department has reportedly shifted its review of the Russia probe to a criminal investigation, a person familiar with the matter said Thursday, a move that is likely to raise concerns that President Donald Trump and his allies may be using the… [+3184 chars]"
        },
        {
            source: {
                id: "cbs-news",
                name: "CBS News"
            },
            author: "CBS News",
            title:
                "Donald Trump impeachment latest: House business suspended to mourn Elijah Cummings",
            description:
                "Cummings, the chairman of the House Oversight Committee, died last week at 68",
            url:
                "https://www.cbsnews.com/news/donald-trump-impeachment-latest-house-suspends-business-to-mourn-elijah-cummings/",
            urlToImage:
                "https://cbsnews3.cbsistatic.com/hub/i/r/2019/02/11/e2543e9d-86b8-4410-ac3a-0ce0654de22e/thumbnail/1200x630/db8b21c664d7d68f073484be324ddaa7/ap-080929025809.jpg",
            publishedAt: "2019-10-25T10:01:09+00:00",
            content:
                "The latest news on the impeachment inquiry:\r\n<ul><li>The House has suspended business for the rest of the week to mourn Congressman Elijah Cummings.</li><li>Dozens of Senate Republicans are supporting a resolution introduced by Senator Lindsey Graham condemni… [+4692 chars]"
        },
        {
            source: {
                id: "the-hill",
                name: "The Hill"
            },
            author: "Alexander Bolton",
            title: "GOP worries it's losing impeachment fight | TheHill",
            description:
                "Republican senators fear President Trump and their party are losing the public opinion fight over...",
            url:
                "http://thehill.com/homenews/senate/467388-gop-worries-its-losing-impeachment-fight",
            urlToImage:
                "https://thehill.com/sites/default/files/mcconnellmitch_102219gn4_lead.jpg",
            publishedAt: "2019-10-25T10:00:47Z",
            content:
                "Republican senators fear President TrumpDonald John TrumpCharles Barkley: 'Vice President Pence needs to shut the hell up'Democrats say whistleblower deposition no longer central to impeachment investigation: reportTrump plans to appeal House subpoena for fin… [+11390 chars]"
        },
        {
            source: {
                id: "associated-press",
                name: "Associated Press"
            },
            author: "ZEKE MILLER, JILL COLVIN and JONATHAN LEMIRE",
            title: "Trump confronts limits of his impeachment defense strategy",
            description:
                "WASHINGTON (AP) — President Donald Trump is confronting the limits of his main impeachment defense.As the probe hits the one-month mark, Trump and his aides have largely ignored the details...",
            url: "https://apnews.com/974dea3d24114bc98a59f537d4efbfbe",
            urlToImage: "",
            publishedAt: "2019-10-25T10:00:20Z",
            content: null
        },
        {
            source: {
                id: "axios",
                name: "Axios"
            },
            author: "Mike Allen",
            title:
                '"Anonymous" to expose private Trump conversations in forthcoming book',
            description:
                '"[T]here is no better witness to his character than his own words."',
            url:
                "https://www.axios.com/anonymous-warning-book-trump-private-conversations-302546bd-680c-41dd-b46f-f85d8e459079.html",
            urlToImage:
                "https://images.axios.com/_Kh2MvqxKKqc7myeLkZnYmhnXTI=/0x0:1920x1080/1920x1080/2019/10/25/1571994852584.jpg",
            publishedAt: "2019-10-25T09:59:48.803963Z",
            content:
                '<ul><li>"You will hear a great deal from Donald Trump directly, for there is no better witness to his character than his own words," the author writes on the book\'s back cover, seen for the first time in the graphic above.</li></ul>Applauding those who are cu… [+1173 chars]'
        },
        {
            source: {
                id: "politico",
                name: "Politico"
            },
            author: null,
            title:
                "How South Florida became headquarters of the Trump-Industrial Complex",
            description: null,
            url:
                "https://www.politico.com/news/2019/10/25/trump-south-florida-057010",
            urlToImage:
                "https://static.politico.com/9d/86/4c682e4444b3827a2655e9aa7456/191024-maralago-gty-773.jpg",
            publishedAt: "2019-10-25T09:38:24.0553193Z",
            content:
                "Theres a book to be written called Red Florida and Im not talking Republican red, Im talking about Russian influence in this state, said Rick Wilson, a former GOP consultant and anti-Trump commentator based in Florida. \r\nWilson notes that Trumps former campai… [+3735 chars]"
        },
        {
            source: {
                id: "fox-news",
                name: "Fox News"
            },
            author: "Fox News",
            title:
                "Minnesota Trump rally punch suspect facing felony assault charge: reports",
            description:
                "A Minnesota man — who allegedly punched a Trump supporter in the contentious scene outside the president’s Keep America Great rally in Minneapolis two weeks ago — was charged with assault Wednesday after investigators used videos of the alleged attack to iden…",
            url:
                "https://www.foxnews.com/politics/minnesota-man-punched-trump-supporter-federal-assault-charge-minneapolis-rally",
            urlToImage:
                "https://static.foxnews.com/foxnews.com/content/uploads/2019/10/dwight-pierre-lewis.jpg",
            publishedAt: "2019-10-25T09:38:07.7066379Z",
            content:
                "A Minnesota man — who allegedly punched a Trump supporter in the contentious scene outside the president’s Keep America Great rally in Minneapolis two weeks ago — was charged with assault Wednesday after investigators used videos of the alleged attack to iden… [+2126 chars]"
        },
        {
            source: {
                id: "the-wall-street-journal",
                name: "The Wall Street Journal"
            },
            author: "William Mauldin",
            title:
                "Businesses Fear U.S., China Won’t Reach Deal on Core Issues",
            description:
                "The White House is hoping to have a phase one deal ready by mid-November, when it could potentially be signed by President Trump and China’s President Xi Jinping",
            url:
                "https://www.wsj.com/articles/businesses-fear-u-s-china-wont-reach-deal-on-core-issues-11571995803?mod=hp_lead_pos3",
            urlToImage: "https://images.wsj.net/im-120575/social",
            publishedAt: "2019-10-25T09:30:00Z",
            content:
                "WASHINGTONAmerican companies cheered when the U.S. and China called a cease-fire in their trade war this month, but as both sides work toward drafting an initial deal some worry that a more meaningful, long-term pact may never be reached.Negotiators from both… [+7451 chars]"
        },
        {
            source: {
                id: "politico",
                name: "Politico"
            },
            author: "RYAN LIZZA",
            title: "The Red-State Savior Democrats Don’t Want",
            description:
                "Steve Bullock was supposed to be the key to unlocking Trump voters. Here’s why he thinks he still has a chance.",
            url:
                "https://www.politico.com/magazine/story/2019/10/25/steve-bullock-2020-presidential-candidate-democrat-red-state-trump-229862",
            urlToImage:
                "https://static.politico.com/55/a4/319a08e04186a34ec65cd39ea619/gettyimages-1173861171.jpg",
            publishedAt: "2019-10-25T09:03:00Z",
            content:
                "Ryan Lizza is chief Washington correspondent for Politico.\r\nChapter ISteve Bullock was giddy.\r\nIt was late September in Iowa, and the governor of Montana had something he needed to tell me urgently. He had just finished his stump speech to roughly two dozen p… [+32397 chars]"
        },
        {
            source: {
                id: "the-jerusalem-post",
                name: "The Jerusalem Post"
            },
            author: null,
            title:
                "Barr launches criminal investigation into 'Russia-gate' probe",
            description:
                "Barr launched a review earlier this year to investigate Trump's complaints that his campaign was improperly targeted by U.S. intelligence and law enforcement agencies during the 2016 election.",
            url:
                "https://www.jpost.com/International/Trumps-Russia-gate-now-a-criminal-investigation-605775",
            urlToImage:
                "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/447678",
            publishedAt: "2019-10-25T08:59:00Z",
            content:
                "WASHINGTON - A U.S. Justice Department review of the origins of the probe into Russian interference in the 2016 U.S. presidential election is now a criminal investigation, a person familiar with the matter said on Thursday.\r\nThe person, who spoke to Reuters o… [+2215 chars]"
        },
        {
            source: {
                id: "google-news-uk",
                name: "Google News (UK)"
            },
            author: "Joe Sommerlad",
            title:
                "Trump news – live: Justice Department’s retaliatory Russia probe ‘now a criminal inquiry’ as top White House aide threatens reporter",
            description: "Follow the latest updates from Washington",
            url:
                "https://www.independent.co.uk/news/world/americas/us-politics/trump-news-live-today-twitter-russia-white-house-impeachment-latest-tweets-a9170476.html",
            urlToImage:
                "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/25/08/donald-trump.jpg",
            publishedAt: "2019-10-25T08:40:10+00:00",
            content:
                "The US Justice Departments investigation into the origins of FBI special counsel Robert Muellers probe into Russian election hacking in 2016, instigated by Donald Trumps attorney general William Barr and widely seen as a retaliatory measure to explore deep st… [+3165 chars]"
        },
        {
            source: {
                id: "cnn",
                name: "CNN"
            },
            author: null,
            title:
                "Live updates: The latest on the Trump impeachment inquiry - CNNPolitics",
            description:
                "The House is moving forward with its impeachment inquiry into President Donald Trump. Follow here for the latest.",
            url:
                "http://us.cnn.com/politics/live-news/impeachment-inquiry-10-25-2019/index.html",
            urlToImage:
                "https://cdn.cnn.com/cnnnext/dam/assets/190830133142-trump-file-102019-super-tease.jpg",
            publishedAt: "2019-10-25T08:37:03Z",
            content:
                "Attorney General William Barr's probe into the intelligence and origins of the 2016 Trump-Russia investigation is now a criminal investigation, according to a person familiar with the matter.\r\nThe so-called investigation of the investigators is led by John Du… [+613 chars]"
        },
        {
            source: {
                id: "google-news",
                name: "Google News"
            },
            author: null,
            title:
                "Live updates: The latest on the Trump impeachment inquiry - CNNPolitics",
            description:
                "The House is moving forward with its impeachment inquiry into President Donald Trump. Follow here for the latest.",
            url:
                "https://www.cnn.com/politics/live-news/impeachment-inquiry-10-25-2019/index.html",
            urlToImage:
                "https://cdn.cnn.com/cnnnext/dam/assets/190830133142-trump-file-102019-super-tease.jpg",
            publishedAt: "2019-10-25T08:37:00+00:00",
            content:
                "Attorney General William Barr's probe into the intelligence and origins of the 2016 Trump-Russia investigation is now a criminal investigation, according to a person familiar with the matter.\r\nThe so-called investigation of the investigators is led by John Du… [+613 chars]"
        },
        {
            source: {
                id: "nbc-news",
                name: "NBC News"
            },
            author: "Stephanie Perry, John Lapinski, Charles Riemann",
            title: "Americans split down party lines on Trump impeachment",
            description:
                "Americans split down party lines on Trump impeachment",
            url:
                "https://www.nbcnews.com/politics/trump-impeachment-inquiry/americans-split-down-party-lines-trump-impeachment-n1071646",
            urlToImage:
                "https://media3.s-nbcnews.com/j/newscms/2019_43/2797451/190324-donald-trump-af1-cs-546p_e0d8c424a7178934e54917afc025202e.nbcnews-fp-1200-630.jpg",
            publishedAt: "2019-10-25T08:30:13Z",
            content:
                "Americans are evenly divided on whether President Donald Trump should be impeached. Forty-nine percent think he should be impeached and removed from office and 49 percent are against it, according to results from a new NBC News|SurveyMonkey poll.\r\nVoters are … [+3626 chars]"
        },
        {
            source: {
                id: "aftenposten",
                name: "Aftenposten"
            },
            author: "NTB",
            title:
                "USAs justisdepartement etterforsker sin egen Trump-granskning",
            description:
                "FBI-granskingen av Russlands innblanding i presidentvalgkampen i USA blir nå etterforsket av USAs justisdepartement, skriver New York Times.",
            url:
                "https://www.aftenposten.no/verden/i/mRWXLp/USAs-justisdepartement-etterforsker-sin-egen-Trump-granskning",
            urlToImage:
                "https://ap.mnocdn.no/images/65800fbd-dbbc-4929-9515-4219c10f4345?fit=crop&q=80&w=1440",
            publishedAt: "2019-10-25T08:24:57Z",
            content:
                "smp-stories-top-widget\r\nAvisen mener justisdepartementet vil bli kritisert for å løpe presidentens ærend i saken når det nå åpnes etterforskning.\r\nStatsadvokat John H. Durham har fått i oppdrag å lede etterforskningen, men det er ikke kjent hva slags forbryte… [+1269 chars]"
        },
        {
            source: {
                id: "nbc-news",
                name: "NBC News"
            },
            author: "Associated Press",
            title:
                "MLB umpire apologizes for #MAGA tweet about gun and Trump critics",
            description:
                'Big league umpire Rob Drake has apologized after tweeting that he was buying an AR-15 weapon and warning of a "civil war" if President Donald Trump is impeached.',
            url:
                "https://www.nbcnews.com/news/sports/mlb-umpire-apologizes-maga-tweet-about-gun-trump-critics-n1071771",
            urlToImage:
                "https://media1.s-nbcnews.com/j/newscms/2019_43/3067201/191024-umpire-drake-mn-0830_e4377767e39914d80d422d4a25d8a389.nbcnews-fp-1200-630.jpg",
            publishedAt: "2019-10-25T08:02:00Z",
            content:
                "WASHINGTON Big league umpire Rob Drake has apologized for sending a politicized tweet this week that referenced an assault weapon and criticism of President Donald Trump.\r\nDrake unlocked his Twitter account Thursday and posted several messages to say he was s… [+1195 chars]"
        },
        {
            source: {
                id: "bloomberg",
                name: "Bloomberg"
            },
            author: null,
            title: "Quiz: Which Campaign Did It? Trump 2016 or Warren 2020?",
            description: "",
            url:
                "https://www.bloomberg.com/features/2019-trump-warren-campaign-quiz/?srnd=fixed-income",
            urlToImage: null,
            publishedAt: "2019-10-25T08:00:00+00:00",
            content: ""
        },
        {
            source: {
                id: "associated-press",
                name: "Associated Press"
            },
            author: "BY AAMER MADHANI and SARAH EL DEEB",
            title: "After withdrawal, Trump shifts focus to Syria oil fields",
            description:
                "WASHINGTON (AP) — As Russian and Turkish leaders divvy up security roles in northeast Syria following an abrupt U.S. troop withdrawal, President Donald Trump is focused on oil fields elsewhere in...",
            url: "https://apnews.com/1cf43c5caa27482a891262b6882c229e",
            urlToImage:
                "https://storage.googleapis.com/afs-prod/media/4b48bb8cbe174ad99c76e1eadd718730/2656.jpeg",
            publishedAt: "2019-10-25T07:31:55Z",
            content: null
        },
        {
            source: {
                id: "the-huffington-post",
                name: "The Huffington Post"
            },
            author: "Lee Moran",
            title: "Don Lemon Warns The GOP: 'Be Careful What You Wish For'",
            description:
                "The CNN host asked if Republicans really do want deposition hearings in the Trump impeachment inquiry to be held in public.",
            url:
                "https://www.huffpost.com/entry/don-lemon-gop-impeachment-inquiry-hearings-trump_n_5db29628e4b0a8937402702f",
            urlToImage:
                "https://img.huffingtonpost.com/asset/5db298f2210000332b34b00f.png?cache=15lz0nYCNm&ops=1200_630",
            publishedAt: "2019-10-25T07:00:53Z",
            content:
                "Don Lemon on Thursday issued a warning to Republicans who claim they want closed-door deposition hearings in the impeachment inquiry into President Donald Trump to be held in public.\r\n“Be careful what you wish for,” said the host of “CNN Tonight” as he dissec… [+806 chars]"
        },
        {
            source: {
                id: "associated-press",
                name: "Associated Press"
            },
            author: "ELLIOT SPAGAT",
            title: "Tally of children split at border tops 5,400 in new count",
            description:
                "SAN DIEGO (AP) — U.S. immigration authorities separated more than 1,500 children from their parents at the Mexico border early in the Trump administration, the American Civil Liberties Union said...",
            url: "https://apnews.com/c654e652a4674cf19304a4a4ff599feb",
            urlToImage:
                "https://storage.googleapis.com/afs-prod/media/7ca783c4a7bf4434b0fe2b171d9d4fcc/3000.jpeg",
            publishedAt: "2019-10-25T06:37:01Z",
            content: null
        }
    ]
};

const mockNews = rawNews;

export default mockNews;
