import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import prisma from "./../../../lib/prisma";

// POST /api/user
// Required fields in body: name, email
export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	await NextCors(req, res, {
		// Options
		methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
		origin: "*",
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	});

	const { identifier } = req.query;
	if (
		(identifier && Array.isArray(identifier)) ||
		typeof identifier !== "string"
	) {
		return res.status(400).json({ error: "Phone must be a string" });
	}

	const entity = await prisma.contact.findFirst({
		where: {
			OR: [
				{ phone: identifier },
				{ idNumber: identifier },
				{ defaultAccount: { ethAddress: identifier } },
			],
		},
		include: {
			accounts: true,
			defaultAccount: {
				select: {
					ethAddress: true,
					bank: {
						select: {
							name: true,
						},
					},
				},
			},
		},
	});
	if (!(entity && entity.defaultAccount)) {
		return res.status(400).json({ error: "No contact found." });
	}
	console.log("Someone searched for", entity.name);
	return res.json({
		name: entity.name,
		phone: entity.phone,
		idNumber: entity.idNumber,
		phoneExtension: entity.phoneExtension,
		alias: entity.alias,
		defaultAccount: entity.defaultAccount,
	});
}
