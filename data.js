window.BENCHMARK_DATA = {
  "lastUpdate": 1657816168675,
  "repoUrl": "https://github.com/lambdaclass/cleopatra_cairo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "lambdaclass",
            "username": "lambdaclass"
          },
          "committer": {
            "name": "lambdaclass",
            "username": "lambdaclass"
          },
          "id": "e859c42cf5c8dd636a24f7f689ca11b5bd992f13",
          "message": "[HINTS] Add implementation for hint on split_felt (math.cairo) ",
          "timestamp": "2022-07-08T00:43:46Z",
          "url": "https://github.com/lambdaclass/cleopatra_cairo/pull/251/commits/e859c42cf5c8dd636a24f7f689ca11b5bd992f13"
        },
        "date": 1657816167421,
        "tool": "cargo",
        "benches": [
          {
            "name": "cairo_run(cairo_programs/benchmarks/compare_arrays_200000.json",
            "value": 1755,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "cairo_run(cairo_programs/benchmarks/factorial_multirun.json",
            "value": 1714,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "cairo_run(cairo_programs/benchmarks/fibonacci_1000.json",
            "value": 1750,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "cairo_run(cairo_programs/benchmarks/fibonacci_1000_multirun.json",
            "value": 1622,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "cairo_run(cairo_programs/benchmarks/integration_builtins.json",
            "value": 1744,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "cairo_run(cairo_programs/benchmarks/linear_search.json",
            "value": 1842,
            "range": "± 184",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}