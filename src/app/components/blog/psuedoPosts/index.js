import fs from 'fs';
import firstJobFair_01 from './01_firstJobFair.json';

export class BlogPostService {
  constructor(fs, firstJobFair_01){
    this.fs.readFile(firstJobFair_01, 'utf8', (err, file) => {
      if (err) throw err;
      console.log(firstJobFair_01);
    });
  }
}
