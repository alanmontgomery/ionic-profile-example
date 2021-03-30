import { IonCol } from "@ionic/react";
import styles from "./Figure.module.scss";

export const Figure = props => (

	<IonCol size="4" className={ styles.figure }>
		<h6>{ props.count }</h6>
		<p>{ props.title }</p>
	</IonCol>
)