import { TestBed } from '@angular/core/testing';

import { QuizCovidService } from './quiz-covid.service';

describe('QuizCovidService', () => {
  let service: QuizCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
