// var exps=[/^\w+$/,/^\d{3}-\d{6}$/,/^\d{5}$/,/^[A-Za-záéíóúÁÉÍÓÚ0-9]+@[a-z]+\.[a-z]{2,3}$/];
// var err=['Nombre incorrecto. Xxxxx','Telefono incorrecto. XXX-XXXXXX', 'CP incorrecto. XXXXX', 'Email incorrecto: xxxxx@xxxx.xxx']
// $(function(){
//     $(':submit').on('click',function(e){
//         e.preventDefault();
//         comprobar()
//     });
// });
//
// function esValido(parametro){
//     !parametro?alert('El formulario tiene campos incorrectos o esta incompleto.'):alert('Formulario enviado.')
// }
//
// function comprobar(){
//     var bool=true;
//     var i=0;
//     $('span').remove();
//     $('form label input').each(function(){
//         if(exps[i].test($(this).val())){
//             $(this).css('background-color',"green")
//         }else{
//             bool=false;
//             $(this).css('background-color',"red");
//             $(this).after(`<span>${err[i]}</span>`)
//         }
//         i++;
//     });
//     esValido(bool);
// }
