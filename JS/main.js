function greet(){
  // alert("\t\t\tHello Fellas!! \nWelcome to Game-On Site enjoy Gaming with us \n\t\t\tand stay connected ");
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  $('#myModal').modal(options)
}
