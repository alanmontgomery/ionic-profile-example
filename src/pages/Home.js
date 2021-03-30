import { IonAvatar, IonButton, IonButtons, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonList, IonPage, IonRow, IonToolbar } from '@ionic/react';
import styles from "./Home.module.scss";
import { arrowBackOutline, cameraOutline, filterOutline, menuOutline } from "ionicons/icons";
import { Figure } from '../components/Figure';
import { Post } from '../components/Post';

const Home = () => {
	
	const posts = [

		{
			date: "Mar 30",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			comments: 13,
			likes: 49,
			liked: true
		},
		{
			date: "Mar 28",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			comments: 1,
			likes: 9
		},
		{
			date: "Mar 25",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			comments: 119,
			likes: 483
		},
		{
			date: "Mar 23",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			comments: 27,
			likes: 78
		}
	];

	return (
		<IonPage className={ styles.page }>
			<IonHeader className="ion-no-border">
				<IonToolbar>

					<IonButtons>
						<IonButton color="light" slot="start">
							<IonIcon icon={ arrowBackOutline } />
						</IonButton>			
					</IonButtons>
						
					<IonButtons slot="end">
						<IonButton color="light" slot="end">
							<IonIcon icon={ menuOutline } />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className={ styles.content }>
				<IonGrid className={ styles.top }>
					<IonRow>
						<IonCol size="12">
							<IonAvatar className={ styles.avatar }>
								<img src="https://pbs.twimg.com/profile_images/1349059994747076610/8dWvipvu_400x400.jpg" />
							</IonAvatar>
							<div className={ styles.avatarUpload }>
								<IonIcon icon={ cameraOutline } />
							</div>
						</IonCol>
					</IonRow>

					<IonRow className={ styles.profileHeader }>
						<IonCol size="12" className="ion-text-center">
							<IonCardTitle>Alan Montgomery</IonCardTitle>
							<IonCardSubtitle>Mobile Team Lead</IonCardSubtitle>
						</IonCol>
					</IonRow>
				</IonGrid>

				<IonGrid className={ `${ styles.figures } ion-no-padding ion-no-margin` }>
					<IonRow>
						<Figure count="1,386" title="Posts" />
						<Figure count="849" title="Followers" />
						<Figure count="473" title="Following" />
					</IonRow>
				</IonGrid>

				<IonGrid className="ion-no-padding">

					<IonRow>
						<IonCol size="12">
							<div className={ styles.postActions }>
								<p>Posts by @93alan</p>
								<IonIcon icon={ filterOutline } />
							</div>
						</IonCol>
					</IonRow>

					<IonList>
						{ posts.map((post, index) => {

							return (
								<Post key={ `post_${ index }` } post={ post } />
							);
						})}
					</IonList>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Home;