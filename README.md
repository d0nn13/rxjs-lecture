# Formation RxJS

https://slides.com/mania06/rxjs

## Sommaire

* Présentation RxJS, contexte, utilité, pourquoi
* Observable
    * Représentation (marbles)
    * Définition
        * Next
        * Error
        * Complete
    * Ecouter observable
    * Créer un Observable
        * new Observable();
        * from
        * of
        * interval
        * throwError
        * NEVER
        * EMPTY
* Subscription
    * Unsubscription with example
    * Différence hot/cold: https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339
* Operators

## RxJS: pourquoi?
RxJS = librairie de reactive programming. Sert à manipuler un flux (= Observable)

## Un Observable: c'est quoi?
### Elements atomiques
Un observable est composé de 3 type d'éléments

#### Une ou plusieurs valeur
![Valeur](assets/images/observable-value.png)

#### Une erreur
![Erreur](assets/images/observable-error.png)

#### Une fin (completion)
![Completion](assets/images/observable-completion.png)

### Exemples
Voici 2 examples d'Observable:
* Un Observable qui envoie 4 valeurs et qui finit
![Example 1](assets/images/observable-example-1.gif)

* Un Observable qui envoie 3 valeurs et qui emet une erreur
![Example 2](assets/images/observable-example-2.gif)

* Un Observable défini en TypeScript qui envoie 3 valeurs et qui finit
```typescript
const myTimer$ = interval(1000).pipe(
    take(3)
)
```
Sa représentation graphique est la suivante
![Example 3](assets/images/observable-example-3.gif)

## Les Subscriptions: comment écouter un Observable? 

Le type `Observable` possède une méthode `subscribe()` qui permet d'écouter les différents évènements se produisant à l'intérieur

```typescript
source.subscribe(
   value => console.log(value),
   err => console.log('error'),
   () => console.log('completed')
)
```

Par exemple, avec cet observable comme source 

![Example 4](assets/images/observable-example-4.gif)

Le résultat serait le suivant en console:
```typescript
// 0
// 1
// error
```

## Dieu créa l'Observable

Créer un observable permet de gérer ce qui sera émit par celui-ci: la ou les valeurs (ou aucune), l'erreur ou la completion

### Manuellement
Il est possible de créer un observable "manuellement" en utilisant le constructeur de Observable. 
Il est rare d'utiliser ce pattern car beaucoup d'autres méthodes existent pour générer des observables. 

```typescript
new Observable(observer => {
  observer.next('A');
 
  setTimeout(() => observer.next('B'), 1000);
  setTimeout(() => observer.next('C'), 2000);
  setTimeout(() => observer.complete(), 4000);
});
```

L'Observable créé pourra être représenté de la manière suivante:
![Example 5](assets/images/observable-example-5.gif)

En réutilisant l'appel à `subscribe` d'au dessus, on obtiendrait :
```typescript
// A
// B
// C
// completed
```

