import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})

export class ArchivoService {

  quizzes : Quiz[] = [
    {
      question: '1. ¿Cuál es la definición correcta de peligro?',
      answer: [
        { option: 'a. Todo aquello capaz de ocasionar daños a las personas, equipos, procesos y ambiente.', correct: true},
        { option: 'b. Peligro es igual que riesgo.', correct: false},
        { option: 'c. Cualquier incidente producido en el trabajo.', correct: false},
      ]
    },
    {
      question: '2. ¿Cuál es la definición correcta de riesgo?',
      answer: [
        { option: 'a. Es todo daño que sufre la persona.', correct: false},
        { option: 'b. Es todo acto cometido por una persona.', correct: false},
        { option: 'c. Es la relación de probabilidad y consecuencia de que un peligro se materialice en determinadas condiciones y genere daños a las personas, equipos y medio ambiente.', correct: true}
      ]
    },
    {
      question: '3. ¿Qué es un acto inseguro?',
      answer: [
        { option: 'a. Es toda acción o práctica incorrecta ejecutada por el trabajador que puede causar un accidente.', correct: true},
        { option: 'b. Cualquier condición que podría causar daño.', correct: false},
        { option: 'c. Cualquier accidente ocurrido por fallas mecánicas.', correct: false},
      ]
    },
    {
      question: '4. ¿Qué es una condición insegura?',
      answer: [
        { option: 'a. Cualquier comportamiento que produzca un accidente.', correct: false},
        { option: 'b. Es toda condición en el entorno del trabajo que puede causar un accidente.', correct: true},
        { option: 'c. Cualquier accidente que se ha generado por un trabajador fuera del horario de trabajo.', correct: false},
      ]
    },
    {
      question: '5. ¿Cuál de las siguientes alternativas contiene la secuencia correcta para reportar un accidente?',
      answer: [
        { option: 'a. Tópico de medicina – Clínica u hospitales, área de seguridad – Supervisor del área, testigo del accidente.', correct: false},
        { option: 'b. Supervisor del área – Clínica u hospitales – Área de seguridad, área de bienestar, testigo del accidente.', correct: false},
        { option: 'c. Supervisor del área, testigo del accidente, área de seguridad – Área de bienestar social, tópico de medicina – clínica u hospitales.', correct: true},
      ]
    },
    {
      question: '6. ¿Qué significa SCTR?',
      answer: [
        { option: 'a. Seguro Complementario de Trabajo de Riesgo.', correct: true},
        { option: 'b. Seguridad Complementaria de Trabajo de Riesgo.', correct: false},
        { option: 'c. Seguro Compartido de Trabajo de Riesgo.', correct: false},
      ]
    },
    {
      question: '7. ¿Qué es un permiso de trabajo seguro?',
      answer: [
        { option: 'a. Es un documento que contiene la información de los equipos de protección.', correct: false},
        { option: 'b. Es un documento a modo de Check list que facilita la investigación de riesgos asociados a la ejecución del trabajo.', correct: true},
        { option: 'c. Es una matriz que autoriza el uso de máquinas peligrosas.', correct: false},
        { option: 'd. Es un documento a modo de lista de verificación que autoriza a los trabajadores la entrega de sus equipos de protección personal.', correct: false},
      ]
    },
    {
      question: '8. ¿Cuál es la definición de IPERC?',
      answer: [
        { option: 'a. Es una matriz que sirve de soporte para advertir sobre los posibles accidentes.', correct: false},
        { option: 'b. Es una herramienta de gestión que permite la identificación de peligros, evaluar los riesgos asociados y establecer las medidas de control correspondientes.', correct: true},
        { option: 'c. Es un control establecido por el área de seguridad industrial que permite difundir las medidas de prevención ante potenciales incidentes.', correct: false},
        { option: 'd. Es una herramienta que indica los equipos de protección que deben usar los trabajadores de acuerdo a la actividad que vayan a realizar.', correct: false}
      ]
    },
    {
      question: '9. ¿Cuáles son los requisitos mínimos indispensables para el ingreso a planta del personal tercero?',
      answer: [
        { option: 'a. SCTR.', correct: false},
        { option: 'b. Inducción de Seguridad.', correct: false},
        { option: 'c. Equipos de Protección Personal.', correct: false},
        { option: 'd. Chalecos de color naranja.', correct: false},
        { option: 'e. Todas las anteriores.', correct: true}
      ]
    },
    {
      question: '10. Un montacarguista y su vigía se encuentran realizando un trabajo de almacenamiento de productos terminados. Durante su labor, el montacarguista nota que el freno del vehículo no responde correctamente, sin embargo, no reporta dicha falla. Pasado un momento, el vigía le indica al montacarguista que conduzca el vehículo hacia la zona de almacén para depositar el producto, así que este acelera rápidamente y se dirige con prisa hacia el lugar, cuando de pronto, otro vehículo montacargas se les cruza en el camino y, al no poder frenar, chocan en el proceso, generando severos accidentes. Por lo mencionado, responda: ¿Cuáles son los factores de accidentabilidad presentes en el caso anterior?',
      answer: [
        { option: 'a. Falla mecánica – Freno en condiciones no aptas.', correct: false},
        { option: 'b. Exceso de confianza – El montacarguista no reporta la falla presente en el vehículo.', correct: false},
        { option: 'c. Comunicación ineficiente – El vigía no advirtió al montacarguista sobre la presencia y movimiento de otro vehículo en la zona.', correct: false},
        { option: 'd. Exceso de velocidad – El montacarguista acelera sobre la velocidad permitida.', correct: false},
        { option: 'e. Todas las anteriores.', correct: true}
      ]
    },
  ]


  constructor() { }

  getQuizzes(){
    return this.quizzes;

  }
}
