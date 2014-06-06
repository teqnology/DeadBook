(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 110.50,
  			description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
			images:[
				{
					full: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMsqiKrBGpkjQPr-C4e0gLONGOt1J9d7ZcqefcROeLhPNcld4Auw',
					thumb: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMsqiKrBGpkjQPr-C4e0gLONGOt1J9d7ZcqefcROeLhPNcld4Auw'
				},
				{
					full: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMsqiKrBGpkjQPr-C4e0gLONGOt1J9d7ZcqefcROeLhPNcld4Auw',
					thumb: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMsqiKrBGpkjQPr-C4e0gLONGOt1J9d7ZcqefcROeLhPNcld4Auw'
				}
			],
			reviews: [{
				stars: 5,
				body: "I love this gem!",
				author: "joe@example.org",
				createdOn: 1397490980837
				}, {
				stars: 1,
				body: "This gem sucks.",
				author: "tim@example.org",
				createdOn: 1397490980837
			}],			
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Pentagonal Gem',
			price: 10.50,
  			description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
			reviews: [{
				stars: 5,
				body: "I love this gem!",
				author: "joe@example.org",
				createdOn: 1397490980837
				}, {
				stars: 1,
				body: "This gem sucks.",
				author: "tim@example.org",
				createdOn: 1397490980837
			}],			
			images:[
				{
					full: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMsqiKrBGpkjQPr-C4e0gLONGOt1J9d7ZcqefcROeLhPNcld4Auw',
					thumb: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMsqiKrBGpkjQPr-C4e0gLONGOt1J9d7ZcqefcROeLhPNcld4Auw'
				},
				{
					full: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMsqiKrBGpkjQPr-C4e0gLONGOt1J9d7ZcqefcROeLhPNcld4Auw',
					thumb: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMsqiKrBGpkjQPr-C4e0gLONGOt1J9d7ZcqefcROeLhPNcld4Auw'
				}
			],
			canPurchase: true,
			soldOut: false
		},
	]

})();