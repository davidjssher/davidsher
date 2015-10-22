app.controller('MainController', ['$scope', function($scope) {
  $scope.apps = [ 
	  { 
	    icon: 'img/portfolio/1.jpg', 
	    title: 'Inappropriate Factory', 
	    category: 'Website', 
	    link: 'http://inappropriatefactory.com/'
	  }, 
	  { 
	    icon: 'img/portfolio/2.jpg', 
	    title: 'Kill Zone 3', 
	    category: 'Usability Tests', 
	    link: 'http://www.killzone.com/en_GB/killzone3' 
	  },
	  {
	    icon: 'img/portfolio/3.jpg',
	    title: 'Jeff Beck',
	    category: 'Website',
	    link: 'http://www.jeffbeckofficial.com/'
	  },
	  {
	    icon: 'img/portfolio/4.jpg',
	    title: 'Gestão na Construção',
	    category: 'Course Development in AS3',
	    link: 'demo1.html'
	  },
	  {
	    icon: 'img/portfolio/5.jpg',
	    title: 'Requisito 7.3',
	    category: 'Course Development in AS3',
	    link: 'demo2.html'
	  },
	  {
	    icon: 'img/portfolio/6.jpg',
	    title: 'Mercado de Ideias',
	    category: 'Course Development in AS3',
	    link: 'demo3.html'
	  }
	];
}]);