# TypeScript Components

Ce dépôt a été créé dans le cadre d'un guide sur la publication de composants React en TypeScript. Vous pouvez lire le guide ici : [Publishing TypeScript React components to NPM](https://fildon.hashnode.dev/publishing-typescript-react-components-to-npm)

## Prérequis

Assurez-vous d'avoir Node.js installé sur votre machine. La version recommandée est :

- Node.js : 18.x.x ou supérieur

## Installation

Installez ce package :

```shell
npm install modale-opc-p14
```

## Utilisation

* Importez le composant `Modal` dans votre application :

```javascript
import { Modal } from 'modale-opc-p14';
```
* Vous pouvez ensuite rendre le composant Modale comme n'importe quel autre composant React en JSX.
```javascript
import { Modal } from 'modale-opc-p14';

{isModalOpen && (
    <Modale
        title="Confirmation"
        content="Are you sure you want to delete this employee?"
        onClose={() => setIsModalOpen(false)}
        error={false}
        ariaLabel="Confirmation modal"
    >
        <button onClick={confirmDeleteEmployee}>Confirm</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
    </Modale>
)}
```
## Personnalisation

Le composant Modale accepte les props suivantes :

* `title` (string) : Le titre de la modale.
* `content` (string) : Le contenu de la modale.
* `onClose` (function) : Fonction appelée lors de la fermeture de la modale.
* `error` (boolean, optionnel) : Si true, applique des styles d'erreur à la modale.
* `ariaLabel` (string, optionnel) : Label ARIA pour le bouton de fermeture.
* `children` (React.ReactNode, optionnel) : Les éléments enfants à rendre dans la modale (par exemple, des boutons).

## Exemple d'utilisation

```javascript
import { Modal } from 'modale-opc-p14';

<Modale
    title="Erreur"
    content="Une erreur est survenue. Veuillez réessayer."
    onClose={() => setIsModalOpen(false)}
    error={true}
    ariaLabel="Erreur modal"
>
    <button onClick={retryAction}>Réessayer</button>
    <button onClick={() => setIsModalOpen(false)}>Annuler</button>
</Modale>
```
Dans cet exemple, la modale affiche un message d'erreur avec deux boutons : un pour réessayer l'action et un pour annuler.

## Styles


Les styles de la modale peuvent être personnalisés en modifiant le fichier **modale.css** ou en ajoutant des classes CSS supplémentaires.

## Développement

Pour développer et tester ce composant localement, vous pouvez cloner ce dépôt et utiliser les scripts npm définis dans le fichier **package.json**.

```shell

git clone https://github.com/Nayel9/myModal.git
cd myModal
npm install
npm run build
```

## Licence
Ce projet est sous licence ISC.