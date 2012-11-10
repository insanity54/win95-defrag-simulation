// Generated by CoffeeScript 1.3.3
(function() {
  var $, clusterSprites, clusters, initClusters, randomize;

  $ = function(id) {
    return document.getElementById(id);
  };

  clusters = [];

  clusterSprites = {
    0: 'cluster beginning',
    1: 'cluster middle',
    2: 'cluster end',
    3: 'cluster optimized',
    4: 'cluster free',
    5: 'cluster unmoved',
    6: 'cluster bad',
    7: 'cluster read',
    8: 'cluster write'
  };

  randomize = function(previous) {
    switch (previous) {
      case 0:
        return parseInt(Math.random() * 9);
      default:
        return parseInt(Math.random() * 9);
    }
  };

  initClusters = function() {
    var cluster, i, viewer, _i, _j, _len, _results;
    viewer = $('viewer');
    clusters[0] = 0;
    for (i = _i = 1; _i <= 999; i = ++_i) {
      clusters[i] = 3;
    }
    _results = [];
    for (_j = 0, _len = clusters.length; _j < _len; _j++) {
      cluster = clusters[_j];
      _results.push(viewer.innerHTML += "<div class='" + clusterSprites[cluster] + "'></div>");
    }
    return _results;
  };

  window.onload = function() {
    var crank, viewer;
    initClusters();
    viewer = $('viewer');
    return crank = setInterval(function() {
      return setTimeout(function() {
        return viewer.innerHTML += "<div class='" + clusterSprites[parseInt(Math.random() * 9)] + "'></div>";
      }, Math.random() * 5000);
    }, 250);
  };

}).call(this);