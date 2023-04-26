import { test, expect } from "@playwright/test";

test("search for eth account by phone", async ({ request }) => {
	const IDENTIFIER = "40870018";
	const ETH_ADDRESS = "0x0c29f8afbccedb00e41afa1ee9c75e12b73004aa";

	const res = await request.get(`/api/contact/search?identifier=${IDENTIFIER}`);
	const json = await res.json();

	await expect(
		json.defaultAccount.ethAddress === ETH_ADDRESS,
		"should find contact with ethAddress",
	).toBeTruthy();
});

test("search for eth account by ethAddress", async ({ request }) => {
	const IDENTIFIER = "0x0c29f8afbccedb00e41afa1ee9c75e12b73004aa";
	const ETH_ADDRESS = "0x0c29f8afbccedb00e41afa1ee9c75e12b73004aa";

	const res = await request.get(`/api/contact/search?identifier=${IDENTIFIER}`);
	const json = await res.json();

	await expect(
		json.defaultAccount.ethAddress === ETH_ADDRESS,
		"should find contact with ethAddress",
	).toBeTruthy();
});

test("search for eth account by id", async ({ request }) => {
	const IDENTIFIER = "18818798594";
	const ETH_ADDRESS = "0x0c29f8afbccedb00e41afa1ee9c75e12b73004aa";

	const res = await request.get(`/api/contact/search?identifier=${IDENTIFIER}`);
	const json = await res.json();
	await expect(
		json.defaultAccount.ethAddress === ETH_ADDRESS,
		"should find contact with ethAddress",
	).toBeTruthy();
});
