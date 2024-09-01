function hoteles(){
  let hotel=open();
  hotel.document.write("aca iria hotel etc")
}
function sesion(){
  let session = open('','','status=yes width=700 height=500 menubar=yes');
  session.document.write('<center>');
  session.document.write('<br>');
  session.document.write('<p>!Bienvenido aqui podras iniciar session!</p>');
  session.document.write('<br>');
  session.document.write('Ingrese el Correo Electronico');
  session.document.write('<br>');
  session.document.write('<input type="text" name="" value="">');
  session.document.write('<br>');
  session.document.write('Ingrese la Contraseña');
  session.document.write('<br>');
  session.document.write('<input type="password" value="">');
}
