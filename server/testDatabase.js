const tape = require("tape");
const addToDbQuery = require("./queries/addToDbQuery.js");
const getMediaArray = require("./queries/getMediaArray.js");
const updateDbQuery = require("./queries/updateDbQuery.js");
const { initDB, getDB, closeDB } = require("./databaseConnection.js");

const dummyDatabaseData = [
	{
		title: "Adam Rabinovitch",
		heading: "@adam_rab",
		mainText:
			"@BeameryHQ are hiring for a number of Senior Back End Developers to join experienced engineers on a full time basis… https://t.co/hCkIyCrnIK",
		publicationDate: "Thu, 07 Nov 2019 14:02:47 GMT",
		dateStandard: ISODate("2019-11-07T14:02:47Z"),
		mediaType: "tweet",
		favourite: false,
		imageUrl:
			"https://pbs.twimg.com/profile_images/1187463377175498752/2RjaTRqD_normal.jpg",
		sourceUrl: "https://twitter.com/i/web/status/1192442275877588994"
	},
	{
		title: "Ben Slater",
		heading: "@BenJHSlater",
		mainText:
			"RT @BeameryHQ: When it comes to building a strong partnership between #TA &amp; #EmployerBranding, Coca-Cola Hellenic's Milan Baosic &amp; Nadja Cz…",
		publicationDate: "Thu, 07 Nov 2019 11:44:11 GMT",
		dateStandard: ISODate("2019-11-07T11:44:11Z"),
		mediaType: "tweet",
		favourite: false,
		imageUrl:
			"https://pbs.twimg.com/profile_images/817133736043089920/VaOu69PU_normal.jpg",
		sourceUrl: "not available"
	}
];

test("Initialising the database", (t) => {
	(async () => {
		const db = await initDB();
		db.collection("beamerySocialTest").deleteMany({});
		db.collection("beamerySocialTest").insertMany(dummyDatabaseData);
		closeDB();
		() => t.end()();
	})();
});

test("Testing whether addToDbQuery() adds a media item to the database, whether updateDbQuery() changes the favourite property value of the media item, and whether getMediaArray() can retrieve the updated media item.", (t) => {
	t.plan(3);

	const mediaItemToAdd = [
		{
			id: "5dc58c5457c3190020a8974c",
			title: "Stack Overflow Jobs",
			heading: "@StackDevJobs",
			mainText:
				"Beamery (@beameryhq) is hiring https://t.co/NZWc036Hl2 #redux #frontend",
			publicationDate: "Thu, 07 Nov 2019 15:40:24 GMT",
			dateStandard: ISODate("2019-11-07T15:40:24Z"),
			mediaType: "tweet",
			favourite: false,
			imageUrl:
				"https://pbs.twimg.com/profile_images/643779014268579840/bRJStj7A_normal.png",
			sourceUrl: "https://stackoverflow.com/jobs/companies/beamery"
		}
	];

	async () => {
		const db = await initDB();
		addToDbQuery(db, mediaItemToAdd);
		getMediaArray(db, (error, result) => {
			if (error) {
				throw error;
			}
			t.equal(
				result.length,
				1,
				"getMediaArray() retrieves the one media item that addToDbQuery() added to the empty database."
			);
			t.equal(
				result.favourite,
				false,
				"addToDbQuery() added an item to the empty database and it's favourite property value is equal to false, as retrieved by getMediaArray()."
			);
		});
		updateDbQuery(db, "5dc58c5457c3190020a8974c", true);
		getMediaArray(db, (error, result) => {
			if (error) {
				throw error;
			}
			t.equal(
				result.favourite,
				true,
				"updateDbQuery() changed the favourite property value to true."
			);
		});
		() => t.end()();
		closeDB();
	};
});
