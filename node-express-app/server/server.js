let express = require("express");

let app = express();
let port = 3000;
//hard coding my own banks
let bankData = {
	banks: [
		{
			id: 20,
			country: "ZA",
			bank_name: "Absa Bank Limited, South Africa",
			code: "632005",
		},
		{
			id: 21,
			country: "ZA",
			bank_name: "African Bank Limited",
			code: "430000",
		},
		{ id: 22, country: "ZA", bank_name: "Albaraka Bank", code: "800000" },
		{ id: 23, country: "ZA", bank_name: "Bank Zero", code: "888000" },
		{
			id: 24,
			country: "ZA",
			bank_name: "Bidvest Bank Limited",
			code: "462005",
		},
		{
			id: 25,
			country: "ZA",
			bank_name: "Capitec Bank Limited",
			code: "470010",
		},
		{ id: 26, country: "ZA", bank_name: "CitiBank", code: "350005" },
		{
			id: 27,
			country: "ZA",
			bank_name: "Discovery Bank Limited",
			code: "679000",
		},
		{ id: 28, country: "ZA", bank_name: "Finbond EPE", code: "591000" },
		{
			id: 29,
			country: "ZA",
			bank_name: "Finbond Mutual Bank",
			code: "589000",
		},
		{
			id: 30,
			country: "ZA",
			bank_name: "First National Bank",
			code: "250655",
		},
		{ id: 31, country: "ZA", bank_name: "FirstRand Bank", code: "201419" },
		{ id: 32, country: "ZA", bank_name: "Grindrod Bank", code: "584000" },
		{ id: 33, country: "ZA", bank_name: "HSBC South Africa", code: "587000" },
		{ id: 34, country: "ZA", bank_name: "Investec Bank Ltd", code: "580105" },
		{
			id: 35,
			country: "ZA",
			bank_name: "JP Morgan South Africa",
			code: "432000",
		},
		{ id: 36, country: "ZA", bank_name: "Mercantile Bank", code: "450105" },
		{ id: 37, country: "ZA", bank_name: "Nedbank", code: "198765" },
		{ id: 38, country: "ZA", bank_name: "Olympus Mobile", code: "585001" },
		{
			id: 39,
			country: "ZA",
			bank_name: "Rand Merchant Bank",
			code: "261251",
		},
		{ id: 40, country: "ZA", bank_name: "RMB Private Bank", code: "222026" },
		{ id: 41, country: "ZA", bank_name: "SASFIN Bank", code: "683000" },
		{
			id: 42,
			country: "ZA",
			bank_name: "Société Générale South Africa",
			code: "351005",
		},
		{
			id: 43,
			country: "ZA",
			bank_name: "South African Bank of Athens",
			code: "410105",
		},
		{
			id: 44,
			country: "ZA",
			bank_name: "Standard Bank South Africa",
			code: "051001",
		},
		{
			id: 45,
			country: "ZA",
			bank_name: "Standard Chartered Bank",
			code: "730020",
		},
		{ id: 46, country: "ZA", bank_name: "TymeBank", code: "678910" },
		{ id: 47, country: "ZA", bank_name: "VBS Mutual Bank", code: "588000" },
	],
};

//assigning array to banks
const banks = bankData.banks;

//requests to the root url, then redirects to localhost:3000/banks
app.get("/", (req, res) => {
	res.redirect("/banks");
});

app.get("banks", (req, res) => {
	res.redirect("/banks-json");
});

app.get("/banks-json", (req, res) => {
	res.json(bankData);
});

//means its working... sometimes
app.listen(port, () => {
	console.log(`Server listening on port 3000`);
});
