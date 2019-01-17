import { interval, of, throwError } from "rxjs";
import { switchMap } from "rxjs/operators";

export default function ex2() {
    const myTimer$ = interval(1000).pipe(
        switchMap(value => value < 2 ? of(value) : throwError({message: 'my error message'}))
    );

    myTimer$.subscribe(
        value => console.log(value),
        error => console.log('error', error),
        () => console.log('completed')
    );
}

ex2();
