var app = angular.module('app',[]);
/**agragamos el parametro $scope */
app.controller('CassettesController', function($scope){
  $scope.cassettes=[     /**agragamos el un modelo llamado cassettes dentro de nuestro controlador y dentro nuestros atributos para agragar un album*/
      {id:"1", titulo:"Night Visions", artista:"Imagine Dragons", anio:"2012",disquera: "Interscope Records", precio: "190.0"},

      {id:"2", titulo:"Brave Enough", artista:"Lindsey Stirling", anio:"2016",
         disquera: "Lindseystomp Music", precio: "260.0"},

      {id:"3", titulo: " Resiliente",artista:" insite", anio: "2015",
         disquera: "Dce Records", precio: "145.0"}

      ];

  $scope.Save = function(){
  /**se agrega metodo push para ir agregando los datos de un álbum */
  $scope.cassettes.push({
    id:$scope.nuevoAlbum.id,
    titulo:$scope.nuevoAlbum.titulo,
    artista:$scope.nuevoAlbum.artista,
    anio:$scope.nuevoAlbum.anio,
    disquera:$scope.nuevoAlbum.disquera,
    precio:$scope.nuevoAlbum.precio});
       $scope.nuevoAlbum.id = '';
       $scope.nuevoAlbum.titulo = '';
       $scope.nuevoAlbum.artista = '';
       $scope.nuevoAlbum.anio = '';
       $scope.nuevoAlbum.disquera = '';
       $scope.nuevoAlbum.precio = '';
       $scope.formVisibility=false;
       comsole.log($scope.formVisibility)
    };
    /**Con ShowForm cambiara formVisibility de verdadero a falso dependiendo de la accion del boton añadir o guardar*/
    $scope.ShowForm=function(){
      $scope.formVisibility=true;
      console.log($scope.formVisibility)
    };


});
