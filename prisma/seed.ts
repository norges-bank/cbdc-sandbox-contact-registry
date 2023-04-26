import { PrismaClient } from "@prisma/client";

const data = [
	{
		Navn: "SØVNIG BROSME",
		Født: "13.06.1978",
		Kjønn: "mann",
		Personnummer: "13867897334",
		Adresse: "Tore Hjorts vei 8 8314 GIMSØYSAND",
		Sivilstand: "gift",
		"Tlf land": "+47",
		Telefon: "40870010",
		Email: "SØVNIG@test.no",
		"Keystore filename":
			"UTC--2022-09-08T13-09-30.429z--0x1c8a07cf4113eadd508b170dbfb5301078fefd76",
		Keystore:
			'{"address":"0x1c8a07cf4113eadd508b170dbfb5301078fefd76","crypto":{"kdf":"pbkdf2","kdfparams":{"c":262144,"dklen":32,"prf":"hmac-sha256","salt":"b89513ca4c9d8c88cb36054fb1ea1c3da9053908b964f0be69f6e8f0a85998eb"},"cipher":"aes-128-ctr","ciphertext":"b7ee5856878a2323df7cad91ccc71a361810743a67367f97791c9b5dd883a270","cipherparams":{"iv":"b3b31496b149d4c75398c835cd18fdfe"},"mac":"534a0adbb0d5867162f52ce60243651421b37474734641d7b4359c4468ffb625"},"id":"5c90a7b2-8642-4193-8d3c-c1e990bbd822","version":3}',
		"Ethereum-adresse": "0x1c8a07cf4113eadd508b170dbfb5301078fefd76",
	},
	{
		Navn: "LAT TIRSDAG",
		Født: "27.04.1990",
		Kjønn: "kvinne",
		Personnummer: "27849098417",
		Adresse: "Kvernatunvegen 9 5347 ÅGOTNES",
		Sivilstand: "gift",
		"Tlf land": "+47",
		Telefon: "40870011",
		Email: "LAT TI@test.no",
		"Keystore filename":
			"UTC--2022-09-08T13-14-24.150z--0x1cb95e8b8275262e1ae4359407fae303e31d1357",
		Keystore:
			'{"address":"0x1cb95e8b8275262e1ae4359407fae303e31d1357","crypto":{"kdf":"pbkdf2","kdfparams":{"c":262144,"dklen":32,"prf":"hmac-sha256","salt":"4f1342e92f6f70f741a71a275cc47b22a38d5e8b39483a802f5a29f2c6628a61"},"cipher":"aes-128-ctr","ciphertext":"71cb07ae7cf23a6f4c18ec334f967e1cf0e7f3ae84634f82adeceea1503a6180","cipherparams":{"iv":"43a48e1e595fdf93c34d97a5a7b4f0b7"},"mac":"d7b7544b9cf2dbaf85a6e73b602749b39966507e5eac4bbc6b742e1d7f6c3384"},"id":"c13f48a2-e689-4514-8595-d7f3749ffd5d","version":3}',
		"Ethereum-adresse": "0x1cb95e8b8275262e1ae4359407fae303e31d1357",
	},
	{
		Navn: "",
		Født: "",
		Kjønn: "",
		Personnummer: "",
		Adresse: "",
		Sivilstand: "",
		"Tlf land": "",
		Telefon: "",
		Email: "",
		"Keystore filename":
			"UTC--2022-09-08T13-15-41.174z--0xdc6c86a2a36ecc57971df68cf6a6221119719cac",
		Keystore:
			'{"address":"0xdc6c86a2a36ecc57971df68cf6a6221119719cac","crypto":{"kdf":"pbkdf2","kdfparams":{"c":262144,"dklen":32,"prf":"hmac-sha256","salt":"d0f3b6989122fed0b02f09d136e95338903423a9437bbf9a303c5c695a2ca04f"},"cipher":"aes-128-ctr","ciphertext":"533cc65dbe8526aacf82ade1780e4c18008b2bf2ef0d8993292e658dac2e9e8b","cipherparams":{"iv":"d52ca3ef6984fab5b92a3da42d22ced8"},"mac":"b9b7724fdb37458d18fca18333aa25f6efed78422fbdeaf66c3f003b121735b9"},"id":"aa03117a-cc79-4acd-835d-07da13a7e0f7","version":3}',
		"Ethereum-adresse": "0xdc6c86a2a36ecc57971df68cf6a6221119719cac",
	},
	{
		Navn: "PATENT COSINUS",
		Født: "22.06.1960",
		Kjønn: "mann",
		Personnummer: "22866097996",
		Adresse: "Enerhaugen 30 2335 STANGE",
		Sivilstand: "gift",
		"Tlf land": "+47",
		Telefon: "40870012",
		Email: "PATENT@test.no",
		"Keystore filename":
			"UTC--2022-09-08T13-16-23.703z--0xff127c7c205903efe2daa28dfaf3ce5edb0a6507",
		Keystore:
			'{"address":"0xff127c7c205903efe2daa28dfaf3ce5edb0a6507","crypto":{"kdf":"pbkdf2","kdfparams":{"c":262144,"dklen":32,"prf":"hmac-sha256","salt":"689cb08947fc89cc5bcdcf17523005d64ece5d515240d03d93db4d5c99fa0c4e"},"cipher":"aes-128-ctr","ciphertext":"5218ad953b8551d27afc4ab6217a57588dce32ad3abd68567af6124212a07cb4","cipherparams":{"iv":"a7d0051d601f34899588a5889a53ec6c"},"mac":"39e518f28c8a693d6de40e1c371f5b07ac0c7fe8102e7a91490953254734f54d"},"id":"8e55891f-890f-47aa-b910-24e967d46810","version":3}',
		"Ethereum-adresse": "0xff127c7c205903efe2daa28dfaf3ce5edb0a6507",
	},
	{
		Navn: "SPETTETE OMELETT",
		Født: "14.01.1994",
		Kjønn: "kvinne",
		Personnummer: "14819497649",
		Adresse: "Ludvig Karstens vei 7 1064 OSLO",
		Sivilstand: "gift",
		"Tlf land": "+47",
		Telefon: "40870013",
		Email: "SPETTETE@test.no",
		"Keystore filename":
			"UTC--2022-09-08T13-17-05.693z--0x015b7317358f855f98b3c8781694f836043f44dc",
		Keystore:
			'{"address":"0x015b7317358f855f98b3c8781694f836043f44dc","crypto":{"kdf":"pbkdf2","kdfparams":{"c":262144,"dklen":32,"prf":"hmac-sha256","salt":"70ef92f5adcf4e8149e7eafb573de782690f1671ce27036c6ca98ef05c5f6144"},"cipher":"aes-128-ctr","ciphertext":"1947c05d1dc23a5087d19c520feeef1dc31b293eb4123a27e8eda04fdd74d56c","cipherparams":{"iv":"c7bb63332de98822612dd7112b7ed2ca"},"mac":"fbf91875571361f748d5a78ca0c5e3925ee6bf010a11ee7033ca2e9e87a67172"},"id":"67758ccb-eb19-40cc-8ba8-65991393796f","version":3}',
		"Ethereum-adresse": "0x015b7317358f855f98b3c8781694f836043f44dc",
	},
	{
		Navn: "KLOK INNSJØ",
		Født: "25.10.1986",
		Kjønn: "kvinne",
		Personnummer: "25908699036",
		Adresse: "Døsserødveien 43 3118 TØNSBERG",
		Sivilstand: "gift",
		"Tlf land": "+47",
		Telefon: "40870014",
		Email: "KLOK@test.no",
		"Keystore filename":
			"UTC--2022-09-08T13-17-42.734z--0x3087af4bf9853a562dd43b75730b2b4c58aa0979",
		Keystore:
			'{"address":"0x3087af4bf9853a562dd43b75730b2b4c58aa0979","crypto":{"kdf":"pbkdf2","kdfparams":{"c":262144,"dklen":32,"prf":"hmac-sha256","salt":"b31e71cd69beb4256c2967d7a00cdafe90c2496697131aea3a73ce7cb85bc92a"},"cipher":"aes-128-ctr","ciphertext":"f46c5dcec7f52f1090c9cb514cd45b8f6d238ad8ce49a0221c0f87c593d49c54","cipherparams":{"iv":"b331a62f68ab33375a85efd154a10ab8"},"mac":"52252a3fa44173fc279933e31c46a0566f55090428c58ba043a8776ff4d47d00"},"id":"7bc459de-be3e-4876-bb89-fba6b7c77f0b","version":3}',
		"Ethereum-adresse": "0x3087af4bf9853a562dd43b75730b2b4c58aa0979",
	},
	{
		Navn: "BESTEMT DAGELEV",
		Født: "30.08.1975",
		Kjønn: "mann",
		Personnummer: "70887501120",
		Adresse: "uoppgitt",
		Sivilstand: "uoppgitt",
		"Tlf land": "+47",
		Telefon: "40870015",
		Email: "BESTEM@test.no",
		"Keystore filename":
			"UTC--2022-09-08T13-26-20.993z--0x803ed97d2622a7dea05fe8e512ed825f19920867",
		Keystore:
			'{"address":"0x803ed97d2622a7dea05fe8e512ed825f19920867","crypto":{"kdf":"pbkdf2","kdfparams":{"c":262144,"dklen":32,"prf":"hmac-sha256","salt":"b093782ab207f8405960057a9e3a880aa80b7d6447a6f0becdd30a32d18b727b"},"cipher":"aes-128-ctr","ciphertext":"3b78c0c8217955ddc4e6f2bb084e022b9cc17b4396dc93214263e70c4641ca2e","cipherparams":{"iv":"b76b9f535c49719a709d84f3c31c2b84"},"mac":"3a66a2a5677d4b37e6c853b9b320ef35d532a0840bd57bdb9e7e71f9ee4080d8"},"id":"9609f497-0913-4625-b067-bbe1aba93581","version":3}',
		"Ethereum-adresse": "0x803ed97d2622a7dea05fe8e512ed825f19920867",
	},
	{
		Navn: "TYKKHUDET HISTORIE",
		Født: "13.03.1956",
		Kjønn: "kvinne",
		Personnummer: "13835698240",
		Adresse: "Kobberveien 8 B 4616 KRISTIANSAND S",
		Sivilstand: "ugift",
		"Tlf land": "+47",
		Telefon: "40870016",
		Email: "TYKKHU@test.no",
		"Keystore filename":
			"UTC--2022-09-08T13-26-56.369z--0xaf9570ba974d16c08579a30c0fc64b8d7ba32561",
		Keystore:
			'{"address":"0xaf9570ba974d16c08579a30c0fc64b8d7ba32561","crypto":{"kdf":"pbkdf2","kdfparams":{"c":262144,"dklen":32,"prf":"hmac-sha256","salt":"70e9ec326da95833c9d91801a2a5ed006f20c2ad6b058fddad72b780ca9c399a"},"cipher":"aes-128-ctr","ciphertext":"9bf09067594b33c56f12f2761b4e7fb78bd9a3b5ca36ea8c9ecc02e113cebfbb","cipherparams":{"iv":"3bfa1be0a3528b4f9d3be609aab8e21d"},"mac":"240a79f069dfd98430f8907e122d5b56c2f536f3a6b04641abf87b8322baecb7"},"id":"4310191f-5ece-4a28-ae92-949d69481167","version":3}',
		"Ethereum-adresse": "0xaf9570ba974d16c08579a30c0fc64b8d7ba32561",
	},
	{
		Navn: "SENTRAL KLOKKE",
		Født: "20.05.1950",
		Kjønn: "mann",
		Personnummer: "20855097738",
		Adresse: "Harald Sohlbergs vei 6 1064 OSLO",
		Sivilstand: "ugift",
		"Tlf land": "+47",
		Telefon: "40870017",
		Email: "SENTRAL@test.no",
		"Keystore filename":
			"UTC--2022-09-08T13-27-35.240z--0xc1a10bbcfb138215006854e95334a2910b4de4d9",
		Keystore:
			'{"address":"0xc1a10bbcfb138215006854e95334a2910b4de4d9","crypto":{"kdf":"pbkdf2","kdfparams":{"c":262144,"dklen":32,"prf":"hmac-sha256","salt":"437f31afd2d8774ac2c8cbf75899a2b43e6c78dfba773a36ad7e0433b71f529b"},"cipher":"aes-128-ctr","ciphertext":"61119a0a4e33af134cfb5ce915079b9a5deddeb7e959135e88724e3412f98a59","cipherparams":{"iv":"3be34b806f06efedc008b8c1be47a020"},"mac":"7b6370970225b263a956456a4a33893e1af8a1a8d31f32c16f8cbee6035dfea1"},"id":"f92d1c94-c280-4900-a087-e67e6a56ac86","version":3}',
		"Ethereum-adresse": "0xc1a10bbcfb138215006854e95334a2910b4de4d9",
	},
	{
		Navn: "MINKENDE OVERSTYRING",
		Født: "18.01.1987",
		Kjønn: "mann",
		Personnummer: "18818798594",
		Adresse: "Aldersundveien 339 8730 BRATLAND",
		Sivilstand: "gift",
		"Tlf land": "+47",
		Telefon: "40870018",
		Email: "MINKEN@test.no",
		"Keystore filename":
			"UTC--2022-09-08T13-28-12.831z--0x0c29f8afbccedb00e41afa1ee9c75e12b73004aa",
		Keystore:
			'{"address":"0x0c29f8afbccedb00e41afa1ee9c75e12b73004aa","crypto":{"kdf":"pbkdf2","kdfparams":{"c":262144,"dklen":32,"prf":"hmac-sha256","salt":"4775e4fea1f885a591d12742aec8899acd6163a7c6e11a2998e259bc3b2bf5a5"},"cipher":"aes-128-ctr","ciphertext":"c20c9f3eba01bf5b49c4204c51d73346ad1d3009bb31574a2e506f306ca3ef3b","cipherparams":{"iv":"4b7aa34a2d00ddc147ceaea244c9ef83"},"mac":"11ec763a84220339396cbf06a865c7bb631b9d5f134a28837e05a690b5c7a0c4"},"id":"56d41062-48fe-4bc1-8a5f-7959329166f5","version":3}',
		"Ethereum-adresse": "0x0c29f8afbccedb00e41afa1ee9c75e12b73004aa",
	},
	{
		Navn: "BESKJEDEN BAKVERK",
		Født: "20.08.1912",
		Kjønn: "mann",
		Personnummer: "20881248930",
		Adresse: "Valsøyfjordvegen 911 6686 VALSØYBOTN",
		Sivilstand: "gift",
		"Tlf land": "+47",
		Telefon: "40870019",
		Email: "BESKJE@test.no",
		"Keystore filename":
			"UTC--2022-09-08T13-28-47.302z--0x9fc21daa8ffc747874477350438da5b36d2cbb7b",
		Keystore:
			'{"address":"0x9fc21daa8ffc747874477350438da5b36d2cbb7b","crypto":{"kdf":"pbkdf2","kdfparams":{"c":262144,"dklen":32,"prf":"hmac-sha256","salt":"9895944ab1654715c48a9eac4e6e74ccbbb5b21ab8de9d439f547bf19c30cbd0"},"cipher":"aes-128-ctr","ciphertext":"5b07a2ea9104350983060ee28a30f6310a9a761d51844abb07de618ad4dfbf51","cipherparams":{"iv":"9bb7ca29bb8ad95ac1876fbb6e045d61"},"mac":"cd59da321f3e4456881be2b36cee81bbe29b51b150a8f012450733f24361b06f"},"id":"628d1735-6324-4718-bca7-0d4d0a32671e","version":3}',
		"Ethereum-adresse": "0x9fc21daa8ffc747874477350438da5b36d2cbb7b",
	},
];

const prisma = new PrismaClient();

async function main() {
	console.log("Start seeding ...");
	const banks = await prisma.bank.findMany();
	if (banks.length !== 0) {
		console.log("Seeding already done");
		return;
	}
	const bank = await prisma.bank.create({
		data: {
			name: "DNB",
		},
	});

	let lastPersonId;
	for await (const person of data) {
		// This is used to add rows that only has accounts, into the last person added
		let activePersonId;

		if (person.Navn === "") {
			activePersonId = lastPersonId;
		} else {
			const contact = await prisma.contact.create({
				data: {
					idNumber: person.Personnummer,
					name: person.Navn,
					//alias: '',
					email: person.Email,
					phone: person.Telefon,
					phoneExtension: person["Tlf land"],
				},
			});
			activePersonId = contact.id;
		}

		const account = await prisma.account.create({
			data: {
				ethAddress: person["Ethereum-adresse"],
				alias: "Min NOK-konto",
				keystoreFile: person.Keystore,
				bank: {
					connect: {
						id: bank.id,
					},
				},
				owner: {
					connect: {
						id: activePersonId,
					},
				},
			},
		});

		await prisma.contact.update({
			where: {
				id: activePersonId,
			},
			data: {
				defaultAccount: {
					connect: {
						id: account.id,
					},
				},
			},
		});
		lastPersonId = activePersonId;

		console.log(`Created user with id: ${activePersonId}`);
	}

	console.log("Seeding finished.");
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
