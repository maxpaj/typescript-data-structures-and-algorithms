import { countingsort } from "./countingsort/countingsort";
import { bubblesort } from "./bubblesort/bubblesort";
import { insertionsort } from "./insertionsort/insertionsort";
import { heapsort } from "./heapsort/heapsort";
import { mergesort } from "./mergesort/mergesort";
import { quicksort } from "./quicksort/quicksort";
import { radixsort } from "./radixsort/radixsort";
import { selectionsort } from "./selectionsort/selectionsort";
import { shellsort } from "./shellsort/shellsort";
import { testArray } from "../../utility/performance";

const algorithms = [
    bubblesort,
    countingsort,
    heapsort,
    insertionsort,
    mergesort,
    quicksort,
    radixsort,
    selectionsort,
    shellsort,
];

const results = algorithms.map((a) => {
    return testArray(
        [1000, 2000, 4000], //, 8000, 16000, 32000, 64000, 128000
        (arr: number[]) => {
            const start = process.hrtime();
            a(arr);
            return process.hrtime(start);
        }
    );
});

results.forEach((r) => console.table(r));
