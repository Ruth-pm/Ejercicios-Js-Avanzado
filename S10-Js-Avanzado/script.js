class Alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.promedio = this.calcularPromedio();
        this.condicion = this.calcularCondicion();
        this.obsequio = this.calcularObsequio();
    }
    
    //Operaciones
    calcularPromedio(){
        return this.nota1*0.15 + this.nota2*0.2 + this.nota3*0.25 + this.nota4*0.4
    }

    calcularCondicion(){
        if (this.calcularPromedio() >= 12) {
            return "Aprobado"
        }else {
            return "Desaprobado"
        }
    }

    calcularObsequio(){
        if (this.calcularPromedio() > 17) {
            return "Felicidades!! alcanzaste un promedio alto, por ello te ganaste una mochila"
        }else {
            return "Sigue esforzandote, esta vez no te ganaste un obsequio"
        }
    }

}

//Ejemplo 01: Alumno Desaprobado
student = new Alumno("0001","Carlos Alberto","15", "10", "11", "12");
student.calcularPromedio();
student.calcularCondicion();
student.calcularObsequio();

//Ejemplo 02: Alumno Aprobado
student2 = new Alumno("0002","Mariana Carbajal","18", "19", "18", "20");
student2.calcularPromedio();
student2.calcularCondicion();
student2.calcularObsequio();

console.log(student, student2)