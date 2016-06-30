angular.module('app').controller("MainController", function(){
	var $scope = this;
	$scope.title = "PhotoFinder Application";
	$scope.searchInput = '';
	
	//Photo details
	$scope.photos =[
	{
		title: 'Flower',
		link: 'images/flower.jpg',
		year: 2011,
		favourite: true
	},
	{
		title: 'Tree',
		link: 'images/tree.jpg',
		year: 2010,
		favourite: false
	},
	{
		title: 'Dog',
		link: 'images/dog.jpg',
		year: 2002,
		favourite: true
	},
	{
		title: 'Balloon',
		link: 'images/balloon.jpg',
		year: 2013,
		favourite: true
	},
	{
		title: 'Sunshine',
		link: 'images/sunshine.jpg',
		year: 2005,
		favourite: false
	}
	];
	
	//Order details (for dropdown)
	$scope.orders = [
    {
        id: 1,
        title: 'Year Ascending',
        key: 'year',
        reverse: false
    },
    {
        id: 2,
        title: 'Year Descending',
        key: 'year',
        reverse: true
    },
    {
        id: 3,
        title: 'Title Ascending',
        key: 'title',
        reverse: false
    },
    {
        id: 4,
        title: 'Title Descending',
        key: 'title',
        reverse: true
    },
	{
		id: 5,
		title: 'Favourites',
		key: 'favourite',
		reverse: true
	}
];
$scope.order = $scope.orders[0];

//Add a new photo 
$scope.new = {};
$scope.addPhoto = function() {
    $scope.photos.push($scope.new);
    $scope.new = {};
};

});

