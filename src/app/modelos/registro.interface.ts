export interface registroI{
    nombreCompleto       :String;
    fechaNacimiento      :String; 
    sexo                 :String;
    paisProcedencia      :String;
    estadoProcedencia    :String;
    correo               :String;
    carrera              ?:String;
    semestre             ?:String;
    institutoProcedencia ?:String;
}