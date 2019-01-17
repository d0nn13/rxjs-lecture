import { interval } from "rxjs";
import { take } from "rxjs/operators";

export default function ex1() {
    const myTimer$ = interval(1000).pipe(
        take(3)
    );

    myTimer$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );
}

ex1();
