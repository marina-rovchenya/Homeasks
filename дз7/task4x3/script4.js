var countries = [{
					country: "Belarus",
					flag: "<img name = 'img1' width='125' height='75' src = 'belarus.png' />",
					cod: "375",
					population: "9 508"
				},
				{
					country: "Belgium",
					flag: "<img name = 'img2' width='125' height='75' src = 'belgium.png' />",
					cod: "32",
					population: "11 838 158"
				},
				{
					country: "Brazil",
					flag: "<img name = 'img3' width='125' height='75' src = 'brazil.png' />",
					cod: "55",
					population: "209 684 950"
				},
				{
					country: "Columbia",
					flag: "<img name = 'img4' width='125' height='75' src = 'columbia.png' />",
					cod: "57",
					population: "49 984 000"	
				},
				{
					country: "Croatia",
					flag: "<img name = 'img5' width='125' height='75' src = 'croatia.png' />",
					cod: "385",
					population: "4 190 669"	
				},
				{
					country: "Czech",
					flag: "<img name = 'img6' width='125' height='75' src = 'czech.png' />",
					cod: "420",
					population: "10 578 820"	
				},
				{
					country: "Greece",
					flag: "<img name = 'img7' width='125' height='75' src = 'greece.png' />",
					cod: "30",
					population: "10 846 979"	
				},
				{
					country: "Italy",
					flag: "<img name = 'img8' width='125' height='75' src = 'italy.png' />",
					cod: "39",
					population: "59 589 445"	
				},
				{
					country: "Portugal",
					flag: "<img name = 'img9' width='125' height='75' src = 'portugal.png' />",
					cod: "351",
					population: "10 374 822"	
				},
				{
					country: "Russia",
					flag: "<img name = 'img10' width='125' height='75'  src = 'russia.png' />",
					cod: "7",
					population: "146 880 432"
				},
				{
					country: "USA",
					flag: "<img name = 'img11' width='125' height='75' src = 'usa.png' />",
					cod: "1",
					population: "330 604 442"	
				},
				{
					country: "Zimbabwe",
					flag: "<img name = 'img12' width='125' height='75' src = 'zimbabwe.png' />",
					cod: "263",
					population: "25 529 904"	
				}
]
console.log(countries);

var table = document.querySelector("tbody");

for (var i = 0, j = 0; i < 12, j < 12; i++, j++){
		table.children[i].firstElementChild.innerHTML = countries[j].country
 		table.children[i].children[1].innerHTML = countries[j].flag
 		table.children[i].children[2].innerHTML = countries[j].cod
 		table.children[i].children[3].innerHTML = countries[j].population
}