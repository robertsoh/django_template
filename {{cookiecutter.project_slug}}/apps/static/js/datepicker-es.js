/**
 * Created by cj on 2/14/17.
 */
var dateFormat = "dd/mm/yy";

$.datepicker.regional['es'] = {
  dateFormat     : dateFormat,
  dayNames       : ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
  dayNamesMin    : ['Do', 'Lu', 'Ma', 'Mc', 'Ju', 'Vi', 'Sa'],
  dayNamesShort  : ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
  firstDay       : 1,
  monthNames     : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
};
$.datepicker.setDefaults($.datepicker.regional['es']);
