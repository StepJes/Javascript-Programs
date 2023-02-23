var app = angular
          .module("myModule", [])
          .controller("myController",function($scope){
            var technologies=[
                { name:"C#",likes:0, dislike:0},
                { name:"ASP.net",likes:0, dislike:0},
                { name:"SQL",likes:0, dislike:0},
                { name:"Angular.JS",likes:0, dislike:0}
                ];
                $scope.technologies=technologies;
                $scope.incrementLikes=function(technology)
                {
                    technology.likes++;
                };
                $scope.incrementDisLikes=function(technology)
                {
                    technology.dislike++;
                };
          });