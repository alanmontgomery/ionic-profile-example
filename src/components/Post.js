import { IonAvatar, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { chatbubbleOutline, heart, heartOutline, shareSocialOutline } from "ionicons/icons";
import styles from "./Post.module.scss";

export const Post = props => (

	<div className={ styles.post }>
		<IonItem lines="none">

			<IonAvatar className={ styles.postAvatar }>
				<img src="https://pbs.twimg.com/profile_images/1349059994747076610/8dWvipvu_400x400.jpg" />
			</IonAvatar>
			<IonLabel className="ion-text-wrap">

				<div className={ styles.postInfo }>
					<p>{ props.post.date }</p>
					<p>@93alan</p>
				</div>
				<p className={ styles.postText }>{ props.post.text }</p>

				<div className={ styles.postReactions }>

					<div className={ styles.postReaction }>
						<IonIcon icon={ chatbubbleOutline } />
						<p>{ props.post.comments }</p>
					</div>
					<div className={ styles.postReaction }>
						<IonIcon icon={ props.post.liked ? heart : heartOutline } />
						<p>{ props.post.likes }</p>
					</div>

					<div className={ styles.postReaction }>
						<IonIcon icon={ shareSocialOutline } />
					</div>
				</div>
			</IonLabel>
		</IonItem>
	</div>
);