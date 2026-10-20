import type { Lesson } from '../types/learning.ts';
import { A0_LESSONS } from './curriculum/a0.ts';
import { A1_LESSONS } from './curriculum/a1.ts';
import { A2_LESSONS } from './curriculum/a2.ts';
import { B1_LESSONS } from './curriculum/b1.ts';
import { B2_LESSONS } from './curriculum/b2.ts';
import { C1_LESSONS } from './curriculum/c1.ts';
import { C2_LESSONS } from './curriculum/c2.ts';

/**
 * Fares English Comprehensive Curriculum
 * 7 CEFR Levels: A0 (Absolute Beginner) through C2 (Proficiency)
 * Complete educational course with structured grammar rules, Arabic contrast points,
 * rich vocabulary with IPA, natural examples, and 8-15 interactive exercises per lesson.
 */
export const CURRICULUM_LESSONS: Lesson[] = [
  ...A0_LESSONS,
  ...A1_LESSONS,
  ...A2_LESSONS,
  ...B1_LESSONS,
  ...B2_LESSONS,
  ...C1_LESSONS,
  ...C2_LESSONS,
];

export {
  A0_LESSONS,
  A1_LESSONS,
  A2_LESSONS,
  B1_LESSONS,
  B2_LESSONS,
  C1_LESSONS,
  C2_LESSONS,
};
