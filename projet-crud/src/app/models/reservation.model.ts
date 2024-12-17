export interface Reservation { //Modèle de réservation
    reservation : number | null; // nombre de réservation
    utilisateur_id: number | null; // Identifiant de l'utilisateur qui a réservé 
    jeux_id: number | null; // Identifiant du jeu réservé
  }