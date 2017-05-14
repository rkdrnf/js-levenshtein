'use strict';
const levenshteinEditDistance = require('levenshtein-edit-distance');
const fastLevenshtein = require('fast-levenshtein').get;
const levenshteinComponent = require('levenshtein-component');
const ld = require('ld').computeDistance;
const levdist = require('levdist');
const natural = require('natural').LevenshteinDistance;
const levenshtein1 = require('levenshtein');
const talisman = require('talisman/metrics/distance/levenshtein');
const leven = require('leven');
const levenshtein = require('./');

function run(fn)
{
  fn('a', 'b');
  fn('ab', 'ac');
  fn('ac', 'bc');
  fn('abc', 'axc');
  fn('kitten', 'sitting');
  fn('xabxcdxxefxgx', '1ab2cd34ef5g6');
  fn('cat', 'cow');
  fn('xabxcdxxefxgx', 'abcdefg');
  fn('javawasneat', 'scalaisgreat');
  fn('example', 'samples');
  fn('sturgeon', 'urgently');
  fn('levenshtein', 'frankenstein');
  fn('distance', 'difference');
  fn('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文');
}

suite('js-levenshtein', function()
{
  bench('js-levenshtein', function()
  {
    run(levenshtein);
  });
  bench('leven', function()
  {
    run(leven);
  });
  bench('talisman', function()
  {
    run(talisman);
  });

  bench('levenshtein-edit-distance', function()
  {
    run(levenshteinEditDistance);
  });

  bench('fast-levenshtein', function()
  {
    run(fastLevenshtein);
  });

  bench('levenshtein-component', function()
  {
    run(levenshteinComponent);
  });

  bench('levdist', function()
  {
    run(levdist);
  });

  bench('ld', function()
  {
    run(ld);
  });

  bench('natural', function()
  {
    run(natural);
  });

  bench('levenshtein', function()
  {
    run(levenshtein1);
  });
});