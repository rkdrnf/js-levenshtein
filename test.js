const test = require('ava');
const levenshtein = require('./');

test(t =>
     {
       t.is(levenshtein('This is a base sentence for TM matching algorithm test.'.split(' '), 'This is a replaced sentence for TM matching algorithm test.'.split(' ')), 1);
       t.is(levenshtein('ab', 'ac'), 1);
       t.is(levenshtein('ac', 'bc'), 1);
       t.is(levenshtein('abc', 'axc'), 1);
       t.is(levenshtein('kitten'.split(' '), 'sitting'.split(' ')), 3);
       t.is(levenshtein('xabxcdxxefxgx', '1ab2cd34ef5g6'), 6);
       t.is(levenshtein('cat', 'cow'), 2);
       t.is(levenshtein('xabxcdxxefxgx', 'abcdefg'), 6);
       t.is(levenshtein('javawasneat', 'scalaisgreat'), 7);
       t.is(levenshtein('example', 'samples'), 3);
       t.is(levenshtein('sturgeon', 'urgently'), 6);
       t.is(levenshtein('levenshtein', 'frankenstein'), 6);
       t.is(levenshtein('distance', 'difference'), 5);
       t.is(levenshtein('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文'), 2);
     });
