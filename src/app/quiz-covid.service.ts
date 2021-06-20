import { Injectable } from '@angular/core';
import {  Quiz } from './quiz.model'

@Injectable({
  providedIn: 'root'
})
export class QuizCovidService {

  quizzes : Quiz[] = [
    {
      question: '1. ¿De qué manera uno se puede contagiar de Covid-19?',
      answer: [
        { option: 'a. Por el aire.', correct: false},
        { option: 'b. Gotitas de saliva de persona que tose y tiene Covid.', correct: true},
        { option: 'c. Mirando a los ojos de una persona infectada.', correct: false},
        { option: 'd.  Todas las anteriores.', correct: false}
      ]
    },
    {
      question: '2. ¿Cuál de estos síntomas se relaciona a la Covid-19?',
      answer: [
        { option: 'a. Tos seca.', correct: false},
        { option: 'b. Malestar general.', correct: false},
        { option: 'c. Dolor de garganta.', correct: false},
        { option: 'd. Todas las anteriores', correct: true}
      ]
    },
    {
      question: '3. ¿Qué lugares dentro del Perú, son considerados como mayores fuentes de contagio?',
      answer: [
        { option: 'a. Hospitales, mercados, transporte público, bancos.', correct: true},
        { option: 'b. La casa.', correct: false},
        { option: 'c. Los parques.', correct: false},
        { option: 'd. Todas las anteriores', correct: false},
      ]
    },
    {
      question: '4. ¿Cuál de las siguientes condiciones de riesgo se contempla dentro de la lista de factores de riesgo para complicaciones Covid-19?',
      answer: [
        { option: 'a. Obesidad con IMC mayor a 40.', correct: false},
        { option: 'b. Diabetes Mellitus.', correct: false},
        { option: 'c. Insuficiencia renal crónica con tratamiento con hemodiálisis.', correct: false},
        { option: 'd. Asma moderado o grave.', correct: false},
        { option: 'e. Todas las anteriores.', correct: true}
      ]
    },
    {
      question: '5. ¿Cuál es la definición de DIMAMA?',
      answer: [
        { option: 'a. Distanciamiento social, cuarentena, lavado de manos frecuente.', correct: false},
        { option: 'b. Distanciamiento social, uso de protector facial, higiene ocupacional.', correct: false},
        { option: 'c. Distanciamiento social, usa de la mascarilla, lavado de manos frecuente.', correct: true},
        { option: 'd. Uso de mascarilla, lavado de manos frecuente, cuarentena.', correct: false},
      ]
    },
    {
      question: '6. ¿Cuál de los siguientes pasos no pertenece a los protocolos de ingreso a las instalaciones?',
      answer: [
        { option: 'a. Verificación del uso correcto y obligatorio de la mascarilla.', correct: false},
        { option: 'b. Realización de la toma de temperatura del personal ingresante.', correct: false},
        { option: 'c. Lavado y desinfección de las manos del personal ingresante.', correct: false},
        { option: 'd. Todas las anteriores.', correct: true},
        { option: 'e. Opción a y b.', correct: false},

      ]
    },
    {
      question: '7. ¿Es obligatorio el uso de mascarilla dentro de las instalaciones?',
      answer: [
        { option: 'a. Verdadero.', correct: true},
        { option: 'b. Falso.', correct: false},
      ]
    },
    {
      question: '8. La ficha sintomatológica de Covid-19, debe ser llenado:',
      answer: [
        { option: 'a. Por todas las personas, sin excepción, que ingresen a nuestras instalaciones.', correct: true},
        { option: 'b. Únicamente por las personas que han sido diagnosticadas previamente con Covid-19.', correct: false},
        { option: 'c. Exclusivamente por el personal tercero que vaya a realizar alguna actividad de alto riesgo dentro de las instalaciones.', correct: false},
        { option: 'd. Únicamente por el personal administrativo que presente o haya presentado síntomas relacionados al Covid-19 durante los últimos 15 días.', correct: false}
      ]
    },
    {
      question: '9. ¿Cuáles son los pasos a seguir para reportar alguna sintomatología Covid-19 en el trabajo?',
      answer: [
        { option: 'a. Comunicar al jefe inmediato para iniciar el procedimiento de registro y seguimiento del caso.', correct: false},
        { option: 'b. Contactar rápidamente con el área de Bienestar Social o Salud ocupacional (Médico Ocupacional).', correct: false},
        { option: 'c. Llamar a los familiares cercanos para que reserven una cita médica.', correct: false},
        { option: 'd. Opción a y b.', correct: true},
        { option: 'e. Todas las anteriores.', correct: false}
      ]
    },
    {
      question: '10. En relación a la severidad por el incumplimiento de la normativa de prevención Covid-19, marque la alternativa incorrecta.',
      answer: [
        { option: 'a. Estar en los vestuarios sin mascarilla está sujeto a una amonestación escrita.', correct: false},
        { option: 'b. Desaprobar los exámenes de capacitación por desconocimiento de las normas de prevención COVID- 19 está sujeto a una amonestación verbal.', correct: false},
        { option: 'c. No usar mascarilla correctamente, en su puesto de trabajo, sala de reunión, sujeta a evaluación circunstancial de los hechos sin riesgo está sujeto a una suspensión.', correct: false},
        { option: 'd. No asistir a las capacitaciones de prevención Covid-19 está sujeto a una suspensión.', correct: true},
        { option: 'e. Mentir acerca del estado de salud familiar o informe epidemiológico está sujeto a una amonestación escrita.', correct: false}
      ]
    },
  ]


  constructor() { }

  getQuizzes(){
    return this.quizzes;

  }
}